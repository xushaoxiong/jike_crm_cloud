package com.jike.business.dao;

import java.util.List;

import com.jike.business.model.BoTrain;

public interface BoTrainMapper {
    /**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_train
	 * @mbggenerated  Thu May 18 15:49:55 CST 2017
	 */
	int deleteByPrimaryKey(Integer boTrainId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_train
	 * @mbggenerated  Thu May 18 15:49:55 CST 2017
	 */
	int insert(BoTrain record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_train
	 * @mbggenerated  Thu May 18 15:49:55 CST 2017
	 */
	int insertSelective(BoTrain record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_train
	 * @mbggenerated  Thu May 18 15:49:55 CST 2017
	 */
	BoTrain selectByPrimaryKey(Integer boTrainId);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_train
	 * @mbggenerated  Thu May 18 15:49:55 CST 2017
	 */
	int updateByPrimaryKeySelective(BoTrain record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table bo_train
	 * @mbggenerated  Thu May 18 15:49:55 CST 2017
	 */
	int updateByPrimaryKey(BoTrain record);

	List<BoTrain> selectBoTrainByLogId(Long logId);
}