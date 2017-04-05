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
import com.jike.user.PermissionService;

@Controller
@RequestMapping("/businessOpportunity")
public class BusinessOpportunityController extends BaseController{
	@Autowired
	private BusinessOpportunityService businessOpportunityService;
	private static Logger logger = Logger.getLogger(BusinessOpportunityController.class);

	/**
	 * 查询权限列表
	 * 
	 * @param request
	 * @return
	 * @created wangyb
	 * @createtime 2017年3月28日上午11:05:25
	 */
	@RequestMapping(value = "/addBusinessOpportunity", method ={RequestMethod.POST})
	public @ResponseBody String queryPermission(HttpServletRequest request, HttpSession session) {
		JSONObject result = super.checkLogin(session);
		if("unLogin".equals(result.getString("state"))){
			return result.toJSONString();
		}
		try {
			String requestJson = RequestUtils.getRequestJsonString(request);
			JSONObject json = JSONObject.parseObject(requestJson);
			json.put("userId", session.getAttribute(userId));
			result = businessOpportunityService.addBusinessOpportunity(json);
		} catch (IOException e) {
			logger.error("queryPermission error", e);
			e.printStackTrace();
		}
		return result.toJSONString();
	}

}
