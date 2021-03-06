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
			JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
			if("fail".equals(checkIfBusiness.getString("state"))){
				return checkIfBusiness.toJSONString();
			}
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
		JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
		if("fail".equals(checkIfBusiness.getString("state"))){
			return checkIfBusiness.toJSONString();
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
		JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
		if("fail".equals(checkIfBusiness.getString("state"))){
			return checkIfBusiness.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.updateBusinessOpportunity(json);
		} catch (IOException e) {
			logger.error("updateBusinessOpportunity error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 操作商机（关闭，删除，重启）
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日下午2:48:07
	 */
	@RequestMapping(value = "/operationBusinessOpportunity", method ={RequestMethod.POST})
	public @ResponseBody String operationBusinessOpportunity(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
		if("fail".equals(checkIfBusiness.getString("state"))){
			return checkIfBusiness.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.operationBusinessOpportunity(json);
		} catch (IOException e) {
			logger.error("operationBusinessOpportunity error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 分配商机到销售
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日下午3:19:05
	 */
	@RequestMapping(value = "/distributionBoToSale", method ={RequestMethod.POST})
	public @ResponseBody String distributionBoToSale(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
		if("fail".equals(checkIfBusiness.getString("state"))){
			return checkIfBusiness.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.distributionBoToSale(json);
		} catch (IOException e) {
			logger.error("distributionBoToSale error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 分配商机到服务
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月13日上午11:56:38
	 */
	@RequestMapping(value = "/distributionBoToService", method ={RequestMethod.POST})
	public @ResponseBody String distributionBoToService(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
		if("fail".equals(checkIfBusiness.getString("state"))){
			return checkIfBusiness.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.distributionBoToService(json);
		} catch (IOException e) {
			logger.error("distributionBoToService error", e);
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
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.queryBusinessOpportunityByBoNum(json);
		} catch (IOException e) {
			logger.error("queryBusinessOpportunityByBoNum error", e);
		}
		return result.toJSONString();
	}
	/**
	 * 通过商机名称查询商机
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月6日下午7:15:16
	 */
	@RequestMapping(value = "/queryBusinessOpportunityByName", method ={RequestMethod.POST})
	public @ResponseBody String queryBusinessOpportunityByName(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.queryBusinessOpportunityByName(json);
		} catch (IOException e) {
			logger.error("queryBusinessOpportunity error", e);
		}
		return result.toJSONString();
	}
	
	/**
	 * 商机预览查询
	 * @param request
	 * @param session
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月12日下午6:03:33
	 */
	@RequestMapping(value = "/queryBusinessOpportunityInfoById", method ={RequestMethod.POST})
	public @ResponseBody String queryBusinessOpportunityInfoById(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		JSONObject checkIfBusiness = checkIfBusinessOrSale(session);
		if("fail".equals(checkIfBusiness.getString("state"))){
			return checkIfBusiness.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			json.put("roleId", session.getAttribute(roleId));
			result = businessOpportunityService.queryBusinessOpportunityInfoById(json);
		} catch (IOException e) {
			logger.error("queryBusinessOpportunityInfoById error", e);
		}
		return result.toJSONString();
	}
	
	

}
