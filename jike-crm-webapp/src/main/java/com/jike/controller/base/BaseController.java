package com.jike.controller.base;

import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSONObject;

public class BaseController {
	
	public static final String loginFlag = "loginFlag";
	public static final String loginName = "loginName";

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
			result.put("status", "unLogin");
			result.put("message", "未登录");
		} else {
			result.put("status", "login");
			result.put("message", "登录");
		}
		return result;
	}

}
