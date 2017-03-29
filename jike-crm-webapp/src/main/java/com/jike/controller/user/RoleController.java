package com.jike.controller.user;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.jike.controller.utils.RequestUtils;
import com.jike.user.RoleService;

@Controller
@RequestMapping("/role")
public class RoleController {
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
	@RequestMapping(value = "/addRole", method = RequestMethod.GET)
	public @ResponseBody String addRole(HttpServletRequest request) {
		JSONObject json = null;
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			 json = roleService.addRole(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
			e.printStackTrace();
		}
		
		return json.toString();
	}
	
	@RequestMapping(value = "/updateRole", method = RequestMethod.GET)
	public @ResponseBody String updateRole(HttpServletRequest request) {
		JSONObject json = null;
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			 json = roleService.updateRole(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
			e.printStackTrace();
		}
		
		return json.toString();
	}
	
	

}
