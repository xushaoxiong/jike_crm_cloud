package com.jike.user.dao;

import com.jike.user.model.RoleEvent;

public interface RoleEventMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_event
	 * @mbggenerated  Mon Apr 17 16:45:27 CST 2017
	 */
	int deleteByPrimaryKey(Long roleEventId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_event
	 * @mbggenerated  Mon Apr 17 16:45:27 CST 2017
	 */
	int insert(RoleEvent record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_event
	 * @mbggenerated  Mon Apr 17 16:45:27 CST 2017
	 */
	int insertSelective(RoleEvent record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_event
	 * @mbggenerated  Mon Apr 17 16:45:27 CST 2017
	 */
	RoleEvent selectByPrimaryKey(Long roleEventId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_event
	 * @mbggenerated  Mon Apr 17 16:45:27 CST 2017
	 */
	int updateByPrimaryKeySelective(RoleEvent record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role_event
	 * @mbggenerated  Mon Apr 17 16:45:27 CST 2017
	 */
	int updateByPrimaryKey(RoleEvent record);
}