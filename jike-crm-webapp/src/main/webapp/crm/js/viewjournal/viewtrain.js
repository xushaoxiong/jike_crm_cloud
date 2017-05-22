function trainHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">产品详细使用操作培训：</label>';
			if(tdata.operationTrainingCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.operationTrainingCount+'人</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">考务实施、学生作答、老师批改培训：</label>';
			if(tdata.correctingTrainingCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.correctingTrainingCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}	
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
//合作伙伴信息
function trainpanerHtml(tdata){
	var negHtml='';
	$.each(tdata.boTrainArr, function(i,item) {
		var cooperativePartnerSchool=item.cooperativePartnerSchool;
		negHtml+='<ul class="list-inline trainUlLit">';
			negHtml+='<li class="trainUlLitNumb">'+(i+1)+'</li>';
			negHtml+='<li><label>培训对象：</label><span class="AddTrainObjname">'+cooperativePartnerSchool.schoolName+'</span></li>';
			negHtml+='<li><label>培训学科：</label><span class="AddTrainObjDiscipline">'+item.trainingDiscipline+'</span></li>';
			negHtml+='<li><label>培训年级：</label><span class="AddTrainObjGrade">'+item.trainingGrade+'</span></li>';
			negHtml+='<li><label>培训教师数量：</label><span class="AddTrainObjNumb">'+item.trainingTeachersCount+'</span></li>';
			negHtml+='<li><a class="cursorm" onclick="detailTrainObj($(this))">详情</a></li>';
		negHtml+='</ul>';
		negHtml+='<div class="traindetailItem clearfix" style="display:none;padding:0 5%;">';
		negHtml+='<div class="col-sm-5">';
			negHtml+='<div class="form-group row">';
				negHtml+='<label class="trainlabel">产品详细使用操作培训</label>';
					if(item.operationTrainingCount!=undefined){
						negHtml+='<span class="colSp">'+item.operationTrainingCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">产品详细使用操作培训</label>';
					if(item.correctingTrainingCount!=undefined){
						negHtml+='<span class="colSp">'+item.correctingTrainingCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">极课PPT演讲及简单出阅卷演示：</label>';
					if(item.pptDemonstratedCount!=undefined){
						negHtml+='<span class="colSp">'+item.pptDemonstratedCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">详细出卷演示（语数英）：</label>';
					if(item.volumeDemonstratedCount!=undefined){
						negHtml+='<span class="colSp">'+item.volumeDemonstratedCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">详细阅卷培训：</label>';
					if(item.markingTrainCount!=undefined){
						negHtml+='<span class="colSp">'+item.markingTrainCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">学情追踪介绍：</label>';
					if(item.introductionLeanCount!=undefined){
						negHtml+='<span class="colSp">'+item.introductionLeanCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
			negHtml+='</div>';
			negHtml+='<div class="col-sm-5">';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">学生端及家长端介绍：</label>';
					if(item.studentParentIntroductionCount!=undefined){
						negHtml+='<span class="colSp">'+item.studentParentIntroductionCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">打印、油印注意事项及考务培训：</label>';
					if(item.examinationTrainCount!=undefined){
						negHtml+='<span class="colSp">'+item.examinationTrainCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">入校sop流程讲解：</label>';
					if(item.sopProcessExplanationCount!=undefined){
						negHtml+='<span class="colSp">'+item.sopProcessExplanationCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">竞品介绍：</label>';
					if(item.productsIntroductionCount!=undefined){
						negHtml+='<span class="colSp">'+item.productsIntroductionCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">必备配件安装及操作练习辅导：</label>';
					if(item.operationGuidanceCount!=undefined){
						negHtml+='<span class="colSp">'+item.operationGuidanceCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
				negHtml+='</div>';
				negHtml+='<div class="form-group row">';
					negHtml+='<label class="trainlabel">培训成果测试及辅导：</label>';
					if(item.testCoachCount!=undefined){
						negHtml+='<span class="colSp">'+item.testCoachCount+'人</span>';
					}else{
						negHtml+='<span class="colSp"></span>';
					}
			negHtml+='</div>';
		negHtml+='</div>';
	negHtml+='</div>'; 
	});
	return negHtml;
}
function detailTrainObj(_this){
	var _Index=_this.parents('.trainUlLit').find('.trainUlLitNumb').html();
	$('.traindetailItem').eq((_Index-1)).slideToggle();
}
	
