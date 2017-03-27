package com.jike.user.utils.security;

import java.nio.charset.Charset;
import java.security.MessageDigest;

/**
 * 
 * @author wangyb
 *
 */
public class ShaDigestUtil {
    
    private MessageDigest sha;
    private Charset charset = Charset.forName("utf8");

    {
        try {
            sha = MessageDigest.getInstance("SHA-256");
        } catch (Exception ex) {
            System.out.println();
        }
    }
    private static final String HEXES = "0123456789abcdef";

    public static String getHex(byte[] raw) {
        if (raw == null) // or could just let throw NPE
        {
            return null;
        }
        final StringBuilder hex = new StringBuilder(2 * raw.length);
        for (final byte b : raw) {
            hex.append(HEXES.charAt((b & 0xF0) >> 4)).append(HEXES.charAt((b & 0x0F)));
        }
        return hex.toString();
    }

    public synchronized String encrypt(String plainText) {
        if (plainText == null || plainText.isEmpty()) {
            return null;
        }
        sha.reset();
        byte[] digest = sha.digest(plainText.getBytes(charset));
        return getHex(digest);
    }
   
}
