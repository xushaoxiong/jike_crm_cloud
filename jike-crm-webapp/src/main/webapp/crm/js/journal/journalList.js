$('.delJournal').click(function(){
	$('#deljalModal').modal('toggle');
})

	var paginatorJ={"businessOpportunityName":"","start":1,"pageSize":10};
	
	//分页
	$(document).ready(function() {
	    getDataList(0, null);
	});
	var initFlag=true;
	function getDataList(currPage, jg) {
		paginatorJ.start=currPage+1;
	    $ajax("post","businessOpportunityLog/queryBusinessOpportunityLogByParams",paginatorJ,function succF(jo){
	    	//查询无结果
	    	if(jo.totalCount==0){
	        	$('.list-tr').hide();
	        	$('.Nosearch').show().html('查无结果!');
	        }else{
	        	$('.list-tr').show();
	        	$('.Nosearch').html('').hide();	
	        }
	    	if (initFlag) {
	    		//分页
	    		$("#Pagination").pagination(jo.totalCount,{
		            items_per_page :10,
		            num_display_entries:3,
		            num_edge_entries:3,
		            callback : getDataList//回调函数
	        	});
	        	initFlag=false;
	    	}
	        
	        $(".jourlist").html("");
	       	jourItem(jo.businessOpportunityLogList);
			businesnamestrb();
	        $('.totalNum').html('共'+jo.totalCount+'条');
	      
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	
	}
	//列表内容
	function jourItem(datalist){
		var html="";
		$.each(datalist, function(i,item) {
			html+='<tr>';
				html+='<td>'+(i+1)+'</td>';
				html+='<td class="jourTime">'+item.logDate+'</td>';
				if(item.businessOpportunityName==undefined){
					html+='<td>日常商机</td>';
				}else{
					if((item.businessOpportunityName).length>10){
						html+='<td class="bussname cursorm" data-toggle="tooltip" data-placement="bottom" title="'+item.businessOpportunityName+'" busintype='+item.businessOpportunityType+'>'+item.businessOpportunityName+'</td>';
					}else{
						html+='<td class="bussname" busintype='+item.businessOpportunityType+'>'+item.businessOpportunityName+'</td>';
					}
					
				}
				html+='<td class="roleName">'+item.roleName+'</td>';
				html+='<td>'+item.createUserName+'</td>';
				html+='<td>'+item.name+'</td>';
				html+='<td class="evtype">'+item.eventType+'</td>';
				html+='<td class="spetype">'+item.specificEvent+'</td>';
				html+='<td class="jourHours">'+item.workingHours+'</td>';
				html+='<td class="jourinnerPeop" style="display: none;">';
					if(item.internalParticipant==undefined){
						html+='<span class="serviceName"></span>';
					}else{
						html+='<span class="serviceName">'+item.internalParticipant+'</span>';
					}
					
				html+='</td>';
				html+='<td class="jourouterPeop" style="display: none;">';
				if(item.externalParticipant==undefined){
					html+='<span class="serviceName"></span>';
				}else{
					html+='<span class="serviceName">'+item.externalParticipant+'</span>';
				}	
				html+='</td>';
				html+='<td class="jourCost cursorm" onclick="jourCost($(this))"><a>'+(item.totalFee).toFixed(2)+'</a></td>';
				html+='<td logId="'+item.logId+'" class="Operatwap">';
					if(item.authority==0){
						html+='<button class="btn btn-primary edit" style="margin-right:8px;">编辑</button>';
					}else{
						html+='<button class="btn" disabled="disabled" style="margin-right:8px;">编辑</button>';
					}
					html+='<button class="btn btn-primary checkjounal">查看</button>';
				html+='</td>';
			html+='</tr>';
		});
		$('.jourlist').html(html);
	}
	//搜索
	$('.searchBusiness').click(function(){
		initFlag=true;
		var OpportunityName=$.trim($('.OpportunityName').val());
		var startTime=$.trim($('#indate').val());
		var endTime=$.trim($('#enddate').val());
		var OpportunityProcess=$('.OpportunityProcess').find('option:selected').val();
		var userName=$.trim($('.creatName').val());
		
		if(OpportunityProcess=="所有"){
			paginatorJ.eventType="";
		}else{
			paginatorJ.eventType=OpportunityProcess;
		}
		paginatorJ.businessOpportunityName=OpportunityName;
		paginatorJ.startTime=startTime;
		paginatorJ.endTime=endTime;
		paginatorJ.userName=userName;
		paginatorJ.start=1;
		getDataList(0, null);
	})
//商机名称字数限制
function businesnamestrb(){
	for (var i=0;i<$('.bussname').length;i++) {
		var businessplit=$('.bussname').eq(i).html().substring(0,11);
		if($('.bussname').eq(i).html().length>10){
			$('.bussname').eq(i).html(businessplit+'...');
			businesnameall=businessplit+'...';
		}
		
	}
	
}
//获取商机类型搜索
//eventJson为pub/eventTypeList返回数据内容
//var eventlist=eventJson;
$.each(eventJson2.evenList, function(i,item) {
	var eventhtml="";
	eventhtml+='<option>'+item.evename+'</option>';
	$('.OpportunityProcess').append(eventhtml);
});

//	//操作设置
	var commJ={};
	$('.jourlist').on('click','.edit',function(){
		$('.R-wap').hide();
		$('.threloadWap').show();
		var evtypehtml=$(this).parents('tr').find('.evtype').html();
		var logIdJ={};
		var logid=$(this).parent().attr('logid');
		logIdJ.logId=logid;
		var businestype=$(this).parents('tr').find('.bussname').attr('busintype');	
		var netht="编辑日志";
		breadnav(Fht,netht);
		$ajax('post','businessOpportunityLog/queryBOLog',logIdJ,function succF(jo){
			$('.threloadWap').load('journal/editlog.html',function(){
				commJ=jo.commonJson;
				$('.eventType').attr('businestype',businestype);
				editdata(jo.businessOpportunityLogJson);
				freedata(jo.boFeeDetailJson);
				if(evtypehtml=='日常事项'){
					$('.businessNameSp').val('日常事项');
					$('.businesNumbspInp').val('R0000000-00');
				}
				commondetail(jo);
				$('.editInfo').hide();
				var lastht=$('.eventType').val();
				$('.addMessage').click(function(){
					breadnav(Fht,netht,lastht);
					$('#addJournal').hide();
					$('.editInfo').show();
					
				})
			});
	
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})

	//编辑页面赋值
	function editdata(editdata){
		$('#indat').html(editdata.logDate);
		$('#indat').attr('logId',editdata.logId);
		$('.businessNameSp').val(editdata.businessOpportunityName);
		$('.businessNameSp').attr('oppttypeid',editdata.businessOpportunityType);
		$('.businessNameSp').attr('objid',editdata.businessOpportunityId);
		$('.businesNumbspInp').val(editdata.businessOpportunityNum);
		$('.eventType').val(editdata.eventType);
		$('.specEvent').val(editdata.specificEvent);
		$('.timeVal').val(editdata.workingHours);
		$('.innerPerson').val(editdata.internalParticipant);
		$('.outPerson').val(editdata.externalParticipant);
		$('.btnCost').html((editdata.totalFee).toFixed(2));
	}
	//费用赋值
	function freedata(freedata){
		if(freedata.trafficFee==undefined){
			$('.editreachInp1').val('');
		}else{
			$('.editreachInp1').val(freedata.trafficFee);
		}
		if(freedata.hotelFee==undefined){
			$('.editreachInp2').val('');
		}else{
			$('.editreachInp2').val(freedata.hotelFee);
		}
		if(freedata.foodFee==undefined){
			$('.editreachInp3').val('');
		}else{
			$('.editreachInp3').val(freedata.foodFee);
		}
		if(freedata.entertainFee==undefined){
			$('.editreachInp4').val('');
		}else{
			$('.editreachInp4').val(freedata.entertainFee);
		}
		if(freedata.giftFee==undefined){
			$('.editreachInp5').val('');
		}else{
			$('.editreachInp5').val(freedata.giftFee);
		}
		if(freedata.otherFee==undefined){
			$('.editreachInp6').val('');
		}else{
			$('.editreachInp6').val(freedata.otherFee);
		}
		if(freedata.advanceFee==undefined){
			$('.editreachInp7').val('');
		}else{
			$('.editreachInp7').val(freedata.advanceFee);
		}
		if(freedata.advancePerson!=''){
			$('.payperson').show();
			$('.editreachInpPerson').val(freedata.advancePerson);
		}else{
			$('.payperson').hide();
		}
		
	}
	
	//列表费用弹框
	function Listfreedata(freedata){
		if(freedata.trafficFee==undefined){
			$('.reachInp1').val('');
		}else{
			$('.reachInp1').val(freedata.trafficFee);
		}
		if(freedata.hotelFee==undefined){
			$('.reachInp2').val('');
		}else{
			$('.reachInp2').val(freedata.hotelFee);
		}
		if(freedata.foodFee==undefined){
			$('.reachInp3').val('');
		}else{
			$('.reachInp3').val(freedata.foodFee);
		}
		if(freedata.entertainFee==undefined){
			$('.reachInp4').val('');
		}else{
			$('.reachInp4').val(freedata.entertainFee);
		}
		if(freedata.giftFee==undefined){
			$('.reachInp5').val('');
		}else{
			$('.reachInp5').val(freedata.giftFee);
		}
		if(freedata.otherFee==undefined){
			$('.reachInp6').val('');
		}else{
			$('.reachInp6').val(freedata.otherFee);
		}
		if(freedata.advanceFee==undefined){
			$('.reachInp7').val('');
		}else{
			$('.reachInp7').val(freedata.advanceFee);
		}
		if(freedata.advancePerson!=''){
			$('.payperson').show();
			$('.reachInpPerson').val(freedata.advancePerson);
		}else{
			$('.payperson').hide();
		}
		
	}
	//列表费用弹框
	function jourCost(_this){
		var logIdJ={};
		var logid=_this.parent().find('.Operatwap').attr('logid');
		logIdJ.logId=logid;
		$ajax('post','businessOpportunityLog/queryBOLog',logIdJ,function succF(jo){
			$('.totalCost').modal('toggle');
			Listfreedata(jo.boFeeDetailJson);
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
		
	}
	//编辑添加信息详情页面
	function commondetail(jo){
		var opptypeid=$('.businessNameSp').attr('oppttypeid');
		var eventType=$('.eventType').val();
		var businestype=$('.eventType').attr('businestype');
		//传入详情json
		//信息收集
		if(eventType=='信息收集'){
			if(opptypeid==1){
				$.getScript("js/editjournalpartner/editPxinxishoujiInfo.js",function(){
					$('.editInfo').html(infoColle());
					infodata(jo.commonJson)
				})
			}else{
				$.getScript("js/editjournal/xinxishoujiInfo.js",function(){
					$('.editInfo').html(infoColle());
					infodata(jo.commonJson)
				})
			}
//			
		}
		//制定拜访计划
		if($('.eventType').val()=='制定拜访计划'){
			$.getScript("js/editjournal/editbaifangjihuaInfo.js",function(){
				$('.editInfo').html(visitPlan());
				if(businestype==0){
					scolcontTile();
				}else{
					pantercontTile();
				}
				VisitPlandata(jo.commonJson)
			})
		}
		//拜访客户
		if(eventType=='拜访客户'){
			if($('.specEvent').val()=='达成合作意向'&&opptypeid==1){
				$.getScript("js/editjournalpartner/editPbaifangInfo.js",function(){
					$('.editInfo').html(vistInformation());
					visitordata(jo.commonJson)
				})
			}else{
				$.getScript("js/editjournal/editbaifangInfo.js",function(){
					$('.editInfo').html(vistInformation());
					if(businestype==0){
						scolcontTile();
					}else{
						pantercontTile();
					}
					visitordata(jo.commonJson)
				})
			}
			
		}
		//谈判
		if($('.eventType').val()=='商业谈判'){
			$.getScript("js/editjournal/edittanpanInfo.js",function(){
				$('.editInfo').html(negotiationsHtml());
				negotiationsData(jo.commonJson)
			})
		}
		
		//试用中-试用准备
		if($('.specEvent').val()=='试用准备'){
			$.getScript("js/editjournal/editshiyongzhongInfo.js",function(){
				$('.editInfo').html(TrialHtml());
				traildata(jo.commonJson);
			})
			
		}
		//试用中-试用结果
		if(($('.specEvent').val()).indexOf('试用结果')>-1){
			$.getScript("js/editjournal/editshiyongjieguoInfo.js",function(){
				$('.editInfo').html(TryHtml());
				Trydata(jo.commonJson);
			})
			
		}
		//招投标-投标准备
		if($('.specEvent').val()=='投标准备'){
			$.getScript("js/editjournal/editzhaotoubiaozhunbeiInfo.js",function(){
				$('.editInfo').html(PropPreionHtml());
				propationdata(jo.commonJson);
			})
			
		}
		//招投标-投标成功、失败
		if($('.specEvent').val()=='投标成功'||$('.specEvent').val()=='投标失败'){
			$.getScript("js/editjournal/editzhaotoubiaojieguoInfo.js",function(){
				$('.editInfo').html(propreResultHtml());
				prpreResultdata(jo.commonJson);
			})
			
		}
		//签约
		if($('.eventType').val()=='签约'){
			if(opptypeid==1){
				$.getScript("js/editjournalpartner/editPqianyueInfo.js",function(){
					$('.editInfo').html(signHtml());
					signdata(jo.commonJson);
				})
			}else{
				$.getScript("js/editjournal/editqianyueInfo.js",function(){
					$('.editInfo').html(signHtml());
					signdata(jo.commonJson);
				})
			}
			
			
		}
		//日常
		if($('.eventType').val()=='日常事项'){
			if(sessionStorage.server=='true'){
				$('.journalTime span').hide();
				$('.timeVal').prop('disabled',true);
				$.getScript("js/editjournalserver/editdaily.js",function(){
					$('.editInfo').html(dailytHtml());
					dailydata(jo.commonJson);
				})
			}else{
				$.getScript("js/editjournal/editrichangInfo.js",function(){
					$('.editInfo').html(dailytHtml());
					dailydata(jo.commonJson);
				})
			}
			
		}
	//售后
		if($('.eventType').val()=='售后'){
			$('.addTime,.minusTime').hide();
			$('.timeVal').prop('disabled',true);
			$.getScript("js/editjournal/editshouhouInfo.js",function(){
				$('.editInfo').html(aftSealtHtml());
				aftSealdata(jo.commonJson);
				if(opptypeid==0){
					$('.saleAfterObjName').attr('disabled',true);
					$('.saleAfterObjName').removeAttr('onclick','salesAfterModal()');
				}else{
					$('.saleAfterObjName').addClass('cursorm');
					$('.saleAfterObjName').attr('disabled',false);
					$('.saleAfterObjName').attr('objid',$('.businessNameSp').attr('objid'));
				}
			})
			
		}
		//支持
		if($('.eventType').val()=='支持'){
			$('.addTime,.minusTime').hide();
			$('.timeVal').prop('disabled',true);
			if(opptypeid==0&&sessionStorage.server=='false'){
				$.getScript("js/editjournal/editzhichiInfo.js",function(){
					$('.editInfo').html(supportHtml());
					supportdata(jo.commonJson);
					$('.saleAfterObjName').attr('disabled',true);
					$('.saleAfterObjName').removeAttr('onclick','salesAfterModal()');
				})
			}else if(sessionStorage.server=='true'){
				$.getScript("js/editjournalserver/editsersupport.js",function(){
					$('.editInfo').html(supportHtml());
					supportdata(jo.commonJson);
					if(opptypeid==0){
						$('.saleAfterObjName').attr('disabled',true);
						$('.saleAfterObjName').removeAttr('onclick','salesAfterModal()');
					}else{
						$('.saleAfterObjName').addClass('cursorm');
						$('.saleAfterObjName').attr('disabled',false);
						$('.saleAfterObjName').attr('objid',$('.businessNameSp').attr('objid'));
					}
				})
			}else{
				$.getScript("js/editjournalpartner/editPzhichiInfo.js",function(){
					$('.editInfo').html(supportHtml());
					supportdata(jo.commonJson);
					$('.saleAfterObjName').addClass('cursorm');
					$('.saleAfterObjName').attr('disabled',false);
					$('.saleAfterObjName').attr('objid',$('.businessNameSp').attr('objid'));
				})
			}
		}
		//培训
		if($('.eventType').val()=='培训'){
			$('.addTime,.minusTime').hide();
			$('.timeVal').prop('disabled',true);
//			if(opptypeid==1){
				$.getScript("js/editjournalpartner/editPpeixunInfo.js",function(){
					$('.editInfo').html(trainiHtml());
					
						$.each(jo.commonJson.boTrainArr, function(i,item) {
							if(item.cooperativePartnerSchoolId==undefined&&opptypeid==1){
								$('.trainsave').hide();
								$('.trainObjstate').attr('disabled',true);
								$('.trainObjName').attr('scolid','');
								$('.trainObjName').html(jo.businessOpportunityLogJson.businessOpportunityName);
								traindata(item);
							}else{
								$('.trainsave').show();
								$('.trainObjstate').attr('disabled',false);
								$('.Addtrain-wap').show();
								trainsaveLiat(jo.commonJson.boTrainArr);
								$('.trainObjName').attr('scolid',item.cooperativePartnerSchoolId);
								$('.trainObjName').html(item.schoolName);
							}
						});
					
					
				})
//			}else{
//				$.getScript("js/editjournal/editpeixunInfo.js",function(){
//					$('.editInfo').html(trainiHtml());
//					traindata(jo.commonJson);
//				})
//			}
			
		}
		//回款
		if($('.eventType').val()=='回款'){
			$.getScript("js/editjournal/editreceivmoneyInfo.js",function(){
				$('.editInfo').html(receiveHtml());
				receivedata(jo.commonJson);
			})
		}
	}

	var myDate = new Date();
	var year=myDate.getFullYear();
	var month=myDate.getMonth()+1;
	var date=myDate.getDate();
	if(month<10){
		month='0'+(myDate.getMonth()+1)
	}else{
		month=myDate.getMonth()+1;
	}
	if(date<10){
		date='0'+myDate.getDate()
	}else{
		date=myDate.getDate()
	}
	var endtime=year+'-'+month+'-'+date;
	
////查询时间
$('.searchBusiness').click(function(){	
	$('.alertTitle').html('');
	var indate=$.trim($('#indate').val());
	var enddate=$.trim($('#enddate').val());
	if(indate!=''&&enddate!=''){
		if(indate>(enddate==""?endtime:enddate)){
			$('.alertTitle').html('开始时间不能大于结束时间');
			return;
		}
	}
	
})
//新建日志按钮
$('.newlist').click(function(){
	$('.R-wap').load('journal/journalCreate.html',function(){
		$('.hide-menu li').removeClass('menuCheck');
		$('.L-list-item').find('li[menuid=6]').addClass('menuCheck');
		var netht=$('.menuCheck').find('a').html();
		breadnav(Fht,netht);
		$('.procewap').show();
	})
})
////重置
$('.reset').click(function(){
	$('.OpportunityName').val('');
	$('#indate').val('');
	$('#enddate').val('');
	$('.OpportunityProcess').find('option[proid="1"]').prop('selected',true);
	$('.creatName').val('');
})

//商机名称字数限制鼠标浮上显示全部内容

