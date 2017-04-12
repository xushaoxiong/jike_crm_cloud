package com.jike.business.enums;

public enum SaleFlowState {  
	XXSJ(1, "信息收集"),
	XXSJWC(2, "信息收集完成"),
	ZBBF(3, "准备拜访"),
	BF(4, "拜访"), 
	TP(5, "谈判"),
	DSY(6, "待试用"),
	SYZ(7, "试用中"),
	DZTB(8, "待招投标"),
	ZTB(9, "招投标"),
	QYZB(10, "签约准备"),
	QYWC(11, "签约完成"),
	CGJH(12, "采购完成");
    // 成员变量  
    private String name;  
    private int index;  
    // 构造方法  
    private SaleFlowState(int index,String name) {  
        this.name = name;  
        this.index = index;  
    }  
    // 普通方法  
    public static int getValue(String name) {  
        for (SaleFlowState c : SaleFlowState.values()) {  
            if (c.getName().equals(name)) {  
                return c.index;  
            }  
        }  
        return 0;  
    }  
    // get set 方法  
    public String getName() {  
        return name;  
    }  
    public void setName(String name) {  
        this.name = name;  
    }  
    public int getIndex() {  
        return index;  
    }  
    public void setIndex(int index) {  
        this.index = index;  
    }  
}