$(function(){
		$("#city").citySelect({
		    prov: "北京",  
		    city: "北京",  
		    dist: "东城区",  
		    nodata: "none"  
		}); 
		//确定
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
			//防止双击
			$(this).prop('disabled',true);
				$ajax("post","businessOpportunity/addBusinessOpportunity",businessJ,function succF(jo){
					$('.R-wap').load('businesoppt/BusinessOpportunityList.html');
				},function errF(jo){
					pub.Alt(jo.message,false);
				})
		})
		
		//返回上一级
		$('.goBack').click(function(){
			$('.R-wap').load('businesoppt/BusinessOpportunityList.html');
		})
})
  