function visitPlan(){
	var vPhtml="";
	vPhtml+='<div class="container-fluid" id="palnBox">';
//		vPhtml+='<h4><span>新建列表>新建日志>拜访计划</span></h4>';
		vPhtml+='<div class="plan-wap">';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2">计划名称</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='<span class="form-control planName" style="word-break:break-all;height:auto;"></span>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2">拜访人姓名</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='<input type="text" value="" placeholder="默认为信息收集联系人姓名，可修改" class="form-control contactName"/>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2">拜访人职位</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='	<select class="form-control contTitle">';
//						vPhtml+='	<option>校长</option>';
//						vPhtml+='	<option>教学副校长</option>';
//						vPhtml+='	<option>教务主任</option>';
//						vPhtml+='	<option>信息主任</option>';
//						vPhtml+='	<option>总务主任</option>';
//						vPhtml+='	<option>学科组长</option>';
//						vPhtml+='	<option>任课教师</option>';
//						vPhtml+='	<option>学校职工</option>';
//						vPhtml+='	<option>其它</option>';
					vPhtml+='	</select>';
//					vPhtml+='<input type="text" value="" placeholder="默认为信息收集联系人职位，可修改" class="form-control contactPosit"/>';
				vPhtml+='</div>';
				vPhtml+='	<div class="col-md-2 col-sm-3" style="padding-left: 0;">';
					vPhtml+='	<input type="text" placeholder="" class="form-control otherCont" />';
				vPhtml+='	</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访人联系方式</label>';
				vPhtml+='<div class="form-inline col-md-6 col-ms-10 contact-wap">';
					vPhtml+='<input type="text" value="" placeholder="（座机）例：010-*******" class="form-control contactLine" />';
					vPhtml+='<input type="text" value="" placeholder="（手机）例：133********" class="form-control contactPhone"/>';
					vPhtml+='<input type="text" value="" placeholder="（邮箱）" class="form-control contactEmail"/>';
					vPhtml+='<input type="text" value="" placeholder="（QQ）" class="form-control contactQq"/>';
					vPhtml+='<input type="text" value="" placeholder="（微信）" class="form-control contactWechat"/>';
					vPhtml+='<span>（至少填一项）</span>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访计划日期</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='<span class="form-control Plandate" data-format="dd-mm-yyyy"/></span>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2">拜访地址</label>';
				vPhtml+='<div id="city" class="form-inline col-md-6 col-ms-10">';
	            	vPhtml+='<div class="col-md-2 col-sm-3">';
	            		vPhtml+='<select class="prov form-control"></select>';
	            	vPhtml+='</div>';
					vPhtml+='<div class="col-md-2 col-sm-3">';
					    vPhtml+='<select class="city form-control" disabled="disabled"></select>';
					vPhtml+='</div>';
					    vPhtml+='<div class="col-md-2 col-sm-3">';
					    vPhtml+='<select class="dist form-control" disabled="disabled"></select>'; 
					 vPhtml+='</div>';
					vPhtml+='<div class="col-md-6 col-sm-6">';
					    vPhtml+='<input type="type" class="form-control detailadrs"/>';
					vPhtml+='</div>';   
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2">交通方式</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='<input type="text" value="" placeholder="" class="form-control traffic"/>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访目的</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='<select class="form-control VisPurp">';
						vPhtml+='<option>找到决策人</option>';
						vPhtml+='<option>达成合作意向</option>';
					vPhtml+='</select>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2">预估费用</label>';
				vPhtml+='<div class="col-md-3 col-sm-5">';
					vPhtml+='<input type="text" value="" placeholder="" class="form-control planCost" onkeyup="num(this)"/>&nbsp;';
				vPhtml+='</div>';
				vPhtml+='<span style="padding-top: 6px;display: inline-block;">元</span>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>最小物料明细</label>';
				vPhtml+='<div class="col-md-5 col-sm-7">';
					vPhtml+='<ul class="list-unstyled list-inline bomlist">';
						vPhtml+='<li>折页</li>';
						vPhtml+='<li>电脑</li>';
						vPhtml+='<li>二维码</li>';
						vPhtml+='<li>演示侧</li>';
						vPhtml+='<li>U盘</li>';
						vPhtml+='<li>名片</li>';
						vPhtml+='<li>演示账号</li>';
						vPhtml+='<li>试用申请表</li>';
						vPhtml+='<li>个人物品</li>';
						vPhtml+='<li>极课内刊</li>';
						vPhtml+='<li>报价单</li>';
					vPhtml+='</ul>';
				vPhtml+='</div>';
			vPhtml+='</div>';
			vPhtml+='<div class="form-group row">';
				vPhtml+='<label class="col-md-2 col-sm-4">制定拜访计划原因</label>';
				vPhtml+='<div class="col-md-4 col-sm-6">';
					vPhtml+='<textarea class="form-control purpTextare" ></textarea>';
				vPhtml+='</div>';
			vPhtml+='</div>';
		vPhtml+='</div>';
		vPhtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			vPhtml+='<button class="btn btn-primary planConfirm" style="margin-right: 15px;">提交</button>';
//			vPhtml+='<button class="btn btn-primary">重置</button>';
		vPhtml+='</div>';
	vPhtml+='</div>';
	return vPhtml;
}
	
	function VisitPlandata(jo){	
		$('.planName').html(jo.visitPlanName);
		$('.contactName').val(jo.visitorName);	
		$('.Plandate').html(jo.visitPlanDate);
		if(jo.visitorTitleDetail==""){
			$('.otherCont').hide();
			$('.contTitle').val(jo.visitorTitle).prop('selected',true);
		}else{
			$('.contTitle').val('其它').prop('selected',true);
			$('.otherCont').show();
			$('.otherCont').val(jo.visitorTitleDetail);
		}
		$('.contactLine').val(jo.visitorLandline);
		$('.contactPhone').val(jo.visitorPhone);
		$('.contactEmail').val(jo.visitorEmail);
		$('.contactQq').val(jo.visitorQq);
		$('.contactWechat').val(jo.visitorWechat);
		$('.traffic').val(jo.trafficTool);
		$('.VisPurp').val(jo.visitObjective).find('option').prop('selected',true);
		$(".editInfo #city").citySelect({
		    prov: jo.visitProvince,  
		    city: jo.visitCity,  
		    dist: jo.visitCountry,
		    nodata: "none"    
		}) 
		$('.detailadrs').val(jo.visitAddressDetail);
		$('.purpTextare').val(jo.visitPlanReason);
		var tools=(jo.tools).split('#');
		for (var i=0;i<$('.bomlist li').length;i++) {
			for(var j=0;j<tools.length;j++){
				if($('.bomlist li').eq(i).html()==tools[j]){
					$('.bomlist li').eq(i).addClass('check');
				}
			}
		}
		if(jo.estimateFee==undefined){
			$('.planCost').val('');
		}else{
			$('.planCost').val(jo.estimateFee);
		}
		$('.planName').attr('planid',jo.visitPlanId);
		
	}
	//新建日志时间
		$('.editInfo').on('click','.Plandate',function(){
			WdatePicker();
			
		})
