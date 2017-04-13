$('.delJournal').click(function(){
	$('#deljalModal').modal('toggle');
})
$('.R-wap').height($(window).height()-80);
$('.R-wap').css({'overflow-y':'scroll'})
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
				html+='<td>'+item.businessOpportunityName+'</td>';
				html+='<td>'+item.roleName+'</td>';
				html+='<td>'+item.createUserName+'</td>';
				html+='<td>'+item.eventType+'</td>';
				html+='<td>'+item.specificEvent+'</td>';
				html+='<td>'+item.workingHours+'</td>';
				html+='<td>';
					html+='<span class="serviceName">'+item.internalParticipant+'</span>';
				html+='</td>';
				html+='<td>';
					html+='<span class="serviceName">'+item.externalParticipant+'</span>';
				html+='</td>';
				html+='<td>'+item.totalFee+'</td>';
				html+='<td logId="'+item.logId+'">';
					if(item.authority==0){
						html+='<button class="btn btn-primary edit" style="margin-right:8px;">编辑</button>';
					}else{
						html+='<button class="btn btn-primary" disabled="disabled" style="margin-right:8px;">编辑</button>';
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
			jourItem(jo.businessOpportunityLogList)
			cartePage(jo);
	},function errF(){
		alert(jo.message);
	})
	}clickPage(paginatorJ)
	
	
	//搜索
	$('.searchBusiness').click(function(){
		var OpportunityName=$.trim($('.OpportunityName').val());
		var startTime=$.trim($('#indate').val());
		var endTime=$.trim($('#enddate').val());
		var OpportunityProcess=$('.OpportunityProcess').find('option:selected').val();
		if(OpportunityProcess=="所有"){
			paginatorJ.eventType="";
		}else{
			paginatorJ.eventType=OpportunityProcess;
		}
		paginatorJ.businessOpportunityName=OpportunityName;
		paginatorJ.startTime=startTime;
		paginatorJ.endTime=endTime;
		paginatorJ.start=1;
		clickPage(paginatorJ);
	})
//
//	//操作设置

	//编辑
	$('.jourlist').on('click','.edit',function(){
		var logIdJ={};
		var logid=$(this).parent().attr('logid');
		logIdJ.logId=logid;
		$ajax('post','businessOpportunityLog/queryBOLog',logIdJ,function succF(jo){
			$('.R-wap').load('journal/editlog.html');
			
		},function errF(jo){
			alert(jo.message)
		})
	})

	//编辑页面赋值
	function editdata(data){
		$('#indate').val(data.logDate);
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
	var indate=$.trim($('#indate').val());
	var enddate=$.trim($('#enddate').val());
	if(indate>enddate==""?endtime:enddate){
		$('.alertTitle').html('开始时间不能大于结束时间');
		return;
	}else{
		$('.alertTitle').html('');
		
	}
})
//新建日志按钮
$('.newlist').click(function(){
	$('.R-wap').load('journal/xinjianrizhi.html')
})
////重置
$('.reset').click(function(){
	$('.OpportunityName').val('');
	$('#indate').val('');
	$('#enddate').val('');
	$('.OpportunityProcess').find('option[proid="1"]').prop('selected',true);
})
