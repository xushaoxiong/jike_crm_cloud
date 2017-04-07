package com.jike.business;

import com.alibaba.fastjson.JSONObject;

public interface BusinessOpportunityLogService {
	
	/**
	 * 添加信息收集日志
	 * @param jsonData
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月7日上午10:26:21
	 */
	public JSONObject addBOLogInformationCollection(JSONObject jsonData);
	
	/**
	 * 添加拜访计划日志
	 * @param jsonData
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月7日下午2:55:54
	 */
	public JSONObject addBOLogVisitPlan(JSONObject jsonData);

}
