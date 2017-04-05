package com.jike.business.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BusinessOpportunityMapper;
import com.jike.business.model.BusinessOpportunity;
import com.jike.user.model.Role;

@Service("businessOpportunityService")
public class BusinessOpportunityServiceImpl implements BusinessOpportunityService {

	@Autowired
	private BusinessOpportunityMapper businessOpportunityMapper;

	public JSONObject addBusinessOpportunity(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		if(json!=null&&!json.isEmpty()){
			BusinessOpportunity businessOpportunity = new BusinessOpportunity();
			businessOpportunity.setBusinessOpportunityName(json.getString("businessOpportunityName"));
//			businessOpportunity.setBusinessOpportunityNum(businessOpportunityNum); //TODO 商机流水号
			businessOpportunity.setBusinessOpportunityType(json.getInteger("businessOpportunityType"));
			businessOpportunity.setAddressProvince(json.getString("addressProvince"));
			businessOpportunity.setAddressCity(json.getString("addressCity"));
			businessOpportunity.setAddressCounty(json.getString("dddressCounty"));
			businessOpportunity.setAddressDetail(json.getString("addressDetail"));
			businessOpportunity.setIsCancellation(0);//0-未注销  1-注销
			businessOpportunity.setCreateBy(json.getLong("userId"));
			businessOpportunity.setCreateTime(new Date());
			businessOpportunity.setIsClosed(0);//商机是否关闭 0-否 1-是
			businessOpportunityMapper.insert(businessOpportunity);
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

}
