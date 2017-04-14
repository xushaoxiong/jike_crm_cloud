var pub={};
pub.Alt=function(text,flag,fun){
	var html='';
	html+='<div class="alert-del" style="width: 15%;z-index:10;background:#fff;height: 150px;border: 1px solid #ccc;position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;">';
 		html+='<div class="del-text text-center" style="height: 80px;padding: 20px;">'+text+'</div>';
 		html+='<div class="text-center">';
 	if(arguments[1]==true){
 		html+='<button class="btn btn-primary confirm" style="margin-right: 10px;">确定</button>';
	 	html+='<button class="btn btn-default concel">取消</button>';
 		html+='</div>';
 	
 	html+='</div>';
 	$('body,html').append(html);
	 	$('.concel').on('click',function(){
	 		$('.alert-del').hide();
	 	})
 	}else{
 		html+='<button class="btn btn-primary confirm" style="margin-right: 10px;padding:6px 20px;">确定</button>';
 		html+='</div>';
 	html+='</div>';
 	$('body,html').append(html);
	 	$('.confirm').on('click',function(){
	 		$('.alert-del').hide();
 	})
 	}
 	if(typeof arguments[2]=='function'){
 		fun();
 	}
	 	
}

	




//手机验证
function phoneCheck(phoneNum,selector){ 
	var phoneReg=/^1[34578]\d{9}$/;
//	if(phoneNum==''){
//		$(selector).html('请填写手机号！');
//		return false; 
//	}
    if(!phoneReg.test(phoneNum)){ 
        $(selector).html('手机号填写有误');
        return false; 
	}
    return true;
}
//固话验证
function Landline(LandlineNumb,selector){
	var LandLineReg=/^([0-9]{3,4}-)?[0-9]{7,8}$/;
	 if(!LandLineReg.test(LandlineNumb)){ 
        $(selector).html('座机号填写有误');
        return false; 
	}
	 return true;
}
//QQ验证
function QqCheck(QqeNumb,selector){
	var QqReg=/^\d{5,10}$/;
	 if(!QqReg.test(QqeNumb)){ 
        $(selector).html('QQ号填写有误');
        return false; 
	}
	 return true;
}
//邮箱验证
function isEmail(Email,selector){
	 var Emailreg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	 if(!Emailreg.test(Email)){
	 	$(selector).html('请填写正确邮箱！');
	 	return false;
	 }
	 return true;
}
//微信验证
function WechatCheck(WechatNumb,selector){
	var WechatReg=/^[a-zA-Z\d_]{5,}$/;
	 if(!WechatReg.test(WechatNumb)){
	 	$(selector).html('请填写正确微信号！');
	 	return false;
	 }
	 return true;
}
//只能输入数字，小数点最多为两位
function num(obj){
	obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
	obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
	obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
	obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
	obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
}
//验证正整数
function PosiintegerNum(obj){
	obj.value=obj.value.replace(/[^0-9]/g,'');
}






