function trypreHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>试用周期：</label>';
			negHtml+='<span class="tryPreTime">'+tdata.trialStartDate+'&nbsp;到&nbsp;'+tdata.trialEndDate+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>试用年级：</label>';
			negHtml+='<span>'+tdata.trialGrade+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>试用学科：</label>';
			negHtml+='<span>'+tdata.trialSubject+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>试用机型：</label>';
			negHtml+='<span>'+tdata.trialModel+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>试用数量：</label>';
			negHtml+='<span>'+tdata.trialMachineNum+'</span>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
////试用结果
function tryresultHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>试用结果详情：</label>';
			negHtml+='<span class="tryPreTime">'+tdata.trialResultDetail+'</span>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
