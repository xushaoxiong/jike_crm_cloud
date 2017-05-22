//添加关联学校
	$('.newlist').click(function(){
		$('.R-wap').load('businesoppt/CpsSchool.html',function(){
			breadnav(Fht,netht);
		});
		
	})
//列表查询
	var paginatorJ={"businessOpportunityName":"","start":1,"pageSize":10};
	//分页
	$(document).ready(function() {
	    getDataList(0, null);
	    
	    //判断是不是商务（销售人员增删改查；商务只有查看）
	    if(sessionStorage.business=='true'){
    		$('.newlist').hide();
    	}else{
    		$('.newlist').show();
    	}
	});
	var initFlag=true;
	function getDataList(currPage, jg) {
		paginatorJ.start=currPage+1;
	    $ajax("post","businessOpportunity/queryCpsByPage",paginatorJ,function succF(jo){
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
	        list(jo.cpsArr,jo.ifBussiness);
	        $('.totalNum').html('共'+jo.totalCount+'条');
	        businesnamestrb();
	        panterScoladdrstrb();
			panterScolNamestrb();
	      
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	
	}
	//列表内容
	function list(List,assignSale){
		var Html="";
		$.each(List, function(i,item) {
			var addrLenfth=(item.addressProvince).length+(item.addressCity).length+(item.addressCountry).length+(item.addressDetail).length;
			Html+='<tr>';
				Html+='<td>'+(i+1)+'</td>';
				if((item.businessOpportunityName).length>10){
					Html+='<td class="panterScolBusinesName cursorm"  data-toggle="tooltip" data-placement="bottom" title="'+item.businessOpportunityName+'">'+item.businessOpportunityName+'</td>';		
				}else{
					Html+='<td class="panterScolBusinesName">'+item.businessOpportunityName+'</td>';		
				}
				if((item.schoolName).length>10){
					Html+='<td class="panterScolName cursorm"  data-toggle="tooltip" data-placement="bottom" title="'+item.businessOpportunityName+'" coopscolid="'+item.cooperativePartnerSchoolId+'" >'+item.businessOpportunityName+'</td>';		
				}else{
					Html+='<td class="panterScolName" coopscolid="'+item.cooperativePartnerSchoolId+'">'+item.schoolName+'</td>';		
				}
				if(addrLenfth>10){
					Html+='<td class="panterScoladdr cursorm" data-toggle="tooltip" data-placement="bottom" title="'+item.addressProvince+''+item.addressCity+''+item.addressCountry+''+item.addressDetail+'">'+item.addressProvince+''+item.addressCity+''+item.addressCountry+''+item.addressDetail+'</td>';
				}else{
					Html+='<td class="panterScoladdr">'+item.addressProvince+''+item.addressCity+''+item.addressCountry+''+item.addressDetail+'</td>';
				}
				
				Html+='<td>';
				if(assignSale==0){
					Html+='<button class="btn btn-primary check" onclick="viewPanterScol($(this))">查看</button>';
					Html+='<button class="btn" style="margin:0 8px;" disabled="disabled">编辑</button>';
					Html+='<button class="btn" disabled="disabled">删除</button>';
				}else{
					Html+='<button class="btn btn-primary check" onclick="viewPanterScol($(this))">查看</button>';
					Html+='<button class="btn btn-primary edit" style="margin:0 8px;" onclick="editPanterScol($(this))">编辑</button>';
					Html+='<button class="btn btn-primary delBuiness" onclick="delBuiness($(this))">删除</button>';
				}
				Html+='</td>';
			Html+='</tr>';
		});
		$('.list-tr').html(Html);
		
	}
	//商机名称字数限制
	function businesnamestrb(){
		for (var i=0;i<$('.panterScolBusinesName').length;i++) {
			var businessplit=$('.panterScolBusinesName').eq(i).html().substring(0,11);
			if($('.panterScolBusinesName').eq(i).html().length>10){
				$('.panterScolBusinesName').eq(i).html(businessplit+'...');
			}
			
		}
	}
	//关联学校名称字数限制
	function panterScolNamestrb(){
		for (var i=0;i<$('.panterScolName').length;i++) {
			var businessplit=$('.panterScolName').eq(i).html().substring(0,11);
			if($('.panterScolName').eq(i).html().length>10){
				$('.panterScolName').eq(i).html(businessplit+'...');
			}
		}	
	}
	//关联学校地址字数限制
	function panterScoladdrstrb(){
		for (var i=0;i<$('.panterScoladdr').length;i++) {
			var businessplit=$('.panterScoladdr').eq(i).html().substring(0,11);
			if($('.panterScoladdr').eq(i).html().length>10){
				$('.panterScoladdr').eq(i).html(businessplit+'...');
			}
		}
	}
	//搜索
	$('.searchBusiness').click(function(){
		initFlag=true;
		var OpportunityName=$.trim($('.OpportunityName').val());
		var schoolName=$.trim($('.associdScolName').val());
		paginatorJ.businessOpportunityName=OpportunityName;
		paginatorJ.schoolName=schoolName;
		paginatorJ.start=1;
		getDataList(0,null);
	})
	//查看
	function viewPanterScol(_this){
		var coopidJ={};
		var coopscolid=_this.parents('tr').find('.panterScolName').attr('coopscolid');
		coopidJ.cooperativePartnerSchoolId=coopscolid;
		$ajax('post','businessOpportunity/queryCpsById',coopidJ,function succF(jo){
			$('.R-wap').load('businesoppt/CpsSchoolView.html',function(){
				viewPanterScoldata(jo);
			})
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
		
	}
	//编辑
	function editPanterScol(_this){
		var editcoopidJ={};
		var editcoopscolid=_this.parents('tr').find('.panterScolName').attr('coopscolid');
		editcoopidJ.cooperativePartnerSchoolId=editcoopscolid;
		$ajax('post','businessOpportunity/queryCpsById',editcoopidJ,function succF(jo){
			$('.R-wap').load('businesoppt/CpsSchoolEdit.html',function(){
				$('.busScolName').attr('coopscolid',editcoopscolid);
				editPanterScoldata(jo);
			})
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	}
	
	//删除
	function delBuiness(_this){
		$('#delbuinessModal').modal('toggle');
		var coopscolid=_this.parents('tr').find('.panterScolName').attr('coopscolid');
		$('#delbuinessModal').attr('cooperid',coopscolid);
		var businessName=_this.parents('tr').find('.panterScolBusinesName').html();
		var businessNametitle=_this.parents('tr').find('.panterScolBusinesName').attr('title');
		if(businessNametitle==undefined){
			$('.businessName').html(businessName);
		}else{
			$('.businessName').html(businessNametitle);
		}
		
	}
	$('.delConfirm').click(function(){
		var coopscolid=$("#delbuinessModal").attr('cooperid');
		$("#delbuinessModal").modal("hide");
		var delJ={};
		delJ.cooperativePartnerSchoolId=coopscolid;
		$ajax('post','businessOpportunity/deleteCpsById',delJ,function succF(jo){
			$('.panterScolName[coopscolid="'+coopscolid+'"]').parent().remove();
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})