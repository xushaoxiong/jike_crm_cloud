package com.jike.business.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jike.business.BusinessOpportunityLogService;
import com.jike.business.BusinessOpportunityService;
import com.jike.business.dao.BoBiddingMapper;
import com.jike.business.dao.BoBiddingResultMapper;
import com.jike.business.dao.BoCustomerServiceMapper;
import com.jike.business.dao.BoFeeDetailMapper;
import com.jike.business.dao.BoInTrialMapper;
import com.jike.business.dao.BoInformationCollectMapper;
import com.jike.business.dao.BoNegotiationMapper;
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
import com.jike.business.model.BoBidding;
import com.jike.business.model.BoBiddingResult;
import com.jike.business.model.BoCustomerService;
import com.jike.business.model.BoFeeDetail;
import com.jike.business.model.BoInTrial;
import com.jike.business.model.BoInformationCollect;
import com.jike.business.model.BoNegotiation;
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
	
	public JSONObject queryInformationCollectionByBoId(JSONObject jsonData){
		JSONObject resultJson = new JSONObject();
		Long businessOpportunityId = jsonData.getLong("businessOpportunityId");
		BoInformationCollect boInformationCollect = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityId);
		if(boInformationCollect!=null){
			Object json = JSONObject.toJSON(boInformationCollect);
			JSONObject informationCollectJson = (JSONObject) json;
			if(informationCollectJson.get("createBy")!=null){
				informationCollectJson.remove("createBy");
			}
			if(informationCollectJson.get("createTime")!=null){
				informationCollectJson.remove("createTime");
			}
			if(informationCollectJson.get("updateBy")!=null){
				informationCollectJson.remove("updateBy");
			}
			if(informationCollectJson.get("updateTime")!=null){
				informationCollectJson.remove("updateTime");
			}
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			//保存日志
			JSONObject logData = jsonData.getJSONObject("logData");
			
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
			//保存信息收集
			JSONObject boInformationCollectJson = jsonData.getJSONObject("boInformationCollect");
			String informationSources = boInformationCollectJson.getString("informationSources");
			String schoolScale = boInformationCollectJson.getString("schoolScale");
			String schoolLevel = boInformationCollectJson.getString("schoolLevel");
			Integer schoolProperty = boInformationCollectJson.getInteger("schoolProperty");
			String schoolType = boInformationCollectJson.getString("schoolType");
			String contactName = boInformationCollectJson.getString("contactName");
			String contactTitle = boInformationCollectJson.getString("contactTitle");
			String contactTitleDetail = boInformationCollectJson.getString("contactTitleDetail");
			String contactLandline = boInformationCollectJson.getString("contactLandline");
			String contactPhone = boInformationCollectJson.getString("contactPhone");
			String contactEmail = boInformationCollectJson.getString("contactEmail");
			String contactQq = boInformationCollectJson.getString("contactQq");
			String contactWechat = boInformationCollectJson.getString("contactWechat");
			String decisionMakerName = boInformationCollectJson.getString("decisionMakerName");
			String decisionMakerTitle = boInformationCollectJson.getString("decisionMakerTitle");
			String decisionMakerTitleDetail = boInformationCollectJson.getString("decisionMakerTitleDetail");
			String decisionMakerLandline = boInformationCollectJson.getString("decisionMakerLandline");
			String decisionMakerPhone = boInformationCollectJson.getString("decisionMakerPhone");
			String decisionMakerEmail = boInformationCollectJson.getString("decisionMakerEmail");
			String decisionMakerQq = boInformationCollectJson.getString("decisionMakerQq");
			String decisionMakerWechat = boInformationCollectJson.getString("decisionMakerWechat");
			Integer ifIntention = boInformationCollectJson.getInteger("ifIntention");
			Integer ifInterested = boInformationCollectJson.getInteger("ifInterested");
			String mainScope = boInformationCollectJson.getString("mainScope");
			String expectedCooperationType = boInformationCollectJson.getString("expectedCooperationType");
			
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
						&&decisionMakerName!=null&&decisionMakerTitle!=null
						&&(decisionMakerPhone!=null||decisionMakerPhone!=null||decisionMakerEmail!=null||decisionMakerQq!=null||decisionMakerWechat!=null)){
					//修改商机进度
					this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"信息收集完成");
				}
			}else if(businessOpportunityJson.getInteger("businessOpportunityType")==1){//合作伙伴
				if(informationSources!=null&&mainScope!=null
						&&expectedCooperationType!=null&&contactName!=null&&contactTitle!=null&&
						(contactLandline!=null||contactPhone!=null||contactEmail!=null||contactQq!=null||contactWechat!=null)
						&&decisionMakerName!=null&&decisionMakerTitle!=null
						&&(decisionMakerPhone!=null||decisionMakerPhone!=null||decisionMakerEmail!=null||decisionMakerQq!=null||decisionMakerWechat!=null)){
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
			this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"准备拜访状态");
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
				if("达成合作意向".equals(logData.getString("specificEvent"))){
					JSONObject cooperationDetailsJson = jsonData.getJSONObject("cooperationDetails");
					CooperationDetails cooperationDetails = cooperationDetailsJson.toJavaObject(CooperationDetails.class);
					cooperationDetails.setVisitId(boVisit.getVisitId());
					cooperationDetails.setCreateTime(nowDate);
					cooperationDetails.setCreateBy(jsonData.getLong("userId"));
					cooperationDetailsMapper.insert(cooperationDetails);
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
			if("承诺购买".equals(specificEvent)){
				this.updateBoProcess(jsonData, nowDate, businessOpportunityId,"签约准备");
			}else if("走招投标流程".equals(specificEvent)){
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
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
			JSONObject boBiddingJson = jsonData.getJSONObject("boBidding");
			String biddingMode = boBiddingJson.getString("biddingMode");
			String cooperativePartner = boBiddingJson.getString("cooperativePartner");
			String networkLink = boBiddingJson.getString("networkLink");
			Integer ifHaveBusinessFee = boBiddingJson.getInteger("ifHaveBusinessFee");
			
			BoBidding boBidding = new BoBidding();
			boBidding.setBusinessOpportunityId(businessOpportunityId);
			boBidding.setLogId(logId);
			boBidding.setBiddingMode(biddingMode);
			boBidding.setCooperativePartner(cooperativePartner);
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
			JSONObject boSignJson = jsonData.getJSONObject("boSign");
			Date signDate = boSignJson.getDate("signDate");
			BigDecimal signAmonut = boSignJson.getBigDecimal("signAmonut");
			String assessmentIndex = boSignJson.getString("assessmentIndex");
			Date assessmentPeriodBeginTime = boSignJson.getDate("assessmentPeriodBeginTime");
			Date assessmentPeriodEndTime = boSignJson.getDate("assessmentPeriodEndTime");
			
			BoSign boSign = new BoSign();
			boSign.setBusinessOpportunityId(businessOpportunityId);
			boSign.setLogId(logId);
			boSign.setSignDate(signDate);
			boSign.setSignAmonut(signAmonut);
			boSign.setAssessmentIndex(assessmentIndex);
			boSign.setAssessmentPeriodBeginTime(assessmentPeriodBeginTime);
			boSign.setAssessmentPeriodEndTime(assessmentPeriodEndTime);
			boSign.setCreateTime(nowDate);
			boSign.setCreateBy(jsonData.getLong("userId"));
			boSignMapper.insert(boSign);
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, null);
			
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
	public JSONObject addBOLogBoSupport(JSONObject jsonData) {
		JSONObject resultJson = new JSONObject();
		if (jsonData != null && !jsonData.isEmpty()) {
			Date nowDate = new Date();
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
			JSONObject boSupportJson = jsonData.getJSONObject("boSupport");
			Integer accountOpenCount = boSupportJson.getInteger("accountOpenCount");
			Integer informationConfirmationCount = boSupportJson.getInteger("informationConfirmationCount");
			
			BoSupport boSupport = new BoSupport();
			boSupport.setBusinessOpportunityId(businessOpportunityId);
			boSupport.setLogId(logId);
			boSupport.setAccountOpenCount(accountOpenCount);
			boSupport.setInformationConfirmationCount(informationConfirmationCount);
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
			JSONObject boTrainJson = jsonData.getJSONObject("boTrain");
			Integer operationTrainingCount = boTrainJson.getInteger("operationTrainingCount");
			Integer correctingTrainingCount = boTrainJson.getInteger("correctingTrainingCount");
			
			BoTrain boTrain = new BoTrain();
			boTrain.setBusinessOpportunityId(businessOpportunityId);
			boTrain.setLogId(logId);
			boTrain.setOperationTrainingCount(operationTrainingCount);
			boTrain.setCorrectingTrainingCount(correctingTrainingCount);
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
			//保存费用
			JSONObject totalDetail = jsonData.getJSONObject("totalDetail");
			Long detailFeeId = null;
			if (totalDetail != null) {
				detailFeeId = this.createBoFeeDatail(jsonData, nowDate, totalDetail);
			}
			JSONObject logData = jsonData.getJSONObject("logData");
			Long businessOpportunityId = logData.getLong("businessOpportunityId");
			//保存日志
			Long logId = this.createLogData(jsonData, nowDate, detailFeeId, logData, businessOpportunityId);
			
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
	

	private void updateBoProcess(JSONObject jsonData, Date nowDate, Long businessOpportunityId, String process) {
		JSONObject json = new JSONObject();
		json.put("businessOpportunityId", businessOpportunityId);
		json.put("businessOpportunityProcess", process);
		json.put("userId", jsonData.getLong("userId"));
		json.put("nowDate", nowDate);
		businessOpportunityService.updateBusinessOpportunityProcess(json);
	}

	private Long createLogData(JSONObject jsonData, Date nowDate, Long detailFeeId, JSONObject logData,Long businessOpportunityId) {
		Date logDate = logData.getDate("logDate");
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
		if (roleId == 2) {// 商务查看所有角色
			userId = null;
		}
		
		int totalCount = businessOpportunityLogMapper.getBusinessOpportunityLogCount(businessOpportunityName,startTime,endTime,eventType,userId);
		int startPosition = (start - 1) * pageSize;
		List<Map<String,Object>> businessOpportunityLogList = businessOpportunityLogMapper.getBusinessOpportunityLogByPage(businessOpportunityName,startTime,endTime,eventType,userId,startPosition,pageSize);
		JSONArray businessOpportunityLogArr = new JSONArray();
		if(!businessOpportunityLogList.isEmpty()){
			for (Map<String, Object> businessOpportunityLogMap : businessOpportunityLogList) {
				JSONObject businessOpportunityJson = new JSONObject();
				Date logDateLong = (Date) businessOpportunityLogMap.get("log_date");
				businessOpportunityJson.put("logId", businessOpportunityLogMap.get("log_id"));
				businessOpportunityJson.put("logDate", DateUtil.getDateFormat(logDateLong, "yyyy-MM-dd"));
				businessOpportunityJson.put("businessOpportunityName", businessOpportunityLogMap.get("business_opportunity_name"));
				businessOpportunityJson.put("eventType", businessOpportunityLogMap.get("event_type"));
				businessOpportunityJson.put("specificEvent", businessOpportunityLogMap.get("specific_event"));
				businessOpportunityJson.put("workingHours", businessOpportunityLogMap.get("working_hours"));
				businessOpportunityJson.put("internalParticipant", businessOpportunityLogMap.get("internal_participant"));
				businessOpportunityJson.put("externalParticipant", businessOpportunityLogMap.get("external_participant"));
				//查询总费用
				Object detailFeeIdObj =  businessOpportunityLogMap.get("detail_fee_id");
				BigDecimal totalFee = new BigDecimal(0);
				if(detailFeeIdObj!=null){
					Long detailFeeId = (Long) detailFeeIdObj;
					BoFeeDetail boFeeDetail = boFeeDetailMapper.selectByPrimaryKey(detailFeeId);
					BigDecimal trafficFee = boFeeDetail.getTrafficFee();
					BigDecimal hotelFee = boFeeDetail.getHotelFee();
					BigDecimal foodFee = boFeeDetail.getFoodFee();
					BigDecimal entertainFee = boFeeDetail.getEntertainFee();
					BigDecimal giftFee = boFeeDetail.getGiftFee();
					BigDecimal otherFee = boFeeDetail.getOtherFee();
					BigDecimal advanceFee = boFeeDetail.getAdvanceFee();
					if(trafficFee!=null){
						totalFee = totalFee.add(trafficFee);
					}
					if(hotelFee!=null){
						totalFee = totalFee.add(hotelFee);
					}
					if(foodFee!=null){
						totalFee = totalFee.add(foodFee);
					}
					if(entertainFee!=null){
						totalFee = totalFee.add(entertainFee);
					}
					if(giftFee!=null){
						totalFee = totalFee.add(giftFee);
					}
					if(otherFee!=null){
						totalFee = totalFee.add(otherFee);
					}
					if(advanceFee!=null){
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
				businessOpportunityJson.put("roleName", role.getRoleName());
				
				if(!queryJson.getLong("userId").equals(createBy)){
					businessOpportunityJson.put("authority", 1);
				}else{
					businessOpportunityJson.put("authority", 0);
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
		Object json  = null;
		if("信息收集".equals(businessOpportunityLog.getEventType())){
			BoInformationCollect boInformationCollect = boInformationCollectMapper.selectByBusinessOpportunityId(businessOpportunityId);
			json = JSONObject.toJSON(boInformationCollect);
		}else if("制定拜访计划".equals(businessOpportunityLog.getEventType())){
			BoVisitPlan boVisitPlan = boVisitPlanMapper.selectVisitPlanByLogId(logId);
			json = JSONObject.toJSON(boVisitPlan);
		}else if("拜访客户".equals(businessOpportunityLog.getEventType())){
			BoVisit boVisit = boVisitMapper.selectVisitByLogId(logId);
			json = JSONObject.toJSON(boVisit);
				//如果是达成合作意向，保存合作详情
				if("达成合作意向".equals(businessOpportunityLog.getSpecificEvent())){
					CooperationDetails cooperationDetails =cooperationDetailsMapper.selectByVisitId(boVisit.getVisitId());
					Object json2 = JSONObject.toJSON(cooperationDetails);
					JSONObject cooperationDetailsJson = (JSONObject) json2;
					removeCommonAttribute(cooperationDetailsJson);
					JSONObject comJson = (JSONObject)json;
					comJson.put("cooperationDetailsJson", cooperationDetailsJson);
					json = comJson;
				}
		}else if("商业谈判".equals(businessOpportunityLog.getEventType())){
			BoNegotiation boNegotiation = boNegotiationMapper.selectNegotiationByLogId(logId);
			json = JSONObject.toJSON(boNegotiation);
		}else if("试用准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoInTrial boInTrial = boInTrialMapper.selectInTrialByLogId(logId);
			json = JSONObject.toJSON(boInTrial);
		}else if(businessOpportunityLog.getSpecificEvent().startsWith("试用结果")){
			BoTrialReuslt boTrialReust = boTrialReusltMapper.selectTrialReusltByLogId(logId);
			json = JSONObject.toJSON(boTrialReust);
		}else if("投标准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoBidding boBidding = boBiddingMapper.selectBoBiddingByLogId(logId);
			json = JSONObject.toJSON(boBidding);
		}else if("投标成功".equals(businessOpportunityLog.getSpecificEvent())||"投标失败".equals(businessOpportunityLog.getSpecificEvent())){
			BoBiddingResult boBiddingResult = boBiddingResultMapper.selectBoBiddingResultByLogId(logId);
			json = JSONObject.toJSON(boBiddingResult);
		}else if("签约".equals(businessOpportunityLog.getSpecificEvent())){
			BoSign boSign = boSignMapper.selectBoSignByLogId(logId);
			json = JSONObject.toJSON(boSign);
		}else if("采购".equals(businessOpportunityLog.getSpecificEvent())){
			BoPurchase boPurchase = boPurchaseMapper.selectBoPurchaseByLogId(logId);
			json = JSONObject.toJSON(boPurchase);
		}else if("售后".equals(businessOpportunityLog.getSpecificEvent())){
			BoCustomerService boCustomerService = boCustomerServiceMapper.selectBoCustomerServiceByLogId(logId);
			json = JSONObject.toJSON(boCustomerService);
		}else if("培训".equals(businessOpportunityLog.getSpecificEvent())){
			BoTrain boTrain = boTrainMapper.selectBoTrainByLogId(logId);
			json = JSONObject.toJSON(boTrain);
		}else if("支持".equals(businessOpportunityLog.getSpecificEvent())){
			BoSupport boSupport = boSupportMapper.selectBoSupportByLogId(logId);
			json = JSONObject.toJSON(boSupport);
		}else if("日常事项".equals(businessOpportunityLog.getSpecificEvent())){
			DailyEvents dailyEvents = dailyEventsMapper.selectDailyEventsByLogId(logId);
			json = JSONObject.toJSON(dailyEvents);
		}
		JSONObject commonJson = (JSONObject) json;
		removeCommonAttribute(commonJson);
		
		JSONObject  businessOpportunityLogJson = (JSONObject) JSONObject.toJSON(businessOpportunityLog);
		removeCommonAttribute(businessOpportunityLogJson);
		BoFeeDetail boFeeDetail = boFeeDetailMapper.selectByPrimaryKey(businessOpportunityLog.getDetailFeeId());
		JSONObject  boFeeDetailJson = (JSONObject) JSONObject.toJSON(boFeeDetail);
		removeCommonAttribute(boFeeDetailJson);
		resultJson.put("businessOpportunityLogJson", businessOpportunityLogJson);
		resultJson.put("boFeeDetailJson", boFeeDetailJson);
		resultJson.put("commonJson", commonJson);
		resultJson.put("state", "success");
		resultJson.put("message", "查询成功");
		return resultJson;
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
		businessOpportunityLogMapper.updateByPrimaryKey(businessOpportunityLog);
		//更新费用表
		JSONObject boFeeDetailJson = updateJson.getJSONObject("boFeeDetailJson");
		BoFeeDetail boFeeDetail = boFeeDetailJson.toJavaObject(BoFeeDetail.class);
		boFeeDetailMapper.updateByPrimaryKey(boFeeDetail);
		Long userId = updateJson.getLong("userId");
		Date nowDate = new Date();
		//更新日志的对应信息表
		JSONObject commonJson = updateJson.getJSONObject("commonJson");
		if("信息收集".equals(businessOpportunityLog.getEventType())){
			BoInformationCollect boInformationCollect = commonJson.toJavaObject(BoInformationCollect.class);
			boInformationCollect.setUpdateBy(userId);
			boInformationCollect.setUpdateTime(nowDate);
			boInformationCollectMapper.updateByPrimaryKey(boInformationCollect);
		}else if("制定拜访计划".equals(businessOpportunityLog.getEventType())){
			BoVisitPlan boVisitPlan =  commonJson.toJavaObject(BoVisitPlan.class);
			boVisitPlan.setUpdateBy(userId);
			boVisitPlan.setUpdateTime(nowDate);
			boVisitPlanMapper.updateByPrimaryKey(boVisitPlan);
		}else if("拜访客户".equals(businessOpportunityLog.getEventType())){
			BoVisit boVisit =  commonJson.toJavaObject(BoVisit.class);
			boVisit.setUpdateBy(userId);
			boVisit.setUpdateTime(nowDate);
			boVisitMapper.updateByPrimaryKey(boVisit);
		}else if("商业谈判".equals(businessOpportunityLog.getEventType())){
			BoNegotiation boNegotiation =  commonJson.toJavaObject(BoNegotiation.class);
			boNegotiation.setUpdateBy(userId);
			boNegotiation.setUpdateTime(nowDate);
			boNegotiationMapper.updateByPrimaryKey(boNegotiation);
		}else if("试用准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoInTrial boInTrial = commonJson.toJavaObject(BoInTrial.class);
			boInTrial.setUpdateBy(userId);
			boInTrial.setUpdateTime(nowDate);
			boInTrialMapper.updateByPrimaryKey(boInTrial);
		}else if(businessOpportunityLog.getSpecificEvent().startsWith("试用结果")){
			BoTrialReuslt boTrialReust = commonJson.toJavaObject(BoTrialReuslt.class);
			boTrialReust.setUpdateBy(userId);
			boTrialReust.setUpdateTime(nowDate);
			boTrialReusltMapper.updateByPrimaryKey(boTrialReust);
		}else if("投标准备".equals(businessOpportunityLog.getSpecificEvent())){
			BoBidding boBidding = commonJson.toJavaObject(BoBidding.class);
			boBidding.setUpdateBy(userId);
			boBidding.setUpdateTime(nowDate);
			boBiddingMapper.updateByPrimaryKey(boBidding);
		}else if("投标成功".equals(businessOpportunityLog.getSpecificEvent())||"投标失败".equals(businessOpportunityLog.getSpecificEvent())){
			BoBiddingResult boBiddingResult = commonJson.toJavaObject(BoBiddingResult.class);
			boBiddingResult.setUpdateBy(userId);
			boBiddingResult.setUpdateTime(nowDate);
			boBiddingResultMapper.updateByPrimaryKey(boBiddingResult);
		}else if("签约".equals(businessOpportunityLog.getSpecificEvent())){
			BoSign boSign = commonJson.toJavaObject(BoSign.class);
			boSign.setUpdateBy(userId);
			boSign.setUpdateTime(nowDate);
			boSignMapper.updateByPrimaryKey(boSign);
		}else if("采购".equals(businessOpportunityLog.getSpecificEvent())){
			BoPurchase boPurchase = commonJson.toJavaObject(BoPurchase.class);
			boPurchase.setUpdateBy(userId);
			boPurchase.setUpdateTime(nowDate);
			boPurchaseMapper.updateByPrimaryKey(boPurchase);
		}else if("售后".equals(businessOpportunityLog.getSpecificEvent())){
			BoCustomerService boCustomerService = commonJson.toJavaObject(BoCustomerService.class);
			boCustomerService.setUpdateBy(userId);
			boCustomerService.setUpdateTime(nowDate);
			boCustomerServiceMapper.updateByPrimaryKey(boCustomerService);
		}else if("培训".equals(businessOpportunityLog.getSpecificEvent())){
			BoTrain boTrain = commonJson.toJavaObject(BoTrain.class);
			boTrain.setUpdateBy(userId);
			boTrain.setUpdateTime(nowDate);
			boTrainMapper.updateByPrimaryKey(boTrain);
		}else if("支持".equals(businessOpportunityLog.getSpecificEvent())){
			BoSupport boSupport = commonJson.toJavaObject(BoSupport.class);
			boSupport.setUpdateBy(userId);
			boSupport.setUpdateTime(nowDate);
			boSupportMapper.updateByPrimaryKey(boSupport);
		}else if("日常事项".equals(businessOpportunityLog.getSpecificEvent())){
			DailyEvents dailyEvents = commonJson.toJavaObject(DailyEvents.class);
			dailyEvents.setUpdateBy(userId);
			dailyEvents.setUpdateTime(nowDate);
			dailyEventsMapper.updateByPrimaryKey(dailyEvents);
		}
		resultJson.put("state", "success");
		resultJson.put("message", "更新成功");
		return resultJson;
		
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
		resultJson.put("schoolLevel", boInformationCollect.getSchoolLevel());
		resultJson.put("schoolProperty", boInformationCollect.getSchoolProperty());
		resultJson.put("schoolType", boInformationCollect.getSchoolType());
		resultJson.put("mainScope", boInformationCollect.getMainScope());
		resultJson.put("decisionMakerName", boInformationCollect.getDecisionMakerName());
		resultJson.put("decisionMakerTitle", boInformationCollect.getDecisionMakerTitle());
		resultJson.put("decisionMakerTitleDetail", boInformationCollect.getDecisionMakerTitleDetail());
		resultJson.put("decisionMakerPhone", boInformationCollect.getDecisionMakerPhone());
		resultJson.put("contactName", boInformationCollect.getContactName());
		resultJson.put("contactTitle", boInformationCollect.getContactTitle());
		resultJson.put("contactTitleDetail", boInformationCollect.getContactTitleDetail());
		resultJson.put("contactPhone", boInformationCollect.getContactPhone());
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
	
}
