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
//添加服务人员
//$('.plusOppt').click(function(){
//	$('.serviceTitle').html('');
//	$("#opptModal").modal("toggle");
//	
//})
//$('.opptConfirm').click(function(){
//	var serviceName=$('.service-wap').find('option:selected').val();
//	
//	if($('.serviceName').html().indexOf(serviceName)<0){
//		$('.serviceName').append('/'+serviceName);
//		$('#opptModal').modal('hide');
//	}else{
//		$('.serviceTitle').html('已添加！');
//	}
//	
//})
//删除服务人员
//$('.minusOppt').click(function(){
//	$("#delopptModal").modal("toggle");
//})

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
	function list(List){
		var Html="";
		$.each(List, function(i,item) {
			Html+='<tr>';
			Html+='<td>'+(i+1)+'</td>';
			Html+='<td>'+item.createTime+'</td>';
			Html+='<td>'+item.createUserName+'</td>';
			if(item.businessOpportunityType=='0'){
				Html+='<td>学校</td>';
			}else{
				Html+='<td>合作伙伴</td>';
			}
			
			Html+='<td class="opptNumb" numb="'+item.businessOpportunityNum+'">'+item.businessOpportunityName+'</td>';
			Html+='<td class="checkBusiness cursor">'+item.businessOpportunityNum+'</td>';
			if(item.distributeUserName==undefined){
				Html+='<td></td>';
				Html+='<td>'+item.businessOpportunityProcess+'</td>';
			}else{
				Html+='<td>'+item.distributeUserName+'</td>';
				Html+='<td>'+item.businessOpportunityProcess+'</td>';
			}
			Html+='<td class="operBtn-wap">';
			if(item.authority==0){
				Html+='<button class="btn btn-primary edit">编辑</button>';
				Html+='<button class="btn btn-primary delBuiness">删除</button>';
				if(item.isClosed==0){
					Html+='<button class="btn btn-primary closeBuiness" isClosedip="'+item.isClosed+'">关闭</button>';
				}else{
					Html+='<button class="btn btn-info closeBuiness" isClosedip="'+item.isClosed+'">重启</button>';
				}
				
			}else{
				Html+='<button class="btn" disabled="disabled">编辑</button>';
				Html+='<button class="btn" disabled="disabled">删除</button>';
				if(item.isClosed==0){
					Html+='<button class="btn" disabled="disabled">关闭</button>';
				}else{
					Html+='<button class="btn" disabled="disabled">重启</button>';
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
		list(jo.businessOpportunityList);
		cartePage(jo);
	},function errF(){
		pub.Alt(jo.message,false);
	})
	}clickPage(paginatorJ)
	
	
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
	console.log(closeBtnPart)
	var businessOpportunityNum=$(this).parents('tr').find('.opptNumb').attr('numb');
	console.log(businessOpportunityNum)
	isClosedip=$(this).attr('isClosedip');
	if(isClosedip==0){
		$('#closebuinessModal .modal-header h4').html('关闭商机');
		$('.altcont').html('提醒：是否关闭商机（'+businessOpportunityNum+'），关闭后商机将处于关闭状态')
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
			closeBtnPart.find('.closeBuiness').attr('isclosedip','1');
			closeBtnPart.find('.closeBuiness').addClass('btn-primary');
			closeBtnPart.find('.closeBuiness').removeClass('btn-info');
		}else{
			closeBtnPart.find('.closeBuiness').html('重启');
			closeBtnPart.find('.closeBuiness').attr('isclosedip','0');
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
	$('.OpportunityProcess').find('option[proid="1"]').prop('selected',true);
})



//})
