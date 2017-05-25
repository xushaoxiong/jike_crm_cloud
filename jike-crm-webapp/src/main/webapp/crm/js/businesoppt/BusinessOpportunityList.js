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
$(document).ready(function() {
    getDataList(0, null);
});
var initFlag=true;
function getDataList(currPage, jg) {
	paginatorJ.start=currPage+1;
    $ajax("post","businessOpportunity/queryBusinessOpportunity",paginatorJ,function succF(jo){
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
        
        $(".list-tr").html("");
        list(jo.businessOpportunityList,jo.assignSale);
        $('.totalNum').html('共'+jo.totalCount+'条');
        businesnamestrb();
		serviceNamestrb();
      
	},function errF(jo){
		pub.Alt(jo.message,false);
	})

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
						Html+='<span userid="'+item2.userId+'">'+item2.userName+'</span>';
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
	//商机名称字数限制
	function businesnamestrb(){
		for (var i=0;i<$('.opptNumb').length;i++) {
			var businessplit=$('.opptNumb a').eq(i).html().substring(0,10);
			if($('.opptNumb a').eq(i).html().length>11){
				$('.opptNumb a').eq(i).html(businessplit+'...');
				businesnameall=businessplit+'...';
			}
			
		}
		
	}
	//服务人员名字数限制
	function serviceNamestrb(){
		for (var i=0;i<$('.serviceNamewap').length;i++) {
			var servernameNamespTitle='';
			var servernameNamespArry=[];
			var servicesp=$('.serviceNamewap').eq(i).find('span');
			if(servicesp.length>3){
				for (var j=0;j<servicesp.length;j++) {
					var servernameNamespJ={};
					servernameNamespJ.name=servicesp.eq(j).html();
					servernameNamespJ.userid=servicesp.eq(j).attr('userid');
					servernameNamespArry.push(servernameNamespJ);
					servernameNamespTitle+=servicesp.eq(j).html()+('/');
				}
				var servernameNamespTitlestring=servernameNamespTitle.substring(0,servernameNamespTitle.length-1);
				$('.serviceNamewap').eq(i).addClass('cursorm');
				var manageuserHtml="";
				$.each(servernameNamespArry, function(i2,item2) {
					if(i2>2){
						manageuserHtml+='<span userid="'+item2.userid+'" style="display:none;">'+item2.name+'</span><i class="divisionline" style="display:none;">/</i>';
					}else{
						manageuserHtml+='<span userid="'+item2.userid+'">'+item2.name+'</span><i class="divisionline">/</i>';
					}
					$('.serviceNamewap').eq(i).html(manageuserHtml+'...');

				});

				$('.serviceNamewap').eq(i).attr('data-toggle','tooltip');
				$('.serviceNamewap').eq(i).attr('data-placement','bottom');
				$('.serviceNamewap').eq(i).attr('title',servernameNamespTitlestring);
			}
		}
	}
	//搜索
	$('.searchBusiness').click(function(){
		initFlag=true;
		var OpportunityName=$.trim($('.OpportunityName').val());
		var startTime=$.trim($('#indate').val());
		var endTime=$.trim($('#enddate').val());
		var OpportunityProcess=$('.OpportunityProcess').find('option:selected').val();
		var salesname=$.trim($('.salesname').val());
		if(OpportunityProcess=="所有"){
			paginatorJ.businessOpportunityProcess="";
		}else{
			paginatorJ.businessOpportunityProcess=OpportunityProcess;
		}
		paginatorJ.businessOpportunityName=OpportunityName;
		paginatorJ.startTime=startTime;
		paginatorJ.endTime=endTime;
		paginatorJ.userName=salesname;
		paginatorJ.start=1;
		getDataList(0,null);
	})

	//操作设置
	//点击操作时存入流水号
	$('.list-tr').on('click','.operBtn-wap .btn',function(){
		var BusinessOppNumb=$(this).parents('tr').find('.opptNumb').attr('numb');
		window.localStorage.opptNumb=BusinessOppNumb;
		
	})
	//编辑
	$('.list-tr').on('click','.operBtn-wap .edit',function(){
		$('.R-wap').hide();
		$('.threloadWap').show();
		var oppnumid=$(this).parents('tr').find('.opptNumb').attr('oppid');
		$('.threloadWap').load('businesoppt/editlist.html',function(){
			$('.businessName').attr('Numoppid',oppnumid);
		});
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
	var searchservnamelistArry=[];
	$('.list-tr').on('click','.plusOppt',function(){
		$("#opptModal").modal("toggle");
		$('.searchserverName').val('');
		$('#opptModal .Nosearch').html('').hide();	
		var servnumb=$(this).parent().prev().prev().html();
		$("#opptModal").attr('servopptnum',servnumb);
		var servnamelistArry=[];
		$(this).parent().find('span[userid]').each(function(i){
			servnamelistArry.push($(this).attr('userid'))
		})	
		searchservnamelistArry=servnamelistArry;
		var serverlistJ={};
		$ajax('post','user/queryServiceList',serverlistJ,function succF(jo){
			serverlist(jo.userList);
			$.each(servnamelistArry, function(i2,item2) {
				$('.servname[userid="'+item2+'"]').prev().addClass('checked');
				
			});
			
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
	//选择服务人员
	$('.serverPeople').on('click','tr',function(){
		$(this).find('.bussinessimg').toggleClass('checked');
	})
	//搜索服务人员
	$('.searchBtn2').click(function(){
		var searchServerNameJ={};
		var name=$.trim($('.searchserverName').val());
		searchServerNameJ.name=name;
		$ajax('post','user/queryServiceList',searchServerNameJ,function succF(jo){
			//无结果
			 if(jo.userList.length==0){
	        	$('.salesPeople').hide();
	        	$('#opptModal .Nosearch').show().html('查无结果!');
	        }else{
	        	$('.salesPeople').show();
	        	$('#opptModal .Nosearch').html('').hide();	
	        }
			serverlist(jo.userList);
			$.each(searchservnamelistArry, function(i2,item2) {
				$('.servname[userid="'+item2+'"]').prev().addClass('checked');
				
			});
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
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
				serversp+='<span userid="'+item.userid+'">'+item.name+'</span><i class="divisionline">/</i>';
			});
			$('.opptNumb[numb="'+businessOpportunityNum+'"]').parent().find('.serviceNamewap').html(serversp);
			serviceNamestrb();
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
		
	})

	//销售人员列表
	function saleslist(sdata,checkeduser,opptnum){
		var saleHtml="";
		$.each(sdata, function(i,item) {
			saleHtml+='<tr class="cursorm">';
//				if(item.userId==checkeduser){
//					saleHtml+='<td class="salesimg checked" opptnum="'+opptnum+'"></td>';
//				}else{
				saleHtml+='<td class="salesimg" ></td>';
//				}
				saleHtml+='<td userid="'+item.userId+'" class="saleName">'+item.name+'</td>';
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
	var searchuserid='';
	var searchopptnum='';
	var salesbusinesnum='';
	$('.list-tr').on('click','.editserver',function(){
		$("#editsaletModal").modal("toggle");
		$('.searchsaleName').val('');
		$('#editsaletModal .Nosearch').html('').hide();	
		var userid=$(this).parent().attr('userid');
		var opptnum=$(this).parent().prev().html();
		searchuserid=userid;
		searchopptnum=opptnum;
		salesbusinesnum=opptnum;
		var saleslistJ={};
		$ajax('post','user/querySaleList',saleslistJ,function succF(jo){
			saleslist(jo.userList);
			$('.saleName[userid='+userid+']').prev().addClass('checked');
			$('.saleName[userid='+userid+']').prev().attr('opptnum',opptnum);
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
	//搜索销售人员
	$('.searchBtn').click(function(){
		var searchSealNameJ={};
		var name=$.trim($('.searchsaleName').val());
		searchSealNameJ.name=name;
		$ajax('post','user/querySaleList',searchSealNameJ,function succF(jo){
			//无结果
			 if(jo.userList.length==0){
	        	$('.salesPeople').hide();
	        	$('#editsaletModal .Nosearch').show().html('查无结果!');
	        }else{
	        	$('.salesPeople').show();
	        	$('#editsaletModal .Nosearch').html('').hide();	
	        }
			saleslist(jo.userList);
			$('.saleName[userid='+searchuserid+']').prev().addClass('checked');
			$('.saleName[userid='+searchuserid+']').prev().attr('opptnum',salesbusinesnum);
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
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
	$('.salesname').val('');
	$('.OpportunityProcess').find('option[proid="1"]').prop('selected',true);
})
//商机预览
var opptIdJ={};
$('.list-tr').on('click','.opptNumb',function(){
	$('.R-wap').hide();
	$('.threloadWap').show();
	var pdata='';
	opptIdJ.businessOpportunityId=$(this).attr('oppid');
	var opptype=$(this).prev().attr('opptype');
	$ajax('post','businessOpportunity/queryBusinessOpportunityInfoById',opptIdJ,function succF(jo){
		if(opptype==0){
			
			$('.threloadWap').load('businesoppt/scolpreviewlist.html',function(){
				previewdata(jo)
			})
		}else{
			$('.threloadWap').load('businesoppt/panerpreviewlist.html',function(){
				previewdata(jo)
			})
		}
	
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
	

})


