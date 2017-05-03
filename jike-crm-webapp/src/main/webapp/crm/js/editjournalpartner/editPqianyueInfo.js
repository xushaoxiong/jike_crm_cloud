function signHtml(){
	var signHtml="";
	signHtml+='<div class="container-fluid">';
		signHtml+='<div class="sign-wap">';
			signHtml+='<div class="form-group row">';
				signHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>签约时间</label>';
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<span class="form-control Signdate" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				signHtml+='</div>';
			signHtml+='</div>';
			signHtml+='<div class="form-group row ">';
				signHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>考核指标</label>';
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<textarea class="form-control Asseinde"></textarea>';
				signHtml+='</div>';
			signHtml+='</div>';
			signHtml+='<div class="form-group row ">';
				signHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>合同期限</label>';
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<span class="form-control startdate" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				signHtml+='</div>';
				signHtml+='<span class="pull-left" style="line-height:34px;padding:0 5px;">至</span>'
				signHtml+='<div class="col-md-2 col-sm-4">';
					signHtml+='<span class="form-control enddate" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				signHtml+='</div>';
			signHtml+='</div>';
			signHtml+='<div class="form-group row ">';
				signHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>代理区域</label>';
				signHtml+='<div class="col-md-6 col-sm-6">';
					signHtml+='<div class="area-wap">';
//						signHtml+='<div class="areaitem">';
//							signHtml+='<div class="assmentaddr col-md-9 col-sm-9 earelist" ty="0">';
//							    signHtml+='<div class="col-md-4 col-sm-4">';
//			            			signHtml+='<select class="prov form-control"></select>';
//				            	signHtml+='</div>';
//								signHtml+='<div class="col-md-4 col-sm-4">';
//								    signHtml+='<select class="city form-control" disabled="disabled"></select>';
//								signHtml+='</div>';
//							    signHtml+='<div class="col-md-4 col-sm-4">';
//								    signHtml+='<select class="dist form-control" disabled="disabled"></select>'; 
//								 signHtml+='</div>';   
//							signHtml+='</div>';
//							signHtml+='<button class="btn btn-primary addeare">添加代理区域</button>';
//						signHtml+='</div>';
					signHtml+='</div>';
				signHtml+='</div>';
			signHtml+='</div>';
		signHtml+='</div>';
		signHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			signHtml+='<button class="btn btn-primary SignConfirm" style="margin-right: 15px;">提交</button>';
//			signHtml+='<button class="btn btn-primary">重置</button>';
		signHtml+='</div>';
	signHtml+='</div>';
	return signHtml;
}
//信息赋值
function signdata(sdata){
	$('.Signdate').html(sdata.signDate);
	$('.Asseinde').val(sdata.assessmentIndex);
	$('.startdate').html(sdata.assessmentPeriodBeginTime);
	$('.enddate').html(sdata.assessmentPeriodEndTime);
	$.each(sdata.partnerAgentAreaList, function(i,item) {
		var earedataHtml="";
		
		earedataHtml+='<div class="areaitem">';
			earedataHtml+='<div class="col-md-9 col-sm-9 earelist" ty='+i+'>';
			    earedataHtml+='<div class="col-md-4 col-sm-4">';
					earedataHtml+='<select class="prov form-control"></select>';
		    	earedataHtml+='</div>';
				earedataHtml+='<div class="col-md-4 col-sm-4">';
				    earedataHtml+='<select class="city form-control"></select>';
				earedataHtml+='</div>';
			    earedataHtml+='<div class="col-md-4 col-sm-4">';
				    earedataHtml+='<select class="dist form-control"></select>'; 
				 earedataHtml+='</div>';   		      
			earedataHtml+='</div>';
			if(i==0){
				earedataHtml+='<button class="btn btn-primary addeare">添加代理区域</button>';
			}else{
				earedataHtml+='<button class="btn btn-primary deleare" style="maragin-top:15px;">删除此区域</button>';
			}
			
		earedataHtml+='</div>';
		$('.area-wap').append(earedataHtml);
		$(".earelist[ty="+i+"]").addcitySelect({  
		    prov: item.addressProvince,  
		    city: item.addressCity,  
		    dist: item.addressCounty,  
		    nodata: "none" 
		});
	});
}
//添加代理区域

$('.editInfo').on('click','.addeare',function(){
	var earaN=($('.areaitem').length)-1;
	earaN++;
	var eareHtml="";
	eareHtml+='<div class="areaitem" style="margin-bottom:15px">';
		eareHtml+='<div class="col-md-9 col-sm-9 earelist" ty='+earaN+'>';
		    eareHtml+='<div class="col-md-4 col-sm-4">';
				eareHtml+='<select class="prov form-control"></select>';
	    	eareHtml+='</div>';
			eareHtml+='<div class="col-md-4 col-sm-4">';
			    eareHtml+='<select class="city form-control" disabled="disabled"></select>';
			eareHtml+='</div>';
		    eareHtml+='<div class="col-md-4 col-sm-4">';
			    eareHtml+='<select class="dist form-control" disabled="disabled"></select>'; 
			 eareHtml+='</div>';   
		eareHtml+='</div>';
		eareHtml+='<button class="btn btn-primary deleare" style="margin-left:5px;">删除此区域</button>'; 
	eareHtml+='</div>';
	$('.area-wap').append(eareHtml);
	$(".earelist[ty="+earaN+"]").addcitySelect({  
	    prov: "所有",  
	    city: "所有",  
	    dist: "所有",  
	    nodata: "none" 
	});
})

//删除区域
$('.editInfo').on('click','.deleare',function(){
	$(this).parent().remove();
	$.each($('.earelist'), function(i) {
		$(this).attr('ty',i);
	});
})
//获取签约信息
function infodetail(boSign){
	var partnerAgentAreaList=[];
	boSign.signDate=$('.Signdate').html();
	boSign.assessmentIndex=$.trim($('.Asseinde').val());
	boSign.assessmentPeriodBeginTime=$('.startdate').html();
	boSign.assessmentPeriodEndTime=$('.enddate').html();
	var cityitem=$('.area-wap').find('.areaitem');
	$.each(cityitem,function(){
		var citylist={};
		citylist.addressProvince=$(this).find('.prov').val();
		citylist.addressCity=$(this).find('.city').val();
		citylist.addressCounty=$(this).find('.dist').val();
		partnerAgentAreaList.push(citylist);
		console.log(citylist);
	});
	boSign.partnerAgentAreaList=partnerAgentAreaList;
	
}
//签约详情提交
$('.editInfo').on('click','.SignConfirm',function(){
	var signtime=$('.Signdate').html();
	var assessmentIndex=$.trim($('.Asseinde').val());
	var assessmentPeriodBeginTime=$('.startdate').html();
	var assessmentPeriodEndTime=$('.enddate').html();
	if(signtime==''){
		pub.Alt('请填写签约时间',false);
		return false;
	}
	if(assessmentIndex==''){
		pub.Alt('请填写考核指标',false);
		return false;
	}
	if(assessmentPeriodBeginTime==''){
		pub.Alt('请填写合同期限开始时间',false);
		return false;
	}
	if(assessmentPeriodEndTime==''){
		pub.Alt('请填写合同期限结束时间',false);
		return false;
	}
	$('.editInfo').hide();
	$('#addJournal').show();
})
