function trainiHtml(){
	var trainiHtml="";
	trainiHtml+='<div class="container-fluid">';
		trainiHtml+='<h4><span>新建列表>新建日志>支持</span></h4>';
		trainiHtml+='<div class="sign-wap">';
			trainiHtml+='<span class="col"><b>备注：至少填写一项</b></span>';
			trainiHtml+='<div class="form-group row">';
				trainiHtml+='<label class="col-md-3 col-sm-3">产品详细使用操作培训</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control trainPersonNumb" onkeyup="PosiintegerNum(this)" />';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;人</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">考务实施、学生作答、老师批改培训</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control trainNumb" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
		trainiHtml+='</div>';
		trainiHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			trainiHtml+='<button class="btn btn-primary trainConfirm" style="margin-right: 15px;">提交</button>';
			trainiHtml+='<button class="btn btn-primary">重置</button>';
		trainiHtml+='</div>';
	trainiHtml+='</div>';
	return trainiHtml;
}
//获取试用结果信息
function trainInfo(boTrain){
	boTrain.operationTrainingCount=$('.trainPersonNumb').val();
	boTrain.correctingTrainingCount=$('.trainNumb').val();
	
}
//试用结果详情提交
$('.FillInfo').on('click','.trainConfirm',function(){
	var trainPersonNumb=$('.trainPersonNumb').val();
	var trainNumb=$('.trainNumb').val();
	if(trainPersonNumb==''&& trainNumb==''){
		pub.Alt('请填写一项信息',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=((Number(trainPersonNumb))*0.5+(Number(trainNumb)));
	$('.timeVal').val(timeVal);
})
//提交返回后台试用结果信息
	var trainJ={};
	var boTrain={};
	$('.journaConfirm').click(function(){
		trainInfo(boTrain);
		logDateF(logData);
		totalDetailF(totalDetail);
		trainJ.logData=logData;
		trainJ.totalDetail=totalDetail
		trainJ.boTrain=boTrain;
		
		$ajax('post','businessOpportunityLog/addBOLogBoTrain',trainJ,function succF(jo){
			console.log(jo)
			},function errF(jo){
				alert(jo.message);
		})
	})