package com.jike.crm.utils;

import java.util.ArrayList;
import java.util.List;

public class PageUtil {

	
    public static List<Integer> for_each (int  _currentPage,int _countPage,int  _showNum){  
        List<Integer> arr = new ArrayList<Integer>();  
        int right_size = _currentPage+2;
        int left_size = _currentPage-3;   
        if(_countPage>_showNum){  
            if(  right_size> _countPage ){  
                for(int i= (_countPage-_showNum+1) ; i < _currentPage ; i++){  
                    arr.add(i);  
                }  
                for(int i = _currentPage ; i <= _countPage ; i++){  
                    arr.add(i);  
                }                   
            }    
            else if(left_size <= 0){  
                for(int i = 1 ; i <= _showNum ; i++){  
                    arr.add(i);  
                }  
            }   
            else{  
                for(int i = left_size ; i < _currentPage ; i++){  
                    arr.add(i);  
                }  
                for(int i = _currentPage ; i <= right_size ; i++){  
                    arr.add(i );  
                }  
            }     
        }else{  
            for(int i = 1; i <= _countPage ; i++){  
                arr.add(i);  
            }  
        }  
        return arr;  
    }
}
