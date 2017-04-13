package com.jike.business.model;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

import java.math.BigDecimal;

public class BoSign {

	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.sign_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Long signId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.business_opportunity_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Long businessOpportunityId;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.log_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Long logId;
	@JSONField (format="yyyy-MM-dd")
	private Date signDate;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.sign_amonut
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private BigDecimal signAmonut;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.assessment_index
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private String assessmentIndex;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.assessment_period_begin_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Date assessmentPeriodBeginTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.assessment_period_end_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Date assessmentPeriodEndTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.create_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Date createTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.create_by
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Long createBy;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.update_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Date updateTime;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database column bo_sign.update_by
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	private Long updateBy;

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.sign_id
	 * @return  the value of bo_sign.sign_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Long getSignId() {
		return signId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.sign_id
	 * @param signId  the value for bo_sign.sign_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setSignId(Long signId) {
		this.signId = signId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.business_opportunity_id
	 * @return  the value of bo_sign.business_opportunity_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Long getBusinessOpportunityId() {
		return businessOpportunityId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.business_opportunity_id
	 * @param businessOpportunityId  the value for bo_sign.business_opportunity_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setBusinessOpportunityId(Long businessOpportunityId) {
		this.businessOpportunityId = businessOpportunityId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.log_id
	 * @return  the value of bo_sign.log_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Long getLogId() {
		return logId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.log_id
	 * @param logId  the value for bo_sign.log_id
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setLogId(Long logId) {
		this.logId = logId;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.sign_date
	 * @return  the value of bo_sign.sign_date
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Date getSignDate() {
		return signDate;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.sign_date
	 * @param signDate  the value for bo_sign.sign_date
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setSignDate(Date signDate) {
		this.signDate = signDate;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.sign_amonut
	 * @return  the value of bo_sign.sign_amonut
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public BigDecimal getSignAmonut() {
		return signAmonut;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.sign_amonut
	 * @param signAmonut  the value for bo_sign.sign_amonut
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setSignAmonut(BigDecimal signAmonut) {
		this.signAmonut = signAmonut;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.assessment_index
	 * @return  the value of bo_sign.assessment_index
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public String getAssessmentIndex() {
		return assessmentIndex;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.assessment_index
	 * @param assessmentIndex  the value for bo_sign.assessment_index
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setAssessmentIndex(String assessmentIndex) {
		this.assessmentIndex = assessmentIndex;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.assessment_period_begin_time
	 * @return  the value of bo_sign.assessment_period_begin_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Date getAssessmentPeriodBeginTime() {
		return assessmentPeriodBeginTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.assessment_period_begin_time
	 * @param assessmentPeriodBeginTime  the value for bo_sign.assessment_period_begin_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setAssessmentPeriodBeginTime(Date assessmentPeriodBeginTime) {
		this.assessmentPeriodBeginTime = assessmentPeriodBeginTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.assessment_period_end_time
	 * @return  the value of bo_sign.assessment_period_end_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Date getAssessmentPeriodEndTime() {
		return assessmentPeriodEndTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.assessment_period_end_time
	 * @param assessmentPeriodEndTime  the value for bo_sign.assessment_period_end_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setAssessmentPeriodEndTime(Date assessmentPeriodEndTime) {
		this.assessmentPeriodEndTime = assessmentPeriodEndTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.create_time
	 * @return  the value of bo_sign.create_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Date getCreateTime() {
		return createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.create_time
	 * @param createTime  the value for bo_sign.create_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.create_by
	 * @return  the value of bo_sign.create_by
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Long getCreateBy() {
		return createBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.create_by
	 * @param createBy  the value for bo_sign.create_by
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setCreateBy(Long createBy) {
		this.createBy = createBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.update_time
	 * @return  the value of bo_sign.update_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Date getUpdateTime() {
		return updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.update_time
	 * @param updateTime  the value for bo_sign.update_time
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	/**
	 * This method was generated by MyBatis Generator. This method returns the value of the database column bo_sign.update_by
	 * @return  the value of bo_sign.update_by
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public Long getUpdateBy() {
		return updateBy;
	}

	/**
	 * This method was generated by MyBatis Generator. This method sets the value of the database column bo_sign.update_by
	 * @param updateBy  the value for bo_sign.update_by
	 * @mbggenerated  Thu Apr 13 10:14:44 CST 2017
	 */
	public void setUpdateBy(Long updateBy) {
		this.updateBy = updateBy;
	}

}