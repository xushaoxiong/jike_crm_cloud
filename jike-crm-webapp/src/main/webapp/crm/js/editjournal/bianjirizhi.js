
	//工时添加按钮
	$('.addTime').click(function(){
		var timeN=Number($('.timeVal').val());
		timeN+=0.5;
		$('.timeVal').val(timeN);
	})
	$('.minusTime').click(function(){
		var timeN=Number($('.timeVal').val());
		timeN-=0.5;
		$('.timeVal').val(timeN);
		if(timeN<0){
			$('.timeVal').val('0');
			timeN=0;
		}
	})

	$('.timeVal').blur(function(){
		worktimeNum($(this).val())
	})
	//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('journal/journalList.html');
		breadnav('日志管理','查看日志');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=7]').addClass('menuCheck');
	})
	function worktimeNum(obj){
	console.log((obj.value)*10%5)
		obj = obj.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
		obj = obj.replace(/^\./g,""); //验证第一个字符是数字
		obj = obj.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
		obj = obj.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		obj = obj.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3'); //只能输入一个小数
		if(obj*10%5>0){
			$('.timeVal').val('');
			$('.timedanger').css('color','red');
		}else{
			$('.timedanger').css('color','#000');
		}
		
		
	}
	//费用弹框
	$('.btnCost').click(function(){
		$('.totalCostwap').modal('toggle');
	})
	//提交费用
	$('.reachConfirm').click(function(){
		var totalReach=0;
		for (var i=0;i<$('.ReachInp').length;i++) {
			
			if($('.reachInp'+(i+1)).val()!=''){
				totalReach=totalReach+Number($.trim($('.reachInp'+(i+1)).val()));
			}
		}
		$('.totalCostwap').modal('hide');
		$('.btnCost').html(totalReach.toFixed(2));
		
	});
	$('.reachInp7').keyup(function(){
		if($('.reachInp7').val()==''){
			$('.payperson').hide();
			$('.reachInp8').val('');
		}else{
			$('.payperson').show();
		}
	})
	//新建日志提交返回后台
	var jourInJ={};
	var commonJson={};
	$('.journaConfirm').click(function(){
		breadnav('日志管理','查看日志');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=7]').addClass('menuCheck');
		var opptypeid=$('.businessNameSp').attr('oppttypeid');
		var specEvent=$('.specEvent').val();
		infodetail(commonJson);
		editLogDateF(businessOpportunityLogJson);
		editTotalDetailF(boFeeDetailJson);
		jourInJ.businessOpportunityLogJson=businessOpportunityLogJson;
		jourInJ.boFeeDetailJson=boFeeDetailJson;
		if(opptypeid==1&&specEvent=="达成合作意向"){
			var cooperationDetails={};
			copratInfo(cooperationDetails)
			jourInJ.commonJson=commonJson;
			jourInJ.commonJson.cooperationDetails=cooperationDetails;
		}else{
			jourInJ.commonJson=commonJson;
		}
		
		$ajax('post','businessOpportunityLog/updateBOLog',jourInJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})

