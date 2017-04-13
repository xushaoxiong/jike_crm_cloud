function TrialHtml(){
	var traHtml="";
	traHtml+='<div class="container-fluid">';
		traHtml+='<h4><span>新建列表>新建日志>试用中</span></h4>';
		traHtml+='<div class="trial-wap">';
			traHtml+='<div class="form-group row date-wap">';
				traHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>试用周期</label>';
				traHtml+='<div class="col-md-1 col-sm-2">';
					traHtml+='<span class="form-control startTime" data-format="dd-mm-yyyy" onclick="WdatePicker()"/></span>';
				traHtml+='</div>';
				traHtml+='<span class="pull-left" style="line-height: 34px;">到</span>';
				traHtml+='<div class="col-md-1 col-sm-2">';
					traHtml+='<span class="form-control endTime" data-format="dd-mm-yyyy" onclick="WdatePicker()"/></span>';
				traHtml+='</div>';
			traHtml+='</div>';
			traHtml+='<div class="form-group row ">';
				traHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>试用年级</label>';
				traHtml+='<ul class="list-unstyled col-md-4 col-sm-6 list-inline gradeWap">';
					traHtml+='<li>初一</li>';
					traHtml+='<li>初二</li>';
					traHtml+='<li>初三</li>';
					traHtml+='<li>高一</li>';
					traHtml+='<li>高二</li>';
					traHtml+='<li>高三</li>';
				traHtml+='</ul>';
			traHtml+='</div>';
			traHtml+='<div class="form-group row">';
				traHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>试用学科</label>';
				traHtml+='<ul class="list-unstyled col-md-4 col-sm-6 list-inline disciplineWap">';
					traHtml+='<li>语文</li>';
					traHtml+='<li>数学</li>';
					traHtml+='<li>英语</li>';
					traHtml+='<li>物理</li>';
					traHtml+='<li>化学</li>';
					traHtml+='<li>生物</li>';
					traHtml+='<li>政治</li>';
					traHtml+='<li>地理</li>';
					traHtml+='<li>历史</li>';
					traHtml+='<li>信息</li>';
				traHtml+='</ul>';
			traHtml+='</div>';
			traHtml+='<div class="form-group row">';
				traHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>试用机型</label>';
				traHtml+='<div class="col-md-2 col-sm-3">';
					traHtml+='<select class="form-control trialModel">';
						traHtml+='<option>极课A3阅卷仪</option>';
						traHtml+='<option>极课A4阅卷仪</option>';
					traHtml+='</select>';
				traHtml+='</div>';
			traHtml+='</div>';
			traHtml+='<div class="form-group row">';
				traHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>试用机型数量</label>';
				traHtml+='<div class="col-md-1 col-sm-2">';
					traHtml+='<input type="text" class="form-control triamModalNumb" onkeyup="PosiintegerNum(this)"/>&nbsp;';
				traHtml+='</div>';
				traHtml+='<span style="line-height: 34px;">台</span>';
			traHtml+='</div>';
		traHtml+='</div>';
		traHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			traHtml+='<button class="btn btn-primary trialConfirm" style="margin-right: 15px;">提交</button>';
			traHtml+='<button class="btn btn-primary">重置</button>';
		traHtml+='</div>';
	traHtml+='</div>';
	return traHtml;
}
//获取试用中信息详情
function trialInfo(boInTrial){
	boInTrial.trialStartDate=$('.startTime').html();
	boInTrial.trialEndDate=$('.endTime').html();
	var gradeWapArry=[];
	var disciplineWapArry=[];
	$('.gradeWap .check').each(function(){
		gradeWapArry.push($(this).html())
	})
	boInTrial.trialGrade=gradeWapArry.join('#');
	$('.disciplineWap .check').each(function(){
		disciplineWapArry.push($(this).html())
	})
	boInTrial.trialSubject=disciplineWapArry.join('#');
	boInTrial.trialModel=$('.trialModel').find('option:selected').val();
	boInTrial.trialMachineNum=$.trim($('.triamModalNumb').val());

}
//选择年级
$('.FillInfo').on('click','.gradeWap li',function(){
	$(this).toggleClass('check');
})
$('.gradeWap li').click(function(){
	$(this).toggleClass('check');
})
$('.FillInfo').on('click','.disciplineWap li',function(){
	$(this).toggleClass('check');
})
$('.disciplineWap li').click(function(){
	$(this).toggleClass('check');
})
//提交试用中详情信息
$('.FillInfo').on('click','.trialConfirm',function(){
	var startTime=$('.startTime').html();
	var endTime=$('.endTime').html();
	if(startTime==""){
		pub.Alt('试用周期开始时间',false);
		return false;
	}
	if(endTime==""){
		pub.Alt('试用周期结束时间',false);
		return false;
	}
	if(startTime>endTime){
		pub.Alt('开始时间不能大于结束时间',false);
		return false;
	}
	var gradeWapArry=[];
	var disciplineWapArry=[];
	$('.gradeWap .check').each(function(){
		gradeWapArry.push($(this).html())
	})
	if(gradeWapArry.length==0){
		pub.Alt('请选择年级',false);
		return false;
	}
	$('.disciplineWap .check').each(function(){
		disciplineWapArry.push($(this).html())
	})
	if(disciplineWapArry.length==0){
		pub.Alt('请选择学科',false);
		return false;
	}
	var trialMachineNum=$.trim($('.triamModalNumb').val());
	if(trialMachineNum==""){
		pub.Alt('请填写试用机器数量',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
})
//提交试用信息返回后台数据
	var trialJ={};
	var boInTrial={};
	$('.journaConfirm').click(function(){
		trialInfo(boInTrial);
		logDateF(logData);
		totalDetailF(totalDetail);
		trialJ.logData=logData;
		trialJ.totalDetail=totalDetail
		trialJ.boInTrial=boInTrial;
		
		$ajax('post','businessOpportunityLog/addBOLogInTrial',trialJ,function succF(jo){
			console.log(jo)
			},function errF(jo){
				alert(jo.message);
		})
	})


