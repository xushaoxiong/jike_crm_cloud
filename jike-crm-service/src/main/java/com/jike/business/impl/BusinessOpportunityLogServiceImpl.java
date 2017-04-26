package com.jike.business.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.jike.business.BusinessOpportunityLogService;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BoBiddingMapper;
import com.jike.business.dao.BoBiddingResultMapper;
import com.jike.business.dao.BoCustomerServiceMapper;
import com.jike.business.dao.BoFeeDetailMapper;
import com.jike.business.dao.BoInTrialMapper;
import com.jike.business.dao.BoInformationCollectMapper;
import com.jike.business.dao.BoNegotiationMapper;
import com.jike.business.dao.BoPaymentMapper;
import com.jike.business.dao.BoPurchaseMapper;
import com.jike.business.dao.BoSignMapper;
import com.jike.business.dao.BoSupportMapper;
import com.jike.business.dao.BoTrainMapper;
import com.jike.business.dao.BoTrialReusltMapper;
import com.jike.business.dao.BoVisitMapper;
import com.jike.business.dao.BoVisitPlanMapper;
import com.jike.business.dao.BusinessOpportunityLogMapper;
import com.jike.business.dao.CooperationDetailsMapper;
import com.jike.business.dao.DailyEventsMapper;
import com.jike.business.dao.PartnerAgentAreaMapper;
import com.jike.business.dao.ServiceDailyEventMapper;
import com.jike.business.model.BoBidding;
import com.jike.business.model.BoBiddingResult;
import com.jike.business.model.BoCustomerService;
import com.jike.business.model.BoFeeDetail;
import com.jike.business.model.BoInTrial;
import com.jike.business.model.BoInformationCollect;
import com.jike.business.model.BoNegotiation;
import com.jike.business.model.BoPayment;
import com.jike.business.model.BoPurchase;
import com.jike.business.model.BoSign;
import com.jike.business.model.BoSupport;
import com.jike.business.model.BoTrain;
import com.jike.business.model.BoTrialReuslt;
import com.jike.business.model.BoVisit;
import com.jike.business.model.BoVisitPlan;
import com.jike.business.model.BusinessOpportunityLog;
import com.jike.business.model.CooperationDetails;
import com.jike.business.model.DailyEvents;
import com.jike.business.model.PartnerAgentArea;
import com.jike.business.model.ServiceDailyEvent;
import com.jike.crm.utils.DateUtil;
import com.jike.crm.utils.PageUtil;
import com.jike.user.RoleService;
import com.jike.user.UserService;
import com.jike.user.model.Role;
import com.jike.user.model.User;
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
	@Autowired
	private BoNegotiationMapper boNegotiationMapper;
	@Autowired
	private BoInTrialMapper boInTrialMapper;
	@Autowired
	private BoTrialReusltMapper  boTrialReusltMapper;
	@Autowired
	private BoBiddingMapper  boBiddingMapper;
	@Autowired
	private BoBiddingResultMapper  boBiddingResultMapper;
	@Autowired
	private BoSignMapper  boSignMapper;
	@Autowired
	private BoPurchaseMapper  boPurchaseMapper;
	@Autowired
	private DailyEventsMapper  dailyEventsMapper;
	@Autowired
	private BoSupportMapper  boSupportMapper;
	@Autowired
	private BoTrainMapper  boTrainMapper;
	@Autowired
	private BoCustomerServiceMapper  boCustomerServiceMapper;
	@Autowired
	private UserService  userService;
	@Autowired
	private RoleService  roleService;
	@Autowired
	private CooperationDetailsMapper cooperationDetailsMapper;
	@Autowired
	private BoPaymentMapper boPaymentMapper;
	@Autowired
	private PartnerAgentAreaMapper agentAreaMapper;
	@Autowired
	private ServiceDailyEventMapper serviceDailyEventMapper;
	
	
	public JSONObject queryInformationCollectionByBoId(JSONObject jsonData){
		JSONObject resultJson = new JSONObject();
		Long businessOpportunityId = jsonData.getLong("businessOpportunityId");
		BoInformationCollect boInformationCollect = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityId);
		if(boInformationCollect!=null){
			String json = JSONObject.toJSONString(boInformationCollect,SerializerFeature.WriteNullStringAsEmpty);
			JSONObject informationCollectJson = JSONObject.parseObject(json);
			
			removeCommonAttribute(informationCollectJson);
			resultJson.put("boInformationCollect", informationCollectJson);
		}
		JSONObject businessOpportunityJson = businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityId);
		List<BoVisitPlan> boVisitPlanList = boVisitPlanMapper.selectVisitPlanByBusinessOpportunityId(businessOpportunityId);
		//自动生成拜访计划名称
		String visitPlanName = DateUtil.getDateFormat(new Date(), "yyyyMMdd")+"-"+businessOpportunityJson.getString("businessOpportunityName")+"-第"+(boVisitPlanList.size()+1)+"次拜访计划";
		resultJson.put("visitPlanName", visitPlanName);
		resultJson.put("addressProvince", businessOpportunityJson.getString("addressProvince"));
		resultJson.put("addressCity", businessOpportunityJson.getString("addressCity"));
		resultJson.put("addressCounty", businessOpportunityJson.getString("addressCounty"));
		resultJson.put("addressDetail", businessOpportunityJson.getString("addressDetail"));
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogInformationCollection(JSONObject jsonData) {
		
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			
			//保存日志
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			//保存信息收集
			JSONObject boInformationCollectJson = jsonData.getJSONObject("boInformationCollect");
			String informationSources = boInformationCollectJson.getString("informationSources");
			if(StringUtils.isEmpty(informationSources)){
				informationSources = null;
			}
			String schoolScale = boInformationCollectJson.getString("schoolScale");
			if(StringUtils.isEmpty(schoolScale)){
				schoolScale = null;
			}
			String schoolLevel = boInformationCollectJson.getString("schoolLevel");
			if(StringUtils.isEmpty(schoolLevel)){
				schoolLevel = null;
			}
			Integer schoolProperty = boInformationCollectJson.getInteger("schoolProperty");
			if(StringUtils.isEmpty(schoolProperty)){
				schoolProperty = null;
			}
			String schoolType = boInformationCollectJson.getString("schoolType");
			if(StringUtils.isEmpty(schoolType)){
				schoolType = null;
			}
			String contactName = boInformationCollectJson.getString("contactName");
			if(StringUtils.isEmpty(contactName)){
				contactName = null;
			}
			String contactTitle = boInformationCollectJson.getString("contactTitle");
			if(StringUtils.isEmpty(contactTitle)){
				contactTitle = null;
			}
			String contactTitleDetail = boInformationCollectJson.getString("contactTitleDetail");
			if(StringUtils.isEmpty(contactTitleDetail)){
				contactTitleDetail = null;
			}
			String contactLandline = boInformationCollectJson.getString("contactLandline");
			if(StringUtils.isEmpty(contactLandline)){
				contactLandline = null;
			}
			String contactPhone = boInformationCollectJson.getString("contactPhone");
			if(StringUtils.isEmpty(contactPhone)){
				contactPhone = null;
			}
			String contactEmail = boInformationCollectJson.getString("contactEmail");
			if(StringUtils.isEmpty(contactEmail)){
				contactEmail = null;
			}
			String contactQq = boInformationCollectJson.getString("contactQq");
			if(StringUtils.isEmpty(contactQq)){
				contactQq = null;
			}
			String contactWechat = boInformationCollectJson.getString("contactWechat");
			if(StringUtils.isEmpty(contactWechat)){
				contactWechat = null;
			}
			String decisionMakerName = boInformationCollectJson.getString("decisionMakerName");
			if(StringUtils.isEmpty(decisionMakerName)){
				decisionMakerName = null;
			}
			String decisionMakerTitle = boInformationCollectJson.getString("decisionMakerTitle");
			if(StringUtils.isEmpty(decisionMakerTitle)){
				decisionMakerTitle = null;
			}
			String decisionMakerTitleDetail = boInformationCollectJson.getString("decisionMakerTitleDetail");
			if(StringUtils.isEmpty(decisionMakerTitleDetail)){
				decisionMakerTitleDetail = null;
			}
			String decisionMakerLandline = boInformationCollectJson.getString("decisionMakerLandline");
			if(StringUtils.isEmpty(decisionMakerLandline)){
				decisionMakerLandline = null;
			}
			String decisionMakerPhone = boInformationCollectJson.getString("decisionMakerPhone");
			if(StringUtils.isEmpty(decisionMakerPhone)){
				decisionMakerPhone = null;
			}
			String decisionMakerEmail = boInformationCollectJson.getString("decisionMakerEmail");
			if(StringUtils.isEmpty(decisionMakerEmail)){
				decisionMakerEmail = null;
			}
			String decisionMakerQq = boInformationCollectJson.getString("decisionMakerQq");
			if(StringUtils.isEmpty(decisionMakerQq)){
				decisionMakerQq = null;
			}
			String decisionMakerWechat = boInformationCollectJson.getString("decisionMakerWechat");
			if(StringUtils.isEmpty(decisionMakerWechat)){
				decisionMakerWechat = null;
			}
			Integer ifIntention = boInformationCollectJson.getInteger("ifIntention");
			if(StringUtils.isEmpty(ifIntention)){
				ifIntention = null;
			}
			Integer ifInterested = boInformationCollectJson.getInteger("ifInterested");
			if(StringUtils.isEmpty(ifInterested)){
				ifInterested = null;
			}
			String mainScope = boInformationCollectJson.getString("mainScope");
			if(StringUtils.isEmpty(mainScope)){
				mainScope = null;
			}
			String expectedCooperationType = boInformationCollectJson.getString("expectedCooperationType");
			if(StringUtils.isEmpty(expectedCooperationType)){
				expectedCooperationType = null;
			}
			
			BoInformationCollect boInformationCollect = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityId);
			if(boInformationCollect == null){
				boInformationCollect = new BoInformationCollect();
				boInformationCollect.setBusinessOpportunityId(businessOpportunityId);// 设置商机ID
				boInformationCollect.setInformationSources(informationSources);
				boInformationCollect.setSchoolScale(schoolScale);
				boInformationCollect.setSchoolLevel(schoolLevel);
				boInformationCollect.setSchoolProperty(schoolProperty);
				boInformationCollect.setSchoolType(schoolType);
				boInformationCollect.setContactName(contactName);
				boInformationCollect.setContactTitle(contactTitle);
				boInformationCollect.setContactTitleDetail(contactTitleDetail);
				boInformationCollect.setContactLandline(contactLandline);
				boInformationCollect.setContactPhone(contactPhone);
				boInformationCollect.setContactEmail(contactEmail);
				boInformationCollect.setContactQq(contactQq);
				boInformationCollect.setContactWechat(contactWechat);
				boInformationCollect.setDecisionMakerName(decisionMakerName);
				boInformationCollect.setDecisionMakerTitle(decisionMakerTitle);
				boInformationCollect.setDecisionMakerTitleDetail(decisionMakerTitleDetail);
				boInformationCollect.setDecisionMakerLandline(decisionMakerLandline);
				boInformationCollect.setDecisionMakerPhone(decisionMakerPhone);
				boInformationCollect.setDecisionMakerEmail(decisionMakerEmail);
				boInformationCollect.setDecisionMakerQq(decisionMakerQq);
				boInformationCollect.setDecisionMakerWechat(decisionMakerWechat);
				boInformationCollect.setIfIntention(ifIntention);
				boInformationCollect.setIfInterested(ifInterested);
				boInformationCollect.setMainScope(mainScope);
				boInformationCollect.setExpectedCooperationType(expectedCooperationType);
				boInformationCollect.setCreateTime(nowDate);
				boInformationCollect.setCreateBy(jsonData.getLong("userId"));
				boInformationCollectMapper.insert(boInformationCollect);
			} else {
				boInformationCollect.setBusinessOpportunityId(businessOpportunityId);// 设置商机ID
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
				boInformationCollect.setUpdateTime(nowDate);
				boInformationCollect.setUpdateBy(jsonData.getLong("userId"));
				boInformationCollect.setMainScope(mainScope);
				boInformationCollect.setExpectedCooperationType(expectedCooperationType);
				boInformationCollect.setCreateTime(nowDate);
				boInformationCollectMapper.updateByPrimaryKeySelective(boInformationCollect);
			}
			JSONObject businessOpportunityJson= businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityId);
			if(businessOpportunityJson.getInteger("businessOpportunityType")==0){//学校
				if(informationSources!=null&&schoolScale!=null&&schoolLevel!=null&&schoolProperty!=null
						&&schoolType!=null&&contactName!=null&&contactTitle!=null&&
						(contactLandline!=null||contactPhone!=null||contactEmail!=null||contactQq!=null||contactWechat!=null)
						&&decisionMakerName!=null&&decisionMakerTitle!=null){
					//修改商机进度
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"信息收集完成");
				}
			}else if(businessOpportunityJson.getInteger("businessOpportunityType")==1){//合作伙伴
				if(informationSources!=null&&mainScope!=null
						&&expectedCooperationType!=null&&contactName!=null&&contactTitle!=null&&
						(contactLandline!=null||contactPhone!=null||contactEmail!=null||contactQq!=null||contactWechat!=null)
						&&decisionMakerName!=null&&decisionMakerTitle!=null){
					//修改商机进度
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"信息收集完成");
				}
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
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			List<BoVisitPlan> boVisitPlaning = boVisitPlanMapper.selectVisitPlaningByBusinessOpportunityId(businessOpportunityId, 0);
			if(!boVisitPlaning.isEmpty()){
				resultJson.put("state", "fail");
				resultJson.put("message", "已存在正在进行的拜访计划");
				return resultJson;
			}
			Date nowDate = new Date();
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boVisitPlanJson = jsonData.getJSONObject("boVisitPlan");
			String visitPlanName = boVisitPlanJson.getString("visitPlanName");
			String visitorName = boVisitPlanJson.getString("visitorName");
			String visitorTitle = boVisitPlanJson.getString("visitorTitle");
			String visitorTitleDetail = boVisitPlanJson.getString("visitorTitleDetail");
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
			boVisitPlan.setLogId(logId);
			boVisitPlan.setBusinessOpportunityId(businessOpportunityId);//设置商机ID
			boVisitPlan.setVisitPlanName(visitPlanName);
			boVisitPlan.setVisitorName(visitorName);
			boVisitPlan.setVisitorTitle(visitorTitle);
			boVisitPlan.setVisitorTitleDetail(visitorTitleDetail);
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
			boVisitPlan.setInPlaning(0);//第一次添加处于激活状态
			boVisitPlanMapper.insert(boVisitPlan);
			//修改商机进度
			this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"准备拜访");
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	public JSONObject queryVisitPlanByBoId(JSONObject jsonData){
		Long businessOpportunityId = jsonData.getLong("businessOpportunityId");
		List<BoVisitPlan> boVisitPlaning = boVisitPlanMapper.selectVisitPlaningByBusinessOpportunityId(businessOpportunityId, 0);
		JSONObject resultJson = new JSONObject();
		if(!boVisitPlaning.isEmpty()){
			BoVisitPlan boVisitPlan = boVisitPlaning.get(0);
			resultJson.put("visitPlanId", boVisitPlan.getVisitPlanId());
			resultJson.put("visitPlanName", boVisitPlan.getVisitPlanName());
			resultJson.put("visitorName", boVisitPlan.getVisitorName());
			resultJson.put("visitorTitle", boVisitPlan.getVisitorTitle());
			resultJson.put("visitorTitleDetail", boVisitPlan.getVisitorTitleDetail());
			resultJson.put("visitorLandline", boVisitPlan.getVisitorLandline());
			resultJson.put("visitorPhone", boVisitPlan.getVisitorPhone());
			resultJson.put("visitorEmail", boVisitPlan.getVisitorEmail());
			resultJson.put("visitorQq", boVisitPlan.getVisitorQq());
			resultJson.put("visitorWechat", boVisitPlan.getVisitorWechat());
			resultJson.put("visitProvince", boVisitPlan.getVisitProvince());
			resultJson.put("visitCity", boVisitPlan.getVisitCity());
			resultJson.put("visitCountry", boVisitPlan.getVisitCountry());
			resultJson.put("visitAddressDetail", boVisitPlan.getVisitAddressDetail());
			resultJson.put("state", "success");
			resultJson.put("message", "添加成功");
		}else{
			resultJson.put("state", "fail");
			resultJson.put("message", "未查到拜访计划");
		}
		
		return resultJson;
	}
	
	
	@Transactional
	public JSONObject addBOLogVisit(JSONObject jsonData) {
		
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			List<BoVisitPlan> boVisitPlaning = boVisitPlanMapper.selectVisitPlaningByBusinessOpportunityId(businessOpportunityId, 0);
			if(boVisitPlaning.isEmpty()){
				resultJson.put("state", "fail");
				resultJson.put("message", "请先创建拜访计划");
				return resultJson;
			}
			Date nowDate = new Date();
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boVisitJson = jsonData.getJSONObject("boVisit");
			Long visitPlanId = boVisitJson.getLong("visitPlanId");//拜访计划ID
			String visitorName = boVisitJson.getString("visitorName");
			String visitorTitle = boVisitJson.getString("visitorTitle");
			String visitorTitleDetail = boVisitJson.getString("visitorTitleDetail");
			String visitorLandline = boVisitJson.getString("visitorLandline");
			String visitorPhone = boVisitJson.getString("visitorPhone");
			String visitorEmail = boVisitJson.getString("visitorEmail");
			String visitorQq = boVisitJson.getString("visitorQq");
			String visitorWechat = boVisitJson.getString("visitorWechat");
			String visitProvince = boVisitJson.getString("visitProvince");
			String visitCity = boVisitJson.getString("visitCity");
			String visitCountry = boVisitJson.getString("visitCountry");
			String visitAddressDetail = boVisitJson.getString("visitAddressDetail");
			BigDecimal procurementBudget = boVisitJson.getBigDecimal("procurementBudget");
			Integer decisionMakerAdvice = boVisitJson.getInteger("decisionMakerAdvice");
			String visitDetail = boVisitJson.getString("visitDetail");
			
			BoVisit boVisit = new BoVisit();
			boVisit.setLogId(logId);
			boVisit.setVisitPlanId(visitPlanId);
			boVisit.setVisitorName(visitorName);
			boVisit.setVisitorTitle(visitorTitle);
			boVisit.setVisitorTitleDetail(visitorTitleDetail);
			boVisit.setVisitLandline(visitorLandline);
			boVisit.setVisitPhone(visitorPhone);
			boVisit.setVisitEmail(visitorEmail);
			boVisit.setVisitQq(visitorQq);
			boVisit.setVisitWechat(visitorWechat);
			boVisit.setVisitProvince(visitProvince);
			boVisit.setVisitCity(visitCity);
			boVisit.setVisitCountry(visitCountry);
			boVisit.setVisitAddressDetail(visitAddressDetail);
			boVisit.setProcurementBudget(procurementBudget);
			boVisit.setDecisionMakerAdvice(decisionMakerAdvice);
			boVisit.setVisitDetail(visitDetail);
			boVisit.setCreateTime(nowDate);
			boVisit.setCreateBy(jsonData.getLong("userId"));
			boVisitMapper.insert(boVisit);
			//修改拜访计划状态
			BoVisitPlan boVisitPlan = boVisitPlanMapper.selectByPrimaryKey(visitPlanId);
			if(boVisitPlan!=null){
				boVisitPlan.setInPlaning(1);
				boVisitPlan.setUpdateBy(jsonData.getLong("userId"));
				boVisitPlan.setUpdateTime(nowDate);
				boVisitPlanMapper.updateByPrimaryKeySelective(boVisitPlan);
			}
			
			JSONObject businessOpportunityJson= businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityId);
			if(businessOpportunityJson.getInteger("businessOpportunityType")==0){//学校
				//修改商机进度
				String specificEvent = logData.getString("specificEvent");
				if("找到决策人".equals(specificEvent)||"洽谈中".equals(specificEvent)){
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"拜访");
				}else if("达成合作意向".equals(specificEvent)){
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"谈判");
				}
			}else if(businessOpportunityJson.getInteger("businessOpportunityType")==1){//合作伙伴
				//如果是达成合作意向，保存合作详情
				String specificEvent = logData.getString("specificEvent");
				if("达成合作意向".equals(specificEvent)){
					JSONObject cooperationDetailsJson = boVisitJson.getJSONObject("cooperationDetails");
					CooperationDetails cooperationDetails = cooperationDetailsJson.toJavaObject(CooperationDetails.class);
					cooperationDetails.setVisitId(boVisit.getVisitId());
					cooperationDetails.setCreateTime(nowDate);
					cooperationDetails.setCreateBy(jsonData.getLong("userId"));
					cooperationDetailsMapper.insert(cooperationDetails);
				}
				//修改商机进度
				if("找到决策人".equals(specificEvent)||"洽谈中".equals(specificEvent)){
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"拜访");
				}else if("达成合作意向".equals(specificEvent)){
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约准备");
				}
			}
			
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	
	@Transactional
	public JSONObject addBOLogNegotiation(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boNegotiationJson = jsonData.getJSONObject("boNegotiation");
			String negotiationName = boNegotiationJson.getString("negotiationName");
			String negotiationDetail = boNegotiationJson.getString("negotiationDetail");
			
			BoNegotiation boNegotiation = new BoNegotiation();
			boNegotiation.setNegotiationName(negotiationName);
			boNegotiation.setNegotiationDetail(negotiationDetail);
			boNegotiation.setBusinessOpportunityId(businessOpportunityId);
			boNegotiation.setLogId(logId);
			boNegotiation.setCreateTime(nowDate);
			boNegotiation.setCreateBy(jsonData.getLong("userId"));
			boNegotiationMapper.insert(boNegotiation);
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("谈判中".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"谈判");
			}else if("承诺试用".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"待试用");
			}else if("承诺购买".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约准备");
			}else if("走招投标流程".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"待招投标");
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	public JSONObject generateNegotiationNameByBoId(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		Long businessOpportunityId = jsonData.getLong("businessOpportunityId");
		//查询拜访计划
		List<BoVisitPlan> boNegotiationList = boNegotiationMapper.selecNegotiationByBusinessOpportunityId(businessOpportunityId);
		JSONObject businessOpportunityJson = businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityId);
		//添加拜访计划
		String negotiationName = DateUtil.getDateFormat(new Date(), "yyyyMMdd")+"-"+businessOpportunityJson.getString("businessOpportunityName")+"-第"+(boNegotiationList.size()+1)+"次谈判";
		resultJson.put("negotiationName", negotiationName);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}

	@Transactional
	public JSONObject addBOLogInTrial(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boInTrialJson = jsonData.getJSONObject("boInTrial");
			Date trialStartDate = boInTrialJson.getDate("trialStartDate");
			Date trialEndDate = boInTrialJson.getDate("trialEndDate");
			String trialGrade = boInTrialJson.getString("trialGrade");
			String trialSubject = boInTrialJson.getString("trialSubject");
			String trialModel = boInTrialJson.getString("trialModel");
			Integer trialMachineNum = boInTrialJson.getInteger("trialMachineNum");
			
			BoInTrial boInTrial = new BoInTrial();
			boInTrial.setBusinessOpportunityId(businessOpportunityId);
			boInTrial.setLogId(logId);
			boInTrial.setTrialStartDate(trialStartDate);
			boInTrial.setTrialEndDate(trialEndDate);
			boInTrial.setTrialGrade(trialGrade);
			boInTrial.setTrialSubject(trialSubject);
			boInTrial.setTrialModel(trialModel);
			boInTrial.setTrialMachineNum(trialMachineNum);
			boInTrial.setCreateTime(nowDate);
			boInTrial.setCreateBy(jsonData.getLong("userId"));
			boInTrialMapper.insert(boInTrial);
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("试用准备".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"试用中");
			}
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogTrialReuslt(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boTrialReusltJson = jsonData.getJSONObject("boTrialReuslt");
			String trialResultDetail = boTrialReusltJson.getString("trialResultDetail");
			
			BoTrialReuslt boTrialReuslt = new BoTrialReuslt();
			boTrialReuslt.setBusinessOpportunityId(businessOpportunityId);
			boTrialReuslt.setLogId(logId);
			boTrialReuslt.setTrialResultDetail(trialResultDetail);
			boTrialReuslt.setCreateTime(nowDate);
			boTrialReuslt.setCreateBy(jsonData.getLong("userId"));
			boTrialReusltMapper.insert(boTrialReuslt);
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("试用结果-承诺购买".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约准备");
			}else if("试用结果-招投标".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"待招投标");
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogBoBidding(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			//保存费用
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boBiddingJson = jsonData.getJSONObject("boBidding");
			String biddingMode = boBiddingJson.getString("biddingMode");
			String cooperativePartner = boBiddingJson.getString("cooperativePartner");
			String networkLink = boBiddingJson.getString("networkLink");
			Integer ifHaveBusinessFee = boBiddingJson.getInteger("ifHaveBusinessFee");
			
			BoBidding boBidding = new BoBidding();
			boBidding.setBusinessOpportunityId(businessOpportunityId);
			boBidding.setLogId(logId);
			boBidding.setBiddingMode(biddingMode);
			boBidding.setCooperativePartner(cooperativePartner);//合作伙伴
			boBidding.setNetworkLink(networkLink);
			boBidding.setIfHaveBusinessFee(ifHaveBusinessFee);
			boBidding.setCreateTime(nowDate);
			boBidding.setCreateBy(jsonData.getLong("userId"));
			boBiddingMapper.insert(boBidding);
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("投标准备".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"招投标");
			}else if("投标成功".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约准备");
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogBoBiddingResult(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boBiddingResultJson = jsonData.getJSONObject("boBiddingResult");
			String biddingResultDetail = boBiddingResultJson.getString("biddingResultDetail");
			
			BoBiddingResult boBiddingResult = new BoBiddingResult();
			boBiddingResult.setBusinessOpportunityId(businessOpportunityId);
			boBiddingResult.setLogId(logId);
			boBiddingResult.setBiddingResultDetail(biddingResultDetail);
			boBiddingResult.setCreateTime(nowDate);
			boBiddingResult.setCreateBy(jsonData.getLong("userId"));
			boBiddingResultMapper.insert(boBiddingResult);
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("投标成功".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约准备");
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogBoSign(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			JSONObject boSignJson = jsonData.getJSONObject("boSign");
			Date signDate = boSignJson.getDate("signDate");
			BigDecimal signAmonut = boSignJson.getBigDecimal("signAmonut");
			String assessmentIndex = boSignJson.getString("assessmentIndex");
			String cooperativePartner = boSignJson.getString("cooperativePartner");
			Date assessmentPeriodBeginTime = boSignJson.getDate("assessmentPeriodBeginTime");
			Date assessmentPeriodEndTime = boSignJson.getDate("assessmentPeriodEndTime");
			
			BoSign boSign = new BoSign();
			boSign.setBusinessOpportunityId(businessOpportunityId);
			boSign.setLogId(logId);
			boSign.setSignDate(signDate);
			boSign.setSignAmonut(signAmonut);
			boSign.setCooperativePartner(cooperativePartner);
			boSign.setAssessmentIndex(assessmentIndex);
			boSign.setAssessmentPeriodBeginTime(assessmentPeriodBeginTime);
			boSign.setAssessmentPeriodEndTime(assessmentPeriodEndTime);
			boSign.setCreateTime(nowDate);
			boSign.setCreateBy(jsonData.getLong("userId"));
			boSignMapper.insert(boSign);
			JSONArray partnerAgentAreaList = boSignJson.getJSONArray("partnerAgentAreaList");
			if(partnerAgentAreaList!=null&&!partnerAgentAreaList.isEmpty()){
				Long signId = boSign.getSignId();
				for (Object object : partnerAgentAreaList) {
					JSONObject partnerAgentArea = JSONObject.parseObject(object.toString());
					PartnerAgentArea agentArea = new PartnerAgentArea();
					agentArea.setSignId(signId);
					agentArea.setAddressProvince(partnerAgentArea.getString("addressProvince"));
					agentArea.setAddressCity(partnerAgentArea.getString("addressCity"));
					agentArea.setAddressCounty(partnerAgentArea.getString("addressCounty"));
					agentArea.setCreateTime(nowDate);
					agentArea.setCreateBy(jsonData.getLong("userId"));
					agentAreaMapper.insert(agentArea);
				}
				
			}
			
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("签约".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约完成");
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogBoPurchase(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boPurchaseJson = jsonData.getJSONObject("boPurchase");
			Date hardwareArrivalDate = boPurchaseJson.getDate("hardwareArrivalDate");
			Date softwareInstallationDate = boPurchaseJson.getDate("softwareInstallationDate");
			
			BoPurchase boPurchase = new BoPurchase();
			boPurchase.setBusinessOpportunityId(businessOpportunityId);
			boPurchase.setLogId(logId);
			boPurchase.setHardwareArrivalDate(hardwareArrivalDate);
			boPurchase.setSoftwareInstallationDate(softwareInstallationDate);
			boPurchase.setCreateTime(nowDate);
			boPurchase.setCreateBy(jsonData.getLong("userId"));
			boPurchaseMapper.insert(boPurchase);
			//修改商机进度
			String specificEvent = logData.getString("specificEvent");
			if("采购".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"采购完成");
			}
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addDailyEvents(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, null);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			JSONObject dailyEventsJson = jsonData.getJSONObject("dailyEvents");
			String dailyEventsDetail = dailyEventsJson.getString("dailyEventsDetail");
			
			DailyEvents dailyEvents = new DailyEvents();
			dailyEvents.setLogId(logId);
			dailyEvents.setDailyEventsDetail(dailyEventsDetail);
			dailyEvents.setCreateTime(nowDate);
			dailyEvents.setCreateBy(jsonData.getLong("userId"));
			dailyEventsMapper.insert(dailyEvents);
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addServiceDailyEvent(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, null);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			JSONObject serviceDailyEventsJson = jsonData.getJSONObject("serviceDailyEvents");
			BigDecimal documentWriteModify = serviceDailyEventsJson.getBigDecimal("documentWriteModify");
			Integer pptDemonstratedCount = serviceDailyEventsJson.getInteger("pptDemonstratedCount");
			Integer volumeDemonstratedCount = serviceDailyEventsJson.getInteger("volumeDemonstratedCount");
			Integer markingTrainCount = serviceDailyEventsJson.getInteger("markingTrainCount");
			Integer introductionLeanCount = serviceDailyEventsJson.getInteger("introductionLeanCount");
			Integer studentParentIntroductionCount = serviceDailyEventsJson.getInteger("studentParentIntroductionCount");
			Integer examinationTrainCount = serviceDailyEventsJson.getInteger("examinationTrainCount");
			Integer sopProcessExplanationCount = serviceDailyEventsJson.getInteger("sopProcessExplanationCount");
			Integer productsIntroductionCount = serviceDailyEventsJson.getInteger("productsIntroductionCount");
			Integer operationGuidanceCount = serviceDailyEventsJson.getInteger("operationGuidanceCount");
			Integer testCoachCount = serviceDailyEventsJson.getInteger("testCoachCount");
			
			ServiceDailyEvent dailyEvent = new ServiceDailyEvent();
			dailyEvent.setLogId(logId);
			dailyEvent.setDocumentWriteModify(documentWriteModify);
			dailyEvent.setPptDemonstratedCount(pptDemonstratedCount);
			dailyEvent.setVolumeDemonstratedCount(volumeDemonstratedCount);
			dailyEvent.setMarkingTrainCount(markingTrainCount);
			dailyEvent.setIntroductionLeanCount(introductionLeanCount);
			dailyEvent.setStudentParentIntroductionCount(studentParentIntroductionCount);
			dailyEvent.setExaminationTrainCount(examinationTrainCount);
			dailyEvent.setSopProcessExplanationCount(sopProcessExplanationCount);
			dailyEvent.setProductsIntroductionCount(productsIntroductionCount);
			dailyEvent.setOperationGuidanceCount(operationGuidanceCount);
			dailyEvent.setTestCoachCount(testCoachCount);
			dailyEvent.setCreateTime(nowDate);
			dailyEvent.setCreateBy(jsonData.getLong("userId"));
			serviceDailyEventMapper.insert(dailyEvent);
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	
	@Transactional
	public JSONObject addBOLogBoSupport(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			JSONObject boSupportJson = jsonData.getJSONObject("boSupport");
			Integer accountOpenCount = boSupportJson.getInteger("accountOpenCount");
			Integer informationConfirmationCount = boSupportJson.getInteger("informationConfirmationCount");
			Integer modifyStudentInformationCount = boSupportJson.getInteger("modifyStudentInformationCount");
			Integer productDemonstration = boSupportJson.getInteger("productDemonstration");
			Integer productIntroduce = boSupportJson.getInteger("productIntroduce");
			BigDecimal salesSupportCount = boSupportJson.getBigDecimal("salesSupportCount");
			String salesSupportDetail = boSupportJson.getString("salesSupportDetail");
			
			BoSupport boSupport = new BoSupport();
			boSupport.setBusinessOpportunityId(businessOpportunityId);
			boSupport.setLogId(logId);
			boSupport.setAccountOpenCount(accountOpenCount);
			boSupport.setInformationConfirmationCount(informationConfirmationCount);
			boSupport.setModifyStudentInformationCount(modifyStudentInformationCount);
			boSupport.setSalesSupportCount(salesSupportCount);
			boSupport.setSalesSupportDetail(salesSupportDetail);
			boSupport.setProductDemonstration(productDemonstration);
			boSupport.setProductIntroduce(productIntroduce);
			boSupport.setCreateTime(nowDate);
			boSupport.setCreateBy(jsonData.getLong("userId"));
			boSupportMapper.insert(boSupport);
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	
	@Transactional
	public JSONObject addBOLogBoTrain(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			JSONObject boTrainJson = jsonData.getJSONObject("boTrain");
			Integer operationTrainingCount = boTrainJson.getInteger("operationTrainingCount");
			Integer correctingTrainingCount = boTrainJson.getInteger("correctingTrainingCount");
			Integer pptDemonstratedCount = boTrainJson.getInteger("pptDemonstratedCount");
			Integer volumeDemonstratedCount = boTrainJson.getInteger("volumeDemonstratedCount");
			Integer markingTrainCount = boTrainJson.getInteger("markingTrainCount");
			Integer introductionLeanCount = boTrainJson.getInteger("introductionLeanCount");
			Integer studentParentIntroductionCount = boTrainJson.getInteger("studentParentIntroductionCount");
			Integer examinationTrainCount = boTrainJson.getInteger("examinationTrainCount");
			Integer sopProcessExplanationCount = boTrainJson.getInteger("sopProcessExplanationCount");
			Integer productsIntroductionCount = boTrainJson.getInteger("productsIntroductionCount");
			Integer operationGuidanceCount = boTrainJson.getInteger("operationGuidanceCount");
			Integer testCoachCount = boTrainJson.getInteger("testCoachCount");
			
			BoTrain boTrain = new BoTrain();
			boTrain.setBusinessOpportunityId(businessOpportunityId);
			boTrain.setLogId(logId);
			boTrain.setOperationTrainingCount(operationTrainingCount);
			boTrain.setCorrectingTrainingCount(correctingTrainingCount);
			boTrain.setPptDemonstratedCount(pptDemonstratedCount);
			boTrain.setVolumeDemonstratedCount(volumeDemonstratedCount);
			boTrain.setMarkingTrainCount(markingTrainCount);
			boTrain.setIntroductionLeanCount(introductionLeanCount);
			boTrain.setStudentParentIntroductionCount(studentParentIntroductionCount);
			boTrain.setExaminationTrainCount(examinationTrainCount);
			boTrain.setSopProcessExplanationCount(sopProcessExplanationCount);
			boTrain.setProductsIntroductionCount(productsIntroductionCount);
			boTrain.setOperationGuidanceCount(operationGuidanceCount);
			boTrain.setTestCoachCount(testCoachCount);
			boTrain.setCreateTime(nowDate);
			boTrain.setCreateBy(jsonData.getLong("userId"));
			boTrainMapper.insert(boTrain);
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	
	@Transactional
	public JSONObject addBOLogBoCustomerService(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			//保存售后
			JSONObject boCustomerServiceJson = jsonData.getJSONObject("boCustomerService");
			Integer installationDebuggingCount = boCustomerServiceJson.getInteger("installationDebuggingCount");
			Integer homeworkVolumeCount = boCustomerServiceJson.getInteger("homeworkVolumeCount");
			Integer homeworkMarkingCount = boCustomerServiceJson.getInteger("homeworkMarkingCount");
			Integer printingInspectionCount = boCustomerServiceJson.getInteger("printingInspectionCount");
			Integer markingHandleCount = boCustomerServiceJson.getInteger("markingHandleCount");
			Integer systemObstacleCount = boCustomerServiceJson.getInteger("systemObstacleCount");
			
			BoCustomerService boCustomerService = new BoCustomerService();
			boCustomerService.setBusinessOpportunityId(businessOpportunityId);
			boCustomerService.setLogId(logId);
			boCustomerService.setInstallationDebuggingCount(installationDebuggingCount);
			boCustomerService.setHomeworkVolumeCount(homeworkVolumeCount);
			boCustomerService.setHomeworkMarkingCount(homeworkMarkingCount);
			boCustomerService.setPrintingInspectionCount(printingInspectionCount);
			boCustomerService.setMarkingHandleCount(markingHandleCount);
			boCustomerService.setSystemObstacleCount(systemObstacleCount);
			boCustomerService.setCreateTime(nowDate);
			boCustomerService.setCreateBy(jsonData.getLong("userId"));
			boCustomerServiceMapper.insert(boCustomerService);
			
		}
		resultJson.put("state", "success");
		resultJson.put("message", "添加成功");
		return resultJson;
	}
	
	@Transactional
	public JSONObject addBOLogBoPayment(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, logData, businessOpportunityId);
			if(logId.equals(-1L)){
				resultJson.put("state", "fail");
				resultJson.put("message", "无权限创建该事项类型日志");
				return resultJson;
			}
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			this.createBoFeeDatail(logId,jsonData, nowDate, totalDetail);
			
			JSONObject boPaymentJson = jsonData.getJSONObject("boPayment");
			Date paymentDate = boPaymentJson.getDate("paymentDate");
			BigDecimal paymentAmount = boPaymentJson.getBigDecimal("paymentAmount");
			Integer paymentType = boPaymentJson.getInteger("paymentType");
			
			BoPayment boPayment = new BoPayment();
			boPayment.setBusinessOpportunityId(businessOpportunityId);
			boPayment.setLogId(logId);
			boPayment.setPaymentDate(paymentDate);
			boPayment.setPaymentAmount(paymentAmount);
			boPayment.setPaymentType(paymentType);
			boPayment.setCreateTime(nowDate);
			boPayment.setCreateBy(jsonData.getLong("userId"));
			boPaymentMapper.insert(boPayment);
			
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

	private Long createLogData(JSONObject jsonData, Date nowDate, JSONObject logData,Long businessOpportunityId) {
		Date logDate = logData.getDate("logDate");
		String eventType = logData.getString("eventType");
		String specificEvent = logData.getString("specificEvent");
		BigDecimal workingHours = logData.getBigDecimal("workingHours");
		String internalParticipant = logData.getString("internalParticipant");
		String externalParticipant = logData.getString("externalParticipant");
		
		List<String> evenTypeList = roleService.queryRoleEvenTypeList(jsonData.getLong("roleId"));
		if(!evenTypeList.contains(eventType)){
			return -1L;
		}
		BusinessOpportunityLog businessOpportunityLog = new BusinessOpportunityLog();
		businessOpportunityLog.setLogDate(logDate);
		businessOpportunityLog.setBusinessOpportunityId(businessOpportunityId);
		businessOpportunityLog.setEventType(eventType);
		businessOpportunityLog.setSpecificEvent(specificEvent);
		businessOpportunityLog.setWorkingHours(workingHours);
		businessOpportunityLog.setInternalParticipant(internalParticipant);
		businessOpportunityLog.setExternalParticipant(externalParticipant);
		businessOpportunityLog.setCreateTime(nowDate);
		businessOpportunityLog.setCreateBy(jsonData.getLong("userId"));
		businessOpportunityLogMapper.insert(businessOpportunityLog);
		return businessOpportunityLog.getLogId();
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
	private Long createBoFeeDatail(Long logId , JSONObject jsonData, Date nowDate, JSONObject totalDetail) {
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
		boFeeDetail.setLogId(logId);
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
	
	public JSONObject queryBusinessOpportunityLogByParams(JSONObject queryJson) {
		JSONObject resultJson = new JSONObject();
		//1、组件参数
		String businessOpportunityName = queryJson.getString("businessOpportunityName");
		Integer start = queryJson.getInteger("start");
		Integer pageSize = queryJson.getInteger("pageSize");
		String startTime = queryJson.getString("startTime");
		String endTime = queryJson.getString("endTime");
		String eventType = queryJson.getString("eventType");
		if("".equals(startTime)){
			startTime = null;
		}
		if("".equals(endTime)){
			endTime = null;
		}
		if (!StringUtils.isEmpty(businessOpportunityName)) {
			businessOpportunityName = "%" + businessOpportunityName + "%";
		}else{
			businessOpportunityName =null;
		}
		
		if(eventType!=null&&"".equals(eventType.trim())){
			eventType = null;
		}
		
		Long userId = queryJson.getLong("userId");
		Long roleId = queryJson.getLong("roleId");
		List<Long> userIds = new ArrayList<Long>();
		if (roleId != 4) {// 查看所有角色
			String userName = queryJson.getString("userName");
			if(userName!=null&&!StringUtils.isEmpty(userName.trim())){
				userName = "%"+userName+"%";
				List<User> userList = userService.querySaleAndServiceByUserName(userName);
				if(!userList.isEmpty()){
					for (User user : userList) {
						userIds.add(user.getUserId());
					}
				}else{
					userIds.add(-1L);
				}
			}else{
				userIds = null;	
			}
			
		}else{
			userIds.add(userId);
		}
		int totalCount =0;
		if(roleId == 3){
			 totalCount = businessOpportunityLogMapper.getBusinessOpportunityLogCount(businessOpportunityName,startTime,endTime,eventType,userId,userIds);
		}else{
			totalCount = businessOpportunityLogMapper.getServiceBusinessOpportunityLogCount(businessOpportunityName,startTime,endTime,eventType,userIds);
		}
		int startPosition = (start - 1) * pageSize;
		
		List<Map<String,Object>> businessOpportunityLogList = new ArrayList<Map<String,Object>>();
		if(roleId == 3){
			businessOpportunityLogList = businessOpportunityLogMapper.getBusinessOpportunityLogByPage(businessOpportunityName,startTime,endTime,eventType,userId,userIds,startPosition,pageSize);
		}else{
			businessOpportunityLogList = businessOpportunityLogMapper.getServiceBusinessOpportunityLogByPage(businessOpportunityName,startTime,endTime,eventType,userIds,startPosition,pageSize);
		}
		JSONArray businessOpportunityLogArr = new JSONArray();
		if(!businessOpportunityLogList.isEmpty()){
			for (Map<String, Object> businessOpportunityLogMap : businessOpportunityLogList) {
				JSONObject businessOpportunityJson = new JSONObject();
				Date logDateLong = (Date) businessOpportunityLogMap.get("log_date");
				businessOpportunityJson.put("logId", businessOpportunityLogMap.get("log_id"));
				businessOpportunityJson.put("logDate", DateUtil.getDateFormat(logDateLong, "yyyy-MM-dd"));
				businessOpportunityJson.put("businessOpportunityName", businessOpportunityLogMap.get("business_opportunity_name"));
				businessOpportunityJson.put("businessOpportunityType", businessOpportunityLogMap.get("business_opportunity_type"));
				businessOpportunityJson.put("eventType", businessOpportunityLogMap.get("event_type"));
				businessOpportunityJson.put("specificEvent", businessOpportunityLogMap.get("specific_event"));
				businessOpportunityJson.put("workingHours", businessOpportunityLogMap.get("working_hours"));
				businessOpportunityJson.put("internalParticipant", businessOpportunityLogMap.get("internal_participant"));
				businessOpportunityJson.put("externalParticipant", businessOpportunityLogMap.get("external_participant"));
				//查询总费用
				BigDecimal totalFee = new BigDecimal(0);
				
				Long logId = Long.parseLong(businessOpportunityLogMap.get("log_id").toString());
				BoFeeDetail boFeeDetail = boFeeDetailMapper.selectByLogId(logId);
				if (boFeeDetail != null) {
					BigDecimal trafficFee = boFeeDetail.getTrafficFee();
					BigDecimal hotelFee = boFeeDetail.getHotelFee();
					BigDecimal foodFee = boFeeDetail.getFoodFee();
					BigDecimal entertainFee = boFeeDetail.getEntertainFee();
					BigDecimal giftFee = boFeeDetail.getGiftFee();
					BigDecimal otherFee = boFeeDetail.getOtherFee();
					BigDecimal advanceFee = boFeeDetail.getAdvanceFee();
					if (trafficFee != null) {
						totalFee = totalFee.add(trafficFee);
					}
					if (hotelFee != null) {
						totalFee = totalFee.add(hotelFee);
					}
					if (foodFee != null) {
						totalFee = totalFee.add(foodFee);
					}
					if (entertainFee != null) {
						totalFee = totalFee.add(entertainFee);
					}
					if (giftFee != null) {
						totalFee = totalFee.add(giftFee);
					}
					if (otherFee != null) {
						totalFee = totalFee.add(otherFee);
					}
					if (advanceFee != null) {
						totalFee = totalFee.add(advanceFee);
					}
				}
				businessOpportunityJson.put("totalFee", totalFee.doubleValue());
				//查询创建人名字
				Long createBy = (Long) businessOpportunityLogMap.get("create_by");
				User user = userService.getUserById(createBy);
				businessOpportunityJson.put("createUserName", user.getName());
				//查询角色
				JSONObject json = new JSONObject();
				json.put("userId", createBy);
				Role role = roleService.getRoleByUserId(json);
				if(role!=null){
					businessOpportunityJson.put("roleName", role.getRoleName());
				}else{
					businessOpportunityJson.put("roleName", "");
				}
				
				if(roleId == 3){//销售编辑权限
					//查询指派人ID
					Long distributedUserId = (Long) businessOpportunityLogMap.get("user_id");
					//如果创建人和登录人ID不相同，或者创建人和被指派商机人不同 没有编辑权限，但是都有查看权限。
					if(!queryJson.getLong("userId").equals(createBy)||(distributedUserId!=null&&!createBy.equals(distributedUserId))){
						businessOpportunityJson.put("authority", 1);
					}else{
						businessOpportunityJson.put("authority", 0);
					}
				}else{
					//服务日志谁创建谁修改
					if(!queryJson.getLong("userId").equals(createBy)){
						businessOpportunityJson.put("authority", 1);
					}else{
						businessOpportunityJson.put("authority", 0);
					}
				}
				
				businessOpportunityLogArr.add(businessOpportunityJson);
			}
		}
		
		
		int totalPage = 0;
		if (totalCount / pageSize > 0) {
            if (totalCount % pageSize == 0) {
                totalPage = totalCount / pageSize;
            } else {
                totalPage = totalCount / pageSize + 1;
            }
        } else {
            totalPage = 1;
        }
		List<Integer> pageList = PageUtil.for_each(start, (int) totalPage, 6);
		resultJson.put("totalCount", totalCount);
		resultJson.put("totalPage", totalPage);
		resultJson.put("pageList", pageList);
		resultJson.put("businessOpportunityLogList", businessOpportunityLogArr);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
	
	
	public JSONObject queryBOLog(JSONObject queryJson){
		JSONObject resultJson = new JSONObject();
		Long logId = queryJson.getLong("logId");
		BusinessOpportunityLog businessOpportunityLog = businessOpportunityLogMapper.selectByPrimaryKey(logId);
		Long businessOpportunityId = businessOpportunityLog.getBusinessOpportunityId();
		String json  = null;
		JSONObject businessOpportunityJson = businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityId);
		if("信息收集".equals(businessOpportunityLog.getEventType())){
			BoInformationCollect boInformationCollect = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityId);
			json = JSONObject.toJSONString(boInformationCollect,SerializerFeature.WriteNullStringAsEmpty);
		}else if("制定拜访计划".equals(businessOpportunityLog.getEventType())){
			BoVisitPlan boVisitPlan = boVisitPlanMapper.selectVisitPlanByLogId(logId);
			json = JSONObject.toJSONString(boVisitPlan,SerializerFeature.WriteNullStringAsEmpty);
		}else if("拜访客户".equals(businessOpportunityLog.getEventType())){
			BoVisit boVisit = boVisitMapper.selectVisitByLogId(logId);
			String vistJsonString = JSONObject.toJSONString(boVisit,SerializerFeature.WriteNullStringAsEmpty);
			
			//添加拜访计划名称
			JSONObject vistJson = JSONObject.parseObject(vistJsonString);
			Long visitPlanId = boVisit.getVisitPlanId();
			BoVisitPlan boVisitPlan = boVisitPlanMapper.selectByPrimaryKey(visitPlanId);
			if(boVisitPlan!=null){
				vistJson.put("visitPlanName", boVisitPlan.getVisitPlanName());
			}else{
				vistJson.put("visitPlanName", "");
			}
			json = vistJson.toJSONString();
				//如果是达成合作意向，保存合作详情
				if("达成合作意向".equals(businessOpportunityLog.getSpecificEvent())){
					CooperationDetails cooperationDetails =cooperationDetailsMapper.selectByVisitId(boVisit.getVisitId());
					String json2 = JSONObject.toJSONString(cooperationDetails,SerializerFeature.WriteNullStringAsEmpty);
					JSONObject cooperationDetailsJson = JSONObject.parseObject(json2);
					removeCommonAttribute(cooperationDetailsJson);
					JSONObject comJson = JSONObject.parseObject(json);
					comJson.put("cooperationDetailsJson", cooperationDetailsJson);
					json = comJson.toJSONString();
				}
		}else if("商业谈判".equals(businessOpportunityLog.getEventType())){
			BoNegotiation boNegotiation = boNegotiationMapper.selectNegotiationByLogId(logId);
			json = JSONObject.toJSONString(boNegotiation,SerializerFeature.WriteNullStringAsEmpty);
		}else if("试用准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoInTrial boInTrial = boInTrialMapper.selectInTrialByLogId(logId);
			json = JSONObject.toJSONString(boInTrial,SerializerFeature.WriteNullStringAsEmpty);
		}else if(businessOpportunityLog.getSpecificEvent().startsWith("试用结果")){
			BoTrialReuslt boTrialReust = boTrialReusltMapper.selectTrialReusltByLogId(logId);
			json = JSONObject.toJSONString(boTrialReust,SerializerFeature.WriteNullStringAsEmpty);
		}else if("投标准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoBidding boBidding = boBiddingMapper.selectBoBiddingByLogId(logId);
			json = JSONObject.toJSONString(boBidding,SerializerFeature.WriteNullStringAsEmpty);
		}else if("投标成功".equals(businessOpportunityLog.getSpecificEvent())||"投标失败".equals(businessOpportunityLog.getSpecificEvent())){
			BoBiddingResult boBiddingResult = boBiddingResultMapper.selectBoBiddingResultByLogId(logId);
			json = JSONObject.toJSONString(boBiddingResult,SerializerFeature.WriteNullStringAsEmpty);
		}else if("签约".equals(businessOpportunityLog.getSpecificEvent())){
			if(businessOpportunityJson.getInteger("businessOpportunityType")==0){//学校
				BoSign boSign = boSignMapper.selectBoSignByLogId(logId);
				json = JSONObject.toJSONString(boSign,SerializerFeature.WriteNullStringAsEmpty);
			}else if(businessOpportunityJson.getInteger("businessOpportunityType")==1){//合作伙伴
				BoSign boSign = boSignMapper.selectBoSignByLogId(logId);
				json = JSONObject.toJSONString(boSign,SerializerFeature.WriteNullStringAsEmpty);
				List<PartnerAgentArea> partnerAgentAreas = agentAreaMapper.selectBySignId(boSign.getSignId());
				JSONArray partnerAgentAreaList = new JSONArray();
				for (PartnerAgentArea partnerAgentArea : partnerAgentAreas) {
					String partnerAgentAreaString = JSONObject.toJSONString(partnerAgentArea,SerializerFeature.WriteNullStringAsEmpty);
					JSONObject partnerAgentAreaJson = JSONObject.parseObject(partnerAgentAreaString);
					removeCommonAttribute(partnerAgentAreaJson);
					partnerAgentAreaList.add(partnerAgentAreaJson);
				}
				JSONObject newJson = JSONObject.parseObject(json);
				newJson.put("partnerAgentAreaList", partnerAgentAreaList);
				json = newJson.toString();
			}
			
			
		}else if("采购".equals(businessOpportunityLog.getSpecificEvent())){
			BoPurchase boPurchase = boPurchaseMapper.selectBoPurchaseByLogId(logId);
			json = JSONObject.toJSONString(boPurchase,SerializerFeature.WriteNullStringAsEmpty);
		}else if("售后".equals(businessOpportunityLog.getEventType())){
			BoCustomerService boCustomerService = boCustomerServiceMapper.selectBoCustomerServiceByLogId(logId);
			json = JSONObject.toJSONString(boCustomerService,SerializerFeature.WriteNullStringAsEmpty);
		}else if("培训".equals(businessOpportunityLog.getEventType())){
			BoTrain boTrain = boTrainMapper.selectBoTrainByLogId(logId);
			json = JSONObject.toJSONString(boTrain,SerializerFeature.WriteNullStringAsEmpty);
		}else if("支持".equals(businessOpportunityLog.getEventType())){
			BoSupport boSupport = boSupportMapper.selectBoSupportByLogId(logId);
			json = JSONObject.toJSONString(boSupport,SerializerFeature.WriteNullStringAsEmpty);
		}else if("日常事项".equals(businessOpportunityLog.getEventType())){
			if("日常".equals(businessOpportunityLog.getSpecificEvent())){
				ServiceDailyEvent serviceDailyEvent = serviceDailyEventMapper.selectByLogId(logId);
				json = JSONObject.toJSONString(serviceDailyEvent,SerializerFeature.WriteNullStringAsEmpty);
			}else{
				DailyEvents dailyEvents = dailyEventsMapper.selectDailyEventsByLogId(logId);
				json = JSONObject.toJSONString(dailyEvents,SerializerFeature.WriteNullStringAsEmpty);
			}
			
		}else if("回款".equals(businessOpportunityLog.getEventType())){
			BoPayment boPayment = boPaymentMapper.selectBoPaymentByLogId(logId);
			json = JSONObject.toJSONString(boPayment,SerializerFeature.WriteNullStringAsEmpty);
		}
		JSONObject commonJson =JSON.parseObject(json);
		if(commonJson!=null){
			removeCommonAttribute(commonJson);
		}
		//log
		JSONObject  businessOpportunityLogJson = JSONObject.parseObject(JSONObject.toJSONString(businessOpportunityLog,SerializerFeature.WriteNullStringAsEmpty));
		removeCommonAttribute(businessOpportunityLogJson);
		businessOpportunityLogJson.put("businessOpportunityName", businessOpportunityJson.getString("businessOpportunityName"));
		businessOpportunityLogJson.put("businessOpportunityNum", businessOpportunityJson.getString("businessOpportunityNum"));
		businessOpportunityLogJson.put("businessOpportunityType", businessOpportunityJson.getString("businessOpportunityType"));
		//费用
		BoFeeDetail boFeeDetail = boFeeDetailMapper.selectByLogId(businessOpportunityLog.getLogId());
		
		JSONObject  boFeeDetailJson = JSONObject.parseObject(JSONObject.toJSONString(boFeeDetail,SerializerFeature.WriteNullStringAsEmpty));
		businessOpportunityLogJson.put("totalFee", caculateDetailFee(boFeeDetail));
		removeCommonAttribute(boFeeDetailJson);
		resultJson.put("businessOpportunityLogJson", businessOpportunityLogJson);
		resultJson.put("boFeeDetailJson", boFeeDetailJson);
		resultJson.put("commonJson", commonJson);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
	}
	
	private double caculateDetailFee(BoFeeDetail boFeeDetail) {
		BigDecimal totalFee = new BigDecimal(0);
		BigDecimal trafficFee = boFeeDetail.getTrafficFee();
		BigDecimal hotelFee = boFeeDetail.getHotelFee();
		BigDecimal foodFee = boFeeDetail.getFoodFee();
		BigDecimal entertainFee = boFeeDetail.getEntertainFee();
		BigDecimal giftFee = boFeeDetail.getGiftFee();
		BigDecimal otherFee = boFeeDetail.getOtherFee();
		BigDecimal advanceFee = boFeeDetail.getAdvanceFee();
		if (trafficFee != null) {
			totalFee = totalFee.add(trafficFee);
		}
		if (hotelFee != null) {
			totalFee = totalFee.add(hotelFee);
		}
		if (foodFee != null) {
			totalFee = totalFee.add(foodFee);
		}
		if (entertainFee != null) {
			totalFee = totalFee.add(entertainFee);
		}
		if (giftFee != null) {
			totalFee = totalFee.add(giftFee);
		}
		if (otherFee != null) {
			totalFee = totalFee.add(otherFee);
		}
		if (advanceFee != null) {
			totalFee = totalFee.add(advanceFee);
		}
		return totalFee.doubleValue();

	}
	
	@Transactional
	public JSONObject updateBOLog(JSONObject updateJson){
		
		JSONObject resultJson = new JSONObject();
		JSONObject businessOpportunityLogJson = updateJson.getJSONObject("businessOpportunityLogJson");
		BusinessOpportunityLog businessOpportunityLog = businessOpportunityLogJson.toJavaObject(BusinessOpportunityLog.class);
		//查询创建者
		BusinessOpportunityLog businessOpportunityLogOld = businessOpportunityLogMapper.selectByPrimaryKey(businessOpportunityLog.getLogId());
		if(!updateJson.getLong("userId").equals(businessOpportunityLogOld.getCreateBy())){
			resultJson.put("state", "fail");
			resultJson.put("message", "没有编辑权限");
			return resultJson;
		}
		
		//更新日志表
		businessOpportunityLogMapper.updateByPrimaryKeySelective(businessOpportunityLog);
		//更新费用表
		JSONObject boFeeDetailJson = updateJson.getJSONObject("boFeeDetailJson");
		BoFeeDetail boFeeDetail = boFeeDetailJson.toJavaObject(BoFeeDetail.class);
		BoFeeDetail boFeeDetailOld = boFeeDetailMapper.selectByLogId(businessOpportunityLogOld.getLogId());
		boFeeDetail.setDetailFeeId(boFeeDetailOld.getDetailFeeId());
		boFeeDetailMapper.updateByPrimaryKeySelective(boFeeDetail);
		Long userId = updateJson.getLong("userId");
		Date nowDate = new Date();
		Long logId =businessOpportunityLogOld.getLogId();
		//更新日志的对应信息表
		JSONObject commonJson = updateJson.getJSONObject("commonJson");
		if("信息收集".equals(businessOpportunityLog.getEventType())){
			BoInformationCollect boInformationCollectOld = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityLogOld.getBusinessOpportunityId());
			BoInformationCollect boInformationCollect = commonJson.toJavaObject(BoInformationCollect.class);
			boInformationCollect.setBoInformationCollectId(boInformationCollectOld.getBoInformationCollectId());
			boInformationCollect.setUpdateBy(userId);
			boInformationCollect.setUpdateTime(nowDate);
			boInformationCollectMapper.updateByPrimaryKeySelective(boInformationCollect);
			updateBoProcessByInfoCollection(businessOpportunityLogOld.getBusinessOpportunityId(),commonJson,userId);
		
		}else if("制定拜访计划".equals(businessOpportunityLog.getEventType())){
			BoVisitPlan boVisitPlan =  commonJson.toJavaObject(BoVisitPlan.class);
			BoVisitPlan boVisitPlanOld = boVisitPlanMapper.selectVisitPlanByLogId(logId);
			boVisitPlan.setVisitPlanId(boVisitPlanOld.getVisitPlanId());
			boVisitPlan.setUpdateBy(userId);
			boVisitPlan.setUpdateTime(nowDate);
			boVisitPlanMapper.updateByPrimaryKeySelective(boVisitPlan);
		}else if("拜访客户".equals(businessOpportunityLog.getEventType())){
			BoVisit boVisit =  commonJson.toJavaObject(BoVisit.class);
			BoVisit boVisitOld = boVisitMapper.selectVisitByLogId(logId);
			boVisit.setVisitId(boVisitOld.getVisitId());
			boVisit.setUpdateBy(userId);
			boVisit.setUpdateTime(nowDate);
			boVisitMapper.updateByPrimaryKeySelective(boVisit);
			//如果是合作伙伴签约更新合作详情
			JSONObject businessOpportunityJson= businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityLogOld.getBusinessOpportunityId());
			if("达成合作意向".equals(businessOpportunityLog.getSpecificEvent())&&businessOpportunityJson.getInteger("businessOpportunityType")==1){
				CooperationDetails cooperationDetails = commonJson.getObject("cooperationDetailsJson", CooperationDetails.class);
				CooperationDetails cooperationDetailsOld =cooperationDetailsMapper.selectByVisitId(boVisit.getVisitId());
				cooperationDetails.setCooperationDetailsId(cooperationDetailsOld.getCooperationDetailsId());
				cooperationDetailsMapper.updateByPrimaryKeySelective(cooperationDetails);
			}
		}else if("商业谈判".equals(businessOpportunityLog.getEventType())){
			BoNegotiation boNegotiation =  commonJson.toJavaObject(BoNegotiation.class);
			BoNegotiation boNegotiationOld = boNegotiationMapper.selectNegotiationByLogId(logId);
			boNegotiation.setNegotiationId(boNegotiationOld.getNegotiationId());
			boNegotiation.setUpdateBy(userId);
			boNegotiation.setUpdateTime(nowDate);
			boNegotiationMapper.updateByPrimaryKeySelective(boNegotiation);
		}else if("试用准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoInTrial boInTrial = commonJson.toJavaObject(BoInTrial.class);
			BoInTrial boInTrialOld = boInTrialMapper.selectInTrialByLogId(logId);
			boInTrial.setInTrialId(boInTrialOld.getInTrialId());
			boInTrial.setUpdateBy(userId);
			boInTrial.setUpdateTime(nowDate);
			boInTrialMapper.updateByPrimaryKeySelective(boInTrial);
		}else if(businessOpportunityLog.getSpecificEvent().startsWith("试用结果")){
			BoTrialReuslt boTrialReust = commonJson.toJavaObject(BoTrialReuslt.class);
			BoTrialReuslt boTrialReustOld = boTrialReusltMapper.selectTrialReusltByLogId(logId);
			boTrialReust.setTrialResultId(boTrialReustOld.getTrialResultId());
			boTrialReust.setUpdateBy(userId);
			boTrialReust.setUpdateTime(nowDate);
			boTrialReusltMapper.updateByPrimaryKeySelective(boTrialReust);
		}else if("投标准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoBidding boBidding = commonJson.toJavaObject(BoBidding.class);
			BoBidding boBiddingOld = boBiddingMapper.selectBoBiddingByLogId(logId);
			boBidding.setBiddingId(boBiddingOld.getBiddingId());
			boBidding.setUpdateBy(userId);
			boBidding.setUpdateTime(nowDate);
			boBiddingMapper.updateByPrimaryKeySelective(boBidding);
		}else if("投标成功".equals(businessOpportunityLog.getSpecificEvent())||"投标失败".equals(businessOpportunityLog.getSpecificEvent())){
			BoBiddingResult boBiddingResult = commonJson.toJavaObject(BoBiddingResult.class);
			BoBiddingResult boBiddingResultOld = boBiddingResultMapper.selectBoBiddingResultByLogId(logId);
			boBiddingResult.setBiddingResultId(boBiddingResultOld.getBiddingResultId());
			boBiddingResult.setUpdateBy(userId);
			boBiddingResult.setUpdateTime(nowDate);
			boBiddingResultMapper.updateByPrimaryKeySelective(boBiddingResult);
		}else if("签约".equals(businessOpportunityLog.getSpecificEvent())){
			BoSign boSign = commonJson.toJavaObject(BoSign.class);
			BoSign boSignOld = boSignMapper.selectBoSignByLogId(logId);
			Long signId = boSignOld.getSignId();
			boSign.setSignId(signId);
			boSign.setUpdateBy(userId);
			boSign.setUpdateTime(nowDate);
			boSignMapper.updateByPrimaryKeySelective(boSign);
			//如果是合作伙伴签约更新合作详情
			JSONObject businessOpportunityJson= businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityLogOld.getBusinessOpportunityId());
			if(businessOpportunityJson.getInteger("businessOpportunityType")==1){//合作伙伴
				List<PartnerAgentArea> partnerAgentAreas = agentAreaMapper.selectBySignId(boSign.getSignId());
				for (PartnerAgentArea partnerAgentArea : partnerAgentAreas) {
					agentAreaMapper.deleteByPrimaryKey(partnerAgentArea.getPartnerAgentAreaId());
				}
				JSONArray partnerAgentAreaList = commonJson.getJSONArray("partnerAgentAreaList");
				if(partnerAgentAreaList!=null&&!partnerAgentAreaList.isEmpty()){
					for (Object object : partnerAgentAreaList) {
						JSONObject parseObject = JSONObject.parseObject(object.toString());
						PartnerAgentArea partnerAgentArea = parseObject.toJavaObject(PartnerAgentArea.class);
						partnerAgentArea.setSignId(signId);
						partnerAgentArea.setCreateBy(userId);
						partnerAgentArea.setCreateTime(nowDate);
						agentAreaMapper.insert(partnerAgentArea);
					}
			}
			}
		}else if("售后".equals(businessOpportunityLog.getEventType())){
			BoCustomerService boCustomerService = commonJson.toJavaObject(BoCustomerService.class);
			BoCustomerService boCustomerServiceOld = boCustomerServiceMapper.selectBoCustomerServiceByLogId(logId);
			boCustomerService.setLogId(logId);
			boCustomerService.setBusinessOpportunityId(businessOpportunityLog.getBusinessOpportunityId());
			boCustomerService.setBoCustomerService(boCustomerServiceOld.getBoCustomerService());
			boCustomerService.setCreateBy(boCustomerServiceOld.getCreateBy());
			boCustomerService.setCreateTime(boCustomerServiceOld.getCreateTime());
			boCustomerService.setUpdateBy(userId);
			boCustomerService.setUpdateTime(nowDate);
			boCustomerServiceMapper.updateByPrimaryKey(boCustomerService);
		}else if("培训".equals(businessOpportunityLog.getEventType())){
			BoTrain boTrain = commonJson.toJavaObject(BoTrain.class);
			BoTrain boTrainOld = boTrainMapper.selectBoTrainByLogId(logId);
			boTrain.setBoTrainId(boTrainOld.getBoTrainId());
			boTrain.setLogId(logId);
			boTrain.setBusinessOpportunityId(businessOpportunityLog.getBusinessOpportunityId());
			boTrain.setCreateBy(boTrainOld.getCreateBy());
			boTrain.setCreateTime(boTrainOld.getCreateTime());
			boTrain.setUpdateBy(userId);
			boTrain.setUpdateTime(nowDate);
			boTrainMapper.updateByPrimaryKey(boTrain);
		}else if("支持".equals(businessOpportunityLog.getEventType())){
			BoSupport boSupport = commonJson.toJavaObject(BoSupport.class);
			BoSupport boSupportOld = boSupportMapper.selectBoSupportByLogId(logId);
			boSupport.setBoSupportId(boSupportOld.getBoSupportId());
			boSupport.setLogId(logId);
			boSupport.setBusinessOpportunityId(businessOpportunityLog.getBusinessOpportunityId());
			boSupport.setCreateBy(boSupportOld.getCreateBy());
			boSupport.setCreateTime(boSupportOld.getCreateTime());
			boSupport.setUpdateBy(userId);
			boSupport.setUpdateTime(nowDate);
			boSupportMapper.updateByPrimaryKey(boSupport);
		}else if("日常事项".equals(businessOpportunityLog.getEventType())){
			if("日常".equals(businessOpportunityLog.getSpecificEvent())){
				ServiceDailyEvent serviceDailyEvent =  commonJson.toJavaObject(ServiceDailyEvent.class);
				ServiceDailyEvent serviceDailyEventOld = serviceDailyEventMapper.selectByLogId(logId);
				serviceDailyEvent.setSeviceDailyEventId(serviceDailyEventOld.getSeviceDailyEventId());
				serviceDailyEvent.setLogId(logId);
				serviceDailyEvent.setCreateTime(serviceDailyEventOld.getCreateTime());
				serviceDailyEvent.setCreateBy(serviceDailyEventOld.getCreateBy());
				serviceDailyEvent.setUpdateBy(userId);
				serviceDailyEvent.setUpdateTime(nowDate);
				serviceDailyEventMapper.updateByPrimaryKey(serviceDailyEvent);
			}else{
				DailyEvents dailyEvents = commonJson.toJavaObject(DailyEvents.class);
				DailyEvents dailyEventsOld = dailyEventsMapper.selectDailyEventsByLogId(logId);
				dailyEvents.setDailyEventsId(dailyEventsOld.getDailyEventsId());
				dailyEvents.setLogId(logId);
				dailyEvents.setCreateTime(dailyEvents.getCreateTime());
				dailyEvents.setCreateBy(dailyEvents.getCreateBy());
				dailyEvents.setUpdateBy(userId);
				dailyEvents.setUpdateTime(nowDate);
				dailyEventsMapper.updateByPrimaryKey(dailyEvents);
			}
		}else if("回款".equals(businessOpportunityLog.getEventType())){
			BoPayment boPayment =commonJson.toJavaObject(BoPayment.class);
			BoPayment boPaymentOld = boPaymentMapper.selectBoPaymentByLogId(logId);
			boPayment.setPaymentId(boPaymentOld.getPaymentId());
			boPayment.setLogId(logId);
			boPayment.setBusinessOpportunityId(businessOpportunityLog.getBusinessOpportunityId());
			boPayment.setCreateTime(boPaymentOld.getCreateTime());
			boPayment.setCreateBy(boPaymentOld.getCreateBy());
			boPayment.setUpdateBy(userId);
			boPayment.setUpdateTime(nowDate);
			boPaymentMapper.updateByPrimaryKey(boPayment);
		}
		resultJson.put("state", "success");
		resultJson.put("message", "更新成功");
		return resultJson;
		
	}
	
	private void updateBoProcessByInfoCollection(Long businessOpportunityId, JSONObject boInformationCollectJson,Long userId) {
		String informationSources = boInformationCollectJson.getString("informationSources");
		if(StringUtils.isEmpty(informationSources)){
			informationSources = null;
		}
		String schoolScale = boInformationCollectJson.getString("schoolScale");
		if(StringUtils.isEmpty(schoolScale)){
			schoolScale = null;
		}
		String schoolLevel = boInformationCollectJson.getString("schoolLevel");
		if(StringUtils.isEmpty(schoolLevel)){
			schoolLevel = null;
		}
		Integer schoolProperty = boInformationCollectJson.getInteger("schoolProperty");
		if(StringUtils.isEmpty(schoolProperty)){
			schoolProperty = null;
		}
		String schoolType = boInformationCollectJson.getString("schoolType");
		if(StringUtils.isEmpty(schoolType)){
			schoolType = null;
		}
		String contactName = boInformationCollectJson.getString("contactName");
		if(StringUtils.isEmpty(contactName)){
			contactName = null;
		}
		String contactTitle = boInformationCollectJson.getString("contactTitle");
		if(StringUtils.isEmpty(contactTitle)){
			contactTitle = null;
		}
		String contactTitleDetail = boInformationCollectJson.getString("contactTitleDetail");
		if(StringUtils.isEmpty(contactTitleDetail)){
			contactTitleDetail = null;
		}
		String contactLandline = boInformationCollectJson.getString("contactLandline");
		if(StringUtils.isEmpty(contactLandline)){
			contactLandline = null;
		}
		String contactPhone = boInformationCollectJson.getString("contactPhone");
		if(StringUtils.isEmpty(contactPhone)){
			contactPhone = null;
		}
		String contactEmail = boInformationCollectJson.getString("contactEmail");
		if(StringUtils.isEmpty(contactEmail)){
			contactEmail = null;
		}
		String contactQq = boInformationCollectJson.getString("contactQq");
		if(StringUtils.isEmpty(contactQq)){
			contactQq = null;
		}
		String contactWechat = boInformationCollectJson.getString("contactWechat");
		if(StringUtils.isEmpty(contactWechat)){
			contactWechat = null;
		}
		String decisionMakerName = boInformationCollectJson.getString("decisionMakerName");
		if(StringUtils.isEmpty(decisionMakerName)){
			decisionMakerName = null;
		}
		String decisionMakerTitle = boInformationCollectJson.getString("decisionMakerTitle");
		if(StringUtils.isEmpty(decisionMakerTitle)){
			decisionMakerTitle = null;
		}
		String decisionMakerTitleDetail = boInformationCollectJson.getString("decisionMakerTitleDetail");
		if(StringUtils.isEmpty(decisionMakerTitleDetail)){
			decisionMakerTitleDetail = null;
		}
		String decisionMakerLandline = boInformationCollectJson.getString("decisionMakerLandline");
		if(StringUtils.isEmpty(decisionMakerLandline)){
			decisionMakerLandline = null;
		}
		String decisionMakerPhone = boInformationCollectJson.getString("decisionMakerPhone");
		if(StringUtils.isEmpty(decisionMakerPhone)){
			decisionMakerPhone = null;
		}
		String decisionMakerEmail = boInformationCollectJson.getString("decisionMakerEmail");
		if(StringUtils.isEmpty(decisionMakerEmail)){
			decisionMakerEmail = null;
		}
		String decisionMakerQq = boInformationCollectJson.getString("decisionMakerQq");
		if(StringUtils.isEmpty(decisionMakerQq)){
			decisionMakerQq = null;
		}
		String decisionMakerWechat = boInformationCollectJson.getString("decisionMakerWechat");
		if(StringUtils.isEmpty(decisionMakerWechat)){
			decisionMakerWechat = null;
		}
		Integer ifIntention = boInformationCollectJson.getInteger("ifIntention");
		if(StringUtils.isEmpty(ifIntention)){
			ifIntention = null;
		}
		Integer ifInterested = boInformationCollectJson.getInteger("ifInterested");
		if(StringUtils.isEmpty(ifInterested)){
			ifInterested = null;
		}
		String mainScope = boInformationCollectJson.getString("mainScope");
		if(StringUtils.isEmpty(mainScope)){
			mainScope = null;
		}
		String expectedCooperationType = boInformationCollectJson.getString("expectedCooperationType");
		if(StringUtils.isEmpty(expectedCooperationType)){
			expectedCooperationType = null;
		}
		
		JSONObject businessOpportunityJson= businessOpportunityService.queryByBusinessOpportunityId(businessOpportunityId);
		JSONObject jsonData = new JSONObject();
		jsonData.put("userId", userId);
		if (businessOpportunityJson.getInteger("businessOpportunityType") == 0) {// 学校
			if (informationSources != null && schoolScale != null && schoolLevel != null && schoolProperty != null
					&& schoolType != null && contactName != null && contactTitle != null
					&& (contactLandline != null || contactPhone != null || contactEmail != null || contactQq != null
							|| contactWechat != null)
					&& decisionMakerName != null && decisionMakerTitle != null) {
				// 修改商机进度
				this.updateBoProcess(jsonData, new Date(), businessOpportunityId, "信息收集完成");
			}
		} else if (businessOpportunityJson.getInteger("businessOpportunityType") == 1) {// 合作伙伴
			if (informationSources != null && mainScope != null && expectedCooperationType != null
					&& contactName != null && contactTitle != null
					&& (contactLandline != null || contactPhone != null || contactEmail != null || contactQq != null
							|| contactWechat != null)
					&& decisionMakerName != null && decisionMakerTitle != null) {
				// 修改商机进度
				this.updateBoProcess(jsonData, new Date(), businessOpportunityId, "信息收集完成");
			}
		}

	}

	/**
	 * 移除通用属性
	 * @param json
	 * @created wangyb
	 * @createtime 2017年4月11日下午4:40:01
	 */
	private void removeCommonAttribute(JSONObject json){
		if(json.get("createBy")!=null){
			json.remove("createBy");
		}
		if(json.get("createTime")!=null){
			json.remove("createTime");
		}
		if(json.get("updateBy")!=null){
			json.remove("updateBy");
		}
		if(json.get("updateTime")!=null){
			json.remove("updateTime");
		}
	}
	
	public JSONObject queryBoInfoCollectionByBoId(Long businessOpportunityId){
		JSONObject resultJson = new JSONObject();
		BoInformationCollect boInformationCollect = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityId);
		if(boInformationCollect != null){
			resultJson.put("schoolLevel", boInformationCollect.getSchoolLevel());
			resultJson.put("schoolProperty", boInformationCollect.getSchoolProperty());
			resultJson.put("schoolType", boInformationCollect.getSchoolType());
			resultJson.put("mainScope", boInformationCollect.getMainScope());
			resultJson.put("decisionMakerName", boInformationCollect.getDecisionMakerName());
			resultJson.put("decisionMakerTitle", boInformationCollect.getDecisionMakerTitle());
			resultJson.put("decisionMakerTitleDetail", boInformationCollect.getDecisionMakerTitleDetail());
			resultJson.put("decisionMakerPhone", boInformationCollect.getDecisionMakerPhone());
			resultJson.put("decisionMakerLandline", boInformationCollect.getDecisionMakerLandline());
			resultJson.put("decisionMakerEmail", boInformationCollect.getDecisionMakerEmail());
			resultJson.put("decisionMakerQq", boInformationCollect.getDecisionMakerQq());
			resultJson.put("decisionMakerWechat", boInformationCollect.getDecisionMakerWechat());
			resultJson.put("contactName", boInformationCollect.getContactName());
			resultJson.put("contactTitle", boInformationCollect.getContactTitle());
			resultJson.put("contactTitleDetail", boInformationCollect.getContactTitleDetail());
			resultJson.put("contactPhone", boInformationCollect.getContactPhone());
			resultJson.put("contactLandline", boInformationCollect.getContactLandline());
			resultJson.put("contactEmail", boInformationCollect.getContactEmail());
			resultJson.put("contactQq", boInformationCollect.getContactQq());
			resultJson.put("contactWechat", boInformationCollect.getContactWechat());
			resultJson.put("mainScope", boInformationCollect.getMainScope());
		}
		return resultJson;
	}
	
	@Transactional
	public JSONObject deleteBusinessOpportunityLog(JSONObject json){
		Long logId = json.getLong("logId");
		BusinessOpportunityLog businessOpportunityLog = businessOpportunityLogMapper.selectByPrimaryKey(logId);
		if("信息收集".equals(businessOpportunityLog.getEventType())){
			boInformationCollectMapper.deleteByBusinessOpportunityId(businessOpportunityLog.getBusinessOpportunityId());
		}else if("制定拜访计划".equals(businessOpportunityLog.getEventType())){
//			boInformationCollectMapper.deleteByLogId(logId);
		}else if("拜访客户".equals(businessOpportunityLog.getEventType())){
			
		}else if("商业谈判".equals(businessOpportunityLog.getEventType())){
			
		}else if("试用中".equals(businessOpportunityLog.getEventType())){
			
		}else if("招投标".equals(businessOpportunityLog.getEventType())){
			
		}else if("签约".equals(businessOpportunityLog.getEventType())){
			
		}else if("采购".equals(businessOpportunityLog.getEventType())){
			
		}else if("售后".equals(businessOpportunityLog.getEventType())){
			
		}else if("培训".equals(businessOpportunityLog.getEventType())){
			
		}else if("支持".equals(businessOpportunityLog.getEventType())){
			
		}else if("日常事项".equals(businessOpportunityLog.getEventType())){
			
		}
		//删除费用
//		boFeeDetailMapper.deleteByPrimaryKey(businessOpportunityLog.getDetailFeeId());
//		//删除日志
//		businessOpportunityLogMapper.deleteByPrimaryKey(logId);
		return null;
	}

	public boolean queryBoLogByBoId(Long businessOpportunityId) {
		List<BusinessOpportunityLog>  businessOpportunityLogList = businessOpportunityLogMapper.selectByBusinessOpportunityId(businessOpportunityId);
		if(!businessOpportunityLogList.isEmpty()){
			return true;
		}
		return false;
	}
	public Set<Long> queryIsPlaningBusiness(Long userId, Integer inPlaning) {
		List<BoVisitPlan> boVisitPlaning = boVisitPlanMapper.selectVisitPlaningByUserId(userId, inPlaning);
		Set<Long> list = new HashSet<Long>();
		if (!boVisitPlaning.isEmpty()) {
			for (BoVisitPlan boVisitPlan : boVisitPlaning) {
				list.add(boVisitPlan.getBusinessOpportunityId());
			}
		}
		return list;
	}
 	
}
