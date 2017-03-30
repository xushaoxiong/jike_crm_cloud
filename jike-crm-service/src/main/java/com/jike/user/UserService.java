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
	JSONObject addUser(JSONObject userJson);
	
	/**
	 * 更新用户基本信息
	 * @param userJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日上午11:44:54
	 */
	JSONObject updateUser(JSONObject userJson);
	
	/**
	 * 登录
	 * @param loginName
	 * @param password
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午5:25:37
	 */
	JSONObject login(JSONObject parseObject);

	/**
	 * 分页查询用户
	 * @param parseObject
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月30日下午2:28:08
	 */
	JSONObject getUserByPage(JSONObject parseObject);

}
