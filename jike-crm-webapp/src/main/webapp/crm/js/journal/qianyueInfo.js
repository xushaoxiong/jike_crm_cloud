function signHtml(){
	var signHtml="";
	signHtml+='<div class="container-fluid">';
		signHtml+='<div class="sign-wap">';
			signHtml+='<div class="form-group row">';
				signHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>签约时间</label>';
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<span class="form-control Signdate" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				signHtml+='</div>';
			signHtml+='</div>';
			signHtml+='<div class="form-group row ">';
				signHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>合同金额</label>';
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<input type="text" class="form-control anmontCost" onkeyup="num(this)"/>';
				signHtml+='</div>';
				signHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;元</span>';
			signHtml+='</div>';
			signHtml+='<div class="form-group row ">';
				signHtml+='<label class="col-md-1 col-sm-2">合同伙伴</label>';
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<input type="text" class="form-control cooppanter"/>';
				signHtml+='</div>';
			signHtml+='</div>';
		signHtml+='</div>';
		signHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			signHtml+='<button class="btn btn-primary SignConfirm" style="margin-right: 15px;" onclick="SignConfirm()">提交</button>';
//			signHtml+='<button class="btn btn-primary">重置</button>';
		signHtml+='</div>';
	signHtml+='</div>';
	return signHtml;
}
//获取签约信息
function signInfo(boSign){
	boSign.signDate=$('.Signdate').html();
	boSign.signAmonut=$.trim($('.anmontCost').val());
	boSign.cooperativePartner=$.trim($('.cooppanter').val());
	
}
//签约详情提交
//$('.FillInfo').on('click','.SignConfirm',function(){
function SignConfirm(){
	
	var signtime=$('.Signdate').html();
	var signAmonut=$.trim($('.anmontCost').val());
	if(signtime==''){
		pub.Alt('请填写签约时间',false);
		return false;
	}
	if(signAmonut==''){
		pub.Alt('请填写合同金额',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.procewap').show();
	$('.journaConfirm').prop('disabled',false);
}

//提交返回后台签约信息
	var signJ={};
	var boSign={};
//	$('.journaConfirm').click(function(){
	function signjournaConfirm(){
		signInfo(boSign);
		logDateF(logData);
		totalDetailF(totalDetail);
		signJ.logData=logData;
		signJ.totalDetail=totalDetail
		signJ.boSign=boSign;
		$(this).prop('disabled',true);
		$ajax('post','businessOpportunityLog/addBOLogBoSign',signJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	}