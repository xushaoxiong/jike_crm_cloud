package com.jike.user.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.fastjson.JSONObject;
import com.jike.user.RoleService;
import com.jike.user.dao.RoleMapper;
import com.jike.user.model.Role;

public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;

	public String addRole(JSONObject roleJson) {
		if (!roleJson.isEmpty()) {
			Role roleOld = getRoleByRoleName(roleJson.getString("roleName"));
			if (roleOld != null) {
				return "isExit";
			}
			Role role = new Role();
			role.setRoleName(roleJson.getString("roleName"));
			role.setRoleDescription(roleJson.getString("roleDescription"));
			role.setRoleNum(roleJson.getString("roleNum"));
			role.setCreateTime(new Date());
			return "success";
		}
		return "fail";
	}

	public Role getRoleByRoleName(String roleName) {
		Role role = roleMapper.selectRoleByRoleName(roleName);
		return role;
	}

	public String updateRole(JSONObject roleJson) {
		if (!roleJson.isEmpty()) {
			Role roleOld = getRoleByRoleName(roleJson.getString("roleName"));
			if (roleOld != null) {
				return "isExit";
			}
			Role role = new Role();
			role.setRoleName(roleJson.getString("roleName"));
			role.setRoleDescription(roleJson.getString("roleDescription"));
			role.setRoleNum(roleJson.getString("roleNum"));
			role.setCreateTime(new Date());
			return "success";
		}
		return "fail";
	}

}
