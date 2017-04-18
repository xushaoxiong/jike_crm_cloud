function trainiHtml(){
	var trainiHtml="";
	trainiHtml+='<div class="container-fluid">';
		trainiHtml+='<div class="sign-wap">';
			trainiHtml+='<span class="col"><b>备注：至少填写一项</b></span>';
			trainiHtml+='<div class="form-group row">';
				trainiHtml+='<label class="col-md-3 col-sm-3">产品详细使用操作培训</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp1 inpitem" onkeyup="PosiintegerNum(this)" />';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;人</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">考务实施、学生作答、老师批改培训</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp2 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">极课PPT演讲及简单出阅卷演示</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp3 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">详细出卷演示（语数英）</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp4 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">详细阅卷培训</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp5 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">学情追踪介绍</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp6 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">学生端及家长端介绍</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp7 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">打印、油印注意事项及考务培训</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp8 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">入校sop流程讲解</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp9 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">竞品介绍</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp10 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">必备配件安装及操作练习辅导</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp11 inpitem" onkeyup="PosiintegerNum(this)"/>';
				trainiHtml+='</div>';
				trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="form-group row ">';
				trainiHtml+='<label class="col-md-3 col-sm-3">培训成果测试及辅导</label>';
				trainiHtml+='<div class="col-md-1 col-sm-1">';
					trainiHtml+='<input type="text" class="form-control inp12 inpitem" onkeyup="PosiintegerNum(this)"/>';
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
//信息赋值
function traindata(trdata){
	$('.inp1').val(trdata.operationTrainingCount);
	$('.inp2').val(trdata.correctingTrainingCount);
	$('.inp3').val(trdata.pptDemonstratedCount);
	$('.inp4').val(trdata.volumeDemonstratedCount);
	$('.inp5').val(trdata.markingTrainCount);
	$('.inp6').val(trdata.introductionLeanCount);
	$('.inp7').val(trdata.studentParentIntroductionCount);
	$('.inp8').val(trdata.examinationTrainCount);
	$('.inp9').val(trdata.sopProcessExplanationCount);
	$('.inp10').val(trdata.productsIntroductionCount);
	$('.inp11').val(trdata.operationGuidanceCount);
	$('.inp12').val(trdata.testCoachCount);
}
//获取试用结果信息
function infodetail(boTrain){
	boTrain.operationTrainingCount=$('.inp1').val();
	boTrain.correctingTrainingCount=$('.inp2').val();
	boTrain.pptDemonstratedCount=$('.inp3').val();
	boTrain.volumeDemonstratedCount=$('.inp4').val();
	boTrain.markingTrainCount=$('.inp5').val();
	boTrain.introductionLeanCount=$('.inp6').val();
	boTrain.studentParentIntroductionCount=$('.inp7').val();
	boTrain.examinationTrainCount=$('.inp8').val();
	boTrain.sopProcessExplanationCount=$('.inp9').val();
	boTrain.productsIntroductionCount=$('.inp10').val();
	boTrain.operationGuidanceCount=$('.inp11').val();
	boTrain.testCoachCount=$('.inp12').val();
	
}
//试用结果详情提交
$('.editInfo').on('click','.trainConfirm',function(){
	var inparry=[];
	var totalTime=0;
	$.each($('.inpitem'),function(){
		if($(this).val()!=""){
			inparry.push($(this).val());
			totalTime=totalTime+Number($(this).val())
		}
	})
	if(inparry.length==0){
		pub.Alt('请填写一项信息',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=((Number(totalTime))+Number($('.inp2').val())+Number($('.inp5').val())+Number($('.inp11').val())+Number($('.inp12').val())+(Number($('.inp4').val()))*2)*0.5;
	$('.timeVal').val(timeVal);
})
