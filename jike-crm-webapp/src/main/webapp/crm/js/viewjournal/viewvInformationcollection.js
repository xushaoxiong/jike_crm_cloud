function infocoolHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled collmessage">';
		negHtml+='<li>';
			negHtml+='<label >信息来源：</label>';
			negHtml+='<span class="colSp">'+tdata.informationSources+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >学校规模：</label>';
			negHtml+='<span class="colSp">'+tdata.schoolScale+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >学校等级：</label>';
			negHtml+='<span class="colSp">'+tdata.schoolLevel+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >学校性质：</label>';
			if(tdata.schoolProperty==undefined){
				negHtml+='<span class="colSp"></span>';
			}else{
				if(tdata.schoolProperty==0){
					negHtml+='<span class="colSp">公立</span>';
				}else{
					negHtml+='<span class="colSp">私立</span>';
				}	
			}
			
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >学校类别：</label>';
			negHtml+='<span class="colSp">'+tdata.schoolType+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >联系人姓名：</label>';
			negHtml+='<span class="colSp">'+tdata.contactName+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >联系人职位：</label>';
			if(tdata.contactTitle=='其它'){
				negHtml+='<span class="colSp">'+tdata.contactTitleDetail+'</span>';
			}else{
				negHtml+='<span class="colSp">'+tdata.contactTitle+'</span>';
			}
				
		negHtml+='</li>';
		negHtml+='<li class="clearfix">';
			negHtml+='<label class="pull-left" style="line-height:28px;">拜访人联系方式：</label>';
			negHtml+='<ul class="list-unstyled list-inline cont-wap">';	
				negHtml+='<li>';
					negHtml+='<label >座机：</label>';
					negHtml+='<span class="colSp">'+tdata.contactLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.contactPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.contactEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.contactQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.contactWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
//		negHtml+='<li>';
//			
//		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >决策人姓名：</label>';
			negHtml+='<span class="colSp">'+tdata.decisionMakerName+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >决策人职位：</label>';
			if(tdata.decisionMakerTitle=='其它'){
				negHtml+='<span class="colSp">'+tdata.decisionMakerTitleDetail+'</span>';	
			}else{
				negHtml+='<span class="colSp">'+tdata.decisionMakerTitle+'</span>';	
			}
			
		negHtml+='</li>';
		negHtml+='<li class="clearfix">';
			negHtml+='<label class="pull-left" style="line-height:28px;">决策人联系方式：</label>';
			negHtml+='<ul class="list-unstyled list-inline cont-wap">';	
				negHtml+='<li>';
					negHtml+='<label >座机：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
//		negHtml+='<li>';
//			
//		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >是否有意向：</label>';
			if(tdata.ifIntention==0){
				negHtml+='<span class="colSp">是</span>';	
			}else{
				negHtml+='<span class="colSp">否</span>';	
			}		
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >是否对产品感兴趣：</label>';
			if(tdata.ifInterested==0){
				negHtml+='<span class="colSp">是</span>';	
			}else{
				negHtml+='<span class="colSp">否</span>';	
			}
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
function infocoolpanerHtml(tdata){
	var negHtml='';
	negHtml+='<ul class="list-unstyled collmessage">';
		negHtml+='<li>';
			negHtml+='<label >信息来源：</label>';
			negHtml+='<span class="colSp">'+tdata.informationSources+'</span>';
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >主营范围：</label>';
			negHtml+='<span class="colSp">'+tdata.mainScope+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >联系人姓名：</label>';
			negHtml+='<span class="colSp">'+tdata.contactName+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >联系人职位：</label>';
			if(tdata.contactTitle=='其它'){
				negHtml+='<span class="colSp">'+tdata.contactTitleDetail+'</span>';
			}else{
				negHtml+='<span class="colSp">'+tdata.contactTitle+'</span>';
			}
				
		negHtml+='</li>';
		negHtml+='<li class="clearfix">';
			negHtml+='<label class="pull-left" style="line-height:28px;">拜访人联系方式：</label>';
			negHtml+='<ul class="list-unstyled list-inline cont-wap">';	
				negHtml+='<li>';
					negHtml+='<label >座机：</label>';
					negHtml+='<span class="colSp">'+tdata.contactLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.contactPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.contactEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.contactQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.contactWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
//		negHtml+='<li>';
//			
//		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >决策人姓名：</label>';
			negHtml+='<span class="colSp">'+tdata.decisionMakerName+'</span>';	
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >决策人职位：</label>';
			if(tdata.decisionMakerTitle=='其它'){
				negHtml+='<span class="colSp">'+tdata.decisionMakerTitleDetail+'</span>';	
			}else{
				negHtml+='<span class="colSp">'+tdata.decisionMakerTitle+'</span>';	
			}
			
		negHtml+='</li>';
		negHtml+='<li class="clearfix">';
			negHtml+='<label class="pull-left" style="line-height:28px;">决策人联系方式：</label>';
			negHtml+='<ul class="list-unstyled list-inline cont-wap">';	
				negHtml+='<li>';
					negHtml+='<label >座机：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerLandline+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >手机：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerPhone+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >邮箱：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerEmail+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >QQ：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerQq+'</span>';	
				negHtml+='</li>';
				negHtml+='<li>';
					negHtml+='<label >微信：</label>';
					negHtml+='<span class="colSp">'+tdata.decisionMakerWechat+'</span>';	
				negHtml+='</li>';
			negHtml+='</ul>';	
		negHtml+='</li>';
//		negHtml+='<li>';
//			
//		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >预计合作方式：</label>';
			negHtml+='<span class="colSp">'+tdata.expectedCooperationType+'</span>';		
		negHtml+='</li>';
		negHtml+='<li>';
			negHtml+='<label >是否对产品感兴趣：</label>';
			if(tdata.ifInterested){
				negHtml+='<span class="colSp">是</span>';	
			}else{
				negHtml+='<span class="colSp">否</span>';	
			}
		negHtml+='</li>';
	negHtml+='</ul>';
	return negHtml;
}
