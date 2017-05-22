function trainiHtml(){
	var trainiHtml="";
	trainiHtml+='<div class="container-fluid traincontainer">';
		trainiHtml+='<div class="Addtrain-wap clearfix" style="display:none;">';
//			trainiHtml+='<div class="AddtrainItem">';
//				trainiHtml+='<ul class="list-inline">';
//					trainiHtml+='<li>1.</li>';
//					trainiHtml+='<li><label>培训对象：</label><span>解放小学</span></li>';
//					trainiHtml+='<li><label>培训学科：</label><span>语文</span></li>';
//					trainiHtml+='<li><label>培训年级：</label><span>初一</span></li>';
//					trainiHtml+='<li><label>培训教师数量：</label><span>6</span></li>';
//					trainiHtml+='<li><a class="cursorm editAddtrain">编辑</a><a class="cursorm delAddtrain">删除</a></li>';
//				trainiHtml+='</ul>';
//			trainiHtml+='</div>';
		trainiHtml+='</div>';
		trainiHtml+='<div class="trainobject-wap clearfix">';
			trainiHtml+='<div class="col-sm-3 form-group trainObjitem">';
				trainiHtml+='<label class="col-sm-2">培训对象</label>';
				trainiHtml+='<div class="col-sm-6">';
					trainiHtml+='<span class="form-control trainObjName" style="width:150%;" disabled="disabled"></span>';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="col-sm-3 form-group trainObjitem" style="padding-left:3%!important">';
				trainiHtml+='<label class="col-sm-2"><span class="col">*</span>培训学科</label>';
				trainiHtml+='<div class="col-sm-6">';
					trainiHtml+='<select class="form-control trainObjstate">';
						trainiHtml+='<option></option>';
						trainiHtml+='<option>语文</option>';
						trainiHtml+='<option>数学</option>';
						trainiHtml+='<option>英语</option>';
						trainiHtml+='<option>物理</option>';
						trainiHtml+='<option>化学</option>';
						trainiHtml+='<option>生物</option>';
						trainiHtml+='<option>政治</option>';
						trainiHtml+='<option>地理</option>';
						trainiHtml+='<option>历史</option>';
						trainiHtml+='<option>信息</option>';
					trainiHtml+='</select>';
				trainiHtml+='</div>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="col-sm-3 form-group trainObjitem">';
				trainiHtml+='<label class="col-sm-2"><span class="col">*</span>培训年级</label>';
				trainiHtml+='<div class="col-sm-6">';
					trainiHtml+='<select class="form-control trainObjstate">';
						trainiHtml+='<option></option>';
						trainiHtml+='<option>初一</option>';
						trainiHtml+='<option>初二</option>';
						trainiHtml+='<option>初三</option>';
						trainiHtml+='<option>高一</option>';
						trainiHtml+='<option>高二</option>';
						trainiHtml+='<option>高三</option>';
					trainiHtml+='</select>';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="col-sm-3 form-group trainObjitem">';
			trainiHtml+='<label class="col-sm-2"><span class="col">*</span>培训教师数量</label>';
			trainiHtml+='<div class="col-sm-6">';
				trainiHtml+='<input type="text" class="form-control trainObjstate" onkeyup="PosiintegerNum(this)" />';
			trainiHtml+='</div>';
		trainiHtml+='</div>';
		trainiHtml+='</div>';
		trainiHtml+='<div class="sign-wap">';
			trainiHtml+='<h3><b>培训内容：</b></h3>';
			trainiHtml+='<div class="col-sm-6">';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="col-sm-3 trainlabel">产品详细使用操作培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp1 inpitem" onkeyup="PosiintegerNum(this)" />';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;人</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row ">';
					trainiHtml+='<label class="col-sm-3 trainlabel">考务实施、学生作答、老师批改培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp2 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row ">';
					trainiHtml+='<label class="col-sm-3 trainlabel">极课PPT演讲及简单出阅卷演示</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp3 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row ">';
					trainiHtml+='<label class="col-sm-3 trainlabel">详细出卷演示（语数英）</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp4 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row ">';
					trainiHtml+='<label class="col-sm-3 trainlabel">详细阅卷培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp5 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row ">';
					trainiHtml+='<label class="col-sm-3 trainlabel">学情追踪介绍</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp6 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="col-sm-6">';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="col-sm-3 trainlabel">学生端及家长端介绍</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp7 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="col-sm-3 trainlabel">打印、油印注意事项及考务培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp8 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="col-sm-3 trainlabel">入校sop流程讲解</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp9 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="col-sm-3 trainlabel">竞品介绍</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp10 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="col-sm-3 trainlabel">必备配件安装及操作练习辅导</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp11 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="col-sm-3 trainlabel">培训成果测试及辅导</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp12 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
			trainiHtml+='<p class="col text-right" style="font-size:13px;margin-right:7%;">*培训内容至少填写一项</p>';
			trainiHtml+='<div class="planbtn-group row text-center" style="padding-bottom:30px;">';
				trainiHtml+='<button class="btn btn-primary trainsave" style="margin-right: 15px;display:none;padding:6px 19px;" onclick="trainsave($(this))" addId="00">保存并添加</button>';
				trainiHtml+='<button class="btn btn-primary trainConfirm" style="padding:6px 40px;" onclick="trainConfirm()">提交</button>';
			trainiHtml+='</div>';
		trainiHtml+='</div>';
	trainiHtml+='</div>';
	return trainiHtml;
}

