package com.jike.user.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.user.PermissionService;
import com.jike.user.dao.PermissionMapper;
import com.jike.user.model.Permission;

@Service("permissionService")
public class PermissionServiceImpl implements PermissionService{
	@Autowired
	private PermissionMapper permissionMapper;

	public JSONObject addPermission(JSONObject permissioJson) {
		JSONObject resultJson = new JSONObject();
		if (!permissioJson.isEmpty()) {
			Permission permissionOld = permissionMapper
					.selectByPermissionName(permissioJson.getString("permissionName"));
			if (permissionOld != null) {
				resultJson.put("state", "fail");
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
			resultJson.put("state", "success");
			resultJson.put("message", "添加成功");
		} else {
			resultJson.put("state", "fail");
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
				resultJson.put("state", "success");
				resultJson.put("message", "更新成功");
			}else{
				resultJson.put("state", "fail");
				resultJson.put("message", "更新权限不存在");
			}
		} else {
			resultJson.put("state", "fail");
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
				resultJson.put("state", "success");
				resultJson.put("message", "删除成功");
			}else{
				resultJson.put("state", "fail");
				resultJson.put("message", "删除数据不存在");
			}
		} else {
			resultJson.put("state", "fail");
			resultJson.put("message", "请求参数不能为空");
		}
		return resultJson;
	}


	public JSONObject selectPermissionByRoleId(JSONObject permissioJson) {
		JSONObject resultJson = new JSONObject();
		Long roleId = permissioJson.getLong("roleId");
		//查询一级菜单权限
		List<Permission> permissionMenuOneList = permissionMapper.selectPermissionMenuByRoleId(roleId,1);
		if(!permissionMenuOneList.isEmpty()){
			JSONArray menu1 = new JSONArray();
			for (Permission permission : permissionMenuOneList) {
				JSONObject permissionJson = new JSONObject();
				permissionJson.put("menuName", permission.getPermissionName());
				permissionJson.put("menuId", permission.getPermissionId());
				permissionJson.put("sourceUrl", permission.getSourceUrl());
				//查询二级菜单权限
				List<Permission> permissionMenuTwoList = permissionMapper.selectPermissionMenuByRoleIdAndParentId(roleId,2,permission.getPermissionId());
				if(!permissionMenuTwoList.isEmpty()){
					JSONArray menu2 = new JSONArray();
					for (Permission permission2 : permissionMenuTwoList) {
						JSONObject permissionJson2 = new JSONObject();
						permissionJson2.put("menuName", permission2.getPermissionName());
						permissionJson2.put("menuId", permission2.getPermissionId());
						permissionJson2.put("sourceUrl", permission2.getSourceUrl());
						menu2.add(permissionJson2);
					}
					permissionJson.put("menu2", menu2);
				}
				menu1.add(permissionJson);
			}
			resultJson.put("menu1", menu1);
			resultJson.put("name", permissioJson.getString("userName"));
		}
		return resultJson;
	}


	public JSONObject queryPermission(JSONObject parseObject) {
		JSONObject resultJson = new JSONObject();
		//查询一级菜单权限
		List<Permission> permissionMenuOneList = permissionMapper.queryPermissionMenu(1);
		
		if(!permissionMenuOneList.isEmpty()){
			JSONArray menu1 = new JSONArray();
			for (Permission permission : permissionMenuOneList) {
				JSONObject permissionJson = new JSONObject();
				permissionJson.put("menuName", permission.getPermissionName());
				permissionJson.put("menuId", permission.getPermissionId());
				//查询二级菜单权限
				List<Permission> permissionMenuTwoList = permissionMapper.queryPermissionMenuByParentId(2,permission.getPermissionId());
				if(!permissionMenuTwoList.isEmpty()){
					JSONArray menu2 = new JSONArray();
					for (Permission permission2 : permissionMenuTwoList) {
						JSONObject permissionJson2 = new JSONObject();
						permissionJson2.put("menuName", permission2.getPermissionName());
						permissionJson2.put("menuId", permission2.getPermissionId());
						menu2.add(permissionJson2);
					}
					permissionJson.put("menu2", menu2);
				}
				menu1.add(permissionJson);
			}
			resultJson.put("menu1", menu1);
		}
		return resultJson;
	}

}
