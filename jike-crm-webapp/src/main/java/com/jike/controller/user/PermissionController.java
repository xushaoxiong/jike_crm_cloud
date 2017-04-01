package com.jike.controller.user;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.jike.controller.base.BaseController;
import com.jike.controller.utils.RequestUtils;
import com.jike.user.PermissionService;

@Controller
@RequestMapping("/permission")
public class PermissionController extends BaseController{
	@Autowired
	private PermissionService permissionService;
	private static Logger logger = Logger.getLogger(PermissionController.class);

	/**
	 * 查询权限列表
	 * 
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午11:05:25
	 */
	@RequestMapping(value = "/queryPermission", method ={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody String queryPermission(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("status"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			result = permissionService.queryPermission(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("queryPermission error", e);
			e.printStackTrace();
		}

		return result.toJSONString();
	}
	
	/**
	 * 查询登录角色拥有的菜单
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午3:07:03
	 */
	@RequestMapping(value = "/queryLoginPermission", method = {RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody String queryLoginPermission(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("status"))){
			return result.toJSONString();
		}
		JSONObject json = new JSONObject();
		json.put("roleId", session.getAttribute(roleId));
		json.put("userName", session.getAttribute(userName));
		result = permissionService.selectPermissionByRoleId(json);

		return result.toJSONString();
	}
	
	/**
	 * 查询角色拥有的菜单
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午3:07:03
	 */
	@RequestMapping(value = "/queryPermissionByRoleId", method = {RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody String queryPermissionByRoleId(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("status"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			result = permissionService.selectPermissionByRoleId(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("selectPermissionByRoleId error", e);
		}

		return result.toJSONString();
	}


}
