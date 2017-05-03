function dailyHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>填写日常信息：</label>';
			negHtml+='<span class="tryPreTime">'+tdata.dailyEventsDetail+'</span>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
//服务人员
function serverdailyHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">文档撰写或修改：</label>';
			if(tdata.documentWriteModify!=undefined){
				negHtml+='<span class="colSp">'+tdata.documentWriteModify+'小时</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">极课PPT演讲及简单出阅卷演示：</label>';
			if(tdata.pptDemonstratedCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.pptDemonstratedCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">详细出卷演示（语数英）：</label>';
			if(tdata.volumeDemonstratedCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.volumeDemonstratedCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">详细阅卷培训：</label>';
			if(tdata.markingTrainCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.markingTrainCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">学情追踪介绍：</label>';
			if(tdata.introductionLeanCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.introductionLeanCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">学生端及家长端介绍：</label>';
			if(tdata.studentParentIntroductionCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.studentParentIntroductionCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">打印、油印注意事项及考务培训：</label>';
			if(tdata.examinationTrainCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.examinationTrainCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">入校sop流程讲解：</label>';
			if(tdata.sopProcessExplanationCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.sopProcessExplanationCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">竞品介绍：</label>';
			if(tdata.productsIntroductionCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.productsIntroductionCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">必备配件安装及操作练习辅导：</label>';
			if(tdata.operationGuidanceCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.operationGuidanceCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-4">培训成果测试及辅导：</label>';
			if(tdata.testCoachCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.testCoachCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
			negHtml+='</ul>';
		
	return negHtml;
}
