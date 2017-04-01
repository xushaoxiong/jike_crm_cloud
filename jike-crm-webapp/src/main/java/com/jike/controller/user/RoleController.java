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

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.controller.base.BaseController;
import com.jike.controller.utils.RequestUtils;
import com.jike.user.RoleService;

@Controller
@RequestMapping("/role")
public class RoleController extends BaseController{
	@Autowired
	private RoleService roleService;
	private static Logger logger = Logger.getLogger(RoleController.class);
	
	/**
	 * 添加角色
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午11:05:25
	 */
	@RequestMapping(value = "/addRole", method = RequestMethod.POST)
	public @ResponseBody String addRole(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			result = roleService.addRole(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
			e.printStackTrace();
		}
		
		return result.toString();
	}
	/**
	 * 更新角色
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午3:20:31
	 */
	@RequestMapping(value = "/updateRole", method = RequestMethod.POST)
	public @ResponseBody String updateRole(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			result = roleService.updateRole(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
			e.printStackTrace();
		}
		
		return result.toString();
	}
	
	/**
	 * 添加角色权限
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午4:11:14
	 */
	@RequestMapping(value = "/addRolePermission", method = RequestMethod.POST)
	public @ResponseBody String addRolePermission(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			result = roleService.addRolePermission(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("addRolePermission error", e);
		}
		
		return result.toString();
	}
	
	
	/**
	 * 查询角色
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午4:11:26
	 */
	@RequestMapping(value = "/queryRole", method = {RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody String queryRole(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		JSONArray json = null;
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			 json = roleService.queryRole(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("queryRole error", e);
		}
		
		return json.toString();
	} 
	
	
	

}
