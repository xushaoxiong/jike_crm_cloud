//新建商机
//$(function(){
	$('.newlist').click(function(){
		$('.R-wap').load('businesoppt/BusinessOpportunityCreate.html',function(){
			$('.hide-menu li').removeClass('menuCheck');
			$('.L-list-item').find('li[menuid=4]').addClass('menuCheck');
			var netht=$('.menuCheck').find('a').html();
			breadnav(Fht,netht);
		});
		
	})
//列表查询
	var paginatorJ={"businessOpportunityProcess":"","start":1,"pageSize":10};
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
//		$('.pageTotal span').html(jo.businessOpportunityList.length);
	}
	//列表内容
	function list(List,assignSale){
		var Html="";
		$.each(List, function(i,item) {
			Html+='<tr>';
			Html+='<td>'+(i+1)+'</td>';
			Html+='<td>'+item.createTime+'</td>';
			Html+='<td>'+item.createUserName+'</td>';
			if(item.businessOpportunityType=='0'){
				Html+='<td opptype="0">学校</td>';
			}else{
				Html+='<td opptype="1">合作伙伴</td>';
			}
			if((item.businessOpportunityName).length>10){
				Html+='<td class="opptNumb cursorm" data-toggle="tooltip" data-placement="bottom" title="'+item.businessOpportunityName+'" oppid="'+item.businessOpportunityId+'" numb="'+item.businessOpportunityNum+'"><a>'+item.businessOpportunityName+'</a></td>';	
			}else{
				Html+='<td class="opptNumb cursorm" oppid="'+item.businessOpportunityId+'" numb="'+item.businessOpportunityNum+'"><a>'+item.businessOpportunityName+'</a></td>';	
			}
			
			Html+='<td class="checkBusiness">'+item.businessOpportunityNum+'</td>';
			if(item.distributeUserName==undefined){
				Html+='<td class="salesuserName" userid=""><span class="username"></span>&nbsp;&nbsp;';
					Html+='<img src="img/busimg1.png" class="editserver cursor"/></td>';
				Html+='</td>';
			}else{
				Html+='<td class="salesuserName" userid="'+item.distributeUserId+'"><span class="username">'+item.distributeUserName+'</span>&nbsp;&nbsp;';
				if(assignSale){
					Html+='<img src="img/busimg1.png" class="editserver cursor"/>';
				Html+='</td>';
				}else{
					Html+='</td>';
				}
			}
			Html+='<td class="serviceName">';
			if(item.serviceList==""){
				if(item.businessOpportunityProcess=='信息收集'){
					Html+='<div class="serviceNamewap"></div>';
					Html+='</td>';
				}else{
					Html+='<div class="serviceNamewap"></div>';
					Html+='<img src="img/busimg2.png" class="plusOppt cursor" />';
					Html+='</td>';
				}
			}else{
				if(item.businessOpportunityProcess=='信息收集'){
					Html+='<div class="serviceNamewap">';
					$.each(item.serviceList, function(i2,item2) {
						Html+='<span userid="'+item2.userId+'">'+item2.userName+'/</span>';
					});
					Html+='</div>';
					Html+='</td>';
				}else{
					Html+='<div class="serviceNamewap">';
					$.each(item.serviceList, function(i2,item2) {
						Html+='<span userid="'+item2.userId+'">'+item2.userName+'/</span>';
					});
					Html+='</div>';
					if(assignSale){
						Html+='<img src="img/busimg2.png" class="plusOppt cursor" />';
					Html+='</td>';
					}else{
						if(item.assignService){
							Html+='<img src="img/busimg2.png" class="plusOppt cursor" />';
						Html+='</td>';
						}else{
							Html+='</td>';
						}
					}	
				}
				
			}					
			Html+='<td>'+item.businessOpportunityProcess+'</td>';
//			}
//			else{
//				Html+='<td class="salesuserName" userid="'+item.distributeUserId+'"><span class="username">'+item.distributeUserName+'</span>&nbsp;&nbsp;';
//					if(assignSale){
//						Html+='<img src="img/busimg1.png" class="editserver cursor"/>';
//					Html+='</td>';
//					}else{
//						Html+='</td>';
//					}
//				Html+='<td>';
//				if(item.serviceList==""){
//					Html+='<div class="serviceNamewap"></div>';
//					Html+='<img src="img/busimg2.png" class="plusOppt cursor" />';
//					Html+='</td>';
//				}else{
//					Html+='<div class="serviceNamewap">';
//					$.each(item.serviceList, function(i2,item2) {
//						Html+='<span userid="'+item2.userId+'">'+item2.userName+'/</span>';
//					});
//					Html+='</div>';;
//					if(assignSale){
//						Html+='<img src="img/busimg2.png" class="plusOppt cursor" />';
//					Html+='</td>';
//					}else{
//						if(item.assignService){
////							Html+='<span class="glyphicon glyphicon-plus plusOppt cursor"></span>';
//							Html+='<img src="img/busimg2.png" class="plusOppt cursor" />';
//						Html+='</td>';
//						}else{
//							Html+='</td>';
//						}
//					}
//				}	
//				Html+='<td>'+item.businessOpportunityProcess+'</td>';
//			}
			Html+='<td class="operBtn-wap">';
			if(item.authority==0){
				Html+='<button class="btn btn-primary edit">编辑</button>';
				Html+='<button class="btn btn-primary delBuiness">删除</button>';
				
				
			}else{
				Html+='<button class="btn" disabled="disabled">编辑</button>';
				Html+='<button class="btn" disabled="disabled">删除</button>';
				
				
			}
			if(item.closeAuthority==false){
				if(item.isClosed==0){
					Html+='<button class="btn" disabled="disabled">关闭</button>';
				}else{
					Html+='<button class="btn" disabled="disabled">重启</button>';
				}
				
			}else{
				if(item.isClosed==0){
					Html+='<button class="btn btn-primary closeBuiness" isclosedip="'+item.isClosed+'">关闭</button>';
				}else{
					Html+='<button class="btn btn-info closeBuiness" isclosedip="'+item.isClosed+'">重启</button>';
				}
			}
			Html+='</td>';
		Html+='</tr>';
		});
		$('.list-tr').html(Html);
		
	}

	//点击页码
	
	function clickPage(PJson){
		$ajax("post","businessOpportunity/queryBusinessOpportunity",PJson,function succF(jo){
		list(jo.businessOpportunityList,jo.assignSale);
		businesnamestrb();
		cartePage(jo);
	},function errF(){
		pub.Alt(jo.message,false);
	})
	}clickPage(paginatorJ)
	
	//商机名称字数限制
	function businesnamestrb(){
		for (var i=0;i<$('.opptNumb').length;i++) {
			var businessplit=$('.opptNumb a').eq(i).html().substring(0,11);
			if($('.opptNumb a').eq(i).html().length>10){
				$('.opptNumb a').eq(i).html(businessplit+'...');
				businesnameall=businessplit+'...';
			}
			
		}
		
	}
	
	//搜索
	$('.searchBusiness').click(function(){
		var OpportunityName=$.trim($('.OpportunityName').val());
		var startTime=$.trim($('#indate').val());
		var endTime=$.trim($('#enddate').val());
		var OpportunityProcess=$('.OpportunityProcess').find('option:selected').val();
		if(OpportunityProcess=="所有"){
			paginatorJ.businessOpportunityProcess="";
		}else{
			paginatorJ.businessOpportunityProcess=OpportunityProcess;
		}
		paginatorJ.businessOpportunityName=OpportunityName;
		paginatorJ.startTime=startTime;
		paginatorJ.endTime=endTime;
		paginatorJ.start=1;
		clickPage(paginatorJ);
	})

	//操作设置
	//点击操作时存入流水号
	$('.list-tr').on('click','.operBtn-wap .btn',function(){
		var BusinessOppNumb=$(this).parents('tr').find('.opptNumb').attr('numb');
		window.localStorage.opptNumb=BusinessOppNumb;
		
	})
	//编辑
	$('.list-tr').on('click','.operBtn-wap .edit',function(){
		$('.R-wap').load('businesoppt/editlist.html');
	})
	//服务人员列表
	function serverlist(sdata,servnumb){
		var saleHtml="";
		$.each(sdata, function(i,item) {
			saleHtml+='<tr class="cursorm">';
				saleHtml+='<td class="bussinessimg"></td>';
				saleHtml+='<td class="servname" userid="'+item.userId+'">'+item.name+'</td>';
				if(item.gender==1){
					saleHtml+='<td>男 </td>';
				}else{
					saleHtml+='<td>女 </td>';
				}
				saleHtml+='<td>'+item.email+'</td>';
			saleHtml+='</tr>';
		});
		$('.serverPeople').html(saleHtml);
		
	}
	//添加服务人员
	$('.list-tr').on('click','.plusOppt',function(){
		$("#opptModal").modal("toggle");
		var servnumb=$(this).parent().prev().prev().html();
		$("#opptModal").attr('servopptnum',servnumb);
		var servnamelistArry=[];
		$(this).parent().find('span[userid]').each(function(i){
			servnamelistArry.push($(this).attr('userid'))
		})	
		var serverlistJ={};
		$ajax('post','user/queryServiceList',serverlistJ,function succF(jo){
			serverlist(jo.userList);
			$.each(jo.userList, function(i1,item1) {
				$.each(servnamelistArry, function(i2,item2) {
					if(item1.userId==item2){
						$('.servname').eq(i1).prev().addClass('checked');
					}
					
				});
			})
			
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
	//选择服务人员
	$('.serverPeople').on('click','tr',function(){
		$(this).find('.bussinessimg').toggleClass('checked');
	})
	$('.opptConfirm').click(function(){
		$("#opptModal").modal("hide");
		var servuseridJ={};
		var userIdList=[];
		var businessOpportunityNum=$("#opptModal").attr('servopptnum')
		$('.serverPeople .checked').each(function(){
			var userid=$(this).next().attr('userid');
			userIdList.push(userid);
		})
		servuseridJ.userIdList=userIdList;
		servuseridJ.businessOpportunityNum=businessOpportunityNum;
		$ajax('post','businessOpportunity/distributionBoToService',servuseridJ,function succF(jo){
			var srevnamelist=[];
			$('.serverPeople .checked').each(function(){			
				var serveruserJ={};
				serveruserJ.name=$(this).next().html();
				serveruserJ.userid=$(this).next().attr('userid');
				srevnamelist.push(serveruserJ);
			})
			var serversp="";
			$.each(srevnamelist, function(i,item) {
				serversp+='<span userid="'+item.userid+'">'+item.name+'/</span>';
			});
			$('.opptNumb[numb="'+businessOpportunityNum+'"]').parent().find('.serviceNamewap').html(serversp);
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
		
	})

	//销售人员列表
	function saleslist(sdata,checkeduser,opptnum){
		var saleHtml="";
		$.each(sdata, function(i,item) {
			saleHtml+='<tr class="cursorm">';
				if(item.userId==checkeduser){
					saleHtml+='<td class="salesimg checked" opptnum="'+opptnum+'"></td>';
				}else{
					saleHtml+='<td class="salesimg" opptnum="'+opptnum+'"></td>';
				}
				saleHtml+='<td userid="'+item.userId+'">'+item.name+'</td>';
				if(item.gender==1){
					saleHtml+='<td>男 </td>';
				}else{
					saleHtml+='<td>女 </td>';
				}
				saleHtml+='<td>'+item.email+'</td>';
			saleHtml+='</tr>';
		});
		$('.salesPeople').html(saleHtml);
		
	}
	//修改销售人员
	var salesbusinesnum='';
	$('.list-tr').on('click','.editserver',function(){
		$("#editsaletModal").modal("toggle");
		var userid=$(this).parent().attr('userid');
		var opptnum=$(this).parent().prev().html();
		salesbusinesnum=opptnum;
		var saleslistJ={};
		$ajax('post','user/querySaleList',saleslistJ,function succF(jo){
			saleslist(jo.userList,userid,opptnum);
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
	$('.salesPeople').on('click','tr',function(){
		var thischeck=$(this).find('.salesimg');
		if(thischeck.hasClass('checked')){
			thischeck.removeClass('checked');
		}else{
			$('.salesimg').removeClass('checked');
			thischeck.addClass('checked');
		}
		
	})
	//确定选择销售人员
	$('.salesConfirm').click(function(){
		$("#editsaletModal").modal("hide");
		var salseJ={};
		var distributionId=$('.salesPeople .checked').next().attr('userid');
		var businessOpportunityNum=$('.salesPeople').find('.checked').attr('opptnum');
		$('.opptNumb[numb="'+businessOpportunityNum+'"]').parent().find('.salesuserName').attr('userid',distributionId);
		salseJ.distributionId=distributionId;
		salseJ.businessOpportunityNum=salesbusinesnum;
		$ajax('post','businessOpportunity/distributionBoToSale',salseJ,function succF(jo){
			
			if(distributionId==undefined){
				$('.opptNumb[numb="'+salesbusinesnum+'"]').parent().find('.salesuserName .username').html('');
				$('.opptNumb[numb="'+salesbusinesnum+'"]').parent().find('.salesuserName').attr('userid','');
			}else{
				$('.opptNumb[numb="'+salesbusinesnum+'"]').parent().find('.salesuserName .username').html($('.salesPeople').find('td[userid='+distributionId+']').html());
				$('.opptNumb[numb="'+salesbusinesnum+'"]').parent().find('.salesuserName').attr('userid',distributionId);
			}
			
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
//删除商机
$('.list-tr').on('click','.delBuiness',function(){
	$("#delbuinessModal").modal("toggle");
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	$('.businessNum').html(businessOpportunityNum);
	
})
$('.delConfirm').click(function(){
	$("#delbuinessModal").modal("hide");
	var delJ={};
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	var isCancellation=1;
	delJ.businessOpportunityNum=businessOpportunityNum;
	delJ.isCancellation=isCancellation;
	$ajax('post','businessOpportunity/operationBusinessOpportunity',delJ,function succF(jo){
//		clickPage(paginatorJ);
	$('.opptNumb[numb="'+businessOpportunityNum+'"]').parent().remove();
	},function errF(jo){
		pub.Alt(jo.message,false)
	})
})
//关闭商机
//isClosed=0关闭
//isClosed=1重启
var closeBtnPart = "";
var isClosedip=""
$('.list-tr').on('click','.closeBuiness',function(){
	closeBtnPart=$(this).parent();
	var businessOpportunityNum=$(this).parents('tr').find('.opptNumb').attr('numb');
	isClosedip=$(this).attr('isclosedip');
	console.log(isClosedip)
	if(isClosedip==0){
		$('#closebuinessModal .modal-header h4').html('关闭商机');
		$('.altcont').html('提醒：是否关闭商机（'+businessOpportunityNum+'），关闭后商机将处于关闭状态');
	}else{
		$('#closebuinessModal .modal-header h4').html('重启商机');
		$('.altcont').html('提醒：是否重启商机（'+businessOpportunityNum+'）');

	}
	$("#closebuinessModal").modal("toggle");
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');

	
	
})
$('.closeConfirm').click(function(){
	var colJ={};
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	colJ.businessOpportunityNum=businessOpportunityNum;
	if(isClosedip==0){
		isClosedip=1;
	}else{
		isClosedip=0;
	}
	colJ.isClosed=isClosedip;
	$ajax('post','businessOpportunity/operationBusinessOpportunity',colJ,function succF(jo){
		$("#closebuinessModal").modal("hide");
//		console.log(closeBtnPart.find('.closeBuiness').html())
		if(isClosedip== '0'){
			closeBtnPart.find('.closeBuiness').html('关闭');
			closeBtnPart.find('.closeBuiness').attr('isclosedip','0');
			closeBtnPart.find('.closeBuiness').addClass('btn-primary');
			closeBtnPart.find('.closeBuiness').removeClass('btn-info');
		}else{
			closeBtnPart.find('.closeBuiness').html('重启');
			closeBtnPart.find('.closeBuiness').attr('isclosedip','1');
			closeBtnPart.find('.closeBuiness').addClass('btn-info');
			closeBtnPart.find('.closeBuiness').removeClass('btn-primary');
		}
		console.log(closeBtnPart.find('.closeBuiness').attr('isclosedip'))		
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
})

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
//	$('#enddate').val(endtime);
//查询时间
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

//重置
$('.reset').click(function(){
	$('.OpportunityName').val('');
	$('#indate').val('');
	$('#enddate').val('');
	$('.OpportunityProcess').find('option[proid="1"]').prop('selected',true);
})
//商机预览
var opptIdJ={};
$('.list-tr').on('click','.opptNumb',function(){
	var pdata='';
	opptIdJ.businessOpportunityId=$(this).attr('oppid');
	var opptype=$(this).prev().attr('opptype');
	$ajax('post','businessOpportunity/queryBusinessOpportunityInfoById',opptIdJ,function succF(jo){
		if(opptype==0){
			$('.R-wap').load('businesoppt/scolpreviewlist.html',function(){
				previewdata(jo)
			})
		}else{
			$('.R-wap').load('businesoppt/panerpreviewlist.html',function(){
				previewdata(jo)
			})
		}
	
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
	

})


