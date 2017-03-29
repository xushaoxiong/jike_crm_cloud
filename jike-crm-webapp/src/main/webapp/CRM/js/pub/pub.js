var pub={};
pub.Alt=function(text,flag,fun){
	var html='';
	html+='<div class="alert-del" style="width: 10%;z-index:10;background:#fff;height: 150px;border: 1px solid #ccc;position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;">';
 		html+='<div class="del-text text-center" style="height: 80px;padding: 20px;">'+text+'</div>';
 		html+='<div class="text-center">';
 	if(arguments[1]==true){
 		html+='<button class="btn btn-primary confirm" style="margin-right: 10px;">确定</button>';
	 	html+='<button class="btn btn-default concel">取消</button>';
 		html+='</div>';
 	
 	html+='</div>';
 	$('body,html').append(html);
	 	$(document).on('click','.concel',function(){
	 		$('.alert-del').hide();
	 	})
 	}else{
 		html+='<button class="btn btn-primary confirm" style="margin-right: 10px;padding:6px 20px;">确定</button>';
 		html+='</div>';
 	html+='</div>';
 	$('body,html').append(html);
	 	$(document).on('click','.confirm',function(){
	 		$('.alert-del').hide();
 	})
 	}
 	if(typeof arguments[2]=='function'){
 		fun();
 	}
	 	
}
