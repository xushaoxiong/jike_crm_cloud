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
					suportHtml+='<input type="text" class="form-control inp1 inpitem" onkeyup="PosiintegerNum(this)"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row ">';
				suportHtml+='<label class="col-sm-2">信息确认及物资准备</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp2 inpitem" onkeyup="PosiintegerNum(this)"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-sm-2">增删查改教师学生信息</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp3 inpitem" onkeyup="PosiintegerNum(this)" />';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-sm-2">销售支持</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp4 inpitem" onkeyup="num(this)" />';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;小时</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row suppotrDetail" style="display:none;">';
				suportHtml+='<label class="col-sm-2">销售支持详情</label>';
				suportHtml+='<div class="col-sm-3">';
					suportHtml+='<textarea class="form-control inp5"></textarea>';
				suportHtml+='</div>';
			suportHtml+='</div>';
			suportHtml+='<div class="planbtn-group row">';
				suportHtml+='<button class="btn btn-primary suprtConfirm" style="margin-left: 9%;padding:6px 40px;" onclick="suprtConfirm()">提交</button>';
	//			suportHtml+='<button class="btn btn-primary">重置</button>';
			suportHtml+='</div>';
		suportHtml+='</div>';
	suportHtml+='</div>';
	return suportHtml;
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
function supportdata(supdata){
	var cooperativePartnerScolJ=supdata.cooperativePartnerSchool;
	if(cooperativePartnerScolJ==undefined){
		$('.saleAfterObjName').attr('schoolid','');
		$('.saleAfterObjName').html($('.businessNameSp').val());
	}else{
		$('.saleAfterObjName').attr('schoolid',cooperativePartnerScolJ.cooperativePartnerSchoolId);
		$('.saleAfterObjName').html(cooperativePartnerScolJ.schoolName);
	}
	
	$('.inp1').val(supdata.accountOpenCount);
	$('.inp2').val(supdata.informationConfirmationCount);
	$('.inp3').val(supdata.modifyStudentInformationCount);
	$('.inp4').val(supdata.salesSupportCount);
	if(supdata.salesSupportCount==undefined){
		$('.suppotrDetail').hide();
	}else{
		$('.suppotrDetail').show();
		$('.inp5').val(supdata.salesSupportDetail);
	}
}
//获取试用结果信息
function infodetail(boSupport){
	boSupport.cooperativePartnerSchoolId=$('.saleAfterObjName').attr('schoolid');
	boSupport.schoolName=$('.saleAfterObjName').html();
	boSupport.accountOpenCount=$('.inp1').val();
	boSupport.informationConfirmationCount=$('.inp2').val();
	boSupport.modifyStudentInformationCount=$('.inp3').val();
	boSupport.salesSupportCount =$('.inp4').val();
	boSupport.salesSupportDetail=$('.inp5').val();
	
}
$('.editInfo').on('keyup','.inp4',function(){
	if($(this).val()==""){
		$('.suppotrDetail').hide();
	}else{
		$('.suppotrDetail').show();
		$('.inp5').val('');
	}
})
//试用结果详情提交
function suprtConfirm(){
	var inparry=[];
	var totaltime=0;
	$.each($('.inpitem'),function(){
		if($(this).val()!=""){
			inparry.push($(this).val());
			totaltime=totaltime+Number($(this).val());
		}
	})
	if(inparry.length==0){
		pub.Alt('请填写一项信息',false);
		return false;
	}
	if($('.inp4').val()!="" && $.trim($('.inp5').val())==""){
		pub.Alt('请填写销售支持详情',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
	//计算工时
	var timeVal=(Number(totaltime)+Number($('.inp4').val()))*0.5;
	$('.timeVal').val(timeVal)
}
