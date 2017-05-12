//返回上一级
$('.goBack').click(function(){
	$('.R-wap').load('businesoppt/CpsSchoolList.html');
})
//获取信息
function viewPanterScoldata(vdata){
	$('.busScolName').html(vdata.businessOpportunityName);
	$('.associdScolName').html(vdata.schoolName);
	$('.associdScoladdr').html(vdata.addressProvince+''+vdata.addressCity+''+vdata.addressCountry+''+vdata.addressDetail);
	if(vdata.schoolScale==undefined){
		$('.scolPopleNumb').html('');
	}else{
		$('.scolPopleNumb').html(vdata.schoolScale);
	}
	if(vdata.schoolLevel==undefined){
		$('.schoolLevel').html('');
	}else{
		$('.schoolLevel').html(vdata.schoolLevel);
	}
	if(vdata.schoolProperty==undefined){
		$('.schoolProperty').html('');
	}else{
		if(vdata.schoolProperty==0){
			$('.schoolProperty').html('私立');
		}else{
			$('.schoolProperty').html('公立');
		}
	}
	if(vdata.schoolCategory==undefined){
		$('.schoolType').html('');
	}else{
		$('.schoolType').html(vdata.schoolCategory);
	}
	if(vdata.serviceArr.length!=0){
		$('.panterScolbox').html('');
		$.each(vdata.serviceArr, function(conti,contitem) {
			var contScolHtml='';
			contScolHtml+='<div class="panterScolcontainer clearfix" style="margin-bottom: 30px;">';
				contScolHtml+='<div class="panterScolnamewap">';
					contScolHtml+='<label class="pull-left">服务人员姓名</label>';
					contScolHtml+='<div class="col-sm-2">';
						if(contitem.serviceName==undefined){
							contScolHtml+='<span class="pScolcontName"></span>';
						}else{
							contScolHtml+='<span class="pScolcontName">'+contitem.serviceName+'</span>';
						}
					contScolHtml+='</div>';
				contScolHtml+='</div>';
				contScolHtml+='<div class="panterScolcontwap" style="margin: 0 1% 0 3%;">';
					contScolHtml+='<label class="pull-left">服务人员联系电话</label>';
					contScolHtml+='<div class="col-sm-3">';
						if(contitem.servicePhone==undefined){
							contScolHtml+='<span class="pScolcontphone"></span>';
						}else{
							contScolHtml+='<span class="pScolcontphone">'+contitem.servicePhone+'</span>';
						}
					contScolHtml+='</div>';
				contScolHtml+='</div>';
			contScolHtml+='</div>';
			$('.panterScolbox').append(contScolHtml);
		});
	}
	
}
