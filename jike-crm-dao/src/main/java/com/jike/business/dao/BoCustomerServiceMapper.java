package com.jike.business.dao;

import com.jike.business.model.BoCustomerService;

public interface BoCustomerServiceMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_customer_service
     *
     * @mbggenerated Tue Apr 11 09:44:59 CST 2017
     */
    int deleteByPrimaryKey(Long boCustomerService);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_customer_service
     *
     * @mbggenerated Tue Apr 11 09:44:59 CST 2017
     */
    int insert(BoCustomerService record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_customer_service
     *
     * @mbggenerated Tue Apr 11 09:44:59 CST 2017
     */
    int insertSelective(BoCustomerService record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_customer_service
     *
     * @mbggenerated Tue Apr 11 09:44:59 CST 2017
     */
    BoCustomerService selectByPrimaryKey(Long boCustomerService);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_customer_service
     *
     * @mbggenerated Tue Apr 11 09:44:59 CST 2017
     */
    int updateByPrimaryKeySelective(BoCustomerService record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_customer_service
     *
     * @mbggenerated Tue Apr 11 09:44:59 CST 2017
     */
    int updateByPrimaryKey(BoCustomerService record);

	BoCustomerService selectBoCustomerServiceByLogId(Long logId);
}