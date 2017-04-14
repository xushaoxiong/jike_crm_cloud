function propreResultHtml(){
	var propRustHtml="";
	propRustHtml+='<div class="container-fluid">';
		propRustHtml+='<h4><span>新建列表>新建日志>招投标结果</span></h4>';
		propRustHtml+='<div class="trial-wap">';
			propRustHtml+='<div class="form-group row">';
				propRustHtml+='<label class="col-md-2 col-sm-2"><span class="col">*</span>招投标结果详情</label>';
				propRustHtml+='<div class="col-md-4 col-sm-6">';
					propRustHtml+='<textarea class="form-control propRustTextare" style="height: 100px;resize:none;"></textarea>';
				propRustHtml+='</div>';
			propRustHtml+='</div>';
		propRustHtml+='</div>';
		propRustHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			propRustHtml+='<button class="btn btn-primary propRustConfirm" style="margin-right: 15px;">提交</button>';
			propRustHtml+='<button class="btn btn-primary">重置</button>';
		propRustHtml+='</div>';
	propRustHtml+='</div>';
	return propRustHtml;
}
//信息赋值
function prpreResultdata(prdata){
	$('.propRustTextare').val(prdata.biddingResultDetail);
}
//获取试用结果信息
function infodetail(boBiddingResult){
	boBiddingResult.biddingResultDetail=$.trim($('.propRustTextare').val());
	
}
//试用结果详情提交
$('.editInfo').on('click','.propRustConfirm',function(){
	var detal=$.trim($('.propRustTextare').val());
	if(detal==''){
		pub.Alt('请填写招投标结果详情',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
})
