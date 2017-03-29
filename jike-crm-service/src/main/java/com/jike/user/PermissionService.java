package com.jike.user;

import com.alibaba.fastjson.JSONObject;

public interface PermissionService {
	
	/**
	 * 查询权限菜单
	 * @param parseObject
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午1:33:52
	 */
	JSONObject queryPermission(JSONObject parseObject);
	
	/**
	 * 查询角色权限
	 * @param permissioJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日下午1:56:19
	 */
	JSONObject selectPermissionByRoleId(JSONObject permissioJson);
	/**
	 * 增加权限
	 * @param permissioJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:38:35
	 */
	JSONObject addPermission(JSONObject permissioJson);
	
	/**
	 * 更新权限
	 * @param permissioJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:39:57
	 */
	JSONObject updatePermission(JSONObject permissioJson);
	
	/**
	 * 删除权限
	 * @param permissioJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日下午1:54:36
	 */
	JSONObject deletePermission(JSONObject permissioJson);
}
