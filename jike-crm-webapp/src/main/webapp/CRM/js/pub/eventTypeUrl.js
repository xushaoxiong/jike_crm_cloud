//事件类型列表
	var eventJ={};
	var eventJson={};
	$ajax('post','role/queryRoleEventLabel',eventJ,function succF(jo){
		eventJson=jo;		
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
	
	//查询日志时间类型标签
	var eventJ2={};
	var eventJson2={};
	$ajax('post','role/queryRoleQureryEventLabel',eventJ2,function succF(jo){
		eventJson2=jo;		
	},function errF(jo){
		pub.Alt(jo.message,false);
	})