//新增培训信息列表
function trainsaveLiat(addTraindata){
	var TraSaveHtml='';
	console.log(addTraindata)
	$.each(addTraindata, function(i,item) {
		console.log(item)
		var cooperativePartnerSchool=item.cooperativePartnerSchool;
		TraSaveHtml+='<div class="AddtrainItem">';
			TraSaveHtml+='<ul class="list-inline">';
				TraSaveHtml+='<li>'+(i+1)+'</li>';
				TraSaveHtml+='<li><label>培训对象：</label><span class="AddTrainObjname" scolid="'+item.cooperativePartnerscolId+'">'+cooperativePartnerSchool.schoolName+'</span></li>';
				TraSaveHtml+='<li><label>培训学科：</label><span class="AddTrainObjDiscipline">'+item.trainingDiscipline+'</span></li>';
				TraSaveHtml+='<li><label>培训年级：</label><span class="AddTrainObjGrade">'+item.trainingGrade+'</span></li>';
				TraSaveHtml+='<li><label>培训教师数量：</label><span class="AddTrainObjNumb">'+item.trainingTeachersCount+'</span></li>';
				TraSaveHtml+='<li><a class="cursorm" onclick="editTrainObj($(this))">编辑</a><a class="cursorm delObj" onclick="delTrainObj($(this))">删除</a></li>';
			TraSaveHtml+='</ul>';
		TraSaveHtml+='</div>';
	});
	
	$('.Addtrain-wap').html(TraSaveHtml);
	$('.trainObjName').attr('scolid',$('.AddTrainObjname').attr('scolid'));
	$('.trainObjName').html($('.AddTrainObjname').html());
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
	$('.trainObjitem').eq(1).find('select').val(trdata.trainingDiscipline);
	$('.trainObjitem').eq(2).find('select').val(trdata.trainingGrade);
	$('.trainObjitem').eq(3).find('input').val(trdata.trainingTeachersCount);
}


