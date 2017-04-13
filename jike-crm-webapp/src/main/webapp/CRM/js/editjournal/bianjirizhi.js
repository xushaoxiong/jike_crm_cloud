
	//工时添加按钮
	var timeN=1
	$('.addTime').click(function(){
		timeN++;
		$('.timeVal').val(timeN*0.5);
	})
	$('.minusTime').click(function(){
		timeN--;
		$('.timeVal').val(timeN*0.5);
		if(timeN<0){
			$('.timeVal').val('0');
			timeN=0;
		}
	})
	//费用弹框
	$('.btnCost').click(function(){
		$('.totalCostwap').modal('toggle');
	})
	//提交费用
	$('.reachConfirm').click(function(){
		console.log(1)
		var totalReach=0;
		for (var i=0;i<$('.ReachInp').length;i++) {
			totalReach=totalReach+Number($.trim($('.reachInp'+(i+1)).val()));
		}
		$('.totalCostwap').modal('hide');
		$('.btnCost').html(totalReach.toFixed(2));
		
	})
	//新建日志提交返回后台
	var commonJson={};
	$('.journaConfirm').click(function(){
		infodetail(commonJson);
		editLogDateF(businessOpportunityLogJson);
		editTotalDetailF(boFeeDetailJson);
		jourInJ.businessOpportunityLogJson=businessOpportunityLogJson;
		jourInJ.boFeeDetailJson=boFeeDetailJson;
		jourInJ.commonJson=commonJson;
		$ajax('post','businessOpportunityLog/updateBOLog',jourInJ,function succF(jo){
			$('.R-wap').load('journal/list.html');
		},function errF(jo){
			alert(jo.message);
		})
	})

