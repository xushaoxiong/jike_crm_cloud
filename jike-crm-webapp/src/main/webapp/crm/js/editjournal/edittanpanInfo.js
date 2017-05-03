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
			negtionHtml+='	<button class="btn btn-primary negoConfirm" style="margin-right: 15px;">提交</button>';
//			negtionHtml+='	<button class="btn btn-primary">重置</button>';
		negtionHtml+='	</div>';
	negtionHtml+='	</div>';
	return negtionHtml;
}
//请求后台数据详情
function negotiationsData(negdata){
	$('.negoName').html(negdata.negotiationName);
	$('.negDetail').val(negdata.negotiationDetail);
}


//获取谈判信息
function infodetail(boNegotiation){
	boNegotiation.negotiationName=$('.negoName').html();
	boNegotiation.negotiationDetail=$.trim($('.negDetail').val());
}
//提交谈判信息
$('.editInfo').on('click','.negoConfirm',function(){
	var negoDetail=$.trim($('.negDetail').val());
	if(negoDetail==''){
		pub.Alt('请填写谈判详情',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
})

