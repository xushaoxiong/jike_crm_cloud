package com.jike.business.dao;

import org.apache.ibatis.annotations.Param;

import com.jike.business.model.CityAreaCode;

public interface CityAreaCodeMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table city_area_code
     *
     * @mbggenerated Tue Apr 18 10:45:08 CST 2017
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table city_area_code
     *
     * @mbggenerated Tue Apr 18 10:45:08 CST 2017
     */
    int insert(CityAreaCode record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table city_area_code
     *
     * @mbggenerated Tue Apr 18 10:45:08 CST 2017
     */
    int insertSelective(CityAreaCode record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table city_area_code
     *
     * @mbggenerated Tue Apr 18 10:45:08 CST 2017
     */
    CityAreaCode selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table city_area_code
     *
     * @mbggenerated Tue Apr 18 10:45:08 CST 2017
     */
    int updateByPrimaryKeySelective(CityAreaCode record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table city_area_code
     *
     * @mbggenerated Tue Apr 18 10:45:08 CST 2017
     */
    int updateByPrimaryKey(CityAreaCode record);

	String selectByProvinceAndCity(@Param("province")String province, @Param("city")String city);
}