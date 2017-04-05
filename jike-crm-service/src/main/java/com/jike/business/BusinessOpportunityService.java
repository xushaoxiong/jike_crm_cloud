package com.jike.business;

import com.alibaba.fastjson.JSONObject;

public interface BusinessOpportunityService {
	
	/**
	 * 添加商机
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月5日下午2:13:11
	 */
	public JSONObject addBusinessOpportunity(JSONObject json);
	
	/**
	 * 更新商机
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月5日下午2:16:08
	 */
	public JSONObject updateBusinessOpportunity(JSONObject json);

}
