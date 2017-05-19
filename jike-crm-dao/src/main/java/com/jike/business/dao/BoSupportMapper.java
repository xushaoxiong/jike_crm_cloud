package com.jike.business.dao;

import java.util.List;

import com.jike.business.model.BoSupport;

public interface BoSupportMapper {
    /**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_support
	 * @mbggenerated  Thu May 18 09:39:08 CST 2017
	 */
	int deleteByPrimaryKey(Long boSupportId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_support
	 * @mbggenerated  Thu May 18 09:39:08 CST 2017
	 */
	int insert(BoSupport record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_support
	 * @mbggenerated  Thu May 18 09:39:08 CST 2017
	 */
	int insertSelective(BoSupport record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_support
	 * @mbggenerated  Thu May 18 09:39:08 CST 2017
	 */
	BoSupport selectByPrimaryKey(Long boSupportId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_support
	 * @mbggenerated  Thu May 18 09:39:08 CST 2017
	 */
	int updateByPrimaryKeySelective(BoSupport record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_support
	 * @mbggenerated  Thu May 18 09:39:08 CST 2017
	 */
	int updateByPrimaryKey(BoSupport record);

	BoSupport selectBoSupportByLogId(Long logId);

	List<BoSupport> selectBoSupportByCspId(Long cooperativePartnerSchoolId);
}