function aftsaleHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">售后对象：</label>';
			if(tdata.cooperativePartnerSchool!=undefined){
				negHtml+='<span class="colSp">'+tdata.cooperativePartnerSchool.schoolName+'</span>';
			}else{
				negHtml+='<span class="colSp afterObjName"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">极课相关软硬件安装调试：</label>';
			if(tdata.installationDebuggingCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.installationDebuggingCount+'台</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">考试作业出卷：</label>';
			if(tdata.homeworkVolumeCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.homeworkVolumeCount+'份</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">考试作业阅卷：</label>';
			if(tdata.homeworkMarkingCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.homeworkMarkingCount+'张</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">试卷作业出卷导出印刷检查：</label>';
			if(tdata.printingInspectionCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.printingInspectionCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">阅卷需要批量ps或大批量手动处理：</label>';
			if(tdata.markingHandleCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.markingHandleCount+'张</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-3">系统排障：</label>';
			if(tdata.systemObstacleCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.systemObstacleCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}	
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
	