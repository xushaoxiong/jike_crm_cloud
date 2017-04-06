package com.jike.business.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BusinessOpportunityMapper;
import com.jike.business.dao.SaleBusinessOpportunityMapper;
import com.jike.business.model.BusinessOpportunity;
import com.jike.business.model.SaleBusinessOpportunity;
import com.jike.crm.utils.PageUtil;
import com.jike.user.UserService;
import com.jike.user.dao.UserMapper;
import com.jike.user.model.User;

@Service("businessOpportunityService")
public class BusinessOpportunityServiceImpl implements BusinessOpportunityService {

	@Autowired
	private BusinessOpportunityMapper businessOpportunityMapper;
	@Autowired
	private SaleBusinessOpportunityMapper saleBusinessOpportunityMapper;
	@Autowired
	private UserService userService;

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
			//分配商机
			BusinessOpportunity businessOpportunityOld = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityNum);
			SaleBusinessOpportunity saleBusinessOpportunity = new SaleBusinessOpportunity();
			saleBusinessOpportunity.setBusinessOpportunityId(businessOpportunityOld.getBusinessOpportunityId());
			saleBusinessOpportunity.setDistributionTime(createTime);//分配时间
			saleBusinessOpportunity.setUserId(userId);
			saleBusinessOpportunity.setCreateBy(userId);
			saleBusinessOpportunity.setCreateTime(createTime);
			saleBusinessOpportunityMapper.insert(saleBusinessOpportunity);
			resultJson.put("state", "success");
			resultJson.put("message", "添加成功");
			return resultJson;
		}
		resultJson.put("state", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}

	public JSONObject updateBusinessOpportunity(JSONObject businessOpportunityJson) {
			JSONObject resultJson = new JSONObject();
			if (!businessOpportunityJson.isEmpty()) {
				BusinessOpportunity businessOpportunity = businessOpportunityMapper.selectByBusinessOpportunityNum(businessOpportunityJson.getString("businessOpportunityNum"));
				businessOpportunity.setBusinessOpportunityName(businessOpportunityJson.getString("businessOpportunityName"));
				businessOpportunity.setBusinessOpportunityType(businessOpportunityJson.getInteger("businessOpportunityType"));
				businessOpportunity.setAddressProvince(businessOpportunityJson.getString("addressProvince"));
				businessOpportunity.setAddressCity(businessOpportunityJson.getString("addressCity"));
				businessOpportunity.setAddressCounty(businessOpportunityJson.getString("addressProvince"));
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
		String businessOpportunityProcess = queryJson.getString("businessOpportunityProcess");
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
				businessOpportunityJson.put("businessOpportunityType", businessOpportunityMap.get("business_opportunity_type").equals(0)?"学校":"合作伙伴");
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
		return resultJson;
	}

}