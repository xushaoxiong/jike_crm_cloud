package com.jike.user;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.jike.user.model.User;

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

	/**
	 * 修改密码
	 * @param parseObject
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月31日上午10:11:32
	 */
	JSONObject updateUserPassword(JSONObject parseObject);

	/**
	 * 通过userId查询用户信息
	 * @param userId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日上午9:31:25
	 */
	User getUserById(Long userId);
	/**
	 * 配置销售管理及销售关系
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月17日下午6:08:57
	 */
	public JSONObject addSalesLeader(JSONObject json);
	
	/**
	 * 查询销售集合
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月18日下午3:39:31
	 */
	public JSONObject querySaleList(JSONObject json);
	/**
	 * 查询服务集合
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月18日下午3:39:44
	 */
	public JSONObject queryServiceList(JSONObject json);
    /**
     * 模糊查询用户
     * @param userName
     * @return
     * @created wangyb
     * @createtime 2017年4月24日下午12:01:30
     */
    public List<User> querySaleAndServiceByUserName(String userName);
    /**
     * 通过名称查询用户
     * @param userName
     * @return
     * @created wangyb
     * @createtime 2017年5月4日上午10:41:33
     */
    public List<User> queryUserByUserName(String userName);

    /**
     * 查询没有被管理的销售
     * @param parseObject
     * @return
     * @created wangyb
     * @createtime 2017年5月12日下午5:46:24
     */
	JSONObject queryNoBeManegeSales(JSONObject parseObject);
	/**
	 * 查询销售管理
	 * @param queryjson
	 * @return
	 * @created wangyb
	 * @createtime 2017年5月16日上午10:48:33
	 */
	public JSONObject querySalesLeader(JSONObject queryjson);

	/**
	 * 删除销售管理
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年5月16日上午11:50:34
	 */
	JSONObject deleteSalesLeader(JSONObject json);

	/**
	 * 更新销售管理
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年5月16日下午1:42:15
	 */
	JSONObject updateSalesLeader(JSONObject json);

}
