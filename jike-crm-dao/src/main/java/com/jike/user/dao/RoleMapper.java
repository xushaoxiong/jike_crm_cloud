package com.jike.user.dao;

import java.util.List;

import com.jike.user.model.Role;

public interface RoleMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int deleteByPrimaryKey(Long roleId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int insert(Role record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int insertSelective(Role record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	Role selectByPrimaryKey(Long roleId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int updateByPrimaryKeySelective(Role record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table role
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	int updateByPrimaryKey(Role record);

	/**
	 * 通过角色名称查询角色
	 * @param roleName
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:56:25
	 */
	Role selectRoleByRoleName(String roleName);

	/**
	 * 查询所有角色
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午4:17:57
	 */
	List<Role> selectRoles();
}