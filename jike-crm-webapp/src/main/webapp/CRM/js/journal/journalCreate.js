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
	
	
	//商机名称弹框状态如果事项类型未选择商机名称不能点击
	if($('#eventType').val()==''){
		$('.busnamState').removeClass('businessNameSp');
	}
	//商机名称弹框
	$('.busnamewap').on('click','.businessNameSp',function(){
		var bussinesNameJ={};
		var businessOpportunityName="";
		var eventType=$('#eventType').find('option:selected').val();
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		bussinesNameJ.eventType=eventType;
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
						html+='	<td oppridtype="0" class="opprtype">学校</td>';
					}else{
						html+='	<td oppridtype="1" class="opprtype">合作伙伴</td>';
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
		var opprtype=$('.businesscheck').parent('tr').find('.opprtype').attr('oppridtype');
		$('.bussinesList').modal('hide');
		$('.businessNameSp').html(bussinesName);
		$('.businesNumbspInp').html(bussinesNumb);
		$('.businessNameSp').attr('businessOpptunityId',businessOpptunityId);
		$('.businesNumbspInp').attr('OpptunityId',opprtype);
		messbtnType();
		
	})
	//查询商机名称
	$('#searchBtn').click(function(){
		var bussinesNameJ={};
		var eventType=$('#eventType').find('option:selected').val();
		var businessOpportunityName=$.trim($('#searchBusinessName').val());
		bussinesNameJ.businessOpportunityName=businessOpportunityName;
		bussinesNameJ.eventType=eventType;
		$ajax('post','businessOpportunity/queryBusinessOpportunityByName',bussinesNameJ,function succF(jo){
			bussinesList(jo.businessOpportunityList,".bussinessItem");
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
	//事项类型选择二级联动
	
	$('#eventType').change(function(){
		if($('#eventType').val()==''){
			$('.busnamState').removeClass('businessNameSp');
		}else{
			$('.busnamState').addClass('businessNameSp');
		}
		var eveid=$('#eventType').find('option:selected').attr('eveid');
		spictype('#SpecItem',eveid);
		//判断如果选项为培训、售后、支持 工时不能编辑
		if(eveid=='9'||eveid=='10'||eveid=='11'){
			$('.journalTime span').hide();
			$('.timeVal').prop('disabled',true);
		}else{
			$('.journalTime span').show();
			$('.timeVal').prop('disabled',false);
		}
		//判断日常事项统一商机名称和流水号
		if(eveid=='8'){
			$('.businessNameSp').html('日常商机名称');
			$('.businesNumbspInp').html('S1000000000000');
		}else{
			$('.businessNameSp').html('');
			$('.businesNumbspInp').html('');
		}
		
		messbtnType();
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

	var Mesclic=false;
	$('.addMessage').click(function(){
		var busoptIdJ={};
		//根据商机名称id查询信息
		var busoptid=$('.businessNameSp').attr('businessOpptunityId');
//		OpptunityId=0学校 1合作伙伴
		var OpptunityId=$('.businesNumbspInp').attr('OpptunityId');
		busoptIdJ.businessOpportunityId=busoptid;
		var spcid=$('#SpecItem').find('option:selected').attr('spcid');
		var eveid=$('#eventType').find('option:selected').attr('eveid');
		var eventType=$('#eventType').find('option:selected').val();
		//面包屑导航
		breadnav(Fht,netht,eventType);
		
		$('#addJournal').hide();
		$('.FillInfo').show();
		//信息收集页面
		if(spcid=='101'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0){
					$.getScript("js/journal/xinxishoujiInfo.js",function(){
						$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
							$('.FillInfo').html(infoColle());
							var bInfoColet=jo.boInformationCollect;
							if(bInfoColet!=undefined){
								infodata(bInfoColet);
							}
							Mesclic=true;
							
						},function errF(jo){
							pub.Alt(jo.message,false)
						})
					});
				}else{
					$.getScript("js/journalpartners/PxinxishoujiInfo.js",function(){
						$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
							$('.FillInfo').html(infoColle());
							var bInfoColet=jo.boInformationCollect;
							if(bInfoColet!=undefined){
								infodata(bInfoColet);
							}
							Mesclic=true;
							
						},function errF(jo){
							pub.Alt(jo.message,false)
						})
					});
				}
			}
			
			
			
		}
		//制定拜访计划页面
		if(spcid=='201'){
			if(Mesclic){
				
			}else{
				$.getScript("js/journal/baifangjihuaInfo.js",function(){
					$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
					var bInfoColet=jo.boInformationCollect;
					$('.FillInfo').html(visitPlan());
					var bInfoColet=jo.boInformationCollect;
					if(bInfoColet!=undefined){
						console.log(bInfoColet)
						VisitPlandata(jo)
					}
					Mesclic=true;
							
					},function errF(jo){
						pub.Alt(jo.message,false);
					})
				});
			}
			
			
		}
		//拜访客户
		if(eveid=='3'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				//达成合作意向
				if(spcid=='303'&& OpptunityId==1){
					$.getScript("js/journalpartners/PbaifangInfo.js",function(){
						$ajax('post','businessOpportunityLog/queryVisitPlanByBoId',busoptIdJ,function succF(jo){
							var bInfoColet=jo.boInformationCollect;
							$('.FillInfo').html(vistInformation());
							visitordata(jo);
							Mesclic=true;		
						},function errF(jo){
							pub.Alt(jo.message,false);
							console.log(jo.message)
						})
					});
				}else{
					$.getScript("js/journal/baifangInfo.js",function(){
						$ajax('post','businessOpportunityLog/queryVisitPlanByBoId',busoptIdJ,function succF(jo){
							var bInfoColet=jo.boInformationCollect;
							$('.FillInfo').html(vistInformation());
							visitordata(jo);
							Mesclic=true;		
						},function errF(jo){
							pub.Alt(jo.message,false);
						})
					});
				}
				
			}
			
			
		
		}
		//谈判
		if(eveid=='4'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/tanpanInfo.js",function(){
					$ajax('post','businessOpportunityLog/generateNegotiationNameByBoId',busoptIdJ,function succF(jo){
						$('.FillInfo').html(negotiationsHtml());
						negotiationsData(jo);
						Mesclic=true;	
					},function errF(jo){
						pub.Alt(jo.message,false);
					})
				});
			}
		}
		//试用中-试用准备
		if(spcid=='501'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/shiyongzhongInfo.js",function(){
					$('.FillInfo').html(TrialHtml());
					Mesclic=true;
				})
			}
			
		}
		//试用中-使用结果
		if(spcid=='502'||spcid=='503'||spcid=='504'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/shiyongjieguoInfo.js",function(){
					$('.FillInfo').html(TryHtml());
					Mesclic=true;
				})
			}
			
		}
		//招投标-投标准备
		if(spcid=='601'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/zhaotoubiaozhunbeiInfo.js",function(){
					$('.FillInfo').html(PropPreionHtml());
					Mesclic=true;
				})
			}
			
		}
		//招投标-投标结果
		if(spcid=='602'||spcid=='603'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/zhaotoubiaojieguoInfo.js",function(){
					$('.FillInfo').html(propreResultHtml());
					Mesclic=true;
				})
			}
			
		}
		//签约
		if(spcid=='701'){
			
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0){
					$.getScript("js/journal/qianyueInfo.js",function(){
						$('.FillInfo').html(signHtml());
						Mesclic=true;
					})
			}else{
				$.getScript("js/journalpartners/PqianyueInfo.js",function(){
					$('.FillInfo').html(signHtml());
					$(".FillInfo .assmentaddr").addcitySelect({  
					    prov: "北京",  
					    city: "北京",  
					    dist: "东城区",  
					    nodata: "none"  
					});
					Mesclic=true;
				})
			}
				
			}
			
		}
		//采购
