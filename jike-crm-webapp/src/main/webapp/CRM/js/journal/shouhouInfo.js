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
//获取试用结果信息
function aftSealInfo(boCustomerService){
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
$('.FillInfo').on('click','.aftSealConfirm',function(){
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
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
})

//提交返回后台试用结果信息
	var afterSealJ={};
	var boCustomerService={};
	$('.journaConfirm').click(function(){
		aftSealInfo(boCustomerService);
		logDateF(logData);
		totalDetailF(totalDetail);
		afterSealJ.logData=logData;
		afterSealJ.totalDetail=totalDetail
		afterSealJ.boCustomerService=boCustomerService;
		
		$ajax('post','businessOpportunityLog/addBOLogBoCustomerService',afterSealJ,function succF(jo){
			console.log(jo)
			},function errF(jo){
				alert(jo.message);
		})
	})