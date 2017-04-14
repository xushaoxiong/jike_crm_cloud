function dailytHtml(){
	var dailytHtml="";
	dailytHtml+='<div class="container-fluid">';
		dailytHtml+='<h4><span>新建列表>新建日志>日常事项</span></h4>';
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
//信息赋值
function dailydata(dldata){
	$('.dailyTextare').val(dldata.dailyEventsDetail);
}
//获取试用结果信息
function infodetail(dailyEvents){
	dailyEvents.dailyEventsDetail=$.trim($('.dailyTextare').val());
	
}
//试用结果详情提交
$('.editInfo').on('click','.dailyConfirm',function(){
	var detal=$.trim($('.dailyTextare').val());
	if(detal==''){
		pub.Alt('请填写详细信息',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
})
