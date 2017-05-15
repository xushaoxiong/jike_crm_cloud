//添加关联学校
	$('.newlist').click(function(){
		$('.R-wap').load('user/SalePersonCreat.html',function(){
			breadnav(Fht,netht);
		});
		
	})
//列表查询
//	var paginatorJ={"businessOpportunityProcess":"","start":1,"pageSize":10};
//	//分页
//	$(document).ready(function() {
//	    getDataList(0, null);
//	});
//	var initFlag=true;
//	function getDataList(currPage, jg) {
//		paginatorJ.start=currPage+1;
//	    $ajax("post","businessOpportunity/queryBusinessOpportunity",paginatorJ,function succF(jo){
//	    	if (initFlag) {
//	    		//分页
//	    		$("#Pagination").pagination(jo.totalCount,{
//		            items_per_page :10,
//		            num_display_entries:3,
//		            num_edge_entries:3,
//		            callback : getDataList//回调函数
//	        	});
//	        	initFlag=false;
//	    	}
//	        
//	        $(".list-tr").html("");
//	        list(jo.businessOpportunityList,jo.assignSale);
//	        $('.totalNum').html('共'+jo.totalCount+'条');
//	        businesnamestrb();
//	      
//		},function errF(jo){
//			pub.Alt(jo.message,false);
//		})
//	
//	}
//	//列表内容
//	function list(List,assignSale){
//		var Html="";
//		$.each(List, function(i,item) {
//			Html+='<tr>';
//				Html+='<td>'+(i+1)+'</td>';
//				Html+='<td class="panterScolName">'+item.businessOpportunityName+'</td>';		
//				if((item.businessOpportunityName).length>10){
//					Html+='<td class="panterScoladdr cursorm"  data-toggle="tooltip" data-placement="bottom" title="'+item.businessOpportunityName+'">北京市朝阳区霄云路34号</td>';
//				}else{
//					Html+='<td class="panterScoladdr">北京市朝阳区霄云路34号</td>';		
//				}
//				Html+='<td>';
//					Html+='<button class="btn btn-primary edit" style="margin-right:8px;">编辑</button>';
//					Html+='<button class="btn btn-primary delBuiness" onclick="delBuiness($(this))">删除</button>';
//				Html+='</td>';
//			Html+='</tr>';
//		});
//		$('.list-tr').html(Html);
//		
//	}
//	//商机名称字数限制
//	function businesnamestrb(){
//		for (var i=0;i<$('.panterScolBusinesName').length;i++) {
//			var businessplit=$('.panterScolBusinesName').eq(i).html().substring(0,11);
//			if($('.panterScolBusinesName').eq(i).html().length>10){
//				$('.panterScolBusinesName').eq(i).html(businessplit+'...');
//			}
//			
//		}
//	}
//	//搜索
//	$('.searchBusiness').click(function(){
//		initFlag=true;
//		var OpportunityName=$.trim($('.managePerson').val());
//		var salesname=$.trim($('.BymanagePerson').val());
//		paginatorJ.businessOpportunityName=OpportunityName;
//		paginatorJ.userName=salesname;
//		paginatorJ.start=1;
//		getDataList(0,null);
//	})
	//删除
//	function delBuiness(_this){
//		$('#delbuinessModal').modal('toggle');
//		_this.parents('tr').remove();
//	}
//	$('.delConfirm').click(function(){
//		$("#delbuinessModal").modal("hide");
//		var delJ={};
//		delJ.businessOpportunityNum=businessOpportunityNum;
//		delJ.isCancellation=isCancellation;
//		$ajax('post','businessOpportunity/operationBusinessOpportunity',delJ,function succF(jo){
//			$('.opptNumb[numb="'+businessOpportunityNum+'"]').parent().remove();
//		},function errF(jo){
//			pub.Alt(jo.message,false)
//		})
//	})