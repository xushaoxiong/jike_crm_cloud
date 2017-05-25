function aftSealtHtml(){
	var aftSealtHtml="";
	aftSealtHtml+='<div class="container-fluid">';
		aftSealtHtml+='<div class="aftersaleObjwap">';
			aftSealtHtml+='<div class="form-group row" style="margin-top:30px;">';
				aftSealtHtml+='<label class="col-sm-3"><span class="col">*</span>售后对象</label>';
				aftSealtHtml+='<div class="col-sm-3">';
					aftSealtHtml+='<span type="text" class="form-control saleAfterObjName" schoolid="" onclick="salesAfterModal($(this))"></span>';
				aftSealtHtml+='</div>';
			aftSealtHtml+='</div>';
		aftSealtHtml+='</div>';
		aftSealtHtml+='<div class="sign-wap afterSaleLabel">';
			aftSealtHtml+='<h4><b>售后信息：</b><span class="col" style="font-size:13px;">（备注：至少填写一项）</span></h4>';
			aftSealtHtml+='<div class="form-group row">';
				aftSealtHtml+='<label class="col-sm-3">极课相关软硬件安装调试</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp1" onkeyup="PosiintegerNum(this)" maxlength="4"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;台</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-sm-3">考试作业出卷</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp2" onkeyup="PosiintegerNum(this)" maxlength="4"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;份</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-sm-3">考试作业阅卷</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp3" onkeyup="PosiintegerNum(this)" maxlength="4"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;张</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-sm-3">试卷作业出卷导出印刷检查</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp4" onkeyup="PosiintegerNum(this)" maxlength="4"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-sm-3">阅卷需要批量ps或大批量手动处理</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp5" onkeyup="PosiintegerNum(this)" maxlength="4"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;张</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-sm-3">系统排障</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp6" onkeyup="PosiintegerNum(this)" maxlength="4"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="planbtn-group row">';
				aftSealtHtml+='<button class="btn btn-primary aftSealConfirm" style="padding:6px 40px;margin-left:165px;">提交</button>';
	//			aftSealtHtml+='<button class="btn btn-primary">重置</button>';
			aftSealtHtml+='</div>';
		aftSealtHtml+='</div>';
	aftSealtHtml+='</div>';
	return aftSealtHtml;
}
//合作伙伴售后对象弹框
	var bussinesNameJ={};
	function salesAfterModal(_this){
		var schoolName="";
		var businessOpportunityId=_this.attr('objid');
		bussinesNameJ.schoolName=schoolName;
		bussinesNameJ.businessOpportunityId=businessOpportunityId;
		$('.panterScolSaleAfterwap').modal('toggle');
		$('.aftetSearchInp').val('');
		queryCpsByCoAjax();
		
	}