//编辑
//commJ是journaList返回的数据
function editTrainObj(_this){
	var Index=_this.parents('.AddtrainItem').index();
	$('.trainsave').attr('addId',Index);
	$.each(commJ.boTrainArr,function(i,item){
		if(i==Index){
			editTrainInfo(item);
		}
	})
	
}
//编辑新增信息内容
function editTrainInfo(boTrain){
//	var cooperativePartnerSchool={};
	cooperativePartnerSchool=boTrain.cooperativePartnerSchool;
	$('.inp1').val(boTrain.operationTrainingCount);
	$('.inp2').val(boTrain.correctingTrainingCount);
	$('.inp3').val(boTrain.pptDemonstratedCount);
	$('.inp4').val(boTrain.volumeDemonstratedCount);
	$('.inp5').val(boTrain.markingTrainCount);
	$('.inp6').val(boTrain.introductionLeanCount);
	$('.inp7').val(boTrain.studentParentIntroductionCount);
	$('.inp8').val(boTrain.examinationTrainCount);
	$('.inp9').val(boTrain.sopProcessExplanationCount);
	$('.inp10').val(boTrain.productsIntroductionCount);
	$('.inp11').val(boTrain.operationGuidanceCount);
	$('.inp12').val(boTrain.testCoachCount);
//	$('.trainObjitem').eq(0).find('span').html(cooperativePartnerSchool.schoolName);
//	$('.trainObjitem').eq(0).find('span').attr('scolid'.cooperativePartnerscolId);
	$('.trainObjitem').eq(1).find('select').val(boTrain.trainingDiscipline);
	$('.trainObjitem').eq(2).find('select').val(boTrain.trainingGrade);
	$('.trainObjitem').eq(3).find('input').val(boTrain.trainingTeachersCount);
}

//添加并保存
//未填写新增信息内容判断
function addtrainstate(){
	var inparry=[];
//	var trainObjName=$('.trainObjitem:not(".trainobjectItemHide")').eq(0).find('span').attr('scolid');
	var trainObjDiscipline=$('.trainObjitem').eq(1).find('select').val();
	var trainObjGrade=$('.trainObjitem').eq(2).find('select').val();
	var trainObjNumb=$('.trainObjitem').eq(3).find('input').val();
	if(trainObjDiscipline==""){
		pub.Alt('请选择培训学科',false);
		return false;
	}
	if(trainObjGrade==""){
		pub.Alt('请选择培训年级',false);
		return false;
	}
	if(trainObjNumb==""){
		pub.Alt('请输入培训教师数量',false);
		return false;
	}
	
	$('.inpitem').each(function(){
		if($.trim($(this).val())!=''){
			inparry.push($.trim($(this).val()));
		}
		
	})
	if(inparry.length==0){
		pub.Alt('请填写一项培训内容信息',false);
		return false;
	}
	return true;
}
var addTrainObjArry=[];

function trainsave(_this){
	
	if(!addtrainstate()){
		return;
	}
	var AddboTrain={};
//	var cooperativePartnerSchool={};
	var trainsaveId=_this.attr('addId');
	infodetail(AddboTrain);
	if(trainsaveId==="00"){
		
		commJ.boTrainArr.push(AddboTrain);
		trainsaveLiat(commJ.boTrainArr);
	}else{
		commJ.boTrainArr[trainsaveId]=AddboTrain;
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjname').html(AddboTrain.schoolName);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjDiscipline').html(AddboTrain.trainingDiscipline);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjGrade').html(AddboTrain.trainingGrade);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjNumb').html(AddboTrain.trainingTeachersCount);
	}
	
	$('.inpitem').val('');
	$('.trainObjitem input').val('');
	$('.trainObjitem select').val('');
	_this.attr('addId','00');
	
	
}
//删除新增信息内容
function delTrainObj(_this){
	var delIndex=_this.parents('.AddtrainItem').index();
	var Indexlength=_this.parents('.AddtrainItem').length;
	$('input,select').val('');
	$('.trainObjName').html('');
	$('.trainsave').attr('addId',(Indexlength-1));
	if(Indexlength==1){
		$('.delObj').hide();
	}
	$.each(commJ.boTrainArr,function(i,item){	
		if(i==delIndex){
			commJ.boTrainArr.splice(delIndex,1);
			_this.parents('.AddtrainItem').remove();
		}
	})
	if($('.AddtrainItem').length==0){
		$('.Addtrain-wap').hide();
	}
}
////获取试用结果信息
function infodetail(boTrain){
	var cooperativePartnerSchool={};
	boTrain.cooperativePartnerSchool=cooperativePartnerSchool;
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
	boTrain.cooperativePartnerscolId=$('.trainObjitem').eq(0).find('span').attr('scolid');
	cooperativePartnerSchool.schoolName=$('.trainObjitem').eq(0).find('span').html();
	boTrain.trainingDiscipline=$('.trainObjitem').eq(1).find('select').val();
	boTrain.trainingGrade=$('.trainObjitem').eq(2).find('select').val();
	boTrain.trainingTeachersCount=$('.trainObjitem').eq(3).find('input').val();
}



