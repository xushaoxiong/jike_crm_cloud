function supportHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-2">开通学校账号：</label>';
			if(tdata.accountOpenCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.accountOpenCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-2">信息确认及物资准备：</label>';
			if(tdata.informationConfirmationCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.informationConfirmationCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
//合作伙伴信息
function supportpanerHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-2">开通学校账号：</label>';
			if(tdata.accountOpenCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.accountOpenCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-2">信息确认及物资准备：</label>';
			if(tdata.informationConfirmationCount!=undefined){
				negHtml+='<span class="colSp">'+tdata.informationConfirmationCount+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-2">增删查改教师学生信息：</label>';
			if(tdata.modifyStudentInformationCoun!=undefined){
				negHtml+='<span class="colSp">'+tdata.modifyStudentInformationCoun+'次</span>';
			}else{
				negHtml+='<span class="colSp"></span>';
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-2">销售支持：</label>';
			if(tdata.salesSupportCount!=undefined){
					negHtml+='<span class="colSp">'+tdata.salesSupportCount+'次</span>';
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label class="col-sm-2">销售支持详情：</label>';
					negHtml+='<span class="colSp">'+tdata.salesSupportCount+'次</span>';
				negHtml+='</li>';
			negHtml+='</ul>';
			}else{
				negHtml+='<span class="colSp"></span>';
			negHtml+='</li>';
			negHtml+='</ul>';
			}
			
		
		
	return negHtml;
}
