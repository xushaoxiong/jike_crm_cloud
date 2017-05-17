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
					trainiHtml+='<span class="form-control" style="width:150%;" onclick="panterScolwap($(this))"><span>';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="col-sm-3 form-group trainObjitem" style="padding-left:3%!important">';
				trainiHtml+='<label class="col-sm-2"><span class="col">*</span>培训学科</label>';
				trainiHtml+='<div class="col-sm-6">';
					trainiHtml+='<select class="form-control">';
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
					trainiHtml+='<select class="form-control">';
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
					trainiHtml+='<input type="text" class="form-control" onkeyup="PosiintegerNum(this)" />';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
		trainiHtml+='</div>';
		trainiHtml+='<div class="sign-wap clearfix">';
			trainiHtml+='<h3><b>培训内容：</b></h3>';
			trainiHtml+='<div class="col-sm-6">';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="trainlabel">产品详细使用操作培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp1 inpitem" onkeyup="PosiintegerNum(this)" />';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;人</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="trainlabel">考务实施、学生作答、老师批改培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp2 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="trainlabel">极课PPT演讲及简单出阅卷演示</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp3 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="trainlabel">详细出卷演示（语数英）</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp4 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="trainlabel">详细阅卷培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp5 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row">';
					trainiHtml+='<label class="trainlabel">学情追踪介绍</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp6 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
			trainiHtml+='</div>';
			trainiHtml+='<div class="col-sm-6">';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="trainlabel">学生端及家长端介绍</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp7 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="trainlabel">打印、油印注意事项及考务培训</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp8 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="trainlabel">入校sop流程讲解</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp9 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="trainlabel">竞品介绍</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp10 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="trainlabel">必备配件安装及操作练习辅导</label>';
					trainiHtml+='<div class="col-sm-3">';
						trainiHtml+='<input type="text" class="form-control inp11 inpitem" onkeyup="PosiintegerNum(this)"/>';
					trainiHtml+='</div>';
					trainiHtml+='<span style="line-height: 34px;">&nbsp;&nbsp;次</span>';
				trainiHtml+='</div>';
				trainiHtml+='<div class="form-group row pull-right">';
					trainiHtml+='<label class="trainlabel">培训成果测试及辅导</label>';
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
var boTrain={};
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

