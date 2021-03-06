package com.jike.business.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jike.business.model.BoVisitPlan;

public interface BoVisitPlanMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_visit_plan
	 * @mbggenerated  Mon Apr 10 14:36:08 CST 2017
	 */
	int deleteByPrimaryKey(Long visitPlanId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_visit_plan
	 * @mbggenerated  Mon Apr 10 14:36:08 CST 2017
	 */
	int insert(BoVisitPlan record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_visit_plan
	 * @mbggenerated  Mon Apr 10 14:36:08 CST 2017
	 */
	int insertSelective(BoVisitPlan record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_visit_plan
	 * @mbggenerated  Mon Apr 10 14:36:08 CST 2017
	 */
	BoVisitPlan selectByPrimaryKey(Long visitPlanId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_visit_plan
	 * @mbggenerated  Mon Apr 10 14:36:08 CST 2017
	 */
	int updateByPrimaryKeySelective(BoVisitPlan record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_visit_plan
	 * @mbggenerated  Mon Apr 10 14:36:08 CST 2017
	 */
	int updateByPrimaryKey(BoVisitPlan record);

	/**
	 * 通过商机ID查询拜访计划
	 * @param businessOpportunityId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月7日下午5:49:01
	 */
	List<BoVisitPlan> selectVisitPlanByBusinessOpportunityId(Long businessOpportunityId);
	
	/**
	 * 通过商机ID,拜访计划状态查询拜访计划（0-未拜访 1-已拜访）
	 * @param businessOpportunityId
	 * @param isPlaning
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月10日上午10:29:41
	 */
	List<BoVisitPlan> selectVisitPlaningByBusinessOpportunityId(@Param("businessOpportunityId")Long businessOpportunityId,@Param("inPlaning")int inPlaning);

	/**
	 * 通过日志ID查询拜访计划
	 * @param logId
	 * @return
	 * @created wangyb
	 * @createtime 2017年4月11日下午6:53:13
	 */
	BoVisitPlan selectVisitPlanByLogId(Long logId);

	List<BoVisitPlan> selectVisitPlaningByUserId(@Param("userId")Long userId, @Param("inPlaning")int inPlaning);
}