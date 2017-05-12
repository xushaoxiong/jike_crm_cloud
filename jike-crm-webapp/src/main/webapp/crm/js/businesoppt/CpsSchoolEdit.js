//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('businesoppt/CpsSchoolList.html')
	})

//城市插件
	$("#CpScolcity").citySelect({
	    prov:'省',  
	    city:'市',  
	    dist:'区',
	    nodata: "none"    
	}) ;

//删除服务人员信息
	 function delPanScoInfo(_this){
	 	_this.parent().remove();
	 }
//提交
	$('.mesConfirm').click(function(){
		var dataJ={};
		var businessopptunityid=$('.busScolName').attr('businessopptunityid');
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
		var serviceArr=[];
		$('.panterScolcontainer').each(function(){
			var serviceJ={};
			serviceJ.serviceName=$.trim($(this).find('.pScolcontName').val());
			serviceJ.servicePhone=$.trim($(this).find('.pScolcontphone').val());
			if(!contact(serviceJ.servicePhone)){
				pub.Alt('请填写联系人正确联系方式',false);
				return;
			}	
			serviceArr.push(serviceJ);
		});
	
		dataJ.businessOpportunityId=businessopptunityid;
		dataJ.schoolName=associdScolName;
		dataJ.addressProvince=prov;
		dataJ.addressCity=city;
		dataJ.addressCountry=dist;
		dataJ.addressDetail=detailadrs;
		dataJ.schoolScale=scolPopleNumb;
		dataJ.schoolLevel=schoolLevel;
		dataJ.schoolProperty=schoolProperty;
		dataJ.schoolCategory=scolTypeArry.join('#');
		dataJ.serviceArr=serviceArr;
		$ajax('post','businessOpportunity/addCooperativePartnerSchool',dataJ,function succF(jo){
			
		},function errF(jo){
			
		})
	})
	
	
	
	
	
	
	
	
	
	