function AddtrainInfo(boTrain){
	boTrain.trainObjName=$('.trainObjitem:not(".trainobjectItemHide")').eq(0).find('span').html();
	boTrain.trainObjDiscipline=$('.trainObjitem:not(".trainobjectItemHide")').eq(1).find('select').val();
	boTrain.trainObjGrade=$('.trainObjitem:not(".trainobjectItemHide")').eq(2).find('select').val();
	boTrain.trainObjNumb=$('.trainObjitem:not(".trainobjectItemHide")').eq(3).find('input').val();
	if(boTrain.trainObjName==undefined){
		boTrain.trainObjName='';
	}
	if(boTrain.trainObjDiscipline==undefined){
		boTrain.trainObjDiscipline='';
	}
	if(boTrain.trainObjGrade==undefined){
		boTrain.trainObjGrade='';
	}
	if(boTrain.trainObjNumb==undefined){
		boTrain.trainObjNumb='';
	}
	
	
}
//合作伙伴关联的学校列表
function panterScolwap(_this){
	$('.panterScolItem').html('');
		var bussinesNameJ={};
		var businessOpportunityName="";
		var eventType=$('#eventType').find('option:selected').val();
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		bussinesNameJ.eventType=eventType;
		$('.panterScolwap').modal('toggle');
		var trainobjid=_this.attr('trainobjid');
		$ajax('post','businessOpportunity/queryBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			panterScolList(jo.businessOpportunityList);
			$.each(jo.businessOpportunityList,function(i,item){
				if(item.businessOpportunityId==trainobjid){
					$('.panterScolItem .businesName[businessopptunityid="'+trainobjid+'"]').prev().addClass('businesscheck');
				}
			})
		},function errF(jo){
			
		})
}
function panterScolList(businessOppList){
	var html="";
	$.each(businessOppList, function(i,item) {
		html+='<tr>';
			html+='	<td class="businesscheckimg"></td>';
			html+='	<td class=" businesName" businessOpptunityId="'+item.businessOpportunityId+'">'+item.businessOpportunityName+'</td>';
			html+='	<td class=" businesNumb">'+item.businessOpportunityNum+'</td>';
			if(item.businessOpportunityType==0){
				html+='	<td oppridtype="0" class="opprtype">学校</td>';
			}else{
				html+='	<td oppridtype="1" class="opprtype">合作伙伴</td>';
			}
			
			html+='	<td>'+item.businessOpportunityProcess+'</td>';
			html+='	<td>'+item.addressProvince+''+item.addressCity+''+item.addressCounty+''+item.addressDetail+'</td>';
		html+='	</tr>';
	});
	$('.panterScolItem').html(html);
		
}
//选择学校
$('.panterScolItem').on('click','tr',function(){
	if($(this).find('.businesscheckimg').hasClass('businesscheck')){
		$(this).find('.businesscheckimg').removeClass('businesscheck');
	}else{
		$('.businesscheckimg').removeClass('businesscheck');
		$(this).find('.businesscheckimg').addClass('businesscheck');
	}
})
$('.panterScolConfirm').click(function(){
	$('.panterScolwap').modal('hide');
	var trainObjName=$('.businesscheck').next().html();
	var businesid=$('.businesscheck').next().attr('businessopptunityid');
	var trainObjhtml=$('.trainObjitem:first').find('span').html();
	if(trainObjName!=trainObjhtml){
		$('.trainObjitem').removeClass('trainobjectItemHide');
		$('.trainsave').show();
	}else{
		$('.trainObjitem:not(:first)').addClass('trainobjectItemHide');
		$('.trainsave').hide();
	}
	if(businesid==undefined){
		$('.trainObjitem:not(:first)').addClass('trainobjectItemHide');
		$('.trainObjitem:first').find('span').html($('.businessNameSp').html());
		businesid=$('.businessNameSp').attr('businessopptunityid');
		$('.trainObjitem:first').find('span').attr('trainObjid',businesid);
	}else{
		$('.trainObjitem:first').find('span').attr('trainObjid',businesid);
		$('.trainObjitem:first').find('span').html(trainObjName);
	}
	
	
	
	
})
//保存并添加
//未填写新增信息内容判断
function addtrainstate(){
	var inparry=[];
	var trainObjName=$('.trainObjitem:not(".trainobjectItemHide")').eq(0).find('span').html();
	var trainObjDiscipline=$('.trainObjitem:not(".trainobjectItemHide")').eq(1).find('select').val();
	var trainObjGrade=$('.trainObjitem:not(".trainobjectItemHide")').eq(2).find('select').val();
	var trainObjNumb=$('.trainObjitem:not(".trainobjectItemHide")').eq(3).find('input').val();
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
	$('.Addtrain-wap').show();
	var AddboTrain={};
	var trainsaveId=_this.attr('addId');
	AddtrainInfo(AddboTrain);
	trainInfo(AddboTrain);
	if(trainsaveId==="00"){
		trainsaveLiat(AddboTrain);
		addTrainObjArry.push(AddboTrain);
	}else{
		addTrainObjArry[trainsaveId]=AddboTrain;
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjname').html(AddboTrain.trainObjName);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjDiscipline').html(AddboTrain.trainObjDiscipline);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjGrade').html(AddboTrain.trainObjGrade);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjNumb').html(AddboTrain.trainObjNumb);
	}
	$('.inpitem').val('');
	$('.trainObjitem input').val('');
	$('.trainObjitem select').val('');
	_this.attr('addId','00');
	
	
}

