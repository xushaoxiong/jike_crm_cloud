package com.jike.business.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.business.BusinessOpportunityLogService;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BoProcessHistoryMapper;
import com.jike.business.dao.BusinessOpportunityMapper;
import com.jike.business.dao.CityAreaCodeMapper;
import com.jike.business.dao.CooperativePartnerSchoolMapper;
import com.jike.business.dao.CooperativePartnerSchoolServiceMapper;
import com.jike.business.dao.SaleBusinessOpportunityMapper;
import com.jike.business.dao.ServiceBusinessOpportunityMapper;
import com.jike.business.enums.SaleFlowState;
import com.jike.business.model.BoProcessHistory;
import com.jike.business.model.BusinessOpportunity;
import com.jike.business.model.CooperativePartnerSchool;
import com.jike.business.model.CooperativePartnerSchoolService;
import com.jike.business.model.SaleBusinessOpportunity;
import com.jike.business.model.ServiceBusinessOpportunity;
import com.jike.crm.utils.PageUtil;
import com.jike.user.UserService;
import com.jike.user.model.User;

@Service("businessOpportunityService")
@Transactional
public class BusinessOpportunityServiceImpl implements BusinessOpportunityService {

	@Autowired
	private BusinessOpportunityMapper businessOpportunityMapper;
	@Autowired
	private SaleBusinessOpportunityMapper saleBusinessOpportunityMapper;
	@Autowired
	private ServiceBusinessOpportunityMapper serviceBusinessOpportunityMapper;
	@Autowired
	private UserService userService;
	@Autowired
	private BusinessOpportunityLogService businessOpportunityLogService;
	@Autowired
	private BoProcessHistoryMapper boProcessHistoryMapper;
	@Autowired
	private CityAreaCodeMapper cityAreaCodeMapper;
	@Autowired
	private CooperativePartnerSchoolMapper cooperativePartnerSchoolMapper;
	@Autowired
	private CooperativePartnerSchoolServiceMapper cooperativePartnerSchoolServiceMapper;
	

	@Transactional
	public synchronized JSONObject addBusinessOpportunity(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		if(json!=null&&!json.isEmpty()){
			
			Integer businessOpportunityType = json.getInteger("businessOpportunityType");
			String province = json.getString("addressProvince");
			String city = json.getString("addressCity");
			String businessOpportunityName = json.getString("businessOpportunityName");
			String businessOpportunityNum =generateBusinessOpportunityNum(province, city, businessOpportunityType, businessOpportunityName);
			
			BusinessOpportunity businessOpportunity = new BusinessOpportunity();
			businessOpportunity.setBusinessOpportunityName(json.getString("businessOpportunityName"));
			businessOpportunity.setBusinessOpportunityNum(businessOpportunityNum); //商机流水号
			businessOpportunity.setBusinessOpportunityType(businessOpportunityType);
			businessOpportunity.setAddressProvince(json.getString("addressProvince"));
			businessOpportunity.setAddressCity(json.getString("addressCity"));
			businessOpportunity.setAddressCounty(json.getString("addressCounty"));
			businessOpportunity.setAddressDetail(json.getString("addressDetail"));
			businessOpportunity.setIsCancellation(0);//0-未注销  1-注销
			Long userId = json.getLong("userId");
			businessOpportunity.setCreateBy(json.getLong("userId"));
			businessOpportunity.setBusinessOpportunityProcess("信息收集");//初始化进度为信息收集
			Date createTime = new Date();
			businessOpportunity.setCreateTime(createTime);
			businessOpportunity.setIsClosed(0);//商机是否关闭 0-否 1-是
			businessOpportunityMapper.insert(businessOpportunity);
			
			BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityNum);
			//添加商机进度
			BoProcessHistory boProcessHistory = new BoProcessHistory();
			boProcessHistory.setBusinessOpportunityId(businessOpportunityOld.getBusinessOpportunityId());
			boProcessHistory.setBusinessOpportunityProcess("信息收集");
			boProcessHistory.setCreateBy(userId);
			boProcessHistory.setCreateTime(new Date());
			boProcessHistory.setLogDate(new Date());
			boProcessHistoryMapper.insert(boProcessHistory);
			Long roleId = json.getLong("roleId");
			if (roleId == 3) {// 只有销售才分配商机
				//分配商机
				SaleBusinessOpportunity saleBusinessOpportunity = new SaleBusinessOpportunity();
				saleBusinessOpportunity.setBusinessOpportunityId(businessOpportunityOld.getBusinessOpportunityId());
				saleBusinessOpportunity.setDistributionTime(createTime);//分配时间
				saleBusinessOpportunity.setUserId(userId);
				saleBusinessOpportunity.setCreateBy(userId);
				saleBusinessOpportunity.setCreateTime(createTime);
				saleBusinessOpportunityMapper.insert(saleBusinessOpportunity);
			}
			
			resultJson.put("state", "success");
			resultJson.put("message", "添加成功");
			return resultJson;
		}
		resultJson.put("state", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}
	
