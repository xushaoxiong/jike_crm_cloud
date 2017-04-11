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
	 * 通过商机ID查询信息收集信息
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日上午10:57:59
	 */
	@RequestMapping(value = "/queryInformationCollectionByBoId", method ={RequestMethod.POST})
	public @ResponseBody String queryInformationCollectionByBoId(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.queryInformationCollectionByBoId(jsonData);
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
	
	/**
	 * 通过商机ID查询拜访计划信息
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日上午10:58:38
	 */
	@RequestMapping(value = "/queryVisitPlanByBoId", method ={RequestMethod.POST})
	public @ResponseBody String queryVisitPlanByBoId(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.queryVisitPlanByBoId(jsonData);
		} catch (IOException e) {
			logger.error("queryVisitPlanByBoId error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加拜访日志
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:15:21
	 */
	@RequestMapping(value = "/addBOVisit", method ={RequestMethod.POST})
	public @ResponseBody String addBOVisit(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogVisit(jsonData);
		} catch (IOException e) {
			logger.error("addBOVisit error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加谈判日志
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:15:49
	 */
	@RequestMapping(value = "/addBOLogNegotiation", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogNegotiation(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogNegotiation(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogNegotiation error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加试用中日志
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:15:49
	 */
	@RequestMapping(value = "/addBOLogInTrial", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogInTrial(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogInTrial(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogInTrial error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 自动生成谈判名称
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午2:16:23
	 */
	@RequestMapping(value = "/generateNegotiationNameByBoId", method ={RequestMethod.POST})
	public @ResponseBody String generateNegotiationNameByBoId(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.generateNegotiationNameByBoId(jsonData);
		} catch (IOException e) {
			logger.error("generateNegotiationNameByBoId error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加试用结果
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午4:00:00
	 */
	@RequestMapping(value = "/addBOLogTrialReuslt", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogTrialReuslt(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogTrialReuslt(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogTrialReuslt error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加招投标准备
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午4:50:26
	 */
	@RequestMapping(value = "/addBOLogBoBidding", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoBidding(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoBidding(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoBidding error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加招投标结果
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午5:40:09
	 */
	@RequestMapping(value = "/addBOLogBoBiddingResult", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoBiddingResult(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoBiddingResult(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoBiddingResult error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加签约
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午6:12:00
	 */
	@RequestMapping(value = "/addBOLogBoSign", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoSign(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoSign(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoSign error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加采购
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午6:32:13
	 */
	@RequestMapping(value = "/addBOLogBoPurchase", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoPurchase(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoPurchase(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoPurchase error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 添加日常日志
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日下午7:01:33
	 */
	@RequestMapping(value = "/addDailyEvents", method ={RequestMethod.POST})
	public @ResponseBody String addDailyEvents(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addDailyEvents(jsonData);
		} catch (IOException e) {
			logger.error("addDailyEvents error", e);
		}
		return result.toJSONString();
	}

	/**
	 * 添加支持
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日上午10:10:11
	 */
	@RequestMapping(value = "/addBOLogBoSupport", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoSupport(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoSupport(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoSupport error", e);
		}
		return result.toJSONString();
	}

	/**
	 * 添加培训
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日上午10:10:34
	 */
	@RequestMapping(value = "/addBOLogBoTrain", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoTrain(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoTrain(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoTrain error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 添加售后
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日上午10:11:01
	 */
	@RequestMapping(value = "/addBOLogBoCustomerService", method ={RequestMethod.POST})
	public @ResponseBody String addBOLogBoCustomerService(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject jsonData = JSONObject.parseObject(requestJson);
			jsonData.put("userId", session.getAttribute(userId));
			jsonData.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityLogService.addBOLogBoCustomerService(jsonData);
		} catch (IOException e) {
			logger.error("addBOLogBoCustomerService error", e);
		}
		return result.toJSONString();
	}

}
