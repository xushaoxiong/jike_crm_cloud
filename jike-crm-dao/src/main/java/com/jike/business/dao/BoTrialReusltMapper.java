package com.jike.business.dao;

import com.jike.business.model.BoTrialReuslt;

public interface BoTrialReusltMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_trial_reuslt
     *
     * @mbggenerated Mon Apr 10 15:51:57 CST 2017
     */
    int deleteByPrimaryKey(Long trialResultId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_trial_reuslt
     *
     * @mbggenerated Mon Apr 10 15:51:57 CST 2017
     */
    int insert(BoTrialReuslt record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_trial_reuslt
     *
     * @mbggenerated Mon Apr 10 15:51:57 CST 2017
     */
    int insertSelective(BoTrialReuslt record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_trial_reuslt
     *
     * @mbggenerated Mon Apr 10 15:51:57 CST 2017
     */
    BoTrialReuslt selectByPrimaryKey(Long trialResultId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_trial_reuslt
     *
     * @mbggenerated Mon Apr 10 15:51:57 CST 2017
     */
    int updateByPrimaryKeySelective(BoTrialReuslt record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_trial_reuslt
     *
     * @mbggenerated Mon Apr 10 15:51:57 CST 2017
     */
    int updateByPrimaryKey(BoTrialReuslt record);

    /**
     * 通过日志ID查询试用结果
     * @param logId
     * @return
     * @created wangyb
     * @createtime 2017年4月11日下午7:44:49
     */
	BoTrialReuslt selectTrialReusltByLogId(Long logId);
}