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
import com.jike.user.PermissionService;

@Controller
@RequestMapping("/permission")
public class PermissionController {
	@Autowired
	private PermissionService permissionService;
	private static Logger logger = Logger.getLogger(PermissionController.class);

	/**
	 * 添加角色
	 * 
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午11:05:25
	 */
	@RequestMapping(value = "/queryPermission", method ={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody String queryPermission(HttpServletRequest request) {
		JSONObject json = null;
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			json = permissionService.queryPermission(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("queryPermission error", e);
			e.printStackTrace();
		}

		return json.toJSONString();
	}
	
	/**
	 * 查询角色拥有的菜单
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月29日下午3:07:03
	 */
	@RequestMapping(value = "/queryPermissionByRoleId", method = {RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody String queryPermissionByRoleId(HttpServletRequest request) {
		JSONObject json = null;
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			json = permissionService.selectPermissionByRoleId(JSONObject.parseObject(requestJson));
		} catch (IOException e) {
			logger.error("selectPermissionByRoleId error", e);
			e.printStackTrace();
		}

		return json.toJSONString();
	}


}
