package com.jike.business.dao;

import com.jike.business.model.BoTrainLog;

public interface BoTrainLogMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_train_log
     *
     * @mbggenerated Fri May 19 09:46:04 CST 2017
     */
    int deleteByPrimaryKey(Integer boTrainId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_train_log
     *
     * @mbggenerated Fri May 19 09:46:04 CST 2017
     */
    int insert(BoTrainLog record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_train_log
     *
     * @mbggenerated Fri May 19 09:46:04 CST 2017
     */
    int insertSelective(BoTrainLog record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_train_log
     *
     * @mbggenerated Fri May 19 09:46:04 CST 2017
     */
    BoTrainLog selectByPrimaryKey(Integer boTrainId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_train_log
     *
     * @mbggenerated Fri May 19 09:46:04 CST 2017
     */
    int updateByPrimaryKeySelective(BoTrainLog record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_train_log
     *
     * @mbggenerated Fri May 19 09:46:04 CST 2017
     */
    int updateByPrimaryKey(BoTrainLog record);
}