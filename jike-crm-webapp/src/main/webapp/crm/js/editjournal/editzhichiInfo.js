function supportHtml(){
	var suportHtml="";
	suportHtml+='<div class="container-fluid">';
		suportHtml+='<div class="aftersaleObjwap">';
			suportHtml+='<div class="form-group row" style="margin-top:30px;">';
				suportHtml+='<label class="col-sm-3"><span class="col">*</span>支持对象</label>';
				suportHtml+='<div class="col-sm-3">';
					suportHtml+='<span type="text" class="form-control saleAfterObjName" schoolid="" onclick="salesAfterModal($(this))"></span>';
				suportHtml+='</div>';
			suportHtml+='</div>';
		suportHtml+='</div>';
		suportHtml+='<div class="sign-wap supportLabel">';
			suportHtml+='<h4><b>售后信息：</b><span class="col" style="font-size:13px;">（备注：至少填写一项）</span></h4>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-sm-2">开通学校账号</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control scolAccoutnumb" onkeyup="PosiintegerNum(this)" />';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row ">';
				suportHtml+='<label class="col-sm-2">信息确认及物资准备</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control goodrepNumb" onkeyup="PosiintegerNum(this)"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="planbtn-group row">';
				suportHtml+='<button class="btn btn-primary suprtConfirm" style="margin-left:9%; padding:6px 40px;" onclick="suprtConfirm()">提交</button>';
	//			suportHtml+='<button class="btn btn-primary">重置</button>';
			suportHtml+='</div>';
		suportHtml+='</div>';	
	suportHtml+='</div>';
	return suportHtml;
}
//信息赋值
function supportdata(supdata){
	var cooperativePartnerScolJ=supdata.cooperativePartnerSchool;
	if(cooperativePartnerScolJ==undefined){
		$('.saleAfterObjName').attr('schoolid','');
		$('.saleAfterObjName').html($('.businessNameSp').val());
	}else{
		$('.saleAfterObjName').attr('schoolid',cooperativePartnerScolJ.cooperativePartnerSchoolId);
		$('.saleAfterObjName').html(cooperativePartnerScolJ.schoolName);
	}
	$('.scolAccoutnumb').val(supdata.accountOpenCount);
	$('.goodrepNumb').val(supdata.informationConfirmationCount);
}
//获取试用结果信息
function infodetail(boSupport){
	boSupport.accountOpenCount=$('.scolAccoutnumb').val();
	boSupport.informationConfirmationCount=$('.goodrepNumb').val();
	
}
//试用结果详情提交
function suprtConfirm(){
	var scolAccoutnumb=$('.scolAccoutnumb').val();
	var goodrepNumb=$('.goodrepNumb').val();
	if(scolAccoutnumb==''&& goodrepNumb==''){
		pub.Alt('请填写一项信息',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
	//计算工时
	var timeVal=(Number(scolAccoutnumb)+Number(goodrepNumb))*0.5;
	$('.timeVal').val(timeVal)
}

