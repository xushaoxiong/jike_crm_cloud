//新建日志时间
$(function(){
	var date=new Date();
	var year=date.getFullYear();
	var moth=date.getMonth()+1;
	var day=date.getDate();
	if(day<10){
		day="0"+date.getDate();
	}else{
		day=date.getDate();
	}
	if(moth<10){
		moth="0"+(date.getMonth()+1);
	}else{
		moth=date.getMonth()+1;
	}
	
	$('#indat').html(year+'-'+moth+'-'+day);
})
	
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
		$('.R-wap').show();
		$('.threloadWap').hide();
		$('.threloadWap').html('');
//		$('.R-wap').load('journal/journalList.html');
		breadnav('日志管理','查看日志');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=7]').addClass('menuCheck');
	})
	function worktimeNum(obj){
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
		var inp7=$.trim($('.editreachInp7').val());
		var inp8=$.trim($('.editreachInpPerson').val());
		for (var i=0;i<$('.editReachInp').length;i++) {
			
			if($('.editreachInp'+(i+1)).val()!=''){
				totalReach+=Number($.trim($('.editreachInp'+(i+1)).val()));
			}
		}
		if(inp7!==''&&inp8===''){
			pub.Alt('请填写垫付人',false);
			return;
		}
		$('.totalCostwap').modal('hide');
		$('.btnCost').html(totalReach.toFixed(2));
		
		
	});
	$('.editreachInp7').keyup(function(){
		if($('.editreachInp7').val()==''){
			$('.payperson').hide();
			$('.editreachInpPerson').val('');
		}else{
			$('.payperson').show();
		}
	})
	//新建日志提交返回后台
	var jourInJ={};
	var commonJson={};
	$('.journaConfirm').click(function(){
		var logid=$('#indat').attr('logid');
		breadnav('日志管理','查看日志');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=7]').addClass('menuCheck');
		var opptypeid=$('.businessNameSp').attr('oppttypeid');
		var specEvent=$('.specEvent').val();
		
		editLogDateF(businessOpportunityLogJson);
		editTotalDetailF(boFeeDetailJson);
		jourInJ.businessOpportunityLogJson=businessOpportunityLogJson;
		jourInJ.boFeeDetailJson=boFeeDetailJson;
		if(opptypeid==1&&specEvent=="达成合作意向"){
			infodetail(commonJson);
			var cooperationDetails={};
			copratInfo(cooperationDetails)
			jourInJ.commonJson.cooperationDetails=cooperationDetails;
		}else if(specEvent=='培训'){
			var boTrainArr=[];
			commonJson.boTrainArr=commJ.boTrainArr;
		
		}else{
			infodetail(commonJson);
			
		}
		jourInJ.commonJson=commonJson;
		$ajax('post','businessOpportunityLog/updateBOLog',jourInJ,function succF(jo){
			$('.R-wap').show();
			$('.threloadWap').hide();
			
			var parentsTd=$('.Operatwap[logid="'+logid+'"]').parents('tr');
			parentsTd.find('.jourTime').html($('#indat').html());
			parentsTd.find('.jourinnerPeop span').html($('.innerPerson').val());
			parentsTd.find('.jourouterPeop span').html($('.outPerson').val());
			parentsTd.find('.jourCost a').html($('.btnCost').html());
			parentsTd.find('.jourHours').html($('.timeVal').val());
			$('.hide-menu li').removeClass('menuCheck');
			$('.hide-menu li[menuid=7]').addClass('menuCheck');
			$('.threloadWap').html('');
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})

