package com.jike.business.dao;

import com.jike.business.model.SaleBusinessOpportunity;

public interface SaleBusinessOpportunityMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale_business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale_business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int insert(SaleBusinessOpportunity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale_business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int insertSelective(SaleBusinessOpportunity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale_business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    SaleBusinessOpportunity selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale_business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int updateByPrimaryKeySelective(SaleBusinessOpportunity record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sale_business_opportunity
     *
     * @mbggenerated Wed Apr 05 13:53:33 CST 2017
     */
    int updateByPrimaryKey(SaleBusinessOpportunity record);

    /**
     * 通过商机ID查询分配信息
     * @param businessOpportunityId
     * @return
     * @created wangyb
     * @createtime 2017年4月6日下午3:27:38
     */
	SaleBusinessOpportunity selectByBusinessOpportunityId(Long businessOpportunityId);
}