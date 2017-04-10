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
	/**
	 * 通过商机ID查询信息收集
	 * @param jsonData
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月7日下午5:24:02
	 */
	public JSONObject queryInformationCollectionByBoId(JSONObject jsonData);
	
	/**
	 * 通过商机ID查询拜访计划详情
	 * @param jsonData
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日上午10:57:09
	 */
	public JSONObject queryVisitPlanByBoId(JSONObject jsonData);
	
	/**
	 * 添加拜访
	 * @param jsonData
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:12:03
	 */
	public JSONObject addBOLogVisit(JSONObject jsonData);
	/**
	 * 添加谈判
	 * @param jsonData
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:12:13
	 */
	public JSONObject addBOLogNegotiation(JSONObject jsonData);
	
	/**
	 * 通过商机ID自动生成谈判名称
	 * @param businessOpportunityId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:12:22
	 */
	public JSONObject generateNegotiationNameByBoId(JSONObject jsonData);

}
