var pub={};
pub.Alt=function(text,flag,callback){
	$('.alertdiv').show();
	var html='';
	html+='<div class="alert-del" style="width:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,0.5);z-index:1100;">';
	html+='<div style="width: 15%;z-index:1052;background:#fff;height: 150px;border: 1px solid #ccc;border-radius:5px;position: fixed;top: 0;left: 0;bottom: 0;right: 0;margin: auto;">';
   		html+='<div class="del-text text-center" style="height: 80px;padding: 20px;font-size:14px;">'+text+'</div>';
   		html+='<div class="text-center">';
   	if(arguments[1]==true){
   		html+='<button class="btn btn-primary confirm" style="margin-right: 10px;">确定</button>';
	 	html+='<button class="btn btn-default concel">取消</button>';
   		html+='</div>';
   	
   	html+='</div>';
   	html+='</div>';
   	$('.alertdiv').html(html);
	 	$('.concel').on('click',function(){
	 		$('.alert-del').hide();
	 	})
   	}else{
   		html+='<button class="btn btn-primary confirm" style="margin-right: 10px;padding:6px 20px;">确定</button>';
   		html+='</div>';
   	html+='</div>';
   	html+='</div>';
   	$('.alertdiv').html(html);
	 	$('.confirm').on('click',function(){
	 		$('.alert-del').hide();
   	})
   	}
   	if(typeof arguments[2]=='function'){
   		fun();
   	}
	$('.alert-del').height($(window).height());
}

//面包屑导航
	function breadnav(Fhtml,nexthtml,flag){
		var breadcrumbhtml="";
		breadcrumbhtml+='<li>'+Fhtml+'</li>';
		
		if(arguments[2]){
			breadcrumbhtml+='<li class="cursorm curBack"><a>'+nexthtml+'</a></li>';
			breadcrumbhtml+='<li>'+flag+'</li>';
		}else{
			breadcrumbhtml+='<li>'+nexthtml+'</li>';
		}
		$('.breadcrumb').html(breadcrumbhtml);
	}	


//固话加手机号验证
function contact(contNum,selector){
	var contantReg=/(^([0-9]{3,4}-)?[0-9]{7,8}$)|(^(\+86)?1[0-9]{10}$)/;
	if(!contantReg.test(contNum)){ 
        $(selector).html('联系方式填写有误');
        return false; 
	}
    return true;
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
//只能输入数字，小数点最多为一位
function worktimeNum(obj){
		obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
		obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
		obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
		obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3'); //只能输入一个小数
	}
//验证正整数
function PosiintegerNum(obj){
	obj.value=obj.value.replace(/[^0-9]/g,'');
}






