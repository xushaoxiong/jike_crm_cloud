package com.jike.business.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jike.business.model.BusinessOpportunity;

public interface BusinessOpportunityMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int deleteByPrimaryKey(Long businessOpportunityId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int insert(BusinessOpportunity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int insertSelective(BusinessOpportunity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    BusinessOpportunity selectByPrimaryKey(Long businessOpportunityId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int updateByPrimaryKeySelective(BusinessOpportunity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int updateByPrimaryKey(BusinessOpportunity record);

    /**
     * 通过商机流水号查询查询商机
     * @param businessOpportunityNum
     * @return
     * @created wangyb
     * @createtime 2017年4月5日下午4:14:49
     */
	BusinessOpportunity selectByBusinessOpportunityNum(@Param("businessOpportunityNum")String businessOpportunityNum);

	/**
	 * 查询商机数量
	 * @param businessOpportunityName
	 * @param startTime
	 * @param endTime
	 * @param businessOpportunityProcess
	 * @param roleId
	 * @param userId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月5日下午6:04:51
	 */
	int getBusinessOpportunityCount(@Param("businessOpportunityName")String businessOpportunityName, @Param("startTime")String startTime, @Param("endTime")String endTime,
			@Param("businessOpportunityProcess")String businessOpportunityProcess, @Param("userId")Long userId);

	/**
	 * 分页查询商机
	 * @param businessOpportunityName
	 * @param startTime
	 * @param endTime
	 * @param businessOpportunityProcess
	 * @param userId
	 * @param startPosition
	 * @param pageSize
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日上午8:42:42
	 */
	List<java.util.Map<String, Object>> getBusinessOpportunityByPage(@Param("businessOpportunityName")String businessOpportunityName, @Param("startTime")String startTime, @Param("endTime")String endTime,
			@Param("businessOpportunityProcess")String businessOpportunityProcess, @Param("userId")Long userId,@Param("start")Integer start, @Param("pageSize")Integer pageSize);
}