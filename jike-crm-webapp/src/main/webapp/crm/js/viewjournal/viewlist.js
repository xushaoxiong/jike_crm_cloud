//新建日志公用内容
function jourlist(data){
	$('.jourtime').html(data.logDate);
	if(data.eventType=='日常事项'){
		$('.businesname').html('日常商机');
		$('.businesnum').html('R0000000-00');
	}else{
		$('.businesname').html(data.businessOpportunityName);
		$('.businesnum').html(data.businessOpportunityNum);
	}
	
	
	$('.eventtype').html(data.eventType);
	$('.spectype').html(data.specificEvent);
	$('.worktime').html(data.workingHours);
	$('.innerpeop').html(data.internalParticipant);
	$('.outerpeop').html(data.externalParticipant);
	$('.totalconst').html(data.totalFee+"元");
	
}
//费用详情
function costdata(cdata){
	if(cdata.trafficFee==undefined){
		$('.reach1').html('');
	}else{
		$('.reach1').html(cdata.trafficFee+"元");
	}
	if(cdata.hotelFee==undefined){
		$('.reach2').html('');
	}else{
		$('.reach2').html(cdata.hotelFee+"元");
	}	
	if(cdata.foodFee==undefined){
		$('.reach3').html('');
	}else{
		$('.reach3').html(cdata.foodFee+"元");
	}
	if(cdata.entertainFee==undefined){
		$('.reach4').html('');
	}else{
		$('.reach4').html(cdata.entertainFee+"元");
	}
	if(cdata.giftFee==undefined){
		$('.reach5').html('');
	}else{
		$('.reach5').html(cdata.giftFee+"元");
	}
	if(cdata.otherFee==undefined){
		$('.reach6').html('');
	}else{
		$('.reach6').html(cdata.otherFee+"元");
	}
	if(cdata.advanceFee==undefined){
		$('.reach7').html('');
	}else{
		$('.reach7').html(cdata.advanceFee+"元");
	}
	
	$('.reach8').html(cdata.advancePerson);
}

//公用部分信息ajax内容
function ajaxpub(idJ,conmmJ){
	$ajax('post','businessOpportunityLog/queryBOLog',idJ,function succF(jo){
		$('.R-wap').load('journalview/viewlist.html',function(){
			jourlist(jo.businessOpportunityLogJson);
			costdata(jo.boFeeDetailJson);
			$('.addInfo').html(conmmJ(jo.commonJson));
		
		});

	},function errF(jo){
		pub.Alt(jo.message,false);
	})
}
//var backJ={};
$('.jourlist').on('click','.checkjounal',function(){
	backJ=paginatorJ;
	var logIdJ={};
	var logid=$(this).parent().attr('logid');
	logIdJ.logId=logid;
	var eventType=$(this).parents('tr').find('.evtype').html();
	var specType=$(this).parents('tr').find('.spetype').html();
	var roleName=$(this).parents('tr').find('.roleName').html();
	var opptypeid=$(this).parents('tr').find('.bussname').attr('busintype');
	//opptid=1合作伙伴0学校
	//信息收集
	if(eventType=='信息收集'){
		$.getScript("js/viewjournal/viewvInformationcollection.js",function(){
			if(opptypeid==1){
				ajaxpub(logIdJ,infocoolpanerHtml);
			}else{
				ajaxpub(logIdJ,infocoolHtml);
			}
		})
		
	}
	//制定拜访计划
	if(eventType=='制定拜访计划'){
		$.getScript("js/viewjournal/viewvisitplan.js",function(){
			ajaxpub(logIdJ,visitplanHtml);
		})
		
	}
	//拜访客户
	if(eventType=='拜访客户'){
		$.getScript("js/viewjournal/viewvisitcustomers.js",function(){
			if(specType=='达成合作意向'&&opptypeid==1){
				ajaxpub(logIdJ,visitcustompanerHtml);
			}else{
				ajaxpub(logIdJ,visitcustomHtml);
			}
		})
		
	}
	//商业谈判
	if(eventType=='商业谈判'){
		$.getScript("js/viewjournal/viewNegotions.js",function(){
			ajaxpub(logIdJ,negotaionHtml);
		})
	}
	//试用中
	if(specType=='试用准备'){
		$.getScript("js/viewjournal/viewtrytrail.js",function(){
			ajaxpub(logIdJ,trypreHtml);
		})
	}
	if(specType.indexOf('试用结果')>-1){
		$.getScript("js/viewjournal/viewtrytrail.js",function(){
			ajaxpub(logIdJ,tryresultHtml);
		})
	}
	//招投标
	if(specType=='投标准备'){
		$.getScript("js/viewjournal/viewbidding.js",function(){
			ajaxpub(logIdJ,bidHtml);
		})
	}
	if(specType=='投标成功'||specType=='投标失败'){
		$.getScript("js/viewjournal/viewbidding.js",function(){
			ajaxpub(logIdJ,bidresultHtml);
		})
	}
	//签约
	if(specType=='签约'){
		$.getScript("js/viewjournal/viewsign.js",function(){
			if(opptypeid==1){	
				ajaxpub(logIdJ,signpanerHtml);
			}else{
				ajaxpub(logIdJ,signHtml);
			}
		})
	}
	//日常
	if(eventType=='日常事项'){
		$.getScript("js/viewjournal/viewdaily.js",function(){
			if(roleName=='服务'){
				ajaxpub(logIdJ,serverdailyHtml)
			}else{
				ajaxpub(logIdJ,dailyHtml);
			}
			
		})
	}
	//售后
	if(eventType=='售后'){
		$.getScript("js/viewjournal/viewaftersales.js",function(){
			ajaxpub(logIdJ,aftsaleHtml);
		})
	}
	//支持
	if(specType=='支持'){
		$.getScript("js/viewjournal/viewsupport.js",function(){
			if(opptypeid==1&&roleName!='服务'){	
				ajaxpub(logIdJ,supportpanerHtml);
			}else if(roleName=='服务'){
				ajaxpub(logIdJ,supportserverHtml);
			}else{
				ajaxpub(logIdJ,supportHtml);
			}
			
		})
	}
	//培训
	if(eventType=='培训'){
		$.getScript("js/viewjournal/viewtrain.js",function(){
//			if(opptypeid==1){	
				ajaxpub(logIdJ,trainpanerHtml);
//			}else{
//				ajaxpub(logIdJ,trainHtml);
//			}
		})
	}
	//培训
	if(eventType=='回款'){
		$.getScript("js/viewjournal/viewreceivable.js",function(){
			ajaxpub(logIdJ,receiveHtml);
		})
	}
	
})
//返回上一级
//var ajaxUrl="http://localhost:8080/jike-crm-webapp/";
function goback(){
	$('.R-wap').load('journal/journalList.html')
//	$('.R-wap').load(ajaxUrl+'/businessOpportunityLog/queryBusinessOpportunityLogByParams',{"businessOpportunityName":"001","start":1,"pageSize":10},function(){
//			$('.R-wap').load('journal/journalList.html')
//	});
//	history.pushState(null, null, 'journal/journalList.html');

//	$('.R-wap').load('journal/journalList.html',function(){
//		$('.OpportunityName').val(backJ.businessOpportunityName);
//		$('#indate').val(backJ.startTime);
//		$('#enddate').val(backJ.endTime);
//		$('.OpportunityProcess').val(backJ.eventType);
//		$('.creatName').val(backJ.userName);
//		console.log($('.jourlist').html())
//		if($('.jourlist').html()!=''){
//			$('.searchBusiness').click();
//		}
//		
//	});
}