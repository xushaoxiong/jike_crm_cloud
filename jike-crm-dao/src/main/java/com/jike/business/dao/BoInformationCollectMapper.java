package com.jike.business.dao;

import com.jike.business.model.BoInformationCollect;

public interface BoInformationCollectMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_information_collect
     *
     * @mbggenerated Thu Apr 06 12:16:12 CST 2017
     */
    int deleteByPrimaryKey(Long boInformationCollectId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_information_collect
     *
     * @mbggenerated Thu Apr 06 12:16:12 CST 2017
     */
    int insert(BoInformationCollect record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_information_collect
     *
     * @mbggenerated Thu Apr 06 12:16:12 CST 2017
     */
    int insertSelective(BoInformationCollect record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_information_collect
     *
     * @mbggenerated Thu Apr 06 12:16:12 CST 2017
     */
    BoInformationCollect selectByPrimaryKey(Long boInformationCollectId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_information_collect
     *
     * @mbggenerated Thu Apr 06 12:16:12 CST 2017
     */
    int updateByPrimaryKeySelective(BoInformationCollect record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table bo_information_collect
     *
     * @mbggenerated Thu Apr 06 12:16:12 CST 2017
     */
    int updateByPrimaryKey(BoInformationCollect record);
}