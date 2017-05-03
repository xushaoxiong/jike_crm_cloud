
function previewdata(pdata){
	$('.busName').html(pdata.businessOpportunityName);
	$('.busaddr').html(pdata.addressProvince+''+pdata.addressCity+''+pdata.addressCounty+''+pdata.addressDetail);
	$('.mainscope').html(pdata.mainScope);
	$('.deciName').html(pdata.decisionMakerName);
	if(pdata.decisionMakerTitle=='其它'){
		$('.decititle').html(pdata.decisionMakerTitleDetail);
	}else{
		$('.decititle').html(pdata.decisionMakerTitle);
	}
	
	$('.deciline').html(pdata.decisionMakerLandline);
	$('.deciphone').html(pdata.decisionMakerPhone);
	$('.deciemail').html(pdata.decisionMakerEmail);
	$('.deciQQ').html(pdata.decisionMakerQq);
	$('.deciwech').html(pdata.decisionMakerWechat);
	$('.contName').html(pdata.contactName);
	if(pdata.contactTitle=='其它'){
		$('.conttile').html(pdata.contactTitleDetail);
	}else{
		$('.conttile').html(pdata.contactTitle);
	}
	
	$('.contline').html(pdata.contactLandline);
	$('.contphone').html(pdata.contactPhone);
	$('.contemail').html(pdata.contactEmail);
	$('.contQQ').html(pdata.contactQq);
	$('.contwech').html(pdata.contactWechat);
}
//返回上一级
$('.goBack').click(function(){
	$('.R-wap').load('businesoppt/BusinessOpportunityList.html');
})
