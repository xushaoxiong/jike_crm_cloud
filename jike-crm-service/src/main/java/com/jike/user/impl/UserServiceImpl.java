package com.jike.user.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.jike.user.UserService;
import com.jike.user.dao.UserMapper;
import com.jike.user.dao.UserRoleMapper;
import com.jike.user.model.User;
import com.jike.user.utils.security.Password;
import com.jike.user.utils.security.impl.ShaPasswordImplV1;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	@Autowired
	private UserRoleMapper userRoleMapper;

	private Password passwordenEcrypt = new ShaPasswordImplV1();

	public JSONObject getUser(String loginName) {
		User user = userMapper.selectByLoginName(loginName);
		JSONObject userjson = new JSONObject();
		if (user != null) {
			userjson.put("loginName", user.getLoginName());
			userjson.put("name", user.getName());
			userjson.put("gender", user.getGender());
			userjson.put("email", user.getEmail());
			userjson.put("employeeNum", user.getEmployeeNum());
			userjson.put("isEmployment", user.getIsEmployment());
			userjson.put("phone", user.getPhone());
			userjson.put("entryDate", user.getEntryDate());
		}
		return userjson;
	}

	public String addUser(JSONObject userJson) {
		if (!userJson.isEmpty()) {
			User oldUser = userMapper.selectByLoginName(userJson.getString("loginName"));
			if (oldUser != null) {
				return "isExit";
			}
			User user = new User();
			user.setLoginName(userJson.getString("loginName"));
			// 密码加密存储
			user.setPassword(passwordenEcrypt.encrypt(userJson.getString("password")));
			user.setGender(userJson.getInteger("gender"));
			user.setName(userJson.getString("name"));
			user.setEmail(userJson.getString("email"));
			user.setEmployeeNum(userJson.getString("employeeNum"));
			user.setIsEmployment(userJson.getInteger("isEmployment"));
			user.setPhone(userJson.getString("phone"));
			user.setEntryDate(userJson.getDate("entryDate"));
			user.setCreateTime(new Date());
			int insert = userMapper.insert(user);
			System.out.println(insert);
			
//			UserRole userRole = new UserRole();
//			userRoleMapper.insert(userRole);
			return "success";
		}
		return "fail";
	}

	public String updateUser(JSONObject userJson) {
		if (!userJson.isEmpty()) {
			User user = userMapper.selectByLoginName(userJson.getString("loginName"));
			// 密码加密存储
			user.setGender(userJson.getInteger("gender"));
			user.setName(userJson.getString("name"));
			user.setEmail(userJson.getString("email"));
			user.setEmployeeNum(userJson.getString("employeeNum"));
			user.setIsEmployment(userJson.getInteger("isEmployment"));
			user.setPhone(userJson.getString("phone"));
			user.setEntryDate(userJson.getDate("entryDate"));
			user.setUpdateTime(new Date());
			userMapper.updateByPrimaryKey(user);
			return "success";
		}
		return "fail";
	}

	public JSONObject login(String loginName, String password) {
		User user = userMapper.selectUserByLoginnameAndPw(loginName,passwordenEcrypt.encrypt(password));
		JSONObject json = new JSONObject();
		if(user!=null){
			json.put("status", "success");
			json.put("name", user.getName());
		}else {
			json.put("status", "fail");
		}
		return json;
	}
}
