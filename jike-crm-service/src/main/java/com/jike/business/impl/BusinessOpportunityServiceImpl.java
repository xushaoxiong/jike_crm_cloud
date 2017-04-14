package com.jike.business.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.business.BusinessOpportunityLogService;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BusinessOpportunityMapper;
import com.jike.business.dao.SaleBusinessOpportunityMapper;
import com.jike.business.dao.ServiceBusinessOpportunityMapper;
import com.jike.business.enums.SaleFlowState;
import com.jike.business.model.BusinessOpportunity;
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

	@Transactional
	public JSONObject addBusinessOpportunity(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		if(json!=null&&!json.isEmpty()){
			BusinessOpportunity businessOpportunity = new BusinessOpportunity();
			businessOpportunity.setBusinessOpportunityName(json.getString("businessOpportunityName"));
			Integer businessOpportunityType = json.getInteger("businessOpportunityType");
			String businessOpportunityNum =null;
			if (businessOpportunityType == 0) {
				businessOpportunityNum = "S"+new Date().getTime();
				boolean flag = true ;
				while(flag){
					BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityNum);
					if(businessOpportunityOld==null){
						 flag = false; 
					}else{
						businessOpportunityNum = "S"+new Date().getTime();
					}
				}
				
			} else if (businessOpportunityType == 1) {
				businessOpportunityNum = "P"+new Date().getTime();
				boolean flag = true ;
				while(flag){
					BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityNum);
					if(businessOpportunityOld==null){
						 flag = false; 
					}else{
						businessOpportunityNum = "P"+new Date().getTime();
					}
				}
			}
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
			Long roleId = json.getLong("roleId");
			if (roleId == 3) {// 只有销售才分配商机
				//分配商机
				BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityNum);
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
		if (roleId == 2) {// 商务查看所有角色
			userId = null;
		}
		
		int totalCount = businessOpportunityMapper.getBusinessOpportunityCount(businessOpportunityName,startTime,endTime,businessOpportunityProcess,userId);
		int startPosition = (start - 1) * pageSize;
		List<Map<String,Object>> businessOpportunityList = businessOpportunityMapper.getBusinessOpportunityByPage(businessOpportunityName,startTime,endTime,businessOpportunityProcess,userId,startPosition,pageSize);
		JSONArray businessOpportunityArr = new JSONArray();
		if(!businessOpportunityList.isEmpty()){
			for (Map<String, Object> businessOpportunityMap : businessOpportunityList) {
				JSONObject businessOpportunityJson = new JSONObject();
				businessOpportunityJson.put("createTime", businessOpportunityMap.get("create_time"));
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
				}
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
			if(!businessOpportunityJson.getLong("userId").equals(businessOpportunity.getCreateBy())){
				resultJson.put("state", "fail");
				resultJson.put("message", "没有操作权限");
				return resultJson;
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
		if(!json.getLong("userId").equals(businessOpportunityOld.getCreateBy())){
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
			saleBusinessOpportunity.setDistributionTime(nowdate);//分配时间
			saleBusinessOpportunity.setUserId(json.getLong("distributionId"));
			saleBusinessOpportunity.setUpdateBy(json.getLong("userId"));
			saleBusinessOpportunity.setUpdateTime(nowdate);
			saleBusinessOpportunityMapper.updateByPrimaryKeySelective(saleBusinessOpportunity);
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
		if(queryJson.getLong("roleId")==2){
			userId = null;
		}
		String unBusinessOpportunityProcess = null;
		String eventType = queryJson.getString("eventType");
		if(!"信息收集".equals(eventType)){
			unBusinessOpportunityProcess = "信息收集";
		}
		
		List<BusinessOpportunity> businessOpportunityList = businessOpportunityMapper.selectByBusinessOpportunityName(businessOpportunityName,userId,unBusinessOpportunityProcess);
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
		BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(json.getString("businessOpportunityNum"));
		if (businessOpportunityOld == null) {
			resultJson.put("state", "fail");
			resultJson.put("message", "未查到该商机");
			return resultJson;
		}
		if(!json.getLong("userId").equals(businessOpportunityOld.getCreateBy())){
			resultJson.put("state", "fail");
			resultJson.put("message", "没有操作权限");
			return resultJson;
		}
		List<ServiceBusinessOpportunity> serviceBusinessOpportunityList = serviceBusinessOpportunityMapper.selectByBusinessOpportunityId(businessOpportunityOld.getBusinessOpportunityId());
		Date nowdate = new Date();
		if (serviceBusinessOpportunityList.isEmpty()) {
			//TODO
		}else{
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "操作成功");
		return resultJson;
	}

}
