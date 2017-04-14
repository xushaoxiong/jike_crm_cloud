function PropPreionHtml(){
	var propHtml="";
	propHtml+='<div class="container-fluid">';
		propHtml+='<h4><span>新建列表>新建日志>招投标</span></h4>';
		propHtml+='<div class="propre-wap" style="width:85%;">';
			propHtml+='<div class="form-group row">';
				propHtml+='<label class="col-md-2 col-sm-2"><span class="col">*</span>形式</label>';
				propHtml+='<div class="col-md-2 col-sm-4">';
					propHtml+='<select class="form-control propForm">';
						propHtml+='<option>公开招标</option>';
						propHtml+='<option>公开邀标</option>';
						propHtml+='<option>竞争性谈判</option>';
						propHtml+='<option>单一来源采购</option>';
						propHtml+='<option>暗标</option>';
					propHtml+='</select>';
				propHtml+='</div>';
			propHtml+='</div>';
			propHtml+='<div class="form-group row ">';
				propHtml+='<label class="col-md-2 col-sm-2">合作伙伴</label>';
				propHtml+='<div class="col-md-2 col-sm-4">';
					propHtml+='<input type="text" class="form-control partnerName"/>';
				propHtml+='</div>';
			propHtml+='</div>';
			propHtml+='<div class="form-group row">';
				propHtml+='<label class="col-md-2 col-sm-2"><span class="col">*</span>挂网链接</label>';
				propHtml+='<div class="col-md-3 col-sm-5">';
					propHtml+='<input type="text" class="form-control InterLink"/>';
				propHtml+='</div>';
			propHtml+='</div>';
			propHtml+='<div class="form-group row">';
				propHtml+='<label class="col-md-2 col-sm-2">是否有商务费用</label>';
				propHtml+='<div class="col-md-4 col-sm-6 businesCost">';
					propHtml+='<input type="radio" value="是" name="radname" busfid="0"/>&nbsp;&nbsp;是&nbsp;&nbsp;&nbsp;&nbsp;';
					propHtml+='<input type="radio" value="否" name="radname" busfid="1"/>&nbsp;&nbsp;否';
				propHtml+='</div>';
			propHtml+='</div>';
		propHtml+='</div>';
		propHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			propHtml+='<button class="btn btn-primary propreConfirm" style="margin-right: 15px;">提交</button>';
			propHtml+='<button class="btn btn-primary">重置</button>';
		propHtml+='</div>';
	propHtml+='</div>';
	return propHtml;
}
//信息赋值
function propationdata(pdata){
	$('.propForm').val(pdata.biddingMode).find('option').prop('selected',true);
	$('.partnerName').val(pdata.cooperativePartner);
	$('.InterLink').val(pdata.networkLink);
	$('.businesCost').find('input[busfid="'+pdata.ifHaveBusinessFee+'"]').prop('checked',true);
}
//获取招投标准备信息内容
function infodetail(boBidding){
	boBidding.biddingMode=$('.propForm').find('option:selected').val();
	boBidding.cooperativePartner=$.trim($('.partnerName').val());
	boBidding.networkLink=$.trim($('.InterLink').val());
	boBidding.ifHaveBusinessFee=$('.businesCost').find('input[type="radio"]:checked').attr('busfid');
}

//招投标准备详情提交
$('.editInfo').on('click','.propreConfirm',function(){
	var link=$.trim($('.InterLink').val());;
	if(link==''){
		pub.Alt('请填挂网链接',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
})
