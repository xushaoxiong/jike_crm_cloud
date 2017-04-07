//新建商机
//$(function(){
	$('.newlist').click(function(){
	window.location.href='newlist.html';
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
	function listwap(){
		$ajax("post","businessOpportunity/queryBusinessOpportunity",paginatorJ,function succF(jo){
			
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
		$('.pageTotal span').html(jo.businessOpportunityList.length);
		list(jo.businessOpportunityList);
	},function errF(){})
	}listwap();
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
				Html+='<button class="btn btn-primary" id="closeBuiness">关闭</button>';
			}else{
				Html+='<button class="btn" disabled="disabled">编辑</button>';
				Html+='<button class="btn" disabled="disabled">删除</button>';
				Html+='<button class="btn" disabled="disabled">关闭</button>';
			}
				
			Html+='</td>';
		Html+='</tr>';
		});
		$('.list-tr').html(Html);
	}
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
	//点击页码
	
	function clickPage(PJson){
		$ajax("post","businessOpportunity/queryBusinessOpportunity",PJson,function succF(jo){
		list(jo.businessOpportunityList);
	},function errF(){})
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
		listwap()
	})



//删除商机
$('.list-tr').on('click','.delBuiness',function(){
	$("#delbuinessModal").modal("toggle");
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	$('.businessNum').html(businessOpportunityNum);
	
})
$('.delConfirm').click(function(){
	var delJ={};
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	var isCancellation=1;
	delJ.businessOpportunityNum=businessOpportunityNum;
	delJ.isCancellation=isCancellation;
	$ajax('post','businessOpportunity/operationBusinessOpportunity',delJ,function succF(jo){
		$("#delbuinessModal").modal("hide");
		listwap();
	},function errF(jo){
		
	})
})
//关闭商机
$('.list-tr').on('click','#closeBuiness',function(){
	$("#closebuinessModal").modal("toggle");
	$('.closeConfirm').attr('isClosed','1')
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	$('.businessNum').html(businessOpportunityNum);
	var opptnumb=$(this).parents('tr').find('.opptNumb').attr('numb');
	$("#closebuinessModal").attr('opt',opptnumb);
})
$('.closeConfirm').click(function(){
	var colJ={};
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	var isClosed=$('.closeConfirm').attr('isClosed');
	colJ.businessOpportunityNum=businessOpportunityNum;
	colJ.isClosed=isClosed;
	var coloptNumb=$("#closebuinessModal").attr('opt');
	$ajax('post','businessOpportunity/operationBusinessOpportunity',colJ,function succF(jo){
		$("#closebuinessModal").modal("hide");
		if(isClosed==0){
			$('.opptNumb[numb="'+coloptNumb+'"]').parent().find('#reOpen').attr('id','closeBuiness');
			$('.opptNumb[numb="'+coloptNumb+'"]').parent().find('#closeBuiness').attr('class','btn btn-primary');
			$('#closeBuiness').html('关闭');
		}else{
			$('.opptNumb[numb="'+coloptNumb+'"]').parent().find('#closeBuiness').attr('id','reOpen');
			$('.opptNumb[numb="'+coloptNumb+'"]').parent().find('#reOpen').attr('class','btn btn-info');
			$('#reOpen').html('重启');
		}
				
	},function errF(jo){
		
	})
})
//重启
$('.list-tr').on('click','#reOpen',function(){
	$("#closebuinessModal").modal("toggle");
	$('.closeConfirm').attr('isClosed','0')
	var businessOpportunityNum=window.localStorage.getItem('opptNumb');
	$('.businessNum').html(businessOpportunityNum);
	var opptnumb=$(this).parents('tr').find('.opptNumb').attr('numb');
	$("#closebuinessModal").attr('opt',opptnumb);
})
	var myDate = new Date();
	var year=myDate.getFullYear();
	var month=myDate.getMonth()+1;
	var date=myDate.getDate();
	if(date<10){
		date='0'+myDate.getDate()
	}else{
		date=myDate.getDate()
	}
	var endtime=year+'-'+month+'-'+date;
	$('#enddate').val(endtime);
//查询时间
$('.searchBusiness').click(function(){
	
	var indate=$.trim($('#indate').val());
	var enddate=$.trim($('#enddate').val());
	if(indate>enddate){
		$('.alertTitle').html('开始时间不能大于结束时间');
		return;
	}else{
		$('.alertTitle').html('');
		
	}
})

//重置
$('.reset').click(function(){
	console.log(1)
	$('.OpportunityName').val('');
	$('#indate').val('');
	$('#enddate').val('');
	$('.OpportunityProcess').find('option[proid="1"]').prop('selected',true)
})

var H=$(window).height()-60;
$(".listContainer").mCustomScrollbar({
	set_height:H,
	scrollButtons:{enable:true},
	theme:"minimal-dark",
	scrollbarPosition:"relative",

});


//})