	private String generateBusinessOpportunityNum(String province,String city,int businessOpportunityType,String businessOpportunityName){
		String businessOpportunityNum = null;
		if(businessOpportunityType == 0){
			businessOpportunityNum = "S";
		}else{
			businessOpportunityNum = "P";
		}
		
		String areaCode = cityAreaCodeMapper.selectByProvinceAndCity(province,city);
		businessOpportunityNum+=areaCode;
		int cityCount = businessOpportunityMapper.selectCountByAreaAndBoType(province,city,businessOpportunityType);
		int boNameCount = businessOpportunityMapper.selectCountByAreaAndBoName(province,city,businessOpportunityType,businessOpportunityName);
		if(cityCount<9){
			cityCount++;
			businessOpportunityNum+="000"+cityCount;
		}else{
			cityCount++;
			businessOpportunityNum+="00"+cityCount;
		}
		
		if(boNameCount<9){
			boNameCount++;
			businessOpportunityNum+="-0"+boNameCount;
		}else{
			boNameCount++;
			businessOpportunityNum+="-"+boNameCount;
		}
		
		return businessOpportunityNum;
	}

	@Transactional
	public JSONObject updateBusinessOpportunity(JSONObject businessOpportunityJson) {
			JSONObject resultJson = new JSONObject();
			if (!businessOpportunityJson.isEmpty()) {
				BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityJson.getString("businessOpportunityNum"));
				if(!businessOpportunityJson.getLong("userId").equals(businessOpportunity.getCreateBy())){
					resultJson.put("state", "fail");
					resultJson.put("message", "没有编辑权限");
					return resultJson;
				}
				
				businessOpportunity.setBusinessOpportunityName(businessOpportunityJson.getString("businessOpportunityName"));
				businessOpportunity.setBusinessOpportunityType(businessOpportunityJson.getInteger("businessOpportunityType"));
				businessOpportunity.setAddressProvince(businessOpportunityJson.getString("addressProvince"));
				businessOpportunity.setAddressCity(businessOpportunityJson.getString("addressCity"));
				businessOpportunity.setAddressCounty(businessOpportunityJson.getString("addressCounty"));
				businessOpportunity.setAddressDetail(businessOpportunityJson.getString("addressDetail"));
				businessOpportunity.setUpdateBy(businessOpportunityJson.getLong("userId"));
				businessOpportunity.setUpdateTime(new Date());
				businessOpportunityMapper.updateByPrimaryKeySelective(businessOpportunity);
				resultJson.put("state", "success");
				resultJson.put("message", "更新成功");
				return resultJson;
			}
			resultJson.put("state", "fail");
			resultJson.put("message", "添加内容为空");
			return resultJson;
	}

	public JSONObject qeueryBusinessOpportunityByParams(JSONObject queryJson) {
		JSONObject resultJson = new JSONObject();
		//1、组件参数
		String businessOpportunityName = queryJson.getString("businessOpportunityName");
		Integer start = queryJson.getInteger("start");
		Integer pageSize = queryJson.getInteger("pageSize");
		String startTime = queryJson.getString("startTime");
		String endTime = queryJson.getString("endTime");
		if("".equals(startTime)){
			startTime = null;
		}
		if("".equals(endTime)){
			endTime = null;
		}
		String businessOpportunityProcess = queryJson.getString("businessOpportunityProcess");
		if("".equals(businessOpportunityProcess)){
			businessOpportunityProcess = null;
		}
		if(businessOpportunityName!=null){
			businessOpportunityName="%"+businessOpportunityName+"%";
		}
		
		Long userId = queryJson.getLong("userId");
		Long roleId = queryJson.getLong("roleId");
		List<Long> userIds = new ArrayList<Long>();
		
		String userName = queryJson.getString("userName");
		List<User> userList = null;
		if(userName!=null&&!StringUtils.isEmpty(userName.trim())){
			userName = "%"+userName+"%";
			 userList = userService.querySaleAndServiceByUserName(userName);
			if(!userList.isEmpty()){
				for (User user : userList) {
					userIds.add(user.getUserId());
				}
			}else{
				userIds.add(-1L);
			}
			if (roleId != 2) {// 非商务只能查看自己创建的日志
				if(userIds.contains(userId)){
					userIds.clear();
					userIds.add(userId);
				}else{
					userIds.clear();
					userIds.add(-1L);
				}
			}
		}else{
			if(roleId == 2){
				userIds = null;	
			}else{
				userIds.add(userId);
			}
		}
		
		if (roleId == 2) {// 商务查看所有角色
			resultJson.put("assignSale", true);//指派销售权限
		}else{
			resultJson.put("assignSale", false);////指派权限
		}
		
		int totalCount = businessOpportunityMapper.getBusinessOpportunityCount(businessOpportunityName,startTime,endTime,businessOpportunityProcess,userIds);
		int startPosition = (start - 1) * pageSize;
		List<Map<String,Object>> businessOpportunityList = businessOpportunityMapper.getBusinessOpportunityByPage(businessOpportunityName,startTime,endTime,businessOpportunityProcess,userIds,startPosition,pageSize);
		JSONArray businessOpportunityArr = new JSONArray();
		if(!businessOpportunityList.isEmpty()){
			for (Map<String, Object> businessOpportunityMap : businessOpportunityList) {
				JSONObject businessOpportunityJson = new JSONObject();
				businessOpportunityJson.put("createTime", businessOpportunityMap.get("create_time"));
				businessOpportunityJson.put("businessOpportunityId", businessOpportunityMap.get("business_opportunity_id"));
				businessOpportunityJson.put("businessOpportunityName", businessOpportunityMap.get("business_opportunity_name"));
				businessOpportunityJson.put("businessOpportunityNum", businessOpportunityMap.get("business_opportunity_num"));
				businessOpportunityJson.put("businessOpportunityType", businessOpportunityMap.get("business_opportunity_type"));
				businessOpportunityJson.put("businessOpportunityProcess", businessOpportunityMap.get("business_opportunity_process"));
				businessOpportunityJson.put("isClosed", businessOpportunityMap.get("is_closed"));
				businessOpportunityJson.put("isCancellation", businessOpportunityMap.get("is_cancellation"));
				Long createBy = (Long) businessOpportunityMap.get("create_by");
				User user = userService.getUserById(createBy);
				businessOpportunityJson.put("createUserName", user.getName());
				Object userIdObj = businessOpportunityMap.get("user_id");
				if(userIdObj!=null){
					Long distributeUserId = (Long) userIdObj;
					User distributeUser = userService.getUserById(distributeUserId);
					businessOpportunityJson.put("distributeUserName", distributeUser.getName());
					businessOpportunityJson.put("distributeUserId", distributeUser.getUserId());
					if(distributeUserId.equals(queryJson.getLong("userId"))){
						businessOpportunityJson.put("assignService", true);//指派服务权限
						businessOpportunityJson.put("closeAuthority", true);//关闭商机权限
					}else{
						businessOpportunityJson.put("assignService", false);//指派服务权限
						businessOpportunityJson.put("closeAuthority", false);//关闭商机权限
					}
				}else{
					businessOpportunityJson.put("closeAuthority", false);//关闭商机权限
				}
				Long businessOpportunityId = (Long) businessOpportunityMap.get("business_opportunity_id");
				businessOpportunityJson.put("serviceList", queryServiceByBoId(businessOpportunityId));
				if(!queryJson.getLong("userId").equals(createBy)){
					businessOpportunityJson.put("authority", 1);
				}else{
					businessOpportunityJson.put("authority", 0);
				}
				businessOpportunityArr.add(businessOpportunityJson);
			}
		}
		
		
		int totalPage = 0;
		if (totalCount / pageSize > 0) {
            if (totalCount % pageSize == 0) {
                totalPage = totalCount / pageSize;
            } else {
                totalPage = totalCount / pageSize + 1;
            }
        } else {
            totalPage = 1;
        }
		List<Integer> pageList = PageUtil.for_each(start, (int) totalPage, 6);
		resultJson.put("totalCount", totalCount);
		resultJson.put("totalPage", totalPage);
		resultJson.put("pageList", pageList);
		resultJson.put("businessOpportunityList", businessOpportunityArr);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
	
	private JSONArray queryServiceByBoId(Long businessOpportunityId) {
		List<ServiceBusinessOpportunity> serviceBusinessOpportunityList = serviceBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunityId);
		JSONArray userList = new JSONArray();
		if(!serviceBusinessOpportunityList.isEmpty()){
			for (ServiceBusinessOpportunity serviceBusinessOpportunity : serviceBusinessOpportunityList) {
				JSONObject userJson = new JSONObject();
				User user = userService.getUserById(serviceBusinessOpportunity.getUserId());
				userJson.put("userId", user.getUserId());
				userJson.put("userName", user.getName());
				userList.add(userJson);
			}
		}
		return userList;
	}
	
	public JSONObject queryBusinessOpportunityByBoNum(JSONObject queryJson){
		String businessOpportunityNum = queryJson.getString("businessOpportunityNum");
		BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityNum);
		JSONObject resultJson = new JSONObject();
		if(businessOpportunity!=null){
			if(!queryJson.getLong("userId").equals(businessOpportunity.getCreateBy())){
				resultJson.put("state", "fail");
				resultJson.put("message", "没有编辑权限");
				return resultJson;
			}
		
			resultJson.put("businessOpportunityName", businessOpportunity.getBusinessOpportunityName());
			resultJson.put("businessOpportunityType", businessOpportunity.getBusinessOpportunityType());
			resultJson.put("addressProvince", businessOpportunity.getAddressProvince());
			resultJson.put("addressCity", businessOpportunity.getAddressCity());
			resultJson.put("addressCounty", businessOpportunity.getAddressCounty());
			resultJson.put("addressDetail", businessOpportunity.getAddressDetail());
			resultJson.put("state", "success");
			resultJson.put("message", "查询成功");
		}
		return resultJson;
	}


	public JSONObject operationBusinessOpportunity(JSONObject businessOpportunityJson) {
		JSONObject resultJson = new JSONObject();
		if (!businessOpportunityJson.isEmpty()) {
			BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityJson.getString("businessOpportunityNum"));
			if(businessOpportunityJson.getInteger("isClosed")!=null){
				SaleBusinessOpportunity saleBusinessOpportunity = saleBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunity.getBusinessOpportunityId());
				if(!businessOpportunityJson.getLong("userId").equals(saleBusinessOpportunity.getUserId())){
					resultJson.put("state", "fail");
					resultJson.put("message", "没有操作权限");
					return resultJson;
				}
			}else if(businessOpportunityJson.getInteger("isCancellation")!=null){
				if(!businessOpportunityJson.getLong("userId").equals(businessOpportunity.getCreateBy())){
					resultJson.put("state", "fail");
					resultJson.put("message", "没有操作权限");
					return resultJson;
				}
			}
			
			//删除时判断该商机是否建立日志，建立日志的不能删除
			if(businessOpportunityJson.getInteger("isCancellation")!=null&&businessOpportunityJson.getInteger("isCancellation")==1){
				if(businessOpportunityLogService.queryBoLogByBoId(businessOpportunity.getBusinessOpportunityId())){
					resultJson.put("state", "fail");
					resultJson.put("message", "该商机已建立日志不能删除");
					return resultJson;
				}
			}
			
			businessOpportunity.setIsClosed(businessOpportunityJson.getInteger("isClosed"));
			businessOpportunity.setIsCancellation(businessOpportunityJson.getInteger("isCancellation"));
			businessOpportunity.setUpdateBy(businessOpportunityJson.getLong("userId"));
			businessOpportunity.setUpdateTime(new Date());
			businessOpportunityMapper.updateByPrimaryKeySelective(businessOpportunity);
			resultJson.put("state", "success");
			resultJson.put("message", "操作成功");
			return resultJson;
		}
		resultJson.put("state", "fail");
		resultJson.put("message", "操作失败");
		return resultJson;
	}

	public JSONObject distributionBoToSale(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(json.getString("businessOpportunityNum"));
		if (businessOpportunityOld == null) {
			resultJson.put("state", "fail");
			resultJson.put("message", "未查到该商机");
			return resultJson;
		}
		if(!json.getLong("roleId").equals(2L)){
			resultJson.put("state", "fail");
			resultJson.put("message", "没有操作权限");
			return resultJson;
		}
		
		SaleBusinessOpportunity saleBusinessOpportunity = saleBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunityOld.getBusinessOpportunityId());
		Date nowdate = new Date();
		if (saleBusinessOpportunity == null) {
			saleBusinessOpportunity = new SaleBusinessOpportunity();
			saleBusinessOpportunity.setBusinessOpportunityId(businessOpportunityOld.getBusinessOpportunityId());
			saleBusinessOpportunity.setDistributionTime(nowdate);//分配时间
			saleBusinessOpportunity.setUserId(json.getLong("distributionId"));
			saleBusinessOpportunity.setCreateBy(json.getLong("userId"));
			saleBusinessOpportunity.setCreateTime(nowdate);
			saleBusinessOpportunityMapper.insert(saleBusinessOpportunity);
		}else{
			if(json.getLong("distributionId")==null){
				saleBusinessOpportunityMapper.deleteByPrimaryKey(saleBusinessOpportunity.getId());
			}else{
				saleBusinessOpportunity.setDistributionTime(nowdate);//分配时间
				saleBusinessOpportunity.setUserId(json.getLong("distributionId"));
				saleBusinessOpportunity.setUpdateBy(json.getLong("userId"));
				saleBusinessOpportunity.setUpdateTime(nowdate);
				saleBusinessOpportunityMapper.updateByPrimaryKeySelective(saleBusinessOpportunity);
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "操作成功");
		return resultJson;
	}

	public JSONObject queryBusinessOpportunityByName(JSONObject queryJson) {
		JSONObject resultJson = new JSONObject();
		String businessOpportunityName = queryJson.getString("businessOpportunityName");
		if(businessOpportunityName!=null){
			businessOpportunityName="%"+businessOpportunityName+"%";
		}
		Long userId = queryJson.getLong("userId");
		List<BusinessOpportunity> businessOpportunityList = null;
		Set<Long> isPlaningIds = new HashSet<Long>();
		String eventType = queryJson.getString("eventType");
		String unBusinessOpportunityProcess = null;
		if (!"信息收集".equals(eventType)) {
			unBusinessOpportunityProcess = "信息收集";
		}
		//如果是服务，查询服务商机
		if (queryJson.getLong("roleId") == 4) {
			businessOpportunityList = businessOpportunityMapper.selectByServiceBusinessOpportunityName(businessOpportunityName,
					userId, unBusinessOpportunityProcess);
		} else {
			// 如果是商务查询所有商机
			if (queryJson.getLong("roleId") == 2) {
				userId = null;
			}
			Integer businessOpportunityType = null;
			// 下列三种情况只查学校类型
			if ("商业谈判".equals(eventType) || "试用中".equals(eventType) || "招投标中".equals(eventType)) {
				businessOpportunityType = 0;
			}
			if ("制定拜访计划".equals(eventType) || "拜访客户".equals(eventType)) {
				// 查询已添加拜访计划的商机
				isPlaningIds = businessOpportunityLogService.queryIsPlaningBusiness(userId, 0);
			}
			businessOpportunityList = businessOpportunityMapper.selectByBusinessOpportunityName(businessOpportunityName,
					userId, unBusinessOpportunityProcess, businessOpportunityType);
		}
		
	
		JSONArray arr = new JSONArray();
		if(!businessOpportunityList.isEmpty()){
			for (BusinessOpportunity businessOpportunity : businessOpportunityList) {
				if ("制定拜访计划".equals(eventType)) {
					if (isPlaningIds.contains(businessOpportunity.getBusinessOpportunityId())) {
						continue;
					}
				} else if ("拜访客户".equals(eventType)) {
					if (!isPlaningIds.contains(businessOpportunity.getBusinessOpportunityId())) {
						continue;
					}
				}
				JSONObject json = new JSONObject();
				json.put("businessOpportunityName", businessOpportunity.getBusinessOpportunityName());
				json.put("businessOpportunityNum", businessOpportunity.getBusinessOpportunityNum());
				json.put("businessOpportunityType", businessOpportunity.getBusinessOpportunityType());
				json.put("addressProvince", businessOpportunity.getAddressProvince());
				json.put("addressCity", businessOpportunity.getAddressCity());
				json.put("addressCounty", businessOpportunity.getAddressCounty());
				json.put("addressDetail", businessOpportunity.getAddressDetail());
				json.put("businessOpportunityProcess", businessOpportunity.getBusinessOpportunityProcess());
				json.put("businessOpportunityId", businessOpportunity.getBusinessOpportunityId());
				arr.add(json);
			}
			
		}
		resultJson.put("businessOpportunityList", arr);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}

	public void updateBusinessOpportunityProcess(JSONObject json) {
		Long businessOpportunityId = json.getLong("businessOpportunityId");
		BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByPrimaryKey(businessOpportunityId);
		String businessOpportunityProcess = json.getString("businessOpportunityProcess");
		//如果更新的商机状态比现在商机状态推后执行更新
		//或者原来商机状态为拜访更新到准备拜访状态
		if(SaleFlowState.getValue(businessOpportunityProcess)>SaleFlowState.getValue(businessOpportunity.getBusinessOpportunityProcess())||
			(SaleFlowState.getValue(businessOpportunityProcess)==3&&SaleFlowState.getValue(businessOpportunity.getBusinessOpportunityProcess())==4)){
			businessOpportunity.setBusinessOpportunityProcess(businessOpportunityProcess);
			businessOpportunity.setUpdateBy(json.getLong("userId"));
			businessOpportunity.setUpdateTime(json.getDate("nowDate"));
			businessOpportunityMapper.updateByPrimaryKeySelective(businessOpportunity);
			//添加商机进度历史
			BoProcessHistory boProcessHistory = new BoProcessHistory();
			boProcessHistory.setBusinessOpportunityId(businessOpportunityId);
			boProcessHistory.setBusinessOpportunityProcess(businessOpportunityProcess);
			boProcessHistory.setCreateBy(json.getLong("userId"));
			boProcessHistory.setCreateTime(new Date());
			boProcessHistory.setLogDate(json.getDate("logDate"));
			boProcessHistoryMapper.insert(boProcessHistory);
		}
	}
	
	public JSONObject queryBusinessOpportunityInfoById(JSONObject json){
		Long businessOpportunityId = json.getLong("businessOpportunityId");
		JSONObject resultJson = queryByBusinessOpportunityId(businessOpportunityId);
		JSONObject infoCollectionJson = businessOpportunityLogService.queryBoInfoCollectionByBoId(businessOpportunityId);
		resultJson.putAll(infoCollectionJson);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}

	public JSONObject queryByBusinessOpportunityId(Long businessOpportunityId) {
		BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByPrimaryKey(businessOpportunityId);
		JSONObject json = new JSONObject();
		if(businessOpportunity!=null){
			json.put("businessOpportunityName", businessOpportunity.getBusinessOpportunityName());
			json.put("addressProvince", businessOpportunity.getAddressProvince());
			json.put("addressCity", businessOpportunity.getAddressCity());
			json.put("addressCounty", businessOpportunity.getAddressCounty());
			json.put("addressDetail", businessOpportunity.getAddressDetail());
			json.put("businessOpportunityType", businessOpportunity.getBusinessOpportunityType());
			json.put("businessOpportunityNum", businessOpportunity.getBusinessOpportunityNum());
		}
		return json;
	}

	@Transactional
	public JSONObject distributionBoToService(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByBusinessOpportunityNum(json.getString("businessOpportunityNum"));
		if (businessOpportunity == null) {
			resultJson.put("state", "fail");
			resultJson.put("message", "未查到该商机");
			return resultJson;
		}
		if ("信息收集".equals(businessOpportunity.getBusinessOpportunityProcess())) {
			resultJson.put("state", "fail");
			resultJson.put("message", "信息未收集完全不能指派服务");
			return resultJson;
		}
		SaleBusinessOpportunity saleBusinessOpportunity = saleBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunity.getBusinessOpportunityId());
		if(!json.getLong("roleId").equals(2L)&&!json.getLong("userId").equals(saleBusinessOpportunity.getUserId())){
			resultJson.put("state", "fail");
			resultJson.put("message", "没有操作权限");
			return resultJson;
		}
		
		List<ServiceBusinessOpportunity> serviceBusinessOpportunityList = serviceBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunity.getBusinessOpportunityId());
	
		JSONArray userIdList = json.getJSONArray("userIdList");
		if (serviceBusinessOpportunityList.isEmpty()) {
			//添加新服务
			this.addServiceBusinessOpportunity(userIdList,businessOpportunity.getBusinessOpportunityId(),json.getLong("userId"));
		}else{
			//删除以前分配的服务
			for (ServiceBusinessOpportunity serviceBusinessOpportunity : serviceBusinessOpportunityList) {
				serviceBusinessOpportunityMapper.deleteByPrimaryKey(serviceBusinessOpportunity.getServiceBusinessOpportunityId());
			}
			//添加新服务
			this.addServiceBusinessOpportunity(userIdList,businessOpportunity.getBusinessOpportunityId(),json.getLong("userId"));
		}
		resultJson.put("state", "success");
		resultJson.put("message", "操作成功");
		return resultJson;
	}

	private void addServiceBusinessOpportunity(JSONArray userIdList, Long businessOpportunityId, Long ceateId) {
		if(!userIdList.isEmpty()){
			Date nowdate = new Date();
			for (Object object : userIdList) {
				Long userId = Long.parseLong(object.toString()) ;
				ServiceBusinessOpportunity serviceBusinessOpportunity = new ServiceBusinessOpportunity();
				serviceBusinessOpportunity.setBusinessOpportunityId(businessOpportunityId);
				serviceBusinessOpportunity.setUserId(userId);
				serviceBusinessOpportunity.setCreateBy(ceateId);
				serviceBusinessOpportunity.setCreateTime(nowdate);
				serviceBusinessOpportunityMapper.insert(serviceBusinessOpportunity);
			}
		}
		
	}
	
	@Transactional
	public JSONObject addCooperativePartnerSchool(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		Long userId = json.getLong("userId");
		if(json!=null&&!json.isEmpty()){
			Long businessOpportunityId = json.getLong("businessOpportunityId");
			String schoolName = json.getString("schoolName");
			String addressProvince = json.getString("addressProvince");
			String addressCity = json.getString("addressCity");
			String addressCountry = json.getString("addressCountry");
			String addressDetail = json.getString("addressDetail");
			String schoolScale = json.getString("schoolScale");
			String schoolLevel = json.getString("schoolLevel");
			Integer schoolProperty = json.getInteger("schoolProperty");
			String schoolCategory = json.getString("schoolCategory");
			
			CooperativePartnerSchool cooperativePartnerSchool = new CooperativePartnerSchool();
			cooperativePartnerSchool.setBusinessOpportunityId(businessOpportunityId);
			cooperativePartnerSchool.setSchoolName(schoolName);
			cooperativePartnerSchool.setAddressProvince(addressProvince);
			cooperativePartnerSchool.setAddressCity(addressCity);
			cooperativePartnerSchool.setAddressCountry(addressCountry);
			cooperativePartnerSchool.setAddressDetail(addressDetail);
			cooperativePartnerSchool.setSchoolScale(schoolScale);
			cooperativePartnerSchool.setSchoolLevel(schoolLevel);
			cooperativePartnerSchool.setSchoolProperty(schoolProperty);
			cooperativePartnerSchool.setSchoolCategory(schoolCategory);
			cooperativePartnerSchool.setCreateBy(userId);
			cooperativePartnerSchool.setCreateTime(new Date());
			cooperativePartnerSchoolMapper.insert(cooperativePartnerSchool);
			JSONArray serviceArr = json.getJSONArray("serviceArr");
			if(serviceArr!=null&&!serviceArr.isEmpty()){
				for (Object object : serviceArr) {
					JSONObject serviceJson = JSONObject.parseObject(object.toString());
					String serviceName = serviceJson.getString("serviceName");
					String servicePhone = serviceJson.getString("servicePhone");
					CooperativePartnerSchoolService cooperativePartnerSchoolService = new CooperativePartnerSchoolService(); 
					cooperativePartnerSchoolService.setCooperativePartnerSchoolId(cooperativePartnerSchool.getCooperativePartnerSchoolId());
					cooperativePartnerSchoolService.setServiceName(serviceName);
					cooperativePartnerSchoolService.setServicePhone(servicePhone);
					cooperativePartnerSchoolService.setCreateBy(userId);
					cooperativePartnerSchoolService.setCreateTime(new Date());
					cooperativePartnerSchoolServiceMapper.insert(cooperativePartnerSchoolService);
				}
			}
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}

	public JSONObject queryCopBusinessOpportunityByName(JSONObject queryJson) {
		JSONObject resultJson = new JSONObject();
		String businessOpportunityName = queryJson.getString("businessOpportunityName");
		if(businessOpportunityName!=null){
			businessOpportunityName="%"+businessOpportunityName+"%";
		}
		Long userId = queryJson.getLong("userId");
		//如果是服务，查询服务商机
		if (queryJson.getLong("roleId") != 3) {
			resultJson.put("state", "fail");
			resultJson.put("message", "没有编辑权限");
			return resultJson;
		}		
		List<BusinessOpportunity> businessOpportunityList = businessOpportunityMapper.getCopBusinessOpportunity(businessOpportunityName,userId);
		JSONArray arr = new JSONArray();
		if(!businessOpportunityList.isEmpty()){
			for (BusinessOpportunity businessOpportunity : businessOpportunityList) {
				JSONObject json = new JSONObject();
				json.put("businessOpportunityName", businessOpportunity.getBusinessOpportunityName());
				json.put("businessOpportunityNum", businessOpportunity.getBusinessOpportunityNum());
				json.put("businessOpportunityType", businessOpportunity.getBusinessOpportunityType());
				json.put("addressProvince", businessOpportunity.getAddressProvince());
				json.put("addressCity", businessOpportunity.getAddressCity());
				json.put("addressCounty", businessOpportunity.getAddressCounty());
				json.put("addressDetail", businessOpportunity.getAddressDetail());
				json.put("businessOpportunityId", businessOpportunity.getBusinessOpportunityId());
				arr.add(json);
			}
		}
		resultJson.put("businessOpportunityList", arr);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
	
	public JSONObject queryCpsByPage(JSONObject queryJson){
		JSONObject resultJson = new JSONObject();
		Integer start = queryJson.getInteger("start");
		Integer pageSize = queryJson.getInteger("pageSize");
		String businessOpportunityName = queryJson.getString("businessOpportunityName");
		if(businessOpportunityName!=null){
			businessOpportunityName="%"+businessOpportunityName+"%";
		}
		String schoolName = queryJson.getString("schoolName");
		if(schoolName!=null){
			schoolName="%"+schoolName+"%";
		}
		Long userId = queryJson.getLong("userId");
		Long roleId = queryJson.getLong("roleId");
		if(roleId==2){
			userId = null;
			resultJson.put("ifBussiness", 0);
		}else{
			resultJson.put("ifBussiness", 1);
		}
		int totalCount = businessOpportunityMapper.queryCpsCount(businessOpportunityName,schoolName,userId);
		int startPosition = (start - 1) * pageSize;
		List<Map<String,Object>> cspList = businessOpportunityMapper.queryCpsByPage(businessOpportunityName,schoolName,userId,startPosition,pageSize);
		JSONArray cpsArr = new JSONArray();
		if(!cspList.isEmpty()){
			for (Map<String,Object> map : cspList) {
				JSONObject json = new JSONObject();
				json.put("cooperativePartnerSchoolId", map.get("cooperative_partner_school_id"));
				json.put("businessOpportunityName", map.get("business_opportunity_name"));
				json.put("schoolName", map.get("school_name"));
				json.put("addressProvince", map.get("address_province"));
				json.put("addressCity", map.get("address_city"));
				json.put("addressCountry", map.get("address_country"));
				json.put("addressDetail", map.get("address_detail"));
				cpsArr.add(json);
			}
		}
		int totalPage = 0;
		if (totalCount / pageSize > 0) {
            if (totalCount % pageSize == 0) {
                totalPage = totalCount / pageSize;
            } else {
                totalPage = totalCount / pageSize + 1;
            }
        } else {
            totalPage = 1;
        }
		resultJson.put("totalCount", totalCount);
		resultJson.put("totalPage", totalPage);
		resultJson.put("cpsArr", cpsArr);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
	
	public JSONObject queryCpsById(JSONObject queryJson){
		JSONObject resultJson = new JSONObject();
		Long cooperativePartnerSchoolId = queryJson.getLong("cooperativePartnerSchoolId");
		CooperativePartnerSchool cooperativePartnerSchool = cooperativePartnerSchoolMapper.selectByPrimaryKey(cooperativePartnerSchoolId);
		Long businessOpportunityId = cooperativePartnerSchool.getBusinessOpportunityId();
		SaleBusinessOpportunity saleBusinessOpportunity = saleBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunityId);
		Long userId = queryJson.getLong("userId");
		Long roleId = queryJson.getLong("roleId");
		if(roleId!=2&&!userId.equals(saleBusinessOpportunity.getUserId())){//非商务并不是指派给他的商机
			resultJson.put("state", "fail");
			resultJson.put("message", "没有权限");
			return resultJson;
		}
		List<CooperativePartnerSchoolService> cooperativePartnerSchoolServiceList = cooperativePartnerSchoolServiceMapper.selectByCpsId(cooperativePartnerSchoolId);
		
		BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByPrimaryKey(businessOpportunityId);
		resultJson.put("businessOpportunityName", businessOpportunity.getBusinessOpportunityName());
		resultJson.put("schoolName", cooperativePartnerSchool.getSchoolName());
		resultJson.put("addressProvince", cooperativePartnerSchool.getAddressProvince());
		resultJson.put("addressCity", cooperativePartnerSchool.getAddressCity());
		resultJson.put("addressCountry", cooperativePartnerSchool.getAddressCountry());
		resultJson.put("addressDetail", cooperativePartnerSchool.getAddressDetail());
		resultJson.put("schoolScale", cooperativePartnerSchool.getSchoolScale());
		resultJson.put("schoolCategory", cooperativePartnerSchool.getSchoolCategory());
		resultJson.put("schoolLevel", cooperativePartnerSchool.getSchoolLevel());
		resultJson.put("addressDetail", cooperativePartnerSchool.getSchoolProperty());
		JSONArray serviceArr = new JSONArray();
		if(!cooperativePartnerSchoolServiceList.isEmpty()){
			for (CooperativePartnerSchoolService cooperativePartnerSchoolService : cooperativePartnerSchoolServiceList) {
				JSONObject json = new JSONObject();
				json.put("serviceName", cooperativePartnerSchoolService.getServiceName());
				json.put("servicePhone", cooperativePartnerSchoolService.getServicePhone());
				serviceArr.add(json);
			}
		}
		resultJson.put("serviceArr", serviceArr);
		return resultJson;
	}

}
