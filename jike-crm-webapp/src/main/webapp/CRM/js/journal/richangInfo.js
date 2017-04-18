function dailytHtml(){
	var dailytHtml="";
	dailytHtml+='<div class="container-fluid">';
		dailytHtml+='<div class="trial-wap">';
			dailytHtml+='<div class="form-group row">';
				dailytHtml+='<label class="col-md-2 col-sm-2"><span class="col">*</span>填写详细信息</label>';
				dailytHtml+='<div class="col-md-4 col-sm-6">';
					dailytHtml+='<textarea class="form-control dailyTextare" style="height: 100px;resize:none;"></textarea>';
				dailytHtml+='</div>';
			dailytHtml+='</div>';
		dailytHtml+='</div>';
		dailytHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			dailytHtml+='<button class="btn btn-primary dailyConfirm" style="margin-right: 15px;">提交</button>';
			dailytHtml+='<button class="btn btn-primary">重置</button>';
		dailytHtml+='</div>';
	dailytHtml+='</div>';
	return dailytHtml;
}
//获取试用结果信息
function dailyInfo(dailyEvents){
	dailyEvents.dailyEventsDetail=$.trim($('.dailyTextare').val());
	
}
//试用结果详情提交
$('.FillInfo').on('click','.dailyConfirm',function(){
	var detal=$.trim($('.dailyTextare').val());
	if(detal==''){
		pub.Alt('请填写详细信息',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
})

//提交返回后台试用结果信息
	var dailyJ={};
	var dailyEvents={};
	$('.journaConfirm').click(function(){
		dailyInfo(dailyEvents);
		logDateF(logData);
		totalDetailF(totalDetail);
		dailyJ.logData=logData;
		dailyJ.totalDetail=totalDetail
		dailyJ.dailyEvents=dailyEvents;
		
		$ajax('post','businessOpportunityLog/addDailyEvents',dailyJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html');
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	})