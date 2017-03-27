package com.jike.user.utils.security.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jike.user.utils.security.Password;
import com.jike.user.utils.security.ShaDigestUtil;


public class ShaPasswordImplV1 implements Password {

	private List<String> salt;
    private String fileName = "pass.v1.properties";
    private Logger logger = LoggerFactory.getLogger(ShaPasswordImplV1.class);
    private ShaDigestUtil sha;
    private String ver = "1";

    {
        try {
            sha = new ShaDigestUtil();
            this.loadSalt();
        } catch (Exception ex) {
            System.out.println();
        }
    }
    /**
     * 单项加密
     */
    public synchronized String encrypt(String password) {
        if (password == null || password.isEmpty()) {
            return null;
        }
        int index = Math.abs(password.hashCode() % salt.size());
        String p = ver + password + salt.get(index);
        return sha.encrypt(p);
    }

    /**
     * @return the fileName
     */
    public String getFileName() {
        return fileName;
    }

    private void loadSalt() {
        InputStream input = this.getClass().getClassLoader().getResourceAsStream(fileName);
        BufferedReader in = new BufferedReader(new InputStreamReader(input));
        try {

            if (this.salt != null) {
                salt.clear();
            } else {
                salt = new ArrayList<String>();
            }
            String str = in.readLine();
            while (str != null) {
                salt.add(str);
                str = in.readLine();
            }
        } catch (IOException ex) {
            logger.error("can't read salt file in " + fileName, ex);
        } finally {
            try {
                in.close();
            } catch (IOException ex) {
            }
        }
    }
    /**
     * @param fileName the fileName to set
     */
    public void setFileName(String fileName) {
        this.fileName = fileName;
        this.loadSalt();
    }
    
    public static void main(String[] args) {
        ShaPasswordImplV1 sp = new ShaPasswordImplV1();
        System.out.println(sp.encrypt("abc123"));
        System.out.println(sp.encrypt("654321"));
        System.out.println(sp.encrypt("demo"));
        
    }
}
