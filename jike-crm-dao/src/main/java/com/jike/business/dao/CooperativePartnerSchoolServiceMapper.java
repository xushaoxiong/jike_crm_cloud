package com.jike.business.dao;

import com.jike.business.model.CooperativePartnerSchoolService;

public interface CooperativePartnerSchoolServiceMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table cooperative_partner_school_service
     *
     * @mbggenerated Wed May 10 18:09:32 CST 2017
     */
    int deleteByPrimaryKey(Long cpsServiceId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table cooperative_partner_school_service
     *
     * @mbggenerated Wed May 10 18:09:32 CST 2017
     */
    int insert(CooperativePartnerSchoolService record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table cooperative_partner_school_service
     *
     * @mbggenerated Wed May 10 18:09:32 CST 2017
     */
    int insertSelective(CooperativePartnerSchoolService record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table cooperative_partner_school_service
     *
     * @mbggenerated Wed May 10 18:09:32 CST 2017
     */
    CooperativePartnerSchoolService selectByPrimaryKey(Long cpsServiceId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table cooperative_partner_school_service
     *
     * @mbggenerated Wed May 10 18:09:32 CST 2017
     */
    int updateByPrimaryKeySelective(CooperativePartnerSchoolService record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table cooperative_partner_school_service
     *
     * @mbggenerated Wed May 10 18:09:32 CST 2017
     */
    int updateByPrimaryKey(CooperativePartnerSchoolService record);
}