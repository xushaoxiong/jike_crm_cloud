function negotaionHtml(ndata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled negotionInfolist">';
		negHtml+='<li>';
			negHtml+='<label>谈判名称：</label>';
			negHtml+='<span class="negotaionname">'+ndata.negotiationName+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="pull-left">谈判详情：</label>';
			negHtml+='<span class="negotiondetail">'+ndata.negotiationDetail+'</span>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
