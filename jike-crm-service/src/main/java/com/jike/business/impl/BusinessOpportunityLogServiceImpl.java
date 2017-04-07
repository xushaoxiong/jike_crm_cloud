package com.jike.business.impl;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONObject;
import com.jike.business.BusinessOpportunityLogService;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BoFeeDetailMapper;
import com.jike.business.dao.BoInformationCollectMapper;
import com.jike.business.dao.BoVisitMapper;
import com.jike.business.dao.BoVisitPlanMapper;
import com.jike.business.dao.BusinessOpportunityLogMapper;
import com.jike.business.model.BoFeeDetail;
import com.jike.business.model.BoInformationCollect;
import com.jike.business.model.BoVisitPlan;
import com.jike.business.model.BusinessOpportunityLog;
@Service("businessOpportunityLogService")
@Transactional 
public class BusinessOpportunityLogServiceImpl implements BusinessOpportunityLogService {

	@Autowired
	private BusinessOpportunityLogMapper businessOpportunityLogMapper;
	@Autowired
	private BoFeeDetailMapper boFeeDetailMapper;
	@Autowired
	private BoInformationCollectMapper boInformationCollectMapper;
	@Autowired
	private BoVisitPlanMapper boVisitPlanMapper;
	@Autowired
	private BoVisitMapper boVisitMapper;
	@Autowired
	private BusinessOpportunityService businessOpportunityService;
	
