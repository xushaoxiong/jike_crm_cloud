package com.jike.user.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.jike.user.RoleService;
import com.jike.user.dao.RoleMapper;
import com.jike.user.model.Role;

@Service("roleService")
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;

	public JSONObject addRole(JSONObject roleJson) {
		JSONObject resultJson = new JSONObject();
		if (!roleJson.isEmpty()) {
			Role roleOld = getRoleByRoleName(roleJson.getString("roleName"));
			if (roleOld != null) {
				resultJson.put("status", "fail");
				resultJson.put("message", "该角色已存在");
				return resultJson;
			}
			Role role = new Role();
			role.setRoleName(roleJson.getString("roleName"));
			role.setRoleDescription(roleJson.getString("roleDescription"));
			role.setRoleNum(roleJson.getString("roleNum"));
			role.setCreateTime(new Date());
			resultJson.put("status", "success");
			resultJson.put("message", "添加成功");
			return resultJson;
		}
		resultJson.put("status", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}

	public Role getRoleByRoleName(String roleName) {
		Role role = roleMapper.selectRoleByRoleName(roleName);
		return role;
	}

	public JSONObject updateRole(JSONObject roleJson) {
		JSONObject resultJson = new JSONObject();
		if (!roleJson.isEmpty()) {
			Role roleOld = getRoleByRoleName(roleJson.getString("roleName"));
			if (roleOld != null) {
				resultJson.put("status", "fail");
				resultJson.put("message", "该角色已存在");
				return resultJson;
			}
			Role role = new Role();
			role.setRoleName(roleJson.getString("roleName"));
			role.setRoleDescription(roleJson.getString("roleDescription"));
			role.setRoleNum(roleJson.getString("roleNum"));
			role.setCreateTime(new Date());
			resultJson.put("status", "success");
			resultJson.put("message", "更新成功");
			return resultJson;
		}
		resultJson.put("status", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}

}
