package com.jike.controller.user;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.jike.controller.base.BaseController;
import com.jike.controller.utils.RequestUtils;
import com.jike.user.UserService;

@Controller
@RequestMapping("/user")
public class UserController extends BaseController{
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
	public @ResponseBody String getUser(String loginName, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
        result = userService.getUser(loginName);
		return result.toString();
	}
	
	/**
	 * 更新用户基本信息
	 * @param json
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午2:55:07
	 */
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	public @ResponseBody String updateUser(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		
		String userJson;
		try {
			userJson = RequestUtils.getRequestJsonString(request);
		    result = userService.updateUser(JSONObject.parseObject(userJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 添加用户
	 * @param userJson
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月27日下午2:56:47
	 */
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public @ResponseBody String addUser(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		String userJson;
		try {
			userJson = RequestUtils.getRequestJsonString(request);
		    result = userService.addUser(JSONObject.parseObject(userJson));
		} catch (IOException e) {
			logger.error("addUser error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 用户登录
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午10:36:56
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody String login(HttpServletRequest request, HttpSession session) {
		String userLoginJson;
		JSONObject result = null ;
		try {
			userLoginJson = RequestUtils.getRequestJsonString(request);
			JSONObject parseObject = JSONObject.parseObject(userLoginJson);
		    result = userService.login(parseObject);
		    if("success".equals(result.getString("state"))){
		    	session.setAttribute(loginFlag, true);
		    	session.setAttribute(loginName, result.getString("loginName"));
		    	session.setAttribute(userName, result.getString("userName"));
		    	session.setAttribute(roleId, result.getLong("roleId"));
		    	session.setAttribute(userId, result.getLong("userId"));
		    }else{
		    	session.setAttribute(loginFlag, false);
		    }
		} catch (IOException e) {
			logger.error("login error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 分页查询用户
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月31日上午9:59:58
	 */
	@RequestMapping(value = "/getUserByPage", method = {RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody String getUserByPage(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		String queryJson;
		try {
			queryJson = RequestUtils.getRequestJsonString(request);
			JSONObject parseObject = JSONObject.parseObject(queryJson);
		    result = userService.getUserByPage(parseObject);
		} catch (IOException e) {
			logger.error("getUserByPage error", e);
		}
		return result.toString();
	}
	
	/**
	 * 修改密码
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月31日上午10:11:13
	 */
	@RequestMapping(value = "/updateUserPassword", method = {RequestMethod.POST})
	public @ResponseBody String updateUserPassword(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		String passwordJson;
		try {
			passwordJson = RequestUtils.getRequestJsonString(request);
			JSONObject parseObject = JSONObject.parseObject(passwordJson);
			parseObject.put("loginName", session.getAttribute(loginName));
		    result = userService.updateUserPassword(parseObject);
		    if("success".equals(result.getString("state"))){
		    	session.removeAttribute(loginFlag);
				session.removeAttribute(loginName);
				session.removeAttribute(userName);
		    	session.removeAttribute(roleId);
		    	session.removeAttribute(userId);
		    }
		} catch (IOException e) {
			logger.error("updateUserPassword error", e);
		}
		return result.toString();
	}
	
	/**
	 * 退出登录
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月31日上午10:44:51
	 */
	@RequestMapping(value = "/loginOut", method = {RequestMethod.GET})
	public @ResponseBody String loginOut(HttpSession session) {
		session.removeAttribute(loginFlag);
		session.removeAttribute(loginName);
		session.removeAttribute(userName);
    	session.removeAttribute(roleId);
    	session.removeAttribute(userId);
		JSONObject json = new JSONObject();
		json.put("state", "success");
		return json.toJSONString();
	}
	
	/**
	 * 添加销售leader
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月18日下午3:40:13
	 */
	@RequestMapping(value = "/addSalesLeader", method = {RequestMethod.POST})
	public @ResponseBody String addSalesLeader(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		String queryJson;
		try {
			queryJson = RequestUtils.getRequestJsonString(request);
			JSONObject parseObject = JSONObject.parseObject(queryJson);
		    result = userService.addSalesLeader(parseObject);
		} catch (IOException e) {
			logger.error("addSalesLeader error", e);
		}
		return result.toString();
	}
	/**
	 * 查询销售集合
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月18日下午3:40:45
	 */
	@RequestMapping(value = "/querySaleList", method = {RequestMethod.POST})
	public @ResponseBody String querySaleList(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		String queryJson;
		try {
			queryJson = RequestUtils.getRequestJsonString(request);
			JSONObject parseObject = JSONObject.parseObject(queryJson);
		    result = userService.querySaleList(parseObject);
		} catch (IOException e) {
			logger.error("querySaleList error", e);
		}
		return result.toString();
	}
	/**
	 * 查询服务集合
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月18日下午3:42:40
	 */
	@RequestMapping(value = "/queryServiceList", method = {RequestMethod.POST})
	public @ResponseBody String queryServiceList(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		String queryJson;
		try {
			queryJson = RequestUtils.getRequestJsonString(request);
			JSONObject parseObject = JSONObject.parseObject(queryJson);
		    result = userService.queryServiceList(parseObject);
		} catch (IOException e) {
			logger.error("queryServiceList error", e);
		}
		return result.toString();
	}
	
	/**
	 * 判断登录用户是否是服务人员
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月21日下午7:08:26
	 */
	@RequestMapping(value = "/ifServiceRole", method = {RequestMethod.POST})
	public @ResponseBody String ifServiceRole(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		Long roleID= Long.parseLong(session.getAttribute(roleId).toString());
		if(roleID.equals(4L)){
			result.put("ifService", true);
			result.put("state", "success");
			result.put("message", "服务人员");
		}else{
			result.put("ifService", false);
			result.put("state", "success");
			result.put("message", "非服务人员");
		}
		return result.toString();
	}
	
	
}
