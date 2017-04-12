package com.jike.business.model;

import java.util.Date;
import java.math.BigDecimal;

public class BoVisit {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Long visitId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_plan_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Long visitPlanId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.log_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Long logId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visitor_name
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitorName;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visitor_title
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitorTitle;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_landline
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitLandline;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_phone
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitPhone;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_email
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitEmail;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_qq
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitQq;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_wechat
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitWechat;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_province
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitProvince;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_city
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitCity;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_country
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitCountry;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_address_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitAddressDetail;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.procurement_budget
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private BigDecimal procurementBudget;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.decision_maker_advice
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Integer decisionMakerAdvice;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visit_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitDetail;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.create_time
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Date createTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.create_by
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Long createBy;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.update_time
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Date updateTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.update_by
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private Long updateBy;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_visit.visitor_title_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	private String visitorTitleDetail;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_id
	 * @return  the value of bo_visit.visit_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Long getVisitId() {
		return visitId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_id
	 * @param visitId  the value for bo_visit.visit_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitId(Long visitId) {
		this.visitId = visitId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_plan_id
	 * @return  the value of bo_visit.visit_plan_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Long getVisitPlanId() {
		return visitPlanId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_plan_id
	 * @param visitPlanId  the value for bo_visit.visit_plan_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitPlanId(Long visitPlanId) {
		this.visitPlanId = visitPlanId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.log_id
	 * @return  the value of bo_visit.log_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Long getLogId() {
		return logId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.log_id
	 * @param logId  the value for bo_visit.log_id
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setLogId(Long logId) {
		this.logId = logId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visitor_name
	 * @return  the value of bo_visit.visitor_name
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitorName() {
		return visitorName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visitor_name
	 * @param visitorName  the value for bo_visit.visitor_name
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitorName(String visitorName) {
		this.visitorName = visitorName;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visitor_title
	 * @return  the value of bo_visit.visitor_title
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitorTitle() {
		return visitorTitle;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visitor_title
	 * @param visitorTitle  the value for bo_visit.visitor_title
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitorTitle(String visitorTitle) {
		this.visitorTitle = visitorTitle;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_landline
	 * @return  the value of bo_visit.visit_landline
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitLandline() {
		return visitLandline;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_landline
	 * @param visitLandline  the value for bo_visit.visit_landline
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitLandline(String visitLandline) {
		this.visitLandline = visitLandline;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_phone
	 * @return  the value of bo_visit.visit_phone
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitPhone() {
		return visitPhone;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_phone
	 * @param visitPhone  the value for bo_visit.visit_phone
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitPhone(String visitPhone) {
		this.visitPhone = visitPhone;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_email
	 * @return  the value of bo_visit.visit_email
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitEmail() {
		return visitEmail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_email
	 * @param visitEmail  the value for bo_visit.visit_email
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitEmail(String visitEmail) {
		this.visitEmail = visitEmail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_qq
	 * @return  the value of bo_visit.visit_qq
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitQq() {
		return visitQq;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_qq
	 * @param visitQq  the value for bo_visit.visit_qq
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitQq(String visitQq) {
		this.visitQq = visitQq;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_wechat
	 * @return  the value of bo_visit.visit_wechat
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitWechat() {
		return visitWechat;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_wechat
	 * @param visitWechat  the value for bo_visit.visit_wechat
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitWechat(String visitWechat) {
		this.visitWechat = visitWechat;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_province
	 * @return  the value of bo_visit.visit_province
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitProvince() {
		return visitProvince;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_province
	 * @param visitProvince  the value for bo_visit.visit_province
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitProvince(String visitProvince) {
		this.visitProvince = visitProvince;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_city
	 * @return  the value of bo_visit.visit_city
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitCity() {
		return visitCity;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_city
	 * @param visitCity  the value for bo_visit.visit_city
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitCity(String visitCity) {
		this.visitCity = visitCity;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_country
	 * @return  the value of bo_visit.visit_country
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitCountry() {
		return visitCountry;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_country
	 * @param visitCountry  the value for bo_visit.visit_country
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitCountry(String visitCountry) {
		this.visitCountry = visitCountry;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_address_detail
	 * @return  the value of bo_visit.visit_address_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitAddressDetail() {
		return visitAddressDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_address_detail
	 * @param visitAddressDetail  the value for bo_visit.visit_address_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitAddressDetail(String visitAddressDetail) {
		this.visitAddressDetail = visitAddressDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.procurement_budget
	 * @return  the value of bo_visit.procurement_budget
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public BigDecimal getProcurementBudget() {
		return procurementBudget;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.procurement_budget
	 * @param procurementBudget  the value for bo_visit.procurement_budget
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setProcurementBudget(BigDecimal procurementBudget) {
		this.procurementBudget = procurementBudget;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.decision_maker_advice
	 * @return  the value of bo_visit.decision_maker_advice
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Integer getDecisionMakerAdvice() {
		return decisionMakerAdvice;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.decision_maker_advice
	 * @param decisionMakerAdvice  the value for bo_visit.decision_maker_advice
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setDecisionMakerAdvice(Integer decisionMakerAdvice) {
		this.decisionMakerAdvice = decisionMakerAdvice;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visit_detail
	 * @return  the value of bo_visit.visit_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitDetail() {
		return visitDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visit_detail
	 * @param visitDetail  the value for bo_visit.visit_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitDetail(String visitDetail) {
		this.visitDetail = visitDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.create_time
	 * @return  the value of bo_visit.create_time
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Date getCreateTime() {
		return createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.create_time
	 * @param createTime  the value for bo_visit.create_time
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.create_by
	 * @return  the value of bo_visit.create_by
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Long getCreateBy() {
		return createBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.create_by
	 * @param createBy  the value for bo_visit.create_by
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setCreateBy(Long createBy) {
		this.createBy = createBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.update_time
	 * @return  the value of bo_visit.update_time
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Date getUpdateTime() {
		return updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.update_time
	 * @param updateTime  the value for bo_visit.update_time
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.update_by
	 * @return  the value of bo_visit.update_by
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public Long getUpdateBy() {
		return updateBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.update_by
	 * @param updateBy  the value for bo_visit.update_by
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setUpdateBy(Long updateBy) {
		this.updateBy = updateBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_visit.visitor_title_detail
	 * @return  the value of bo_visit.visitor_title_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public String getVisitorTitleDetail() {
		return visitorTitleDetail;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_visit.visitor_title_detail
	 * @param visitorTitleDetail  the value for bo_visit.visitor_title_detail
	 * @mbggenerated  Tue Apr 11 19:14:47 CST 2017
	 */
	public void setVisitorTitleDetail(String visitorTitleDetail) {
		this.visitorTitleDetail = visitorTitleDetail;
	}
}