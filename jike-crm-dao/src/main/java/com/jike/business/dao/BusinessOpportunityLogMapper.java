package com.jike.business.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.jike.business.model.BusinessOpportunityLog;

public interface BusinessOpportunityLogMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table business_opportunity_log
	 * @mbggenerated  Thu Apr 06 18:05:05 CST 2017
	 */
	int deleteByPrimaryKey(Long logId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table business_opportunity_log
	 * @mbggenerated  Thu Apr 06 18:05:05 CST 2017
	 */
	int insert(BusinessOpportunityLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table business_opportunity_log
	 * @mbggenerated  Thu Apr 06 18:05:05 CST 2017
	 */
	int insertSelective(BusinessOpportunityLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table business_opportunity_log
	 * @mbggenerated  Thu Apr 06 18:05:05 CST 2017
	 */
	BusinessOpportunityLog selectByPrimaryKey(Long logId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table business_opportunity_log
	 * @mbggenerated  Thu Apr 06 18:05:05 CST 2017
	 */
	int updateByPrimaryKeySelective(BusinessOpportunityLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table business_opportunity_log
	 * @mbggenerated  Thu Apr 06 18:05:05 CST 2017
	 */
	int updateByPrimaryKey(BusinessOpportunityLog record);

	/**
	 * 查询日志数量
	 * @param logName
	 * @param startTime
	 * @param endTime
	 * @param eventType
	 * @param userId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日上午10:52:25
	 */
	int getBusinessOpportunityLogCount(@Param("businessOpportunityName")String businessOpportunityName, @Param("startTime")String startTime,
			          @Param("endTime")String endTime, @Param("eventType")String eventType, @Param("userId")Long userId);

	/**
	 * 分页查询日志信息
	 * @param logName
	 * @param startTime
	 * @param endTime
	 * @param eventType
	 * @param userId
	 * @param startPosition
	 * @param pageSize
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日上午10:54:20
	 */
	List<Map<String, Object>> getBusinessOpportunityLogByPage(@Param("businessOpportunityName")String businessOpportunityName, @Param("startTime")String startTime,
			          @Param("endTime")String endTime, @Param("eventType")String eventType, @Param("userId")Long userId, @Param("start")int start, @Param("pageSize")Integer pageSize);

	/**
	 * 通过商机ID查询日志
	 * @param businessOpportunityId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月14日下午3:39:36
	 */
	List<BusinessOpportunityLog> selectByBusinessOpportunityId(Long businessOpportunityId);
}