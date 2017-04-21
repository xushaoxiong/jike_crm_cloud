function TrialHtml(){
	var traHtml="";
	traHtml+='<div class="container-fluid">';
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
//			traHtml+='<button class="btn btn-primary">重置</button>';
		traHtml+='</div>';
	traHtml+='</div>';
	return traHtml;
}
//赋值页面
function traildata(tdata){
	$('.startTime').html(tdata.trialStartDate);
	$('.endTime').html(tdata.trialEndDate);
	var gardArry=(tdata.trialGrade).split('#');
	var subjArry=(tdata.trialSubject).split('#');
	for(var i=0;i<$('.gradeWap li').length;i++){
		for (var j=0;j<gardArry.length;j++) {
			if($('.gradeWap li').eq(i).html()==gardArry[j]){
				$('.gradeWap li').eq(i).addClass('check');
			}
		}
	}
	for(var i=0;i<$('.disciplineWap li').length;i++){
		for (var j=0;j<subjArry.length;j++) {
			if($('.disciplineWap li').eq(i).html()==subjArry[j]){
				$('.disciplineWap li').eq(i).addClass('check');
			}
		}
	}
	$('.trialModel').val(tdata.trialModel).find('option').prop('selected',true);
	$('.triamModalNumb').val(tdata.trialMachineNum);
	
}
//获取试用中信息详情
function infodetail(boInTrial){
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
$('.editInfo').on('click','.gradeWap li',function(){
	$(this).toggleClass('check');
})
$('.gradeWap li').click(function(){
	$(this).toggleClass('check');
})
$('.editInfo').on('click','.disciplineWap li',function(){
	$(this).toggleClass('check');
})
$('.disciplineWap li').click(function(){
	$(this).toggleClass('check');
})
//提交试用中详情信息
$('.editInfo').on('click','.trialConfirm',function(){
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
	$('.editInfo').hide();
	$('#addJournal').show();
})


