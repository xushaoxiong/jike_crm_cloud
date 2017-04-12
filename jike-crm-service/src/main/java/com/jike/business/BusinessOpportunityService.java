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
	
	/**
	 * 条件查询商机
	 * @param queryJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月5日下午5:34:58
	 */
	public JSONObject qeueryBusinessOpportunityByParams(JSONObject queryJson);
	
	/**
	 * 通过商机编号查询商机信息
	 * @param queryJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日上午10:06:53
	 */
	public JSONObject queryBusinessOpportunityByBoNum(JSONObject queryJson);
	
	/**
	 * 操作商机（关闭，删除，重启）
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日下午2:40:30
	 */
	public JSONObject operationBusinessOpportunity(JSONObject json);
	
	/**
	 * 分配商机
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日下午3:02:08
	 */
	public JSONObject distributionBusinessOpportunity(JSONObject json);

	/**
	 * 通过商机名称查询商机
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日下午7:15:59
	 */
	public JSONObject queryBusinessOpportunityByName(JSONObject json);

	/**
	 * 更新商机进度
	 * @param json
	 * @created wangyb
	 * @createtime 2017年4月7日上午11:30:37
	 */
	public void updateBusinessOpportunityProcess(JSONObject json);

	/**
	 * 通过商机ID查询商机信息
	 * @param businessOpportunityId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日上午9:20:50
	 */
	public JSONObject queryByBusinessOpportunityId(Long businessOpportunityId);
	/**
	 * 商机预览查询
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月12日下午6:02:47
	 */
	public JSONObject queryBusinessOpportunityInfoById(JSONObject json);
}