//物料明细
		$('.editInfo').on('click','.bomlist li',function(){
			$(this).toggleClass('check');
		})
		$('.bomlist li').click(function(){
			$(this).toggleClass('check');
		})
//联系人职务其他选框
		$('.editInfo').on('change','.contTitle',function(){
			$('.otherCont').html("");
			if($(this).find('option:selected').val()=="其它"){
				$('.otherCont').show();
			}else{
				$('.otherCont').hide();
			}
		})

		
	function infodetail(boVisitPlan){
		boVisitPlan.visitPlanName=$('.planName').html();
		boVisitPlan.visitPlanId=$('.planName').attr('planid');
		boVisitPlan.visitorName=$.trim($('.contactName').val());
		
		boVisitPlan.visitorTitle=$('.contTitle').find('option:selected').val();	
		if(boVisitPlan.visitorTitle=='其它'){
			boVisitPlan.visitorTitleDetail=$.trim($('.otherCont').val());
		}else{
			boVisitPlan.visitorTitleDetail='';
		}
		boVisitPlan.visitorLandline=$.trim($('.contactLine').val());
		boVisitPlan.visitorPhone=$.trim($('.contactPhone').val());
		boVisitPlan.visitorEmail=$.trim($('.visitorEmail').val());
		boVisitPlan.visitorQq=$.trim($('.contactQq').val());
		boVisitPlan.visitorWechat=$.trim($('.contactWechat').val());
		boVisitPlan.visitPlanDate=$('.Plandate').html();
		boVisitPlan.visitProvince=$('.prov').val();
		boVisitPlan.visitCity=$('.city').val();
		boVisitPlan.visitCountry=$('.dist').val();
		boVisitPlan.visitAddressDetail=$.trim($('.detailadrs').val());
		boVisitPlan.trafficTool=$.trim($('.traffic').val());
		boVisitPlan.visitObjective=$('.VisPurp').find('option:selected').val();
		boVisitPlan.estimateFee=$.trim($('.planCost').val());
		var bomitemArry=[];
		$('.bomlist .check').each(function(){ 
			bomitemArry.push($(this).html()); 
		});
		boVisitPlan.tools=bomitemArry.join('#');
		boVisitPlan.visitPlanReason=$.trim($('.purpTextare').val());
	}
//	

	$('.editInfo').on('click','.planConfirm',function(){
		var visitorLandline=$.trim($('.contactLine').val());
		var visitorPhone=$.trim($('.contactPhone').val());
		var visitorEmail=$.trim($('.visitorEmail').val());
		var visitorQq=$.trim($('.contactQq').val());
		var visitorWechat=$.trim($('.contactWechat').val());
		var visitPlanDate=$('.Plandate').html();
		var contactTitle=$('.contTitle').find('option:selected').val();
		if(contactTitle=="其它" && $('.otherCont').val()==""){
			pub.Alt('请填写联系人职位',false);
			return false;
		}
		if(visitorLandline==""&&visitorPhone==""&&visitorEmail==""&&visitorQq==""&&visitorWechat==""){
			pub.Alt('至少填写一项联系方式',false);
			return false;
		}
		if(visitPlanDate==""){
			pub.Alt('请填写拜访日期',false);
			return false;
		}
		
		var bomitemArry=[];
		$('.bomlist .check').each(function(){ 
			bomitemArry.push($(this).html()); 
		});
		if(bomitemArry.length==0){
			pub.Alt('请选择最小物料',false);
			return false;
		}
		$('.editInfo').hide();
		$('#addJournal').show();
		
	})

//学校伙伴职位列表
	function scolcontTile(){
		var contHtml='';
		contHtml+='<option>校长</option>';
		contHtml+='<option>教学副校长</option>';
		contHtml+='<option>教务主任</option>';
		contHtml+='<option>信息主任</option>';
		contHtml+='<option>总务主任</option>';
		contHtml+='<option>学科组长</option>';
		contHtml+='<option>任课教师</option>';
		contHtml+='<option>学校职工</option>';
		contHtml+='<option>其它</option>';
		$('.contTitle').html(contHtml);
	}
	//合作伙伴
	function pantercontTile(){
		var pcontHtml='';
		pcontHtml+='<option>总经理</option>';
		pcontHtml+='<option>经理</option>';
		pcontHtml+='<option>销售</option>';
		pcontHtml+='<option>其它</option>';
		$('.contTitle').html(pcontHtml);
	}






