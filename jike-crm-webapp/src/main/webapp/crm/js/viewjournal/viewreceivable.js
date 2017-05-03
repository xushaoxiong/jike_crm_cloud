function receiveHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-1">发生日期：</label>';
			negHtml+='<span class="colSp">'+tdata.paymentDate+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-1">金额：</label>';
			negHtml+='<span class="colSp">'+tdata.paymentAmount+'元</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label class="col-sm-1">类型：</label>';
			if(tdata.paymentType==1){
				negHtml+='<span class="colSp">硬件</span>';
			}else if(tdata.paymentType==2){
				negHtml+='<span class="colSp">软件</span>';
			}else{
				negHtml+='<span class="colSp">服务</span>';
			}	
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}