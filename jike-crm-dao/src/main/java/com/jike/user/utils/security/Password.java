package com.jike.user.utils.security;

/**
 * 密码单向加密
 * @author wangyb
 *
 */
public interface Password {
    public String encrypt(String password);
}