
	var editlistJ={};
	//商机流水号
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	editlistJ.businessOpportunityNum=businessOpportunityNum;
	$ajax('post','businessOpportunity/queryBusinessOpportunityByBoNum',editlistJ,function succF(jo){
		$("#city").citySelect({
		    prov: jo.addressProvince,  
		    city: jo.addressCity,  
		    dist: jo.addressCounty,
		    nodata: "none"    
	
		});
		if(jo.addressCity!=undefined){
			$('.citywap').html('<span class="form-control" disabled>'+jo.addressCity+'</span>')
		}
		$('.businessName').val(jo.businessOpportunityName);
		$('.addrDetial').val(jo.addressDetail);
		if(jo.businessOpportunityType==0){
			$('.scloType').val('学校');
		}else{
			$('.scloType').val('合作伙伴');
		}
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
	
	//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').show();
		$('.threloadWap').hide();
		$('.threloadWap').html('');
//		$('.R-wap').load('businesoppt/BusinessOpportunityList.html');
	})
	//编辑确定
	$('.editConfirm').click(function(){
		breadnav('商机管理','查询商机');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=5]').addClass('menuCheck');
		$('.newlist-alert').html('');
		var businessJ={};
		var businessName=$('.businessName').val();
		var Optype=$('.opptName').find('option:selected').attr('Optype');
		var prov=$('.prov').find('option:selected').val();
		var city=$('.citywap').find('span').html();
		var dist=$('.dist').find('option:selected').val();
		var detailadrs=$('.addrDetial').val();
		var businessOpportunityNum=window.localStorage.getItem('opptNumb');
		if(businessName==''){
			$('.newlist-alert').html('请填写商机名称');
			return ;
		}
		if(prov==''||city==''||dist==''||detailadrs==''){
			$('.newlist-alert').html('请填写地址');
			return ;
		}
		businessJ.businessOpportunityName=businessName;
		businessJ.businessOpportunityType=Optype;
		businessJ.addressProvince=prov;
		businessJ.addressCity=city;
		businessJ.addressCounty=dist;
		businessJ.addressDetail=detailadrs;
		businessJ.businessOpportunityNum=businessOpportunityNum;
			$ajax("post","businessOpportunity/updateBusinessOpportunity",businessJ,function succF(jo){
					$('.R-wap').show();
					$('.threloadWap').hide();
					var oppnumid= $('.businessName').attr('Numoppid');
					$('.opptNumb[oppid="'+oppnumid+'"] a').html($('.businessName').val());
					$('.threloadWap').html('');
			},function errF(jo){
				pub.Alt(jo.message,false);
			})
	})
	


