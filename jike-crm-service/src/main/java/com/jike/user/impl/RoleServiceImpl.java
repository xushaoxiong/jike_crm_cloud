package com.jike.user.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.crm.utils.DateUtil;
import com.jike.user.RoleService;
import com.jike.user.dao.RoleMapper;
import com.jike.user.dao.RolePermissionMapper;
import com.jike.user.model.Role;
import com.jike.user.model.RolePermission;

@Service("roleService")
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;
	@Autowired
	private RolePermissionMapper rolePermissionMapper;

	public JSONObject addRole(JSONObject roleJson) {
		JSONObject resultJson = new JSONObject();
		if (roleJson!=null&&!roleJson.isEmpty()) {
			Role roleOld = getRoleByRoleName(roleJson.getString("roleName"));
			if (roleOld != null) {
				resultJson.put("status", "fail");
				resultJson.put("message", "该角色已存在");
				return resultJson;
			}
			Role role = new Role();
			role.setRoleName(roleJson.getString("roleName"));
//			role.setRoleDescription(roleJson.getString("roleDescription"));
			role.setRoleNum(roleJson.getString("roleNum"));
			role.setCreateTime(new Date());
			roleMapper.insert(role);
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
			roleMapper.updateByPrimaryKeySelective(role);
			resultJson.put("status", "success");
			resultJson.put("message", "更新成功");
			return resultJson;
		}
		resultJson.put("status", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}

	public JSONObject addRolePermission(JSONObject parseObject) {
		Long roleId = parseObject.getLong("roleId");
		JSONArray permissonList = parseObject.getJSONArray("permissonList");
		JSONObject json = new JSONObject();
		if(permissonList==null||permissonList.isEmpty()){
			json.put("status", "fail");
			json.put("message", "分配权限不能为空");
			return json;
		}
		//删除以前分配权限
		rolePermissionMapper.deleteByRoleId(roleId);
		for (Object object : permissonList) {
			JSONObject permissonJson = (JSONObject) object;
			Long permissionId = permissonJson.getLong("permissionId");
			RolePermission rolePermission = new RolePermission();
			rolePermission.setRoleId(roleId);
			rolePermission.setPermissionId(permissionId);
			rolePermission.setCreateTime(new Date());
			rolePermissionMapper.insert(rolePermission);
		}
		
		json.put("status", "success");
		json.put("message", "分配成功");
		return json;
	}

	public JSONArray queryRole(JSONObject parseObject) {
		JSONArray roleList = new JSONArray();
		List<Role> roles = roleMapper.selectRoles();
		for (Role role : roles) {
			JSONObject roleJson = new JSONObject();
			roleJson.put("roleId", role.getRoleId());
			roleJson.put("roleName", role.getRoleName());
			roleJson.put("roleNum", role.getRoleNum());
			roleJson.put("createTime", DateUtil.getDateTimeFormat(role.getCreateTime()));
			roleJson.put("updateTime", DateUtil.getDateTimeFormat(role.getUpdateTime()));
			roleList.add(roleJson);
		}
		return roleList;
	}

}
