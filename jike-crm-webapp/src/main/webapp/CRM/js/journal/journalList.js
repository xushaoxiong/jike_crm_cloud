$('.delJournal').click(function(){
	$('#deljalModal').modal('toggle');
})
//列表查询
	


	
	var paginatorJ={"businessOpportunityName":"","start":1,"pageSize":10};



	//分页
	var cartePage=function(jo){
		var options={
			alignment:"center",
	        bootstrapMajorVersion:1,    //版本
	        numberOfPages:9,    //最多显示Page页
	        totalPages:jo.totalPage,    //所有数据可以显示的页数
	        onPageClicked:function(e,originalEvent,type,page){//点击跳转页
		      	paginatorJ.start=page;
		      	clickPage(paginatorJ);
	        },
	        currentPage:paginatorJ.start,    //当前页数
	        	pageUrl:function(type, page, current){ 
	        }        
	    }
		$(".pagination").bootstrapPaginator(options);
		$('.totalNum').html('共'+jo.totalCount+'条');
	}
	//列表内容
	function jourItem(datalist){
		var html="";
		$.each(datalist, function(i,item) {
			
			$('.showNumb').html(datalist.length)
			html+='<tr>';
				html+='<td>'+(i+1)+'</td>';
				html+='<td>'+item.logDate+'</td>';
				if(item.businessOpportunityName==undefined){
					html+='<td>日常商机</td>';
				}else{
					if((item.businessOpportunityName).length>10){
						html+='<td class="bussname cursorm" data-toggle="tooltip" data-placement="bottom" title="'+item.businessOpportunityName+'" busintype='+item.businessOpportunityType+'>'+item.businessOpportunityName+'</td>';
					}else{
						html+='<td class="bussname" busintype='+item.businessOpportunityType+'>'+item.businessOpportunityName+'</td>';
					}
					
				}
				html+='<td>'+item.roleName+'</td>';
				html+='<td>'+item.createUserName+'</td>';
				html+='<td class="evtype">'+item.eventType+'</td>';
				html+='<td class="spetype">'+item.specificEvent+'</td>';
				html+='<td>'+item.workingHours+'</td>';
				html+='<td>';
					if(item.internalParticipant==undefined){
						html+='<span class="serviceName"></span>';
					}else{
						html+='<span class="serviceName">'+item.internalParticipant+'</span>';
					}
					
				html+='</td>';
				html+='<td>';
				if(item.externalParticipant==undefined){
					html+='<span class="serviceName"></span>';
				}else{
					html+='<span class="serviceName">'+item.externalParticipant+'</span>';
				}	
				html+='</td>';
				html+='<td>'+item.totalFee+'</td>';
				html+='<td logId="'+item.logId+'">';
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
	//点击页码
	
	function clickPage(PJson){
		$ajax("post","businessOpportunityLog/queryBusinessOpportunityLogByParams",PJson,function succF(jo){
			jourItem(jo.businessOpportunityLogList);
			cartePage(jo);
			businesnamestrb();
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
	}clickPage(paginatorJ)
	
	
	//搜索
	$('.searchBusiness').click(function(){
		console.log(1111)
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
		clickPage(paginatorJ);
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

	$('.jourlist').on('click','.edit',function(){
		var evtypehtml=$(this).parents('tr').find('.evtype').html();
		
		var logIdJ={};
		var logid=$(this).parent().attr('logid');
		logIdJ.logId=logid;
		var businestype=$(this).parents('tr').find('.bussname').attr('busintype');
		
		var netht="编辑日志";
		breadnav(Fht,netht);
		$ajax('post','businessOpportunityLog/queryBOLog',logIdJ,function succF(jo){
			$('.R-wap').load('journal/editlog.html',function(){
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
		$('#indate').html(editdata.logDate);
		$('#indate').attr('logId',editdata.logId)
		$('.businessNameSp').val(editdata.businessOpportunityName);
		$('.businessNameSp').attr('oppttypeid',editdata.businessOpportunityType);
		$('.businesNumbspInp').val(editdata.businessOpportunityNum);
		$('.eventType').val(editdata.eventType);
		$('.specEvent').val(editdata.specificEvent);
		$('.timeVal').val(editdata.workingHours);
		$('.innerPerson').val(editdata.internalParticipant);
		$('.outPerson').val(editdata.externalParticipant);
		$('.btnCost').html(editdata.totalFee);
	}
	//费用赋值
	function freedata(freedata){
		console.log(freedata.trafficFee)
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
			$('.reachInp8').val(freedata.advancePerson);
		}else{
			$('.payperson').hide();
		}
		
	}
	//
	
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
			})
			
		}
		//支持
		if($('.eventType').val()=='支持'){
			$('.addTime,.minusTime').hide();
			$('.timeVal').prop('disabled',true);
			if(opptypeid==1&&sessionStorage.server=='false'){
				$.getScript("js/editjournalpartner/editPzhichiInfo.js",function(){
					$('.editInfo').html(supportHtml());
					supportdata(jo.commonJson);
				})
			}else if(sessionStorage.server=='true'){
				$.getScript("js/editjournalserver/editsersupport.js",function(){
					$('.editInfo').html(supportHtml());
					supportdata(jo.commonJson);
				})
			}else{
				$.getScript("js/editjournal/editzhichiInfo.js",function(){
					$('.editInfo').html(supportHtml());
					supportdata(jo.commonJson);
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
					traindata(jo.commonJson);
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

//var businesnamesp='';
$(document).load(function(){
	for (var i=0;i<$('.bussname').length;i++) {
		console.log($('.bussname').eq(i).html())
	}	
})
