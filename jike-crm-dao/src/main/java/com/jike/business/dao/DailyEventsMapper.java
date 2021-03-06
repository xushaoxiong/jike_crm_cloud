package com.jike.business.dao;

import com.jike.business.model.DailyEvents;

public interface DailyEventsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table daily_events
     *
     * @mbggenerated Mon Apr 10 18:57:09 CST 2017
     */
    int deleteByPrimaryKey(Long dailyEventsId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table daily_events
     *
     * @mbggenerated Mon Apr 10 18:57:09 CST 2017
     */
    int insert(DailyEvents record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table daily_events
     *
     * @mbggenerated Mon Apr 10 18:57:09 CST 2017
     */
    int insertSelective(DailyEvents record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table daily_events
     *
     * @mbggenerated Mon Apr 10 18:57:09 CST 2017
     */
    DailyEvents selectByPrimaryKey(Long dailyEventsId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table daily_events
     *
     * @mbggenerated Mon Apr 10 18:57:09 CST 2017
     */
    int updateByPrimaryKeySelective(DailyEvents record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table daily_events
     *
     * @mbggenerated Mon Apr 10 18:57:09 CST 2017
     */
    int updateByPrimaryKey(DailyEvents record);

	DailyEvents selectDailyEventsByLogId(Long logId);
}