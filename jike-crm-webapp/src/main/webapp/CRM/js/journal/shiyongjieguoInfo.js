function TryHtml(){
	var tryHtml="";
	tryHtml+='<div class="container-fluid">';
		tryHtml+='<div class="trial-wap">';
			tryHtml+='<div class="form-group row">';
				tryHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>试用结果详情</label>';
				tryHtml+='<div class="col-md-4 col-sm-6">';
					tryHtml+='<textarea class="form-control tryTextare" style="height: 100px;resize:none;"></textarea>';
				tryHtml+='</div>';
			tryHtml+='</div>';
		tryHtml+='</div>';
		tryHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			tryHtml+='<button class="btn btn-primary tryConfirm" style="margin-right: 15px;">提交</button>';
			tryHtml+='<button class="btn btn-primary">重置</button>';
		tryHtml+='</div>';
	tryHtml+='</div>';
	return tryHtml;
}

//获取试用结果信息
function TryInfo(boTrialReuslt){
	boTrialReuslt.trialResultDetail=$('.tryTextare').val();
	
}
//试用结果详情提交
$('.FillInfo').on('click','.tryConfirm',function(){
	var detal=$.trim($('.tryTextare').val());
	if(detal==''){
		pub.Alt('请填写试用结果详情',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
})

//提交返回后台试用结果信息
	var TryJ={};
	var boTrialReuslt={};
	$('.journaConfirm').click(function(){
		TryInfo(boTrialReuslt);
		logDateF(logData);
		totalDetailF(totalDetail);
		TryJ.logData=logData;
		TryJ.totalDetail=totalDetail
		TryJ.boTrialReuslt=boTrialReuslt;
		
		$ajax('post','businessOpportunityLog/addBOLogTrialReuslt',TryJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	})