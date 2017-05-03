function visitcustomHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label >所属拜访计划：</label>';
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
					negHtml+='<span class="colSp">'+tdata.visitLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.visitPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.visitEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.visitQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.visitWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访地址：</label>';
			negHtml+='<span class="colSp">'+tdata.visitProvince+''+tdata.visitCity+''+tdata.visitCountry+''+tdata.visitAddressDetail+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >采购预算：</label>';
			if(tdata.procurementBudget!=undefined){
				negHtml+='<span class="colSp">'+tdata.procurementBudget+'元</span>';	
			}else{
				negHtml+='<span class="colSp"></span>';
			}
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >决策人意见：</label>';
			if(tdata.decisionMakerAdvice==1){
				negHtml+='<span class="colSp">认可</span>';	
			}else if(tdata.decisionMakerAdvice==2){
				negHtml+='<span class="colSp">有意向</span>';	
			}else if(tdata.decisionMakerAdvice==3){
				negHtml+='<span class="colSp">确定购买</span>';	
			}else{
				negHtml+='<span class="colSp">确定合作</span>';	
			}	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访详情：</label>';
			negHtml+='<span class="colSp">'+tdata.visitDetail+'</span>';	
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}

//达成合作意向&&合作伙伴
function visitcustompanerHtml(tdata){
	var cooperDetail=tdata.cooperationDetailsJson;
	var negHtml='';
	negHtml+='<ul class="list-unstyled">';
		negHtml+='<li>';
			negHtml+='<label >所属拜访计划：</label>';
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
					negHtml+='<span class="colSp">'+tdata.visitLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.visitPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.visitEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.visitQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.visitWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访地址：</label>';
			negHtml+='<span class="colSp">'+tdata.visitProvince+''+tdata.visitCity+''+tdata.visitCountry+''+tdata.visitAddressDetail+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >采购预算：</label>';
			negHtml+='<label >采购预算：</label>';
			if(tdata.procurementBudget!=undefined){
				negHtml+='<span class="colSp">'+tdata.procurementBudget+'元</span>';	
			}else{
				negHtml+='<span class="colSp"></span>';
			}	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >决策人意见：</label>';
			if(tdata.decisionMakerAdvice==1){
				negHtml+='<span class="colSp">认可</span>';	
			}else if(tdata.decisionMakerAdvice==2){
				negHtml+='<span class="colSp">有意向</span>';	
			}else if(tdata.decisionMakerAdvice==3){
				negHtml+='<span class="colSp">确定购买</span>';	
			}else{
				negHtml+='<span class="colSp">确定合作</span>';	
			}	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >拜访详情：</label>';
			negHtml+='<span class="colSp">'+tdata.visitDetail+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
		negHtml+='<li class="clearfix" style="margin-bottom:0px;">';
			negHtml+='<label >合作详情：</label>';	
		negHtml+='</li>';
			negHtml+='<ul class="list-unstyled cont-wap">';
				negHtml+='<li>';
					negHtml+='<label >合作方式：</label>';
					negHtml+='<span class="colSp">'+cooperDetail.cooperationMode+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >注册资金：</label>';
					negHtml+='<span class="colSp">'+cooperDetail.registeredCapital+'万元</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >从事教育行业案例：</label>';
					negHtml+='<span class="colSp">'+cooperDetail.educationCase+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >服务人员数量：</label>';
					negHtml+='<span class="colSp">'+cooperDetail.servicePersonnelQuantity+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >启动资金：</label>';
					negHtml+='<span class="colSp">'+cooperDetail.startCapital+'万元</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';
		negHtml+='</li>';
		
	negHtml+='</ul>';
	return negHtml;
}