function propreResultHtml(){
	var propRustHtml="";
	propRustHtml+='<div class="container-fluid">';
		propRustHtml+='<div class="trial-wap">';
			propRustHtml+='<div class="form-group row">';
				propRustHtml+='<label class="col-md-2 col-sm-2"><span class="col">*</span>招投标结果详情</label>';
				propRustHtml+='<div class="col-md-4 col-sm-6">';
					propRustHtml+='<textarea class="form-control propRustTextare" style="height: 100px;resize:none;"></textarea>';
				propRustHtml+='</div>';
			propRustHtml+='</div>';
		propRustHtml+='</div>';
		propRustHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			propRustHtml+='<button class="btn btn-primary propRustConfirm" style="margin-right: 15px;" onclick="propRustConfirm()">提交</button>';
//			propRustHtml+='<button class="btn btn-primary">重置</button>';
		propRustHtml+='</div>';
	propRustHtml+='</div>';
	return propRustHtml;
}
//获取结果信息
function propRustInfo(boBiddingResult){
	boBiddingResult.biddingResultDetail=$.trim($('.propRustTextare').val());
	
}
//信息详情提交
//$('.FillInfo').on('click','.propRustConfirm',function(){
	function propRustConfirm(){
		
	var detal=$.trim($('.propRustTextare').val());
	if(detal==''){
		pub.Alt('请填写招投标结果详情',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.procewap').show();
	$('.journaConfirm').prop('disabled',false);
}

//提交返回后台试用结果信息
	var propRustJ={};
	var boBiddingResult={};
//	$('.journaConfirm').click(function(){
function propRustjournaConfirm(){
		propRustInfo(boBiddingResult);
		logDateF(logData);
		totalDetailF(totalDetail);
		propRustJ.logData=logData;
		propRustJ.totalDetail=totalDetail
		propRustJ.boBiddingResult=boBiddingResult;
		$(this).prop('disabled',true);
		$ajax('post','businessOpportunityLog/addBOLogBoBiddingResult',propRustJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	}