//新增培训信息列表
function trainsaveLiat(addTraindata){
	var addTrainIndex=$('.AddtrainItem').length;
	var TraSaveHtml='';
	TraSaveHtml+='<div class="AddtrainItem">';
		TraSaveHtml+='<ul class="list-inline">';
			TraSaveHtml+='<li>'+(addTrainIndex+1)+'</li>';
			TraSaveHtml+='<li><label>培训对象：</label><span class="AddTrainObjname">'+addTraindata.trainObjName+'</span></li>';
			TraSaveHtml+='<li><label>培训学科：</label><span class="AddTrainObjDiscipline">'+addTraindata.trainObjDiscipline+'</span></li>';
			TraSaveHtml+='<li><label>培训年级：</label><span class="AddTrainObjGrade">'+addTraindata.trainObjGrade+'</span></li>';
			TraSaveHtml+='<li><label>培训教师数量：</label><span class="AddTrainObjNumb">'+addTraindata.trainObjNumb+'</span></li>';
			TraSaveHtml+='<li><a class="cursorm" onclick="editTrainObj($(this))">编辑</a><a class="cursorm" onclick="delTrainObj($(this))">删除</a></li>';
		TraSaveHtml+='</ul>';
	TraSaveHtml+='</div>';
	$('.Addtrain-wap').append(TraSaveHtml);
}
//编辑新增信息内容
function editTrainInfo(boTrain){
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
	
	
}

function editAddTrainInfo(boTrain){
	$('.trainObjitem:not(".trainobjectItemHide")').eq(0).find('span').html(boTrain.trainObjName);
	$('.trainObjitem:not(".trainobjectItemHide")').eq(1).find('select').val(boTrain.trainObjDiscipline);
	$('.trainObjitem:not(".trainobjectItemHide")').eq(2).find('select').val(boTrain.trainObjGrade);
	$('.trainObjitem:not(".trainobjectItemHide")').eq(3).find('input').val(boTrain.trainObjNumb);

}
function editTrainObj(_this){
	var Index=_this.parents('.AddtrainItem').index();
	$('.trainsave').attr('addId',Index);
	$.each(addTrainObjArry,function(i,item){
		if(i==Index){
			editTrainInfo(item)
			editAddTrainInfo(item)
		}
	})
	
}
//删除新增信息内容
function delTrainObj(_this){
	console.log(addTrainObjArry)
	var delIndex=_this.parents('.AddtrainItem').index();
	$.each(addTrainObjArry,function(i,item){
		if(i==delIndex){
			addTrainObjArry.splice(delIndex,1);
			_this.parents('.AddtrainItem').remove();
		}
	})
	if($('.AddtrainItem').length==0){
		$('.Addtrain-wap').hide();
	}
}



//试用结果详情提交
function trainConfirm(){
	var totalTime=0;
	var twoTime=0;
	var ThreeTime=0;
	var trainsaveId=$('.trainsave').attr('addId');
	$.each(addTrainObjArry, function(i,item) {
		totalTime+=Number(Number(item.operationTrainingCount)+Number(item.pptDemonstratedCount)+Number(item.introductionLeanCount)+Number(item.studentParentIntroductionCount)+Number(item.examinationTrainCount)+Number(item.sopProcessExplanationCount)+Number(item.productsIntroductionCount))*0.5
		twoTime+=Number(item.correctingTrainingCount)+Number(item.markingTrainCount)+Number(item.operationGuidanceCount)+Number(item.testCoachCount);
		ThreeTime+=Number(item.volumeDemonstratedCount)*1.5;
	});
	if((!addtrainstate()) && addTrainObjArry.length==0){
		return;
	}
	var AddboTrain={};
	
	$('.Addtrain-wap').show();
	console.log(!addtrainstate())
	if(trainsaveId!=="00"){
		AddtrainInfo(AddboTrain);
		trainInfo(AddboTrain);
		addTrainObjArry[trainsaveId]=AddboTrain;
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjname').html(AddboTrain.trainObjName);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjDiscipline').html(AddboTrain.trainObjDiscipline);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjGrade').html(AddboTrain.trainObjGrade);
		$('.AddtrainItem').eq(trainsaveId).find('.AddTrainObjNumb').html(AddboTrain.trainObjNumb);
		if(!addtrainstate()&&addTrainObjArry.length!=0){
			$('.alertdiv').hide();	
			
		}
		
	}else{
		trainsaveLiat(AddboTrain);
		addTrainObjArry.push(AddboTrain);
	}
	$('.inpitem').val(''); 
	$('.trainObjitem input').val('');
	$('.trainObjitem select').val('');
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.procewap').show();
	$('.journaConfirm').prop('disabled',false);
	//计算工时
	var timeVal=totalTime+twoTime+ThreeTime;
	$('.timeVal').val(timeVal);
}
//提交返回后台试用结果信息
	var trainJ={};

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