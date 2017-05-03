function visitplanHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label >计划名称：</label>';
			negHtml+='<span class="colSp">'+tdata.visitPlanName+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访人姓名：</label>';
			negHtml+='<span class="colSp">'+tdata.visitorName+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访人职位：</label>';
			if(tdata.visitorTitle=='其它'){
				negHtml+='<span class="colSp">'+tdata.visitorTitleDetail+'</span>';
			}else{
				negHtml+='<span class="colSp">'+tdata.visitorTitle+'</span>';
			}	
		negHtml+='</li>';
		negHtml+='<li class="clearfix" style="margin-bottom:0px;">';
			negHtml+='<label >拜访人联系方式：</label>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<ul class="list-unstyled list-inline cont-wap">';	
				negHtml+='<li>';
					negHtml+='<label >座机：</label>';
					negHtml+='<span class="colSp">'+tdata.visitorLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.visitorPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.visitorEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.visitorQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.visitorWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访计划日期：</label>';
			negHtml+='<span class="colSp">'+tdata.visitPlanDate+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访地址：</label>';
			negHtml+='<span class="colSp">'+tdata.visitProvince+''+tdata.visitCity+''+tdata.visitCountry+''+tdata.visitAddressDetail+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >交通方式：</label>';
			negHtml+='<span class="colSp">'+tdata.trafficTool+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访目的：</label>';
			negHtml+='<span class="colSp">'+tdata.visitObjective+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >预估费用：</label>';
			if(tdata.estimateFee!=undefined){
				negHtml+='<span class="colSp">'+tdata.estimateFee+'元</span>';	
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >最小物料明细：</label>';
			negHtml+='<span class="colSp">'+tdata.tools+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >制定拜访计划原因：</label>';
			negHtml+='<span class="colSp">'+tdata.visitPlanReason+'</span>';	
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
