//事件类型列表
	var eventJ={};
	var eventJson={};
	$ajax('post','role/queryRoleEventLabel',eventJ,function succF(jo){
		eventJson=jo;		
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
	
	
