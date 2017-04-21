function bidHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>形式：</label>';
			negHtml+='<span class="tryPreTime">'+tdata.biddingMode+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>合作伙伴：</label>';
			negHtml+='<span>'+tdata.cooperativePartner+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>挂网链接：</label>';
			negHtml+='<span>'+tdata.networkLink+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label>是否有商务费用：</label>';
			if(tdata.ifHaveBusinessFee==0){
				negHtml+='<span>是</span>';
			}else{
				negHtml+='<span>否</span>';
			}
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
////试用结果
function bidresultHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label>招投标结果详情：</label>';
			negHtml+='<span class="tryPreTime">'+tdata.biddingResultDetail+'</span>';
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
