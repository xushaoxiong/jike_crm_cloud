function aftSealtHtml(){
	var aftSealtHtml="";
	aftSealtHtml+='<div class="container-fluid">';
		aftSealtHtml+='<h4><span>新建列表>新建日志>售后</span></h4>';
		aftSealtHtml+='<div class="sign-wap">';
			aftSealtHtml+='<span class="col"><b>备注：至少填写一项</b></span>';
			aftSealtHtml+='<div class="form-group row">';
				aftSealtHtml+='<label class="col-md-3 col-sm-3">极课相关软硬件安装调试</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp1" onkeyup="PosiintegerNum(this)" />';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;台</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-md-3 col-sm-3">考试作业出卷</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp2" onkeyup="PosiintegerNum(this)"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;份</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-md-3 col-sm-3">考试作业阅卷</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp3" onkeyup="PosiintegerNum(this)"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;张</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-md-3 col-sm-3">试卷作业出卷导出印刷检查</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp4" onkeyup="PosiintegerNum(this)"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-md-3 col-sm-3">阅卷需要批量ps或大批量手动处理</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp5" onkeyup="PosiintegerNum(this)"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;张</span>';
			aftSealtHtml+='</div>';
			aftSealtHtml+='<div class="form-group row ">';
				aftSealtHtml+='<label class="col-md-3 col-sm-3">系统排障</label>';
				aftSealtHtml+='<div class="col-md-1 col-sm-1">';
					aftSealtHtml+='<input type="text" class="form-control aftSelInp aftSelInp6" onkeyup="PosiintegerNum(this)"/>';
				aftSealtHtml+='</div>';
				aftSealtHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			aftSealtHtml+='</div>';
		aftSealtHtml+='</div>';
		aftSealtHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			aftSealtHtml+='<button class="btn btn-primary aftSealConfirm" style="margin-right: 15px;">提交</button>';
			aftSealtHtml+='<button class="btn btn-primary">重置</button>';
		aftSealtHtml+='</div>';
	aftSealtHtml+='</div>';
	return aftSealtHtml;
}
//信息赋值
function aftSealdata(asdata){
	$('.aftSelInp1').val(asdata.installationDebuggingCount)
	$('.aftSelInp2').val(asdata.homeworkVolumeCount)
	$('.aftSelInp3').val(asdata.homeworkMarkingCount)
	$('.aftSelInp4').val(asdata.printingInspectionCount)
	$('.aftSelInp5').val(asdata.markingHandleCount)
	$('.aftSelInp6').val(asdata.systemObstacleCount)
}
//获取试用结果信息
function infodetail(boCustomerService){
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
//试用结果详情提交
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
