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
//获取试用结果信息
function propRustInfo(boBiddingResult){
	boBiddingResult.trialResultDetail=$.trim($('.propRustTextare').val());
	
}
//试用结果详情提交
$('.FillInfo').on('click','.propRustConfirm',function(){
	var detal=$.trim($('.propRustTextare').val());
	if(detal==''){
		pub.Alt('请填写招投标结果详情',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
})

//提交返回后台试用结果信息
	var propRustJ={};
	var boBiddingResult={};
	$('.journaConfirm').click(function(){
		propRustInfo(boBiddingResult);
		logDateF(logData);
		totalDetailF(totalDetail);
		propRustJ.logData=logData;
		propRustJ.totalDetail=totalDetail
		propRustJ.boBiddingResult=boBiddingResult;
		
		$ajax('post','businessOpportunityLog/addBOLogBoBiddingResult',propRustJ,function succF(jo){
			console.log(jo)
			},function errF(jo){
				alert(jo.message);
		})
	})