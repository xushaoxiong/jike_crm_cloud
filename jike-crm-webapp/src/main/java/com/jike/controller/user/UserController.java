package com.jike.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.jike.user.UserService;
import com.jike.user.model.User;

@Controller
@RequestMapping("/home")
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/getUser", method = RequestMethod.GET)
	public @ResponseBody String getUser(Long userId) {
		User user = userService.getUser(userId);
		Object json = JSONObject.toJSON(user);
		return json.toString();
	}

}
