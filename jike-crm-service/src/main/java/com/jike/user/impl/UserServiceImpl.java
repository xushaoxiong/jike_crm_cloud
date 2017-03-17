package com.jike.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jike.user.UserService;
import com.jike.user.dao.UserMapper;
import com.jike.user.model.User;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;

	public User getUser(Long userId) {
		return userMapper.selectByPrimaryKey(userId);
	}

}
