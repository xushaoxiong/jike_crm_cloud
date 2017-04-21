function signHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>签约时间：</label>';
			negHtml+='<span>'+tdata.signDate+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>签约金额：</label>';
			negHtml+='<span>'+tdata.signAmonut+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>合同伙伴：</label>';
			negHtml+='<span>'+tdata.cooperativePartner+'</span>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
//合作伙伴信息
function signpanerHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>签约时间：</label>';
			negHtml+='<span>'+tdata.signDate+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>考核指标：</label>';
			negHtml+='<span>'+tdata.assessmentIndex+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>合同期限：</label>';
			negHtml+='<span>'+tdata.assessmentPeriodBeginTime+'&nbsp;到&nbsp;'+tdata.assessmentPeriodEndTime+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="pull-left">代理区域：</label>';
			negHtml+='<div style="display:inline-block;margin-top:5px;line-height:30px;">';
			$.each(tdata.partnerAgentAreaList, function(i,item) {
				negHtml+='<span>'+item.addressProvince+''+item.addressCity+''+item.addressCounty+'</span></br>';
			});
			negHtml+='</div>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
