function supportHtml(){
	var suportHtml="";
	suportHtml+='<div class="container-fluid">';
		suportHtml+='<div class="sign-wap">';
			suportHtml+='<span class="col"><b>备注：至少填写一项</b></span>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-md-2 col-sm-2">开通学校账号</label>';
				suportHtml+='<div class="col-md-1 col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp1 inpitem" onkeyup="PosiintegerNum(this)"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row ">';
				suportHtml+='<label class="col-md-2 col-sm-2">信息确认及物资准备</label>';
				suportHtml+='<div class="col-md-1 col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp2 inpitem" onkeyup="PosiintegerNum(this)"/>';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-md-2 col-sm-2">增删查改教师学生信息</label>';
				suportHtml+='<div class="col-md-1 col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp3 inpitem" onkeyup="PosiintegerNum(this)" />';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row">';
				suportHtml+='<label class="col-md-2 col-sm-2">销售支持</label>';
				suportHtml+='<div class="col-md-1 col-sm-1">';
					suportHtml+='<input type="text" class="form-control inp4 inpitem" onkeyup="num(this)" />';
				suportHtml+='</div>';
				suportHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;小时</span>';
			suportHtml+='</div>';
			suportHtml+='<div class="form-group row suppotrDetail" style="display:none;">';
				suportHtml+='<label class="col-md-2 col-sm-2">销售支持详情</label>';
				suportHtml+='<div class="col-md-3 col-sm-3">';
					suportHtml+='<textarea class="form-control inp5"></textarea>';
				suportHtml+='</div>';
			suportHtml+='</div>';
		suportHtml+='</div>';
		suportHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			suportHtml+='<button class="btn btn-primary suprtConfirm" style="margin-right: 15px;">提交</button>';
			suportHtml+='<button class="btn btn-primary">重置</button>';
		suportHtml+='</div>';
	suportHtml+='</div>';
	return suportHtml;
}
//获取试用结果信息
function supportInfo(boSupport){
	boSupport.accountOpenCount=$('.inp1').val();
	boSupport.informationConfirmationCount=$('.inp2').val();
	boSupport.modifyStudentInformationCoun=$('.inp3').val();
	boSupport.salesSupportCount =$('.inp4').val();
	boSupport.salesSupportDetail=$('.inp5').val();
	
}
$('.FillInfo').on('keyup','.inp4',function(){
	if($(this).val()==""){
		$('.suppotrDetail').hide();
	}else{
		$('.suppotrDetail').show();
	}
})
//试用结果详情提交
$('.FillInfo').on('click','.suprtConfirm',function(){
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
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=(Number(totaltime)+Number($('.inp4').val()))*0.5;
	$('.timeVal').val(timeVal)
})

//提交返回后台试用结果信息
	var supportJ={};
	var boSupport={};
	$('.journaConfirm').click(function(){
		supportInfo(boSupport);
		logDateF(logData);
		totalDetailF(totalDetail);
		supportJ.logData=logData;
		supportJ.totalDetail=totalDetail
		supportJ.boSupport=boSupport;
		
		$ajax('post','businessOpportunityLog/addBOLogBoSupport',supportJ,function succF(jo){
			$('.R-wap').load('journal/list.html');
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	})