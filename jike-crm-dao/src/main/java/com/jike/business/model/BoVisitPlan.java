package com.jike.business.model;

import java.util.Date;
import java.math.BigDecimal;

public class BoVisitPlan {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_plan_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Long visitPlanId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.business_opportunity_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Long businessOpportunityId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.log_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Long logId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_plan_name
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitPlanName;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_name
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorName;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_title
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorTitle;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_landline
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorLandline;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_phone
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorPhone;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_email
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorEmail;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_qq
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorQq;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visitor_wechat
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitorWechat;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_plan_date
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Date visitPlanDate;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_province
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitProvince;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_city
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitCity;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_country
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitCountry;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_address_detail
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitAddressDetail;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.traffic_tool
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String trafficTool;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_objective
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitObjective;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.estimate_fee
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private BigDecimal estimateFee;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.tools
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String tools;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.visit_plan_reason
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private String visitPlanReason;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.create_time
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Date createTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.create_by
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Long createBy;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.update_time
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Long updateTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit_plan.update_by
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	private Long updateBy;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_plan_id
	 * @return  the value of bo_visit_plan.visit_plan_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Long getVisitPlanId() {
		return visitPlanId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_plan_id
	 * @param visitPlanId  the value for bo_visit_plan.visit_plan_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitPlanId(Long visitPlanId) {
		this.visitPlanId = visitPlanId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.business_opportunity_id
	 * @return  the value of bo_visit_plan.business_opportunity_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Long getBusinessOpportunityId() {
		return businessOpportunityId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.business_opportunity_id
	 * @param businessOpportunityId  the value for bo_visit_plan.business_opportunity_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setBusinessOpportunityId(Long businessOpportunityId) {
		this.businessOpportunityId = businessOpportunityId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.log_id
	 * @return  the value of bo_visit_plan.log_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Long getLogId() {
		return logId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.log_id
	 * @param logId  the value for bo_visit_plan.log_id
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setLogId(Long logId) {
		this.logId = logId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_plan_name
	 * @return  the value of bo_visit_plan.visit_plan_name
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitPlanName() {
		return visitPlanName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_plan_name
	 * @param visitPlanName  the value for bo_visit_plan.visit_plan_name
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitPlanName(String visitPlanName) {
		this.visitPlanName = visitPlanName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_name
	 * @return  the value of bo_visit_plan.visitor_name
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorName() {
		return visitorName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_name
	 * @param visitorName  the value for bo_visit_plan.visitor_name
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorName(String visitorName) {
		this.visitorName = visitorName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_title
	 * @return  the value of bo_visit_plan.visitor_title
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorTitle() {
		return visitorTitle;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_title
	 * @param visitorTitle  the value for bo_visit_plan.visitor_title
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorTitle(String visitorTitle) {
		this.visitorTitle = visitorTitle;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_landline
	 * @return  the value of bo_visit_plan.visitor_landline
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorLandline() {
		return visitorLandline;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_landline
	 * @param visitorLandline  the value for bo_visit_plan.visitor_landline
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorLandline(String visitorLandline) {
		this.visitorLandline = visitorLandline;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_phone
	 * @return  the value of bo_visit_plan.visitor_phone
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorPhone() {
		return visitorPhone;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_phone
	 * @param visitorPhone  the value for bo_visit_plan.visitor_phone
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorPhone(String visitorPhone) {
		this.visitorPhone = visitorPhone;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_email
	 * @return  the value of bo_visit_plan.visitor_email
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorEmail() {
		return visitorEmail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_email
	 * @param visitorEmail  the value for bo_visit_plan.visitor_email
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorEmail(String visitorEmail) {
		this.visitorEmail = visitorEmail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_qq
	 * @return  the value of bo_visit_plan.visitor_qq
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorQq() {
		return visitorQq;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_qq
	 * @param visitorQq  the value for bo_visit_plan.visitor_qq
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorQq(String visitorQq) {
		this.visitorQq = visitorQq;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visitor_wechat
	 * @return  the value of bo_visit_plan.visitor_wechat
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitorWechat() {
		return visitorWechat;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visitor_wechat
	 * @param visitorWechat  the value for bo_visit_plan.visitor_wechat
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitorWechat(String visitorWechat) {
		this.visitorWechat = visitorWechat;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_plan_date
	 * @return  the value of bo_visit_plan.visit_plan_date
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Date getVisitPlanDate() {
		return visitPlanDate;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_plan_date
	 * @param visitPlanDate  the value for bo_visit_plan.visit_plan_date
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitPlanDate(Date visitPlanDate) {
		this.visitPlanDate = visitPlanDate;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_province
	 * @return  the value of bo_visit_plan.visit_province
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitProvince() {
		return visitProvince;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_province
	 * @param visitProvince  the value for bo_visit_plan.visit_province
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitProvince(String visitProvince) {
		this.visitProvince = visitProvince;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_city
	 * @return  the value of bo_visit_plan.visit_city
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitCity() {
		return visitCity;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_city
	 * @param visitCity  the value for bo_visit_plan.visit_city
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitCity(String visitCity) {
		this.visitCity = visitCity;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_country
	 * @return  the value of bo_visit_plan.visit_country
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitCountry() {
		return visitCountry;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_country
	 * @param visitCountry  the value for bo_visit_plan.visit_country
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitCountry(String visitCountry) {
		this.visitCountry = visitCountry;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_address_detail
	 * @return  the value of bo_visit_plan.visit_address_detail
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitAddressDetail() {
		return visitAddressDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_address_detail
	 * @param visitAddressDetail  the value for bo_visit_plan.visit_address_detail
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitAddressDetail(String visitAddressDetail) {
		this.visitAddressDetail = visitAddressDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.traffic_tool
	 * @return  the value of bo_visit_plan.traffic_tool
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getTrafficTool() {
		return trafficTool;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.traffic_tool
	 * @param trafficTool  the value for bo_visit_plan.traffic_tool
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setTrafficTool(String trafficTool) {
		this.trafficTool = trafficTool;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_objective
	 * @return  the value of bo_visit_plan.visit_objective
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitObjective() {
		return visitObjective;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_objective
	 * @param visitObjective  the value for bo_visit_plan.visit_objective
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitObjective(String visitObjective) {
		this.visitObjective = visitObjective;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.estimate_fee
	 * @return  the value of bo_visit_plan.estimate_fee
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public BigDecimal getEstimateFee() {
		return estimateFee;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.estimate_fee
	 * @param estimateFee  the value for bo_visit_plan.estimate_fee
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setEstimateFee(BigDecimal estimateFee) {
		this.estimateFee = estimateFee;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.tools
	 * @return  the value of bo_visit_plan.tools
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getTools() {
		return tools;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.tools
	 * @param tools  the value for bo_visit_plan.tools
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setTools(String tools) {
		this.tools = tools;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.visit_plan_reason
	 * @return  the value of bo_visit_plan.visit_plan_reason
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public String getVisitPlanReason() {
		return visitPlanReason;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.visit_plan_reason
	 * @param visitPlanReason  the value for bo_visit_plan.visit_plan_reason
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setVisitPlanReason(String visitPlanReason) {
		this.visitPlanReason = visitPlanReason;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.create_time
	 * @return  the value of bo_visit_plan.create_time
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Date getCreateTime() {
		return createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.create_time
	 * @param createTime  the value for bo_visit_plan.create_time
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.create_by
	 * @return  the value of bo_visit_plan.create_by
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Long getCreateBy() {
		return createBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.create_by
	 * @param createBy  the value for bo_visit_plan.create_by
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setCreateBy(Long createBy) {
		this.createBy = createBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.update_time
	 * @return  the value of bo_visit_plan.update_time
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Long getUpdateTime() {
		return updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.update_time
	 * @param updateTime  the value for bo_visit_plan.update_time
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setUpdateTime(Long updateTime) {
		this.updateTime = updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit_plan.update_by
	 * @return  the value of bo_visit_plan.update_by
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public Long getUpdateBy() {
		return updateBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit_plan.update_by
	 * @param updateBy  the value for bo_visit_plan.update_by
	 * @mbggenerated  Mon Apr 10 08:50:09 CST 2017
	 */
	public void setUpdateBy(Long updateBy) {
		this.updateBy = updateBy;
	}
}