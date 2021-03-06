package com.jike.user.dao;

import java.util.Map;

import com.jike.user.model.UserRole;

public interface UserRoleMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user_role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int deleteByPrimaryKey(Long userRoleId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user_role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int insert(UserRole record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user_role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int insertSelective(UserRole record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user_role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	UserRole selectByPrimaryKey(Long userRoleId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user_role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int updateByPrimaryKeySelective(UserRole record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table user_role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int updateByPrimaryKey(UserRole record);

	/**
	 * 通过用户ID查询角色
	 * @param userId
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午9:20:26
	 */
	UserRole selectByUserId(Long userId);

	/**
	 * 通过用户ID查询角色名称
	 * @param userId
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月30日下午3:52:38
	 */
	Map<String,String> getRoleNameByUserId(Long userId);
}