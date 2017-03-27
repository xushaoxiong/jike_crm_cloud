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
import com.jike.user.UserService;

@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	private static Logger logger = Logger.getLogger(UserController.class);  

	
	/**
	 * 通过用户名
	 * @param loginName
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午2:35:22
	 */
	@RequestMapping(value = "/getUserByLoginName", method = RequestMethod.GET)
	public @ResponseBody String getUser(String loginName) {
		JSONObject json = userService.getUser(loginName);
		return json.toString();
	}
	
	/**
	 * 更新用户基本信息
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午2:55:07
	 */
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	public @ResponseBody String updateUser(HttpServletRequest request) {
		String userJson;
		String result ="fail" ;
		try {
			userJson = RequestUtils.getRequestJsonString(request);
		    result = userService.updateUser(JSONObject.parseObject(userJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
			e.printStackTrace();
		}
		return result;
	}
	
	/**
	 * 添加用户
	 * @param userJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午2:56:47
	 */
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public @ResponseBody String addUser(HttpServletRequest request) {
		String userJson;
		String result ="fail" ;
		try {
			userJson = RequestUtils.getRequestJsonString(request);
		    result = userService.addUser(JSONObject.parseObject(userJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
			e.printStackTrace();
		}
		return result;
	}
	
	
	
	
	
}
