function receiveHtml(){
	var receiveHtml="";
	receiveHtml+='<div class="container-fluid">';
		receiveHtml+='<div class="sign-wap">';
			receiveHtml+='<div class="form-group row">';
				receiveHtml+='<label class="col-md-1 col-sm-1">发生日期<span class="col"></span></label>';
				receiveHtml+='<div class="col-md-2 col-sm-2">';
					receiveHtml+='<span class="form-control paytime" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				receiveHtml+='</div>';
			receiveHtml+='</div>';
			receiveHtml+='<div class="form-group row ">';
				receiveHtml+='<label class="col-md-1 col-sm-1"><span class="col"></span>金额</label>';
				receiveHtml+='<div class="col-md-2 col-sm-2">';
					receiveHtml+='<input type="text" class="form-control paymoney" onkeyup="num(this)"/>';
				receiveHtml+='</div>';
				receiveHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;元</span>';
			receiveHtml+='</div>';
			receiveHtml+='<div class="form-group row ">';
				receiveHtml+='<label class="col-md-1 col-sm-1"><span class="col"></span>类型</label>';
				receiveHtml+='<div class="col-md-3 col-sm-3 paytype" style="line-height:34px;">';
					receiveHtml+='<input type="radio" name="paytype" payid="1"/>&nbsp;硬件&nbsp;&nbsp;';
					receiveHtml+='<input type="radio" name="paytype" payid="2"/>&nbsp;软件&nbsp;&nbsp;';
					receiveHtml+='<input type="radio" name="paytype" payid="3"/>&nbsp;服务&nbsp;&nbsp;';
				receiveHtml+='</div>';
			receiveHtml+='</div>';
		receiveHtml+='</div>';
		receiveHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			receiveHtml+='<button class="btn btn-primary payConfirm" style="margin-right: 15px;">提交</button>';
//			receiveHtml+='<button class="btn btn-primary">重置</button>';
		receiveHtml+='</div>';
	receiveHtml+='</div>';
	return receiveHtml;
}
//信息赋值
function receivedata(rdata){
	$('.paytime').html(rdata.paymentDate);
	$('.paymoney').val(rdata.paymentAmount);
	$('.paytype').find('input[payid="'+rdata.paymentType+'"]').prop('checked',true);
}
//获取回款信息
function infodetail(reInfo){
	var paymentType=$('.paytype').find('input:checked').attr('payid');
	reInfo.paymentDate=$('.paytime').html();
	reInfo.paymentAmount=$('.paymoney').val();
	reInfo.paymentType=paymentType;
	
}
//签约详情提交
$('.editInfo').on('click','.payConfirm',function(){
	var paytype=$('.paytype').find('input:checked').val();
	var paymentDate=$('.paytime').html();
	var paymentAmount=$.trim($('.paymoney').val());
	if(paymentDate==''){
		pub.Alt('请选择发生时间',false);
		return false;
	}
	if(paymentAmount==''){
		pub.Alt('请填写金额',false);
		return false;
	}
	if(paytype==undefined){
		pub.Alt('请选择类型',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
})