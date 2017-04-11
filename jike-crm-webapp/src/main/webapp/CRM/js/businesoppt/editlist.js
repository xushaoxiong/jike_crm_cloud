
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
	
		})
		$('.businessName').val(jo.businessOpportunityName);
		$('.addrDetial').val(jo.addressDetail);
		$('.scloType').find('option[Optype="'+jo.businessOpportunityType+'"]').prop('selected',true)
	},function errF(jo){
		
	})
	
	//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('businesoppt/BusinessOpportunityList.html');
	})
	//编辑确定
	$('.editConfirm').click(function(){
		$('.newlist-alert').html('');
		var businessJ={};
		var businessName=$('.businessName').val();
		var Optype=$('.opptName').find('option:selected').attr('Optype');
		var prov=$('.prov').find('option:selected').val();
		var city=$('.city').find('option:selected').val();
		var dist=$('.dist').find('option:selected').val();
		var detailadrs=$('.detailadrs').val();
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
					$('.R-wap').load('businesoppt/list.html');
			})
	})
	


