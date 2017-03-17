package com.jike.user.dao;

import com.jike.user.model.RolePermission;

public interface RolePermissionMapper {
    int deleteByPrimaryKey(Long rolePermissionId);

    int insert(RolePermission record);

    int insertSelective(RolePermission record);

    RolePermission selectByPrimaryKey(Long rolePermissionId);

    int updateByPrimaryKeySelective(RolePermission record);

    int updateByPrimaryKey(RolePermission record);
}