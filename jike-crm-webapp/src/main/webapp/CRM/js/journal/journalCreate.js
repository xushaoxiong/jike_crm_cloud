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
	//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('journal/journalList.html');
		breadnav('日志管理','查看日志');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=7]').addClass('menuCheck');
	})
	
	//商机名称弹框状态如果事项类型未选择商机名称不能点击
	if($('#eventType').val()==''){
		$('.busnamState').removeClass('businessNameSp');
	}
	//商机名称弹框
	$('.busnamewap').on('click','.businessNameSp',function(){
		$('.bussinessItem').html('');
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
		var spcid=$('#SpecItem').find('option:selected').attr('spcid');
		
		//判断如果选项为培训、售后、支持 工时不能编辑
		if(eveid=='9'||eveid=='10'||eveid=='11'||sessionStorage.server=='true'){
			$('.journalTime span').hide();
			$('.timeVal').prop('disabled',true);
		}else{
			$('.journalTime span').show();
			$('.timeVal').prop('disabled',false);
		}
		//判断日常事项统一商机名称和流水号
		if(eveid=='8'){
			console.log(111)
			$('.businessNameSp').html('日常商机名称');
			$('.businesNumbspInp').html('R0000000-00');
			$('.busnamState').removeClass('businessNameSp');
			$('.busnamState').attr('disabled',true);
		}else{
			$('.businessNameSp').html('');
			$('.businesNumbspInp').html('');
			$('.busnamState').addClass('businessNameSp');
			$('.busnamState').attr('disabled',false);
		}
		
		messbtnType();
	})
	//选择不同事项加载不同js
	$('#SpecItem').change(function(){
		var spcid=$('#SpecItem').find('option:selected').attr('spcid');
	})
	
	
	//工时添加按钮
	var timeN=0;
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
	$('.timeVal').blur(function(){
		worktimeNum($(this).val())
	})
	function worktimeNum(obj){
		obj = obj.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
		obj = obj.replace(/^\./g,""); //验证第一个字符是数字
		obj = obj.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
		obj = obj.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		obj = obj.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3'); //只能输入一个小数
		if(obj*10%5>0){
			$('.timeVal').val('');
			$('.timedanger').css('color','red');
		}else{
			$('.timedanger').css('color','#000');
		}
		
		
	}
	//总费用弹框
	$('.btnCost').click(function(){
		$('.totalCost').modal('toggle');
	})
	//提交费用
	$('.reachConfirm').click(function(){
		var inp7=$.trim($('.reachInp7').val());
		var inp8=$.trim($('.reachInp8').val());
		var totalReach=0;
		for (var i=0;i<$('.ReachInp').length;i++) {
			if($('.reachInp'+(i+1)).val()!=''){
				totalReach=totalReach+Number($.trim($('.reachInp'+(i+1)).val()));
			}
		}
		
		if(inp7!==''&&inp8===''){
			console.log($.trim($('.reachInp8').val()))
			pub.Alt('请填写垫付人',false);
			return;
		}
		$('.totalCost').modal('hide');
		$('.btnCost').html(totalReach.toFixed(2));
		
	})
	//填写垫付费用时垫付人出现
	$('.reachInp7').keyup(function(){
		if($('.reachInp7').val()!=''){
			$('.payperson').show();
			$('.reachInp8').val('');
		}else{
			$('.payperson').hide();
		}
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
	var beginid='';
	var Mesclic=false;
	$('.addMessage').click(function(){
//		$('.FillInfo').on('click');
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
		breadnav(Fht,'创建日志',eventType);
		
		$('#addJournal').hide();
		$('.FillInfo').show();
		
		//信息收集页面
		if(spcid=='101'){
			if(Mesclic && beginid==(eveid+spcid+OpptunityId)){
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
							beginid=eveid+spcid+OpptunityId;
							
						},function errF(jo){
							pub.Alt(jo.message,false);
						})
					});
				}else{
					$('.FillInfo').html('');
					$.getScript("js/journalpartners/PxinxishoujiInfo.js",function(){
						$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
							$('.FillInfo').html(infoColle());
							var bInfoColet=jo.boInformationCollect;
							if(bInfoColet!=undefined){
								infodata(bInfoColet);
							}
							Mesclic=true;
							beginid=eveid+spcid+OpptunityId;
						},function errF(jo){
							pub.Alt(jo.message,false)
						})
					});
				}
			}
		}
		//制定拜访计划页面
		if(spcid=='201'){
			if(Mesclic&&beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$('.FillInfo').html('');
				
				$.getScript("js/journal/baifangjihuaInfo.js",function(){
					
					$ajax('post','businessOpportunityLog/queryInformationCollectionByBoId',busoptIdJ,function succF(jo){
					var bInfoColet=jo.boInformationCollect;
					$('.FillInfo').html(visitPlan());
					if(OpptunityId==0){
						scolcontTile();
					}else{
						pantercontTile();
					}
					if(bInfoColet!=undefined){
						VisitPlandata(jo)
					}
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;		
					},function errF(jo){
						pub.Alt(jo.message,false);
					})
				});
			}
			
			
		}
		//拜访客户
		if(eveid=='3'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
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
							beginid=eveid+spcid+OpptunityId;
						},function errF(jo){
							pub.Alt(jo.message,false);
						})
					});
				}else{
					$.getScript("js/journal/baifangInfo.js",function(){
						$ajax('post','businessOpportunityLog/queryVisitPlanByBoId',busoptIdJ,function succF(jo){
							var bInfoColet=jo.boInformationCollect;
							$('.FillInfo').html(vistInformation());
							visitordata(jo);
							Mesclic=true;	
							beginid=eveid+spcid+OpptunityId;
						},function errF(jo){
							pub.Alt(jo.message,false);
						})
					});
				}
				
			}
		}
		//谈判
		if(eveid=='4'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/tanpanInfo.js",function(){
					$ajax('post','businessOpportunityLog/generateNegotiationNameByBoId',busoptIdJ,function succF(jo){
						$('.FillInfo').html(negotiationsHtml());
						negotiationsData(jo);
						Mesclic=true;	
						beginid=eveid+spcid+OpptunityId;
					},function errF(jo){
						pub.Alt(jo.message,false);
					})
				});
			}
		}
		//试用中-试用准备
		if(spcid=='501'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/shiyongzhongInfo.js",function(){
					$('.FillInfo').html(TrialHtml());
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
			
		}
		//试用中-使用结果
		if(spcid=='502'||spcid=='503'||spcid=='504'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/shiyongjieguoInfo.js",function(){
					$('.FillInfo').html(TryHtml());
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
			
		}
		//招投标-投标准备
		if(spcid=='601'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/zhaotoubiaozhunbeiInfo.js",function(){
					$('.FillInfo').html(PropPreionHtml());
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
			
		}
		//招投标-投标结果
		if(spcid=='602'||spcid=='603'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/zhaotoubiaojieguoInfo.js",function(){
					$('.FillInfo').html(propreResultHtml());
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
			
		}
		//签约
		if(spcid=='701'){
			
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0){
					$.getScript("js/journal/qianyueInfo.js",function(){
						$('.FillInfo').html(signHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
			}else{
				$.getScript("js/journalpartners/PqianyueInfo.js",function(){
					$('.FillInfo').html(signHtml());
					$(".FillInfo .assmentaddr").addcitySelect({  
					    prov: "所有",  
					    city: "所有",  
					    dist: "所有",  
					    nodata: "none"  
					});
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
				
			}
			
		}
		//日常
		if(eveid=='8'){
			console.log(111)
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				if(sessionStorage.server=='true'){
					$.getScript("js/journalserver/serverdaily.js",function(){
						$('.FillInfo').html(dailytHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}else{
					$.getScript("js/journal/richangInfo.js",function(){
						$('.FillInfo').html(dailytHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}
				
			}
			
		}
		//售后
		if(eveid=='9'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/shouhouInfo.js",function(){
					$('.FillInfo').html(aftSealtHtml());
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
			
		}
		//支持
		if(eveid=='10'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0&&sessionStorage.server=='false'){
					$.getScript("js/journal/zhichiInfo.js",function(){
						$('.FillInfo').html(supportHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}else if(sessionStorage.server=='true'){
					$.getScript("js/journalserver/serversupport.js",function(){
						$('.FillInfo').html(supportHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}else{
					$.getScript("js/journalpartners/PzhichiInfo.js",function(){
						$('.FillInfo').html(supportHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}
				
			}
			
		}
		//培训
		if(eveid=='11'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				if(OpptunityId==0){
					$.getScript("js/journal/peixunInfo.js",function(){
						$('.FillInfo').html(trainiHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}else{
					$.getScript("js/journalpartners/PpeixunInfo.js",function(){
						$('.FillInfo').html(trainiHtml());
						Mesclic=true;
						beginid=eveid+spcid+OpptunityId;
					})
				}
				
			}
			
		}
		
		//回款
		if(eveid=='12'){
			if(Mesclic&& beginid==(eveid+spcid+OpptunityId)){
				$('.FillInfo').show();
			}else{
				$.getScript("js/journal/receivmoneyInfo.js",function(){
					$('.FillInfo').html(receiveHtml());
					Mesclic=true;
					beginid=eveid+spcid+OpptunityId;
				})
			}
			
		}
		
	})

	$('.journaConfirm').click(function(){
		breadnav('日志管理','查看日志');
		$('.L-list-item').find('li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=7]').addClass('menuCheck');
	})
})