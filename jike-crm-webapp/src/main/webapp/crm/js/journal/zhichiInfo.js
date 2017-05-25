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
			suportHtml+='<h4><b>支持信息：</b><span class="col" style="font-size:13px;">（备注：至少填写一项）</span></h4>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-sm-2">开通学校账号</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control scolAccoutnumb" onkeyup="PosiintegerNum(this)" maxlength="3"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row ">';
				suportHtml+='<label class="col-sm-2">信息确认及物资准备</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control goodrepNumb" onkeyup="PosiintegerNum(this)" maxlength="3"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row ">';
				suportHtml+='<label class="col-sm-2">增删查改教师学生信息</label>';
				suportHtml+='<div class="col-sm-1">';
					suportHtml+='<input type="text" class="form-control StudentInformationCount" onkeyup="PosiintegerNum(this)" maxlength="3"/>';
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

//获取试用结果信息
function supportInfo(boSupport){
	boSupport.cooperativePartnerSchoolId=$('.saleAfterObjName').attr('schoolid');
	if(boSupport.cooperativePartnerSchoolId==""){
		boSupport.schoolName="";
	}else{
		boSupport.schoolName=$('.saleAfterObjName').html();
	}
	boSupport.accountOpenCount=$('.scolAccoutnumb').val();
	boSupport.informationConfirmationCount=$('.goodrepNumb').val();
	boSupport.modifyStudentInformationCount=$('.StudentInformationCount').val();
	
}
////试用结果详情提交
//$('.FillInfo').on('click','.suprtConfirm',function(){
function suprtConfirm(){
	
	var scolAccoutnumb=$('.scolAccoutnumb').val();
	var goodrepNumb=$('.goodrepNumb').val();
	var StudentInformationCount=$('.StudentInformationCount').val();
	if(scolAccoutnumb==''&& goodrepNumb==''&&StudentInformationCount==''){
		pub.Alt('请填写一项信息',false);
		return;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.procewap').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=(Number(scolAccoutnumb)+Number(goodrepNumb)+Number(StudentInformationCount))*0.5;
	$('.timeVal').val(timeVal)
}
////提交返回后台试用结果信息
	var supportJ={};
	var boSupport={};
//	$('.journaConfirm').click(function(){
	function supportjournaConfirm(){
		supportInfo(boSupport);
		logDateF(logData);
		totalDetailF(totalDetail);
		supportJ.logData=logData;
		supportJ.totalDetail=totalDetail
		supportJ.boSupport=boSupport;
		$(this).prop('disabled',true);
		$ajax('post','businessOpportunityLog/addBOLogBoSupport',supportJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	}