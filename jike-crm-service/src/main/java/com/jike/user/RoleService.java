package com.jike.user;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.user.model.Role;

public interface RoleService {
	
	/**
	 * 通过角色名称查询角色
	 * @param roleName
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:59:41
	 */
	Role getRoleByRoleName(String roleName);
	
	/**
	 * 添加角色
	 * @param roleJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:38:35
	 */
	JSONObject addRole(JSONObject roleJson);
	
	/**
	 * 更新角色
	 * @param roleJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:39:57
	 */
	JSONObject updateRole(JSONObject roleJson);

	/**
	 * 添加角色权限
	 * @param parseObject
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午4:01:12
	 */
	JSONObject addRolePermission(JSONObject parseObject);

	/**
	 * 查询角色
	 * @param parseObject
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午4:12:15
	 */
	JSONArray queryRole(JSONObject parseObject);
	/**
	 * 查询用户角色信息
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日下午1:56:27
	 */
	public Role getRoleByUserId(JSONObject json);

	/**
	 * 查询角色创建日志事项
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月17日下午4:32:30
	 */
	public JSONObject queryRoleEventLabel(JSONObject json);
}
