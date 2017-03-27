package com.jike.user;

import com.alibaba.fastjson.JSONObject;

public interface UserService {

	/**
	 * 通过登录名查询用户基本信息
	 * @param userId
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日上午11:42:35
	 */
	JSONObject getUser(String loginName);
	
	/**
	 * 添加用户基本信息
	 * @param userJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日上午11:44:42
	 */
	String addUser(JSONObject userJson);
	
	/**
	 * 更新用户基本信息
	 * @param userJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日上午11:44:54
	 */
	String updateUser(JSONObject userJson);
	
	/**
	 * 登录
	 * @param loginName
	 * @param password
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:25:37
	 */
	JSONObject login(String loginName,String password);
	
	
}