//		if(spcid=='801'){
//			if(Mesclic){
//				$('.FillInfo').show();
//			}else{
//				$.getScript("js/journal/caigouInfo.js",function(){
//					$('.FillInfo').html(PurchHtml());
//					Mesclic=true;
//				})
//			}
//			
//		}
		//日常
		if(eveid=='8'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/richangInfo.js",function(){
					$('.FillInfo').html(dailytHtml());
					Mesclic=true;
				})
			}
			
		}
		//售后
		if(eveid=='9'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/shouhouInfo.js",function(){
					$('.FillInfo').html(aftSealtHtml());
					Mesclic=true;
				})
			}
			
		}
		//支持
		if(eveid=='10'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0){
					$.getScript("js/journal/zhichiInfo.js",function(){
						$('.FillInfo').html(supportHtml());
						Mesclic=true;
					})
				}else{
					$.getScript("js/journalpartners/PzhichiInfo.js",function(){
						$('.FillInfo').html(supportHtml());
						Mesclic=true;
					})
				}
				
			}
			
		}
		//培训
		if(eveid=='11'){
			if(Mesclic){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0){
					$.getScript("js/journal/peixunInfo.js",function(){
						$('.FillInfo').html(trainiHtml());
						Mesclic=true;
					})
				}else{
					$.getScript("js/journalpartners/PpeixunInfo.js",function(){
						$('.FillInfo').html(trainiHtml());
						Mesclic=true;
					})
				}
				
			}
			
		}
		
		
		
	})


})