	@Transactional
	public JSONObject addBOLogInformationCollection(JSONObject jsonData) {
		
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			//保存日志
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = this.createLogData(jsonData, nowDate, detailFeeId, logData);
			
			//保存信息收集
			JSONObject boInformationCollectJson = jsonData.getJSONObject("boInformationCollect");
			String informationSources = boInformationCollectJson.getString("informationSources");
			String schoolScale = boInformationCollectJson.getString("schoolScale");
			String schoolLevel = boInformationCollectJson.getString("schoolLevel");
			Integer schoolProperty = boInformationCollectJson.getInteger("schoolProperty");
			String schoolType = boInformationCollectJson.getString("schoolType");
			String contactName = boInformationCollectJson.getString("contactName");
			String contactTitle = boInformationCollectJson.getString("contactTitle");
			String contactLandline = boInformationCollectJson.getString("contactLandline");
			String contactPhone = boInformationCollectJson.getString("contactPhone");
			String contactEmail = boInformationCollectJson.getString("contactEmail");
			String contactQq = boInformationCollectJson.getString("contactQq");
			String contactWechat = boInformationCollectJson.getString("contactWechat");
			String decisionMakerName = boInformationCollectJson.getString("decisionMakerName");
			String decisionMakerTitle = boInformationCollectJson.getString("decisionMakerTitle");
			String decisionMakerLandline = boInformationCollectJson.getString("decisionMakerLandline");
			String decisionMakerPhone = boInformationCollectJson.getString("decisionMakerPhone");
			String decisionMakerEmail = boInformationCollectJson.getString("decisionMakerEmail");
			String decisionMakerQq = boInformationCollectJson.getString("decisionMakerQq");
			String decisionMakerWechat = boInformationCollectJson.getString("decisionMakerWechat");
			Integer ifIntention = boInformationCollectJson.getInteger("ifIntention");
			Integer ifInterested = boInformationCollectJson.getInteger("ifInterested");
			
			BoInformationCollect boInformationCollect = new BoInformationCollect();
			boInformationCollect.setBusinessOpportunityId(businessOpportunityId);//设置商机ID
			boInformationCollect.setInformationSources(informationSources);
			boInformationCollect.setSchoolScale(schoolScale);
			boInformationCollect.setSchoolLevel(schoolLevel);
			boInformationCollect.setSchoolProperty(schoolProperty);
			boInformationCollect.setSchoolType(schoolType);
			boInformationCollect.setContactName(contactName);
			boInformationCollect.setContactTitle(contactTitle);
			boInformationCollect.setContactLandline(contactLandline);
			boInformationCollect.setContactPhone(contactPhone);
			boInformationCollect.setContactEmail(contactEmail);
			boInformationCollect.setContactQq(contactQq);
			boInformationCollect.setContactWechat(contactWechat);
			boInformationCollect.setDecisionMakerName(decisionMakerName);
			boInformationCollect.setDecisionMakerTitle(decisionMakerTitle);
			boInformationCollect.setDecisionMakerLandline(decisionMakerLandline);
			boInformationCollect.setDecisionMakerPhone(decisionMakerPhone);
			boInformationCollect.setDecisionMakerEmail(decisionMakerEmail);
			boInformationCollect.setDecisionMakerQq(decisionMakerQq);
			boInformationCollect.setDecisionMakerWechat(decisionMakerWechat);
			boInformationCollect.setIfIntention(ifIntention);
			boInformationCollect.setIfInterested(ifInterested);
			boInformationCollect.setCreateTime(nowDate);
			boInformationCollect.setCreateBy(jsonData.getLong("userId"));
			boInformationCollectMapper.insert(boInformationCollect);
			if(informationSources!=null&&schoolScale!=null&&schoolLevel!=null&&schoolProperty!=null
					&&schoolType!=null&&contactName!=null&&contactTitle!=null&&
					(contactLandline!=null||contactPhone!=null||contactEmail!=null||contactQq!=null||contactWechat!=null)
					&&decisionMakerName!=null&&decisionMakerTitle!=null
					&&(decisionMakerPhone!=null||decisionMakerPhone!=null||decisionMakerEmail!=null||decisionMakerQq!=null||decisionMakerWechat!=null)){
				//修改商机进度
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"信息收集完成");
			}
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogVisitPlan(JSONObject jsonData) {
		
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			//保存日志
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = this.createLogData(jsonData, nowDate, detailFeeId, logData);
			
			//添加拜访计划
			JSONObject boVisitPlanJson = jsonData.getJSONObject("boVisitPlan");
			String visitPlanName = boVisitPlanJson.getString("visitPlanName");
			String visitorName = boVisitPlanJson.getString("visitorName");
			String visitorTitle = boVisitPlanJson.getString("visitorTitle");
			String visitorLandline = boVisitPlanJson.getString("visitorLandline");
			String visitorPhone = boVisitPlanJson.getString("visitorPhone");
			String visitorEmail = boVisitPlanJson.getString("visitorEmail");
			String visitorQq = boVisitPlanJson.getString("visitorQq");
			String visitorWechat = boVisitPlanJson.getString("visitorWechat");
			Date visitPlanDate = boVisitPlanJson.getDate("visitPlanDate");
			String visitProvince = boVisitPlanJson.getString("visitProvince");
			String visitCity = boVisitPlanJson.getString("visitCity");
			String visitCountry = boVisitPlanJson.getString("visitCountry");
			String visitAddressDetail = boVisitPlanJson.getString("visitAddressDetail");
			String trafficTool = boVisitPlanJson.getString("trafficTool");
			String visitObjective = boVisitPlanJson.getString("visitObjective");
			String visitPlanReason = boVisitPlanJson.getString("visitPlanReason");
			BigDecimal estimateFee = boVisitPlanJson.getBigDecimal("estimateFee");
			String tools = boVisitPlanJson.getString("tools");
			
			BoVisitPlan boVisitPlan = new BoVisitPlan();
			boVisitPlan.setBusinessOpportunityId(businessOpportunityId);//设置商机ID
			boVisitPlan.setVisitPlanName(visitPlanName);
			boVisitPlan.setVisitorName(visitorName);
			boVisitPlan.setVisitorTitle(visitorTitle);
			boVisitPlan.setVisitorLandline(visitorLandline);
			boVisitPlan.setVisitorPhone(visitorPhone);
			boVisitPlan.setVisitorEmail(visitorEmail);
			boVisitPlan.setVisitorQq(visitorQq);
			boVisitPlan.setVisitorWechat(visitorWechat);
			boVisitPlan.setVisitPlanDate(visitPlanDate);
			boVisitPlan.setVisitProvince(visitProvince);
			boVisitPlan.setVisitCity(visitCity);
			boVisitPlan.setVisitCountry(visitCountry);
			boVisitPlan.setVisitAddressDetail(visitAddressDetail);
			boVisitPlan.setTrafficTool(trafficTool);
			boVisitPlan.setVisitObjective(visitObjective);
			boVisitPlan.setTools(tools);
			boVisitPlan.setEstimateFee(estimateFee);
			boVisitPlan.setVisitPlanReason(visitPlanReason);
			boVisitPlan.setCreateTime(nowDate);
			boVisitPlan.setCreateBy(jsonData.getLong("userId"));
			boVisitPlanMapper.insert(boVisitPlan);
			//修改商机进度
			this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"准备拜访状态");
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}

	private void updateBoProcess(JSONObject jsonData, Date nowDate, Long businessOpportunityId, String process) {
		JSONObject json = new JSONObject();
		json.put("businessOpportunityId", businessOpportunityId);
		json.put("businessOpportunityProcess", process);
		json.put("userId", jsonData.getLong("userId"));
		json.put("nowDate", nowDate);
		businessOpportunityService.updateBusinessOpportunityProcess(json);
	}

	private Long createLogData(JSONObject jsonData, Date nowDate, Long detailFeeId, JSONObject logData) {
		Date logDate = logData.getDate("logDate");
		Long businessOpportunityId = logData.getLong("businessOpportunityId");
		String eventType = logData.getString("eventType");
		String specificEvent = logData.getString("specificEvent");
		BigDecimal workingHours = logData.getBigDecimal("workingHours");
		String internalParticipant = logData.getString("internalParticipant");
		String externalParticipant = logData.getString("externalParticipant");
		
		BusinessOpportunityLog businessOpportunityLog = new BusinessOpportunityLog();
		businessOpportunityLog.setLogDate(logDate);
		businessOpportunityLog.setBusinessOpportunityId(businessOpportunityId);
		businessOpportunityLog.setEventType(eventType);
		businessOpportunityLog.setSpecificEvent(specificEvent);
		businessOpportunityLog.setWorkingHours(workingHours);
		businessOpportunityLog.setInternalParticipant(internalParticipant);
		businessOpportunityLog.setExternalParticipant(externalParticipant);
		businessOpportunityLog.setDetailFeeId(detailFeeId);
		businessOpportunityLog.setCreateTime(nowDate);
		businessOpportunityLog.setCreateBy(jsonData.getLong("userId"));
		businessOpportunityLogMapper.insert(businessOpportunityLog);
		return businessOpportunityId;
	}

	/**
	 * 添加费用
	 * @param jsonData
	 * @param nowDate
	 * @param totalDetail
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月7日下午2:37:50
	 */
	private Long createBoFeeDatail(JSONObject jsonData, Date nowDate, JSONObject totalDetail) {
		Long detailFeeId;
		BoFeeDetail boFeeDetail = new BoFeeDetail();
		BigDecimal trafficFee = totalDetail.getBigDecimal("trafficFee");
		BigDecimal hotelFee = totalDetail.getBigDecimal("hotelFee");
		BigDecimal foodFee = totalDetail.getBigDecimal("foodFee");
		BigDecimal entertainFee = totalDetail.getBigDecimal("entertainFee");
		BigDecimal giftFee = totalDetail.getBigDecimal("giftFee");
		BigDecimal otherFee = totalDetail.getBigDecimal("otherFee");
		BigDecimal advanceFee = totalDetail.getBigDecimal("advanceFee");
		String advancePerson = totalDetail.getString("advancePerson");
		boFeeDetail.setTrafficFee(trafficFee);
		boFeeDetail.setHotelFee(hotelFee);
		boFeeDetail.setFoodFee(foodFee);
		boFeeDetail.setEntertainFee(entertainFee);
		boFeeDetail.setGiftFee(giftFee);
		boFeeDetail.setOtherFee(otherFee);
		boFeeDetail.setAdvanceFee(advanceFee);
		boFeeDetail.setAdvancePerson(advancePerson);
		boFeeDetail.setCreateTime(nowDate);
		boFeeDetail.setCreateBy(jsonData.getLong("userId"));
		boFeeDetailMapper.insert(boFeeDetail);
		detailFeeId = boFeeDetail.getDetailFeeId();
		return detailFeeId;
	}

}
