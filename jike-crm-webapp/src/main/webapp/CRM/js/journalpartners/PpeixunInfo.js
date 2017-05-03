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
			trainiHtml+='<button class="btn btn-primary trainConfirm" style="margin-right: 15px;" onclick="trainConfirm()">提交</button>';
//			trainiHtml+='<button class="btn btn-primary">重置</button>';
		trainiHtml+='</div>';
	trainiHtml+='</div>';
	return trainiHtml;
}
//获取试用结果信息
function trainInfo(boTrain){
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
//$('.FillInfo').on('click','.trainConfirm',function(){
function trainConfirm(){
	$('.procewap').show();
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
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=((Number(totalTime))+Number($('.inp2').val())+Number($('.inp5').val())+Number($('.inp11').val())+Number($('.inp12').val())+(Number($('.inp4').val()))*2)*0.5;
	$('.timeVal').val(timeVal);
}
//提交返回后台试用结果信息
	var trainJ={};
	var boTrain={};
//	$('.journaConfirm').click(function(){
	function trainpanerjournaConfirm(){
		trainInfo(boTrain);
		logDateF(logData);
		totalDetailF(totalDetail);
		trainJ.logData=logData;
		trainJ.totalDetail=totalDetail
		trainJ.boTrain=boTrain;
		
		$ajax('post','businessOpportunityLog/addBOLogBoTrain',trainJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	}