function trainConfirm(){
	var totalTime=0;
	var twoTime=0;
	var ThreeTime=0;
	var trainsaveId=$('.trainsave').attr('addId');
	$.each(commJ.boTrainArr, function(i,item) {
		if(item.operationTrainingCount==undefined){
			item.operationTrainingCount="";
		}
		if(item.pptDemonstratedCount==undefined){
			item.pptDemonstratedCount="";
		}
		if(item.introductionLeanCount==undefined){
			item.introductionLeanCount="";
		}
		if(item.studentParentIntroductionCount==undefined){
			item.studentParentIntroductionCount="";
		}
		if(item.examinationTrainCount==undefined){
			item.examinationTrainCount="";
		}
		if(item.sopProcessExplanationCount==undefined){
			item.sopProcessExplanationCount="";
		}
		if(item.correctingTrainingCount==undefined){
			item.correctingTrainingCount="";
		}
		if(item.productsIntroductionCount==undefined){
			item.productsIntroductionCount="";
		}
		if(item.markingTrainCount==undefined){
			item.markingTrainCount="";
		}
		if(item.operationGuidanceCount==undefined){
			item.operationGuidanceCount="";
		}
		if(item.testCoachCount==undefined){
			item.testCoachCount="";
		}
		if(item.volumeDemonstratedCount==undefined){
			item.volumeDemonstratedCount="";
		}
		totalTime+=Number(Number(item.operationTrainingCount)+Number(item.pptDemonstratedCount)+Number(item.introductionLeanCount)+Number(item.studentParentIntroductionCount)+Number(item.examinationTrainCount)+Number(item.sopProcessExplanationCount)+Number(item.productsIntroductionCount))*0.5
		twoTime+=Number(item.correctingTrainingCount)+Number(item.markingTrainCount)+Number(item.operationGuidanceCount)+Number(item.testCoachCount);
		ThreeTime+=Number(item.volumeDemonstratedCount)*1.5;
	});
	if((!addtrainstate()) && commJ.boTrainArr.length==0){
		return;
	}
	var AddboTrain={};
	infodetail(AddboTrain)
	console.log(AddboTrain)
//	$('.Addtrain-wap').show();
	if(trainsaveId!=="00"){
		commJ.boTrainArr[trainsaveId]=AddboTrain;
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjname').html(AddboTrain.schoolName);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjDiscipline').html(AddboTrain.trainObjDiscipline);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjGrade').html(AddboTrain.trainObjGrade);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjNumb').html(AddboTrain.trainObjNumb);
		
	}else{
		if(!addtrainstate()&&commJ.boTrainArr.length!=0){
			$('.alertdiv').hide();	
		}else{
			commJ.boTrainArr.push(AddboTrain);
			trainsaveLiat(commJ.boTrainArr);
		}
	}
	$('.inpitem').val(''); 
	$('.trainObjitem input').val('');
	$('.trainObjitem select').val('');
	$('.editInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=totalTime+twoTime+ThreeTime;
	$('.timeVal').val(timeVal);
}



































////试用结果详情提交
//$('.editInfo').on('click','.trainConfirm',function(){
//	var inparry=[];
//	var totalTime=0;
//	$.each($('.inpitem'),function(){
//		if($(this).val()!=""){
//			inparry.push($(this).val());
//			totalTime=totalTime+Number($(this).val())
//		}
//	})
//	if(inparry.length==0){
//		pub.Alt('请填写一项信息',false);
//		return false;
//	}
//	$('.editInfo').hide();
//	$('#addJournal').show();
//	$('.journaConfirm').prop('disabled',false);
//	//计算工时
//	var timeVal=((Number(totalTime))+Number($('.inp2').val())+Number($('.inp5').val())+Number($('.inp11').val())+Number($('.inp12').val())+(Number($('.inp4').val()))*2)*0.5;
//	$('.timeVal').val(timeVal);
//})
