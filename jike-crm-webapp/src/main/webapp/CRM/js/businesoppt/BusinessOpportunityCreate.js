$(function(){
		$("#city").citySelect({
	    prov: "北京",  
	    city: "北京市",  
	    dist: "东城区",  
	    nodata: "none"  
		}); 
		
		$('.businesConfirm').click(function(){
			$('.newlist-alert').html('');
			var businessJ={};
			var businessName=$('.businessName').val();
			var Optype=$('.opptName').find('option:selected').attr('Optype');
			var prov=$('.prov').find('option:selected').val();
			var city=$('.city').find('option:selected').val();
			var dist=$('.dist').find('option:selected').val();
			var detailadrs=$('.detailadrs').val();
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
				$ajax("post","businessOpportunity/addBusinessOpportunity",businessJ,function succF(jo){
					$('.R-wap').load('businesoppt/BusinessOpportunityList.html');
				})
		})
		
		
})
  