function negotiationsHtml(){
	var negtionHtml="";
	negtionHtml+='<div class="container-fluid">';
		negtionHtml+='	<div class="plan-wap">';
			negtionHtml+='	<div class="form-group row">';
				negtionHtml+='	<label class="col-md-1 col-sm-2">谈判名称</label>';
				negtionHtml+='	<div class="col-sm-5">';
					negtionHtml+='	<span class="form-control negoName"/></span>';
				negtionHtml+='	</div>';
			negtionHtml+='	</div>';
			negtionHtml+='	<div class="form-group row">';
				negtionHtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>谈判详情</label>';
				negtionHtml+='	<div class="col-sm-5">';
					negtionHtml+='	<textarea class="form-control negDetail" style="height: 100px;resize:none;"></textarea>';
				negtionHtml+='	</div>';
			negtionHtml+='	</div>';
		negtionHtml+='	</div>';
		negtionHtml+='	<div class="planbtn-group col-sm-6 text-center">';
			negtionHtml+='	<button class="btn btn-primary negoConfirm" style="margin-right: 15px;" onclick="negoConfirm()">提交</button>';
//			negtionHtml+='	<button class="btn btn-primary">重置</button>';
		negtionHtml+='	</div>';
	negtionHtml+='	</div>';
	return negtionHtml;
}
//请求后台数据详情
function negotiationsData(negdata){
	$('.negoName').html(negdata.negotiationName);
}


//获取谈判信息
function negotionInfo(boNegotiation){
	boNegotiation.negotiationName=$('.negoName').html();
	boNegotiation.negotiationDetail=$.trim($('.negDetail').val());
}
//提交谈判信息
//$('.FillInfo').on('click','.negoConfirm',function(){
function negoConfirm(){
	
	var negoDetail=$.trim($('.negDetail').val());
	if(negoDetail==''){
		pub.Alt('请填写谈判详情',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.procewap').show();
	$('.journaConfirm').prop('disabled',false);
}

//信息提交返回后台
	var negoJ={};
	var boNegotiation={};
//	$('.journaConfirm').click(function(){
function negotionjournaConfirm(){
		negotionInfo(boNegotiation);
		logDateF(logData);
		totalDetailF(totalDetail);
		negoJ.logData=logData;
		negoJ.totalDetail=totalDetail
		negoJ.boNegotiation=boNegotiation;
		$(this).prop('disabled',true);
		$ajax('post','businessOpportunityLog/addBOLogNegotiation',negoJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	}