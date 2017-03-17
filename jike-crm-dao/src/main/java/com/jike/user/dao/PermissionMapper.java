package com.jike.user.dao;

import com.jike.user.model.Permission;

public interface PermissionMapper {
    int deleteByPrimaryKey(Long permissionId);

    int insert(Permission record);

    int insertSelective(Permission record);

    Permission selectByPrimaryKey(Long permissionId);

    int updateByPrimaryKeySelective(Permission record);

    int updateByPrimaryKeyWithBLOBs(Permission record);

    int updateByPrimaryKey(Permission record);
}