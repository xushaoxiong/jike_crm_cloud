function dailytHtml(){
	var dailytHtml="";
	dailytHtml+='<div class="container-fluid">';
		dailytHtml+='<div class="sign-wap">';
			dailytHtml+='<span class="col"><b>备注：至少填写一项</b></span>';
			dailytHtml+='<div class="form-group row">';
				dailytHtml+='<label class="col-md-3 col-sm-3">文档撰写或修改</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp1 inpitem" onkeyup="worktimeNum(this)" />';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;小时</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">极课PPT演讲及简单出阅卷演示</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp2 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">详细出卷演示（语数英）</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp3 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">详细阅卷培训</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp4 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">学情追踪介绍</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp5 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">学生端及家长端介绍</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp6 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">打印、油印注意事项及考务培训</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp7 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">入校sop流程讲解</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp8 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">竞品介绍</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp9 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">必备配件安装及操作练习辅导</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp10 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
			dailytHtml+='<div class="form-group row ">';
				dailytHtml+='<label class="col-md-3 col-sm-3">培训成果测试及辅导</label>';
				dailytHtml+='<div class="col-md-1 col-sm-1">';
					dailytHtml+='<input type="text" class="form-control inp11 inpitem" onkeyup="PosiintegerNum(this)"/>';
				dailytHtml+='</div>';
				dailytHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
			dailytHtml+='</div>';
		dailytHtml+='</div>';
		dailytHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			dailytHtml+='<button class="btn btn-primary dailyConfirm" style="margin-right: 15px;">提交</button>';
//			dailytHtml+='<button class="btn btn-primary">重置</button>';
		dailytHtml+='</div>';
	dailytHtml+='</div>';
	return dailytHtml;
}
//获取试用结果信息
function dailyInfo(boTrain){
	boTrain.documentWriteModify=$('.inp1').val();
	boTrain.pptDemonstratedCount=$('.inp2').val();
	boTrain.volumeDemonstratedCount=$('.inp3').val();
	boTrain.markingTrainCount=$('.inp4').val();
	boTrain.introductionLeanCount=$('.inp5').val();
	boTrain.studentParentIntroductionCount=$('.inp6').val();
	boTrain.examinationTrainCount=$('.inp7').val();
	boTrain.sopProcessExplanationCount=$('.inp8').val();
	boTrain.productsIntroductionCount=$('.inp9').val();
	boTrain.operationGuidanceCount=$('.inp10').val();
	boTrain.testCoachCount=$('.inp11').val();
	
}
//试用结果详情提交
$('.FillInfo').on('click','.dailyConfirm',function(){
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
	var timeVal=((Number(totalTime))+Number($('.inp1').val())+Number($('.inp4').val())+Number($('.inp10').val())+Number($('.inp11').val())+(Number($('.inp3').val()))*2)*0.5;
	$('.timeVal').val(timeVal);
})
//提交返回后台试用结果信息
	var dailyJ={};
	var serviceDailyEvents={};
	$('.journaConfirm').click(function(){
		dailyInfo(serviceDailyEvents);
		logDateF(logData);
		totalDetailF(totalDetail);
		dailyJ.logData=logData;
		dailyJ.totalDetail=totalDetail
		dailyJ.serviceDailyEvents=serviceDailyEvents;

		$ajax('post','businessOpportunityLog/addServiceDailyEvent',dailyJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	})