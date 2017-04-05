
var ajaxUrl="http://localhost:8080/jike-crm-webapp/";

var $ajax=function(type,url,data,succF,errF){
	$.ajax({
		type:type,
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+url,
		data:data,
		dataType:'json',
		success:function(jo){
			if(jo.state=='success'){
				succF(jo)
			}else{
				errF(jo)
			}
			
		},
		error:function(){
			alert('服务器忙')
		}
	});
}