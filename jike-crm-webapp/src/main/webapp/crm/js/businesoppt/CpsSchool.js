//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('businesoppt/CpsSchoolList.html')
	})
//商机名称弹框
	$('.busScolName').click(function(){
		$('#searchBusinessName').val('');
		var bussinesNameJ={};
		var businessOpportunityName="";
		$('.bussinesList').modal('toggle');
		var businesoppid=$(this).attr('businessopptunityid');
		$ajax('post','businessOpportunity/queryCopBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			bussinesList(jo.businessOpportunityList);
			$.each(jo.businessOpportunityList,function(i,item){
				if(item.businessOpportunityId==businesoppid){
					$('.bussinesList .businesName[businessopptunityid="'+businesoppid+'"]').prev().addClass('businesscheck');
				}
			})
		},function errF(jo){
			
		})
	})
	//商机名称列表
	function bussinesList(businessOppList){
		var html="";
		$.each(businessOppList, function(i,item) {
			html+='<tr>';
				html+='	<td class="businesscheckimg"></td>';
				html+='	<td class=" businesName" businessOpptunityId="'+item.businessOpportunityId+'">'+item.businessOpportunityName+'</td>';
				html+='	<td class=" businesNumb">'+item.businessOpportunityNum+'</td>';
				if(item.businessOpportunityType==0){
					html+='	<td oppridtype="0" class="opprtype">学校</td>';
				}else{
					html+='	<td oppridtype="1" class="opprtype">合作伙伴</td>';
				}
				
//				html+='	<td>'+item.businessOpportunityProcess+'</td>';
				html+='	<td>'+item.addressProvince+''+item.addressCity+''+item.addressCounty+''+item.addressDetail+'</td>';
			html+='	</tr>';
		});
		$('.bussinessItem').html(html);
	}
//选择商机
	$('.bussinessItem').on('click','tr',function(){
		$('.businesscheckimg').removeClass('businesscheck');
		$(this).find('.businesscheckimg').addClass('businesscheck');
	})

//选择商机确定
	$('.busnisListConfirm').click(function(){
		var bussinesName=$('.businesscheck').parent('tr').find('.businesName').html();
		var businessOpptunityId=$('.businesscheck').parent('tr').find('.businesName').attr('businessOpptunityId');
		var opprtype=$('.businesscheck').parent('tr').find('.opprtype').attr('oppridtype');
		$('.bussinesList').modal('hide');
		$('.busScolName').html(bussinesName);
		$('.busScolName').attr('businessOpptunityId',businessOpptunityId);
		
	})
	//查询商机名称
	$('#searchBtn').click(function(){
		var bussinesNameJ={};
		var businessOpportunityName=$.trim($('#searchBusinessName').val());
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		$ajax('post','businessOpportunity/queryCopBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			bussinesList(jo.businessOpportunityList);
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})

//城市插件
	$("#CpScolcity").citySelect({
	    prov:'省',  
	    city:'市',  
	    dist:'区',
	    nodata: "none"    
	}) ;
//添加服务人员信息
	function PanterScolinfo(){
		var Phtml='';
		Phtml+='<div class="panterScolcontainer clearfix" style="margin-bottom: 30px;">';
			Phtml+='<div class="panterScolnamewap pull-left">';
				Phtml+='<label class="pull-left">服务人员姓名</label>';
				Phtml+='<div class="pull-left">';
					Phtml+='<input type="text" value="" placeholder="服务人员姓名" class="form-control pScolcontName"/>';
				Phtml+='</div>';
			Phtml+='</div>';
			Phtml+='<div class="panterScolcontwap pull-left" style="margin: 0 1% 0 3%;">';
				Phtml+='<label class="pull-left">服务人员联系电话</label>';
				Phtml+='<div class="pull-left">';
					Phtml+='<input type="text" value="" placeholder="服务人员联系电话" class="form-control pScolcontphone"/>';
				Phtml+='</div>';
			Phtml+='</div>';
			Phtml+='<button class="btn btn-primary delPanterScol" onclick="delPanScoInfo($(this))">删除</button>';
		Phtml+='</div>';
		$('.panterScolbox').append(Phtml);
	}
	$('.addPanterScol').click(function(){
		PanterScolinfo();
		
	})
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
		var phoneStates=true;
		$('.panterScolcontainer').each(function(){
			var serviceJ={};
			var pScolcontName=$.trim($(this).find('.pScolcontName').val());
			var pScolcontphone=$.trim($(this).find('.pScolcontphone').val());
		
			serviceJ.serviceName=pScolcontName;
			serviceJ.servicePhone=pScolcontphone;
			if(!contact(serviceJ.servicePhone)&&serviceJ.servicePhone!=''){
				pub.Alt('请填写联系人正确联系方式',false);
				return phoneStates=false;
			}
			serviceArr.push(serviceJ);
			
		});
		//去除服务人员数组空内容
		var serviceArryA=[];
		for (var j=0;j<serviceArr.length;j++) {
			if(serviceArr[j].serviceName!=''||serviceArr[j].servicePhone!=''){
				serviceArryA[serviceArryA.length]=serviceArr[j]
			}
		}
		if(!phoneStates){
			return;
		}
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
		dataJ.serviceArr=serviceArryA;
		$ajax('post','businessOpportunity/addCooperativePartnerSchool',dataJ,function succF(jo){
			$('.R-wap').load('businesoppt/CpsSchoolList.html');
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
	
	
	
	
	
	
	
	
	
	
