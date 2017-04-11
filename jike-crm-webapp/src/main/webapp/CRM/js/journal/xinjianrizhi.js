$(function(){
	
	//新建日志时间
	var date=new Date();
	var year=date.getFullYear();
	var moth=date.getMonth()+1;
	var day=date.getDate();
	if(day<10){
		day="0"+date.getDate();
	}else{
		day=date.getDate();
	}
	if(moth<10){
		moth="0"+(date.getMonth()+1);
	}else{
		moth=date.getMonth()+1;
	}
	$('#indate').html(year+'-'+moth+'-'+day);
	
	$('#indate').click(function(){
		messbtnType();
		WdatePicker();
		
	})
	
	//商机名称弹框
	$('.businessNameSp').click(function(){
		
		var bussinesNameJ={};
		var businessOpportunityName=$.trim($('#searchBusinessName').val());
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		$('.bussinesList').modal('toggle');
		$ajax('post','businessOpportunity/queryBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			bussinesList(jo.businessOpportunityList,".bussinessItem")
		},function errF(jo){
			
		})
	})
	//商机名称列表
	function bussinesList(businessOppList,seltor){
		var html="";
			$.each(businessOppList, function(i,item) {
				html+='<tr>';
					html+='	<td class="businesscheckimg"></td>';
					html+='	<td class=" businesName" businessOpptunityId="'+item.businessOpportunityId+'">'+item.businessOpportunityName+'</td>';
					html+='	<td class=" businesNumb">'+item.businessOpportunityNum+'</td>';
					if(item.businessOpportunityType==0){
						html+='	<td>学校</td>';
					}else{
						html+='	<td>合作伙伴</td>';
					}
					
					html+='	<td>'+item.businessOpportunityProcess+'</td>';
					html+='	<td>'+item.addressProvince+''+item.addressCity+''+item.addressCounty+''+item.addressDetail+'</td>';
				html+='	</tr>';
			});
			$(seltor).html(html);
		
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
		var bussinesNumb=$('.businesscheck').parent('tr').find('.businesNumb').html();
		$('.bussinesList').modal('hide');
		$('.businessNameSp').html(bussinesName);
		$('.businesNumbspInp').html(bussinesNumb);
		$('.businessNameSp').attr('businessOpptunityId',businessOpptunityId);
		messbtnType();
		
	})
	//查询商机名称
	$('#searchBtn').click(function(){
		var bussinesNameJ={};
		var businessOpportunityName=$.trim($('#searchBusinessName').val());
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		$ajax('post','businessOpportunity/queryBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			bussinesList(jo.businessOpportunityList,".bussinessItem");
		},function errF(jo){
			
		})
	})
	//事项类型选择二级联动

	$('#eventType').change(function(){
		var eveid=$('#eventType').find('option:selected').attr('eveid');
		eventType('#SpecItem',eveid);
		messbtnType();
		var spcid=$('#SpecItem').find('option:selected').attr('spcid');
	})
	//选择不同事项加载不同js
	$('#SpecItem').change(function(){
		var spcid=$('#SpecItem').find('option:selected').attr('spcid');
	})
	
	
	//工时添加按钮
	var timeN=1
	$('.addTime').click(function(){
		timeN++;
		$('.timeVal').val(timeN*0.5);
	})
	$('.minusTime').click(function(){
		timeN--;
		$('.timeVal').val(timeN*0.5);
		if(timeN<0){
			$('.timeVal').val('0');
			timeN=0;
		}
	})
	
	
	
	
	
	
	//总费用弹框
	$('.btnCost').click(function(){
		$('.totalCost').modal('toggle');
	})
	//提交费用
	$('.reachConfirm').click(function(){
		var totalReach=0;
		for (var i=0;i<$('.ReachInp').length;i++) {
			totalReach=totalReach+Number($.trim($('.reachInp'+(i+1)).val()));
		}
		$('.totalCost').modal('hide');
		$('.btnCost').html(totalReach.toFixed(2));
		
	})
	//添加信息按钮状态
	function messbtnType(){
		var indate =$.trim($('#indate').html());
		var SpecItem=$('#SpecItem').val();
		var businessNameSp=$('.businessNameSp').html();
		if(indate==''||SpecItem==null||SpecItem==''||businessNameSp==''){
			$('.addMessage').attr('disabled','disabled');
		}else{
			$('.addMessage').prop('disabled',false);
		}
	}messbtnType();
	
	

/*添加信息*/
	//商机名称id

	
	$('.addMessage').click(function(){
		var busoptIdJ={};
		//根据商机名称id查询信息
		var busoptid=$('.businessNameSp').attr('businessOpptunityId');
		busoptIdJ.businessOpportunityId=busoptid;
		var spcid=$('#SpecItem').find('option:selected').attr('spcid');
		$('#addJournal').hide();
		//信息收集页面
		if(spcid=='101'){
			$.getScript("js/journal/xinxishoujiInfo.js");
			$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
				$('.FillInfo').html(infoColle());
				var bInfoColet=jo.boInformationCollect;
					if(bInfoColet!=undefined){
						infodata(bInfoColet);
					}
			},function errF(jo){
				
			})
			
		}
		//制定拜访计划页面
		if(spcid=='201'){
			$.getScript("js/journal/baifangjihuaInfo.js");
			$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
				console.log(jo)
				var bInfoColet=jo.boInformationCollect;
				$('.FillInfo').html(visitPlan());
				if(bInfoColet!=undefined){
					VisitPlandata(jo)
				}
				
				
					
			},function errF(jo){
				
			})
		}
	})


})