//请求列表的Ajax
	function queryCpsByCoAjax(){
		var schoolid=$('.saleAfterObjName').attr('schoolid');
		$ajax('post','businessOpportunity/queryCpsByCoopId',bussinesNameJ,function succF(jo){
			saleAfterItem(jo.cpsArr);
			$('.schoolName[schoolid="'+schoolid+'"]').prev().addClass('businesscheck');
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	}

	//列表内容
	function saleAfterItem(datalist){
		var html="";
		$.each(datalist, function(i,item) {
			html+='<tr>';
				html+='	<td class="businesscheckimg"></td>';
				html+='	<td class=" schoolName" schoolid="'+item.cooperativePartnerSchoolId+'">'+item.schoolName+'</td>';
				html+='	<td class=" schoolLevel">'+item.schoolLevel+'</td>';
				html+='	<td>'+item.addressProvince+''+item.addressCity+''+item.addressCountry+''+item.addressDetail+'</td>';
			html+='	</tr>';
		});
		$('.panterScolSaleAfteItem').html(html);
	}
	//搜索
	$('.aftetSearch').click(function(){
		var businessOpportunityId=$('.saleAfterObjName').attr('objid');
		bussinesNameJ.schoolName=$.trim($('.aftetSearchInp').val());
		bussinesNameJ.businessOpportunityId=businessOpportunityId;
		queryCpsByCoAjax();
	})
	//选择售后对象
	$('.panterScolSaleAfteItem').on('click','tr',function(){
		if($(this).find('.businesscheckimg').hasClass('businesscheck')){
			$(this).find('.businesscheckimg').removeClass('businesscheck');
		}else{
			$('.businesscheckimg').removeClass('businesscheck');
			$(this).find('.businesscheckimg').addClass('businesscheck');
		}
		
	})
	//选择售后对象确定
	$('.panterScolConfirm').click(function(){
		var schoolName=$('.businesscheck').parent('tr').find('.schoolName').html();
		var schoolid=$('.businesscheck').parent('tr').find('.schoolName').attr('schoolid');
		if(schoolid==undefined){
			$('.saleAfterObjName').html(schoolName);
			$('.saleAfterObjName').attr('schoolid','');
			$('.saleAfterObjName').html($('.businessNameSp').val());
		}else{
			$('.saleAfterObjName').html(schoolName);
			$('.saleAfterObjName').attr('schoolid',schoolid);
		}
		$('.panterScolSaleAfterwap').modal('hide');
		
	})





//信息赋值
function aftSealdata(asdata){
	var cooperativePartnerScolJ=asdata.cooperativePartnerSchool;
	if(cooperativePartnerScolJ==undefined){
		$('.saleAfterObjName').attr('schoolid','');
		$('.saleAfterObjName').html($('.businessNameSp').val());
	}else{
		$('.saleAfterObjName').attr('schoolid',cooperativePartnerScolJ.cooperativePartnerSchoolId);
		$('.saleAfterObjName').html(cooperativePartnerScolJ.schoolName);
	}
	
	$('.aftSelInp1').val(asdata.installationDebuggingCount)
	$('.aftSelInp2').val(asdata.homeworkVolumeCount)
	$('.aftSelInp3').val(asdata.homeworkMarkingCount)
	$('.aftSelInp4').val(asdata.printingInspectionCount)
	$('.aftSelInp5').val(asdata.markingHandleCount)
	$('.aftSelInp6').val(asdata.systemObstacleCount)
}
//获取试用结果信息
function infodetail(boCustomerService){
	boCustomerService.cooperativePartnerSchoolId=$('.saleAfterObjName').attr('schoolid');
	boCustomerService.schoolName=$('.saleAfterObjName').html();
	var aftSelInpArry=[];
	$('.aftSelInp').each(function(i){
		aftSelInpArry.push($(this).val());
		
	})
	boCustomerService.installationDebuggingCount=aftSelInpArry[0]
	boCustomerService.homeworkVolumeCount=aftSelInpArry[1]
	boCustomerService.homeworkMarkingCount=aftSelInpArry[2]
	boCustomerService.printingInspectionCount=aftSelInpArry[3]
	boCustomerService.markingHandleCount=aftSelInpArry[4]
	boCustomerService.systemObstacleCount=aftSelInpArry[5]
}
//售后详情提交
$('.editInfo').on('click','.aftSealConfirm',function(){
	var aftSelInpArry=[];
	$('.aftSelInp').each(function(i){
		if($(this).val()!=''){
			aftSelInpArry.push($(this).val());
		}
	})
	if(aftSelInpArry.length==0){
		pub.Alt('请填写一项信息',false);
		return false;
	}
	var Inp1=Number($('.aftSelInp1').val())*0.25;
	var Inp2=Number($('.aftSelInp2').val())*0.5;
	var Inp3=Number((Number($('.aftSelInp3').val())/500).toFixed(2));
	var Inp4=Number($('.aftSelInp4').val())*0.5;
	var Inp5=Number((Number($('.aftSelInp5').val())/500).toFixed(2));
	var Inp6=Number($('.aftSelInp6').val())*0.5;
	$('.editInfo').hide();
	$('#addJournal').show();
	//计算工时
	$('.timeVal').val((Inp1+Inp2+Inp3+Inp4+Inp5+Inp6));
	 
	
})
