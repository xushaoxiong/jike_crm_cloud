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
import com.jike.business.BusinessOpportunityLogService;
import com.jike.business.BusinessOpportunityService;
import com.jike.controller.base.BaseController;
import com.jike.controller.utils.RequestUtils;

@Controller
@RequestMapping("/businessOpportunityLog")
public class BusinessOpportunityLogController extends BaseController{
	@Autowired
	private BusinessOpportunityLogService businessOpportunityLogService;
	private static Logger logger = Logger.getLogger(BusinessOpportunityLogController.class);

	/**
	 * 添加信息收集日志
	 * 
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午11:05:25
	 */
	@RequestMapping(value = "/addBOLogInformationCollection", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogInformationCollection(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogInformationCollection(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogInformationCollection error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 添加拜访计划日志
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月7日下午3:40:51
	 */
	@RequestMapping(value = "/addBOVisitPlan", method ={RequestMethod.POST})
	public @ResponseBody String addBOVisitPlan(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogVisitPlan(jsonData);
		} catch (IOException e) {
			logger.error("addBOVisitPlan error", e);
		}
		return result.toJSONString();
	}
	
}
