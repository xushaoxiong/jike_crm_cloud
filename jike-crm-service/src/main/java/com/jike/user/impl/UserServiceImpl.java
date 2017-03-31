package com.jike.user.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.crm.utils.DateUtil;
import com.jike.crm.utils.PageUtil;
import com.jike.user.UserService;
import com.jike.user.dao.UserMapper;
import com.jike.user.dao.UserRoleMapper;
import com.jike.user.model.User;
import com.jike.user.model.UserRole;
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

	public JSONObject addUser(JSONObject userJson) {
		JSONObject resultJson = new JSONObject();
		if (!userJson.isEmpty()) {
			User oldUser = userMapper.selectByLoginName(userJson.getString("loginName"));
			if (oldUser != null) {
				resultJson.put("status", "fail");
				resultJson.put("message", "登录名已存在");
				return resultJson;
			}
			//添加用户
			User user = new User();
			user.setLoginName(userJson.getString("loginName"));
			// 密码加密存储
			user.setPassword(passwordenEcrypt.encrypt(userJson.getString("password")));
			user.setGender(userJson.getInteger("gender"));
			user.setName(userJson.getString("name"));
			user.setEmail(userJson.getString("email"));
			user.setEmployeeNum(userJson.getString("employeeNum"));
			user.setIsEmployment(0);//添加员工是默认在职
			user.setPhone(userJson.getString("phone"));
			user.setEntryDate(userJson.getDate("entryDate"));
			user.setCreateTime(new Date());
			userMapper.insert(user);
			
			//分配角色
			User userNew = userMapper.selectByLoginName(userJson.getString("loginName"));
			UserRole userRole = new UserRole();
			userRole.setUserId(userNew.getUserId());
			userRole.setRoleId(userJson.getLong("roleId"));
			user.setCreateTime(new Date());
			userRoleMapper.insert(userRole);
			
			resultJson.put("status", "success");
			resultJson.put("message", "添加成功");
			return resultJson;
		}
		resultJson.put("status", "fail");
		resultJson.put("message", "添加内容为空");
		return resultJson;
	}

	public JSONObject updateUser(JSONObject userJson) {
		JSONObject resultJson = new JSONObject();
		if (!userJson.isEmpty()) {
			User user = userMapper.selectByLoginName(userJson.getString("loginName"));
			user.setGender(userJson.getInteger("gender"));
			user.setName(userJson.getString("name"));
			user.setEmail(userJson.getString("email"));
			user.setEmployeeNum(userJson.getString("employeeNum"));
			user.setIsEmployment(userJson.getInteger("isEmployment"));
			user.setPhone(userJson.getString("phone"));
			user.setEntryDate(userJson.getDate("entryDate"));
			user.setUpdateTime(new Date());
			userMapper.updateByPrimaryKeySelective(user);
			
			UserRole userRole = userRoleMapper.selectByUserId(user.getUserId());
			userRole.setRoleId(userJson.getLong("roleId"));
			user.setUpdateTime(new Date());
			userRoleMapper.updateByPrimaryKeySelective(userRole);
			
			resultJson.put("status", "success");
			resultJson.put("message", "更新成功");
		}else{
			resultJson.put("status", "fail");
			resultJson.put("message", "更新内容为空");
		}
		
		return resultJson;
	}

	public JSONObject login(JSONObject parseObject) {
		String loginName = parseObject.getString("loginName");
		String password = parseObject.getString("password");
		User user = userMapper.selectUserByLoginnameAndPw(loginName,passwordenEcrypt.encrypt(password));
		JSONObject json = new JSONObject();
		if(user!=null){
			json.put("status", "success");
			json.put("name", user.getName());
			json.put("loginName", user.getLoginName());
		}else {
			json.put("status", "fail");
		}
		return json;
	}

	public JSONObject getUserByPage(JSONObject queryJson) {
		JSONObject resultJson = new JSONObject();
		if (queryJson != null) {
			String name = queryJson.getString("name");
			Integer start = queryJson.getInteger("start");
			Integer pageSize = queryJson.getInteger("pageSize");
			if(name==null){
			   name = "";
			}
			name="%"+name+"%";
			int totalCount = userMapper.getUserCount(name);
			int startPosition = (start - 1) * pageSize;
			List<User> userList = userMapper.getUserByPage(name,startPosition,pageSize);
			JSONArray userArr = new JSONArray();
			if(!userList.isEmpty()){
				for (User user : userList) {
					JSONObject userJson = new JSONObject();
					String roleName = userRoleMapper.getRoleNameByUserId(user.getUserId());
					userJson.put("roleName", roleName);
					userJson.put("loginName", user.getLoginName());
					userJson.put("name", user.getName());
					userJson.put("gender", user.getGender()==0?"女":"男");
					userJson.put("phone", user.getPhone());
					userJson.put("email", user.getEmail());
					userJson.put("employeeNum", user.getEmployeeNum());
					userJson.put("isEmployment", user.getIsEmployment()==0?"在职":"离职");
					userJson.put("entryDate", DateUtil.getDateFormat(user.getEntryDate()));
					userArr.add(userJson);
				}
			}
			
			
			int totalPage = 0;
			if (totalCount / pageSize > 0) {
	            if (totalCount % pageSize == 0) {
	                totalPage = totalCount / pageSize;
	            } else {
	                totalPage = totalCount / pageSize + 1;
	            }
	        } else {
	            totalPage = 1;
	        }
			List<Integer> pageList = PageUtil.for_each(start, (int) totalPage, 6);
			resultJson.put("totalCount", totalCount);
			resultJson.put("totalPage", totalPage);
			resultJson.put("pageList", pageList);
			resultJson.put("userList", userArr);
		}
		return resultJson;
	}

	public JSONObject updateUserPassword(JSONObject parseObject) {
		JSONObject resultJson = new JSONObject();
		String password1 = parseObject.getString("password1");
		String password2 = parseObject.getString("password2");
		if(!password1.equals(password2)){
			resultJson.put("status", "fail");
			resultJson.put("message", "两次密码不一致");
			return resultJson;
		}
		String loginName = parseObject.getString("loginName");
		String oldPassword = parseObject.getString("oldPassword");
		User user = userMapper.selectUserByLoginnameAndPw(loginName, passwordenEcrypt.encrypt(oldPassword));
		
		if(user==null){
			resultJson.put("status", "fail");
			resultJson.put("message", "原密码输入错误");
			return resultJson;
		}
		user.setPassword(passwordenEcrypt.encrypt(password1));
		userMapper.updateByPrimaryKeySelective(user);
		resultJson.put("status", "success");
		resultJson.put("message", "密码修改成功");
		return resultJson;
	}
}
