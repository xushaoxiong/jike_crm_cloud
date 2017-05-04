package com.jike.user.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.crm.utils.DateUtil;
import com.jike.user.RoleService;
import com.jike.user.dao.BoEventLabelMapper;
import com.jike.user.dao.RoleEventMapper;
import com.jike.user.dao.RoleMapper;
import com.jike.user.dao.RolePermissionMapper;
import com.jike.user.model.BoEventLabel;
import com.jike.user.model.Role;
import com.jike.user.model.RoleEvent;
import com.jike.user.model.RolePermission;

@Service("roleService")
@Transactional
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;
	@Autowired
	private RolePermissionMapper rolePermissionMapper;
	@Autowired
	private BoEventLabelMapper boEventLabelMapper;
	@Autowired
	private RoleEventMapper roleEventMapper;

	public JSONObject addRole(JSONObject roleJson) {
		JSONObject resultJson = new JSONObject();
		if (roleJson!=null&&!roleJson.isEmpty()) {
			synchronized (this) {
				Role roleOld = getRoleByRoleName(roleJson.getString("roleName"));
				if (roleOld != null) {
					resultJson.put("state", "fail");
					resultJson.put("message", "该角色已存在");
					return resultJson;
				}
				Role role = new Role();
				role.setRoleName(roleJson.getString("roleName"));
				// role.setRoleDescription(roleJson.getString("roleDescription"));
				role.setRoleNum(roleJson.getString("roleNum"));
				role.setCreateTime(new Date());
				roleMapper.insert(role);
			}
			resultJson.put("state", "success");
			resultJson.put("message", "添加成功");
			return resultJson;
		}
		resultJson.put("state", "fail");
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
			synchronized (this) {
				Role role = getRoleByRoleName(roleJson.getString("roleName"));
				role.setRoleName(roleJson.getString("roleName"));
				role.setRoleDescription(roleJson.getString("roleDescription"));
				role.setRoleNum(roleJson.getString("roleNum"));
				role.setCreateTime(new Date());
				roleMapper.updateByPrimaryKeySelective(role);
			}
			resultJson.put("state", "success");
			resultJson.put("message", "更新成功");
			return resultJson;
		}
		resultJson.put("state", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}

	@Transactional
	public JSONObject addRolePermission(JSONObject parseObject) {
		Long roleId = parseObject.getLong("roleId");
		JSONArray permissonList = parseObject.getJSONArray("permissonList");
		JSONObject json = new JSONObject();
		if(permissonList==null||permissonList.isEmpty()){
			json.put("state", "fail");
			json.put("message", "分配权限不能为空");
			return json;
		}
		//删除以前分配权限
		synchronized (this) {
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
		}
		json.put("state", "success");
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
			if(role.getUpdateTime()!=null){
				roleJson.put("updateTime", DateUtil.getDateTimeFormat(role.getUpdateTime()));
			}else{
				roleJson.put("updateTime","");
			}
			
			roleList.add(roleJson);
		}
		return roleList;
	}
	
	public Role getRoleByUserId(JSONObject json){
		Long userId = json.getLong("userId");
		return roleMapper.getRoleByUserId(userId);
	}

	
	public JSONObject queryRoleEventLabel(JSONObject json){
		JSONObject resultJson = new JSONObject();
		Long roleId = json.getLong("roleId");
		List<BoEventLabel> roleEventList = boEventLabelMapper.selectByRoleId(roleId);
		JSONArray evenList = new JSONArray();
		for (BoEventLabel boEventLabel : roleEventList) {
			JSONObject eventJson = new JSONObject();
			eventJson.put("eveid", boEventLabel.getEveid());
			eventJson.put("evename", boEventLabel.getEvename());
			List<BoEventLabel> level2 = boEventLabelMapper.selectByRoleIdAndParentId(roleId, boEventLabel.getEveid());
			JSONArray specIList = new JSONArray();
			for (BoEventLabel boEventLabel2 : level2) {
				JSONObject specJson = new JSONObject();
				specJson.put("spcid", boEventLabel2.getEveid());
				specJson.put("spcitem", boEventLabel2.getEvename());
				specIList.add(specJson);
			}
			eventJson.put("specIList", specIList);
			evenList.add(eventJson);
		}
		resultJson.put("evenList", evenList);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
		
	}
	
	public List<String> queryRoleEvenTypeList(Long roleId){
		List<BoEventLabel> roleEventList = boEventLabelMapper.selectByRoleId(roleId);
		List<String> list = new ArrayList<String>();
		for (BoEventLabel boEventLabel : roleEventList) {
			list.add(boEventLabel.getEvename());
		}
		return list;
	}

	public JSONObject queryRoleQureryEventLabel(JSONObject json) {
		JSONObject resultJson = new JSONObject();
		Long roleId = json.getLong("roleId");
		List<BoEventLabel> roleEventList = null;
		if(roleId==2L||roleId==3L){
			roleEventList = boEventLabelMapper.selectDistinctAll();
		}else{
			roleEventList = boEventLabelMapper.selectByRoleId(roleId);
		}
		JSONArray evenList = new JSONArray();
		List<Integer> list = new ArrayList<Integer>();
		for (BoEventLabel boEventLabel : roleEventList) {
			if(list.contains(boEventLabel.getEvename())){
				continue;
			}
			list.add(boEventLabel.getEveid());	
			JSONObject eventJson = new JSONObject();
			eventJson.put("eveid", boEventLabel.getEveid());
			eventJson.put("evename", boEventLabel.getEvename());
			List<BoEventLabel> level2 = boEventLabelMapper.selectByRoleIdAndParentId(roleId, boEventLabel.getEveid());
			JSONArray specIList = new JSONArray();
			for (BoEventLabel boEventLabel2 : level2) {
				JSONObject specJson = new JSONObject();
				specJson.put("spcid", boEventLabel2.getEveid());
				specJson.put("spcitem", boEventLabel2.getEvename());
				specIList.add(specJson);
			}
			eventJson.put("specIList", specIList);
			evenList.add(eventJson);
		}
		resultJson.put("evenList", evenList);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
}
