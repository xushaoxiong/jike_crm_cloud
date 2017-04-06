package com.jike.controller.business;

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
import com.jike.business.BusinessOpportunityService;
import com.jike.controller.base.BaseController;
import com.jike.controller.utils.RequestUtils;

@Controller
@RequestMapping("/businessOpportunity")
public class BusinessOpportunityController extends BaseController{
	@Autowired
	private BusinessOpportunityService businessOpportunityService;
	private static Logger logger = Logger.getLogger(BusinessOpportunityController.class);

	/**
	 * 添加商机
	 * 
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午11:05:25
	 */
	@RequestMapping(value = "/addBusinessOpportunity", method ={RequestMethod.POST})
	public @ResponseBody String addBusinessOpportunity(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.addBusinessOpportunity(json);
		} catch (IOException e) {
			logger.error("addBusinessOpportunity error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 分页查询商机
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日上午11:04:10
	 */
	@RequestMapping(value = "/queryBusinessOpportunity", method ={RequestMethod.POST})
	public @ResponseBody String queryBusinessOpportunity(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.qeueryBusinessOpportunityByParams(json);
		} catch (IOException e) {
			logger.error("queryBusinessOpportunity error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 更新商机
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日上午11:04:32
	 */
	@RequestMapping(value = "/updateBusinessOpportunity", method ={RequestMethod.POST})
	public @ResponseBody String updateBusinessOpportunity(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			result = businessOpportunityService.updateBusinessOpportunity(json);
		} catch (IOException e) {
			logger.error("updateBusinessOpportunity error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 通过流水编号查询商机
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日上午11:08:53
	 */
	@RequestMapping(value = "/queryBusinessOpportunityByBoNum", method ={RequestMethod.POST})
	public @ResponseBody String queryBusinessOpportunityByBoNum(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			result = businessOpportunityService.queryBusinessOpportunityByBoNum(json);
		} catch (IOException e) {
			logger.error("queryBusinessOpportunityByBoNum error", e);
		}
		return result.toJSONString();
	}

}
