//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('businesoppt/CpsSchoolList.html')
	})

//获取信息
//返回上一级
$('.goBack').click(function(){
	$('.R-wap').load('businesoppt/CpsSchoolList.html');
})
//获取信息
function editPanterScoldata(vdata){
	$('.busScolName').html(vdata.businessOpportunityName);
	$('.associdScolName').val(vdata.schoolName);
	$("#CpScolcity").citySelect({
	    prov:vdata.addressProvince,  
	    city:vdata.addressCity,  
	    dist:vdata.addressCountry,
	    nodata: "none"    
	}) ;
	$('.detailadrs').val(vdata.addressDetail);
	$('.scolPopleNumb').val(vdata.schoolScale);
	
	$('.schoolLevel').val(vdata.schoolLevel);
	if(vdata.schoolProperty==undefined){
		$('.schoolProperty').find('input[name="optionsRadios"]').attr('checked',false);
	}else{
		if(vdata.schoolProperty==0){
			$('.schoolProperty').find('input[scpid=0]').attr('checked',true);
		}else{
			$('.schoolProperty').find('input[scpid=1]').attr('checked',true);
		}
	}
	var schoolType=vdata.schoolCategory.split('#');
	$.each(schoolType, function(i,item) {
		$('.schoolType').find('input[type=checkbox][value="'+item+'"]').prop('checked',true);
	});
	if(vdata.serviceArr.length!=0){
		$('.panterScolbox').html('');
		$.each(vdata.serviceArr, function(conti,contitem) {
			var contScolHtml='';
			contScolHtml+='<div class="panterScolcontainer clearfix" style="margin-bottom: 30px;">';
				contScolHtml+='<div class="panterScolnamewap pull-left">';
					contScolHtml+='<label class="pull-left">服务人员姓名</label>';
					contScolHtml+='<div class="pull-left">';
						contScolHtml+='<input type="text" class="form-control pScolcontName" value="'+contitem.serviceName+'"/>';
					contScolHtml+='</div>';
				contScolHtml+='</div>';
				contScolHtml+='<div class="panterScolcontwap pull-left" style="margin: 0 1% 0 3%;">';
					contScolHtml+='<label class="pull-left">服务人员联系电话</label>';
					contScolHtml+='<div class="pull-left">';
						contScolHtml+='<input type="text" class="form-control pScolcontphone" value="'+contitem.servicePhone+'"/>';
					contScolHtml+='</div>';
				contScolHtml+='</div>';
				if(conti==0){
					contScolHtml+='<button class="btn btn-primary addPanterScol" onclick="addPanScoInfo($(this))">添加</button>';
				}else{
					contScolHtml+='<button class="btn btn-primary delPanterScol" onclick="delPanScoInfo($(this))">删除</button>';
				}
			contScolHtml+='</div>';
			$('.panterScolbox').append(contScolHtml);
		});
	}
}
//添加服务人员信息
	function addPanScoInfo(_this){
		var addcontScolHtml='';
			addcontScolHtml+='<div class="panterScolcontainer clearfix" style="margin-bottom: 30px;">';
				addcontScolHtml+='<div class="panterScolnamewap pull-left">';
					addcontScolHtml+='<label class="pull-left">服务人员姓名</label>';
					addcontScolHtml+='<div class="pull-left">';
						addcontScolHtml+='<input type="text" class="form-control pScolcontName" placeholder="服务人员姓名" />';
					addcontScolHtml+='</div>';
				addcontScolHtml+='</div>';
				addcontScolHtml+='<div class="panterScolcontwap pull-left" style="margin: 0 1% 0 3%;">';
					addcontScolHtml+='<label class="pull-left">服务人员联系电话</label>';
					addcontScolHtml+='<div class="pull-left">';
						addcontScolHtml+='<input type="text" class="form-control pScolcontphone" placeholder="服务人员联系电话"/>';
					addcontScolHtml+='</div>';
				addcontScolHtml+='</div>';
				addcontScolHtml+='<button class="btn btn-primary delPanterScol" onclick="delPanScoInfo($(this))">删除</button>';
			addcontScolHtml+='</div>';
			$('.panterScolbox').append(addcontScolHtml);
	}
//删除服务人员信息
	 function delPanScoInfo(_this){
	 	_this.parent().remove();
	 }
//提交
	$('.mesConfirm').click(function(){
		var dataJ={};
		var cpsJson={};
		var coopscolid=$('.busScolName').attr('coopscolid');
		var associdScolName=$.trim($('.associdScolName').val());
		var prov=$('.prov').val();
		var city=$('.city').val();
		var dist=$('.dist').val();
		var detailadrs=$.trim($('.detailadrs').val());
		var scolPopleNumb=$('.scolPopleNumb').find('option:selected').val();
		var schoolLevel=$('.schoolLevel').find('option:selected').val();
		var schoolProperty=$('.schoolProperty').find('input[name=optionsRadios]:checked').attr('scpid');
		var scolTypeArry=[];
		$('.schoolType input[type="checkbox"]:checked').each(function(){ 
			scolTypeArry.push($(this).val()); 
		}); 
		if(prov=="省"||detailadrs==""){
			pub.Alt('请填写关联学校地址',false);
			return;
		}
		var serviceArry=[];
		$('.panterScolcontainer').each(function(){
			var serviceJ={};
			serviceJ.serviceName=$.trim($(this).find('.pScolcontName').val());
			serviceJ.servicePhone=$.trim($(this).find('.pScolcontphone').val());
			if(!contact(serviceJ.servicePhone)&&serviceJ.servicePhone!=''){
				pub.Alt('请填写联系人正确联系方式',false);
				return;
			}	
			serviceArry.push(serviceJ);
		});
	
		cpsJson.cooperativePartnerSchoolId=coopscolid;
		cpsJson.schoolName=associdScolName;
		cpsJson.addressProvince=prov;
		cpsJson.addressCity=city;
		cpsJson.addressCountry=dist;
		cpsJson.addressDetail=detailadrs;
		cpsJson.schoolScale=scolPopleNumb;
		cpsJson.schoolLevel=schoolLevel;
		cpsJson.schoolProperty=schoolProperty;
		cpsJson.schoolCategory=scolTypeArry.join('#');
		cpsJson.serviceArr=serviceArry;
		dataJ.cpsJson=cpsJson
		$ajax('post','businessOpportunity/updateCpsById',dataJ,function succF(jo){
			 $('.R-wap').load('businesoppt/CpsSchoolList.html');
		},function errF(jo){
			
		})
	})
	
	
	
	
	
	
	
	
	
	
