package com.jike.user.model;

import java.util.Date;

public class UserRole {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column user_role.user_role_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	private Long userRoleId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column user_role.user_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	private Long userId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column user_role.role_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	private Long roleId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column user_role.create_time
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	private Date createTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column user_role.update_time
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	private Date updateTime;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column user_role.user_role_id
	 * @return  the value of user_role.user_role_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public Long getUserRoleId() {
		return userRoleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column user_role.user_role_id
	 * @param userRoleId  the value for user_role.user_role_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public void setUserRoleId(Long userRoleId) {
		this.userRoleId = userRoleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column user_role.user_id
	 * @return  the value of user_role.user_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public Long getUserId() {
		return userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column user_role.user_id
	 * @param userId  the value for user_role.user_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column user_role.role_id
	 * @return  the value of user_role.role_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public Long getRoleId() {
		return roleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column user_role.role_id
	 * @param roleId  the value for user_role.role_id
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column user_role.create_time
	 * @return  the value of user_role.create_time
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public Date getCreateTime() {
		return createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column user_role.create_time
	 * @param createTime  the value for user_role.create_time
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column user_role.update_time
	 * @return  the value of user_role.update_time
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public Date getUpdateTime() {
		return updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column user_role.update_time
	 * @param updateTime  the value for user_role.update_time
	 * @mbggenerated  Mon Mar 27 17:49:49 CST 2017
	 */
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
}