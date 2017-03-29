package com.jike.user.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.jike.user.PermissionService;
import com.jike.user.dao.PermissionMapper;
import com.jike.user.dao.RolePermissionMapper;
import com.jike.user.model.Permission;

@Service("permissionService")
public class PermissionServiceImpl implements PermissionService{
	@Autowired
	private PermissionMapper permissionMapper;
	@Autowired
	private RolePermissionMapper rolePermissionMapper;

	public JSONObject addPermission(JSONObject permissioJson) {
		JSONObject resultJson = new JSONObject();
		if (!permissioJson.isEmpty()) {
			Permission permissionOld = permissionMapper
					.selectByPermissionName(permissioJson.getString("permissionName"));
			if (permissionOld != null) {
				resultJson.put("status", "fail");
				resultJson.put("message", "该权限名称已存在");
				return resultJson;
			}
			Permission permission = new Permission();
			permission.setDescription(permissioJson.getString("description"));
			permission.setPermissionName(permissioJson.getString("permissionName"));
			permission.setMenuLevel(permissioJson.getInteger("menuLevel"));
			permission.setParentId(permissioJson.getLong("parentId"));
			permission.setSort(permissioJson.getInteger("sort"));
			permission.setCreateTime(new Date());
			resultJson.put("status", "success");
			resultJson.put("message", "添加成功");
		} else {
			resultJson.put("status", "fail");
			resultJson.put("message", "添加内容为空");
		}
		return resultJson;
	}


	public JSONObject updatePermission(JSONObject permissioJson) {
		JSONObject resultJson = new JSONObject();
		if (!permissioJson.isEmpty()) {
			Permission permission = permissionMapper
					.selectByPermissionName(permissioJson.getString("permissionName"));
			if (permission != null) {
				permission.setDescription(permissioJson.getString("description"));
				permission.setPermissionName(permissioJson.getString("permissionName"));
				permission.setMenuLevel(permissioJson.getInteger("menuLevel"));
				permission.setParentId(permissioJson.getLong("parentId"));
				permission.setSort(permissioJson.getInteger("sort"));
				permission.setUpdateTime(new Date());
				permissionMapper.updateByPrimaryKeySelective(permission);
				resultJson.put("status", "success");
				resultJson.put("message", "更新成功");
			}else{
				resultJson.put("status", "fail");
				resultJson.put("message", "更新权限不存在");
			}
		} else {
			resultJson.put("status", "fail");
			resultJson.put("message", "更新内容为空");
		}
		return resultJson;
	}

	public JSONObject deletePermission(JSONObject permissioJson) {
		JSONObject resultJson = new JSONObject();
		if (!permissioJson.isEmpty()) {
			Permission permission = permissionMapper
					.selectByPermissionName(permissioJson.getString("permissionName"));
			if (permission != null) {
				permissionMapper.deleteByPrimaryKey(permission.getPermissionId());
				resultJson.put("status", "success");
				resultJson.put("message", "删除成功");
			}else{
				resultJson.put("status", "fail");
				resultJson.put("message", "删除数据不存在");
			}
		} else {
			resultJson.put("status", "fail");
			resultJson.put("message", "请求参数不能为空");
		}
		return resultJson;
	}


	public JSONObject selectPermissionByRoleId(JSONObject permissioJson) {
		
		Long roleId = permissioJson.getLong("roleId");
		rolePermissionMapper.selectPermissionMenuOneByRoleId(roleId);
		return null;
	}

}
