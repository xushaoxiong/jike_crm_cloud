package com.jike.controller.base;

import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSONObject;

public class BaseController {
	
	public static final String loginFlag = "loginFlag";
	public static final String loginName = "loginName";
	public static final String roleId = "roleId";
	public static final String userName = "userName";
	public static final String userId = "userId";

	/**
	 * 验证是否登录
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月30日上午9:15:16
	 */
	public JSONObject checkLogin(HttpSession session) {
		Boolean loginResult = (Boolean) session.getAttribute(loginFlag);
		JSONObject result = new JSONObject();
		if (loginResult==null||!loginResult) {
			result.put("state", "unLogin");
			result.put("message", "未登录");
		} else {
			result.put("state", "login");
			result.put("message", "登录");
		}
		return result;
	}
	
	public JSONObject checkIfBusinessOrSale(HttpSession session){
		Long loginRoleId = (Long) session.getAttribute(roleId);
		JSONObject result = new JSONObject();
		if (loginRoleId!=2&&loginRoleId!=3) {
			result.put("state", "fail");
			result.put("message", "没有权限");
		} else {
			result.put("state", "success");
			result.put("message", "有权限");
		}
		return result;
	}
	
	public JSONObject checkIfSale(HttpSession session){
		Long loginRoleId = (Long) session.getAttribute(roleId);
		JSONObject result = new JSONObject();
		if (loginRoleId!=3) {
			result.put("state", "fail");
			result.put("message", "没有权限");
		} else {
			result.put("state", "success");
			result.put("message", "有权限");
		}
		return result;
	}

}
