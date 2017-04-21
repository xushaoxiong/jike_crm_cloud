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
