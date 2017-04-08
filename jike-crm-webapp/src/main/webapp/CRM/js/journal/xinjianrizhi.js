$(function(){
	
	//新建日志时间
	var date=new Date();
	var year=date.getFullYear();
	var moth=date.getMonth()+1;
	var day=date.getDay();
	if(day<10){
		day="0"+date.getDay();
	}else{
		day=date.getDay();
	}
	$('#indate').val(year+'-'+moth+'-'+day);
	
	
	
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
					html+='	<td class=" businesName">'+item.businessOpportunityName+'</td>';
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
		var bussinesNumb=$('.businesscheck').parent('tr').find('.businesNumb').html();
		$('.bussinesList').modal('hide');
		$('.businessNameSp').html(bussinesName);
		$('.businesNumbspInp').html(bussinesNumb);
		
	})
	//查询商机名称
	$('#searchBtn').click(function(){
		var bussinesNameJ={};
		var businessOpportunityName=$.trim($('#searchBusinessName').val());
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		$ajax('post','businessOpportunity/queryBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			bussinesList(jo.businessOpportunityList,".bussinessItem")
		},function errF(jo){
			
		})
	})
	//事项类型选择二级联动

	$('#eventType').change(function(){
		var eveid=$('#eventType').find('option:selected').attr('eveid');
		eventType('#SpecItem',eveid);
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
		var reachInp1=Number($.trim($('.reachInp1').val()));
		var reachInp2=Number($.trim($('.reachInp2').val()));
		var reachInp3=Number($.trim($('.reachInp3').val()));
		var reachInp4=Number($.trim($('.reachInp4').val()));
		var reachInp5=Number($.trim($('.reachInp5').val()));
		var reachInp6=Number($.trim($('.reachInp6').val()));
		var reachInp7=Number($.trim($('.reachInp7').val()));
		var reachInp8=Number($.trim($('.reachInp8').val()));
		var totalReach=reachInp1+reachInp2+reachInp3+reachInp4+reachInp5+reachInp6+reachInp7;
		$('.totalCost').modal('hide');
		$('.btnCost').html(totalReach);
	})
	
	
	//添加信息
	$('.addMessage').click(function(){
//		$('#messBox').show();
//		$('#addJournal').hide();
		$('.R-wap').load('xinxishouji.html')
	})
	//信息添加完提交
	$('.mesConfirm').click(function(){
		$('#messBox').hide();
		$('#addJournal').show();
	})
})