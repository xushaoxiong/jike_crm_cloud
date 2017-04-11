
function visitPlan(){
	var vPhtml="";
	vPhtml+='<div class="container-fluid" id="palnBox">';
		vPhtml+='	<h4><span>新建列表>新建日志>拜访计划</span></h4>';
		vPhtml+='	<div class="plan-wap">';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2">计划名称</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<span class="form-control planName"/></span>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2">拜访人姓名</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<input type="text" value="" placeholder="默认为信息收集联系人姓名，可修改" class="form-control contactName"/>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2">拜访人职位</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<input type="text" value="" placeholder="默认为信息收集联系人职位，可修改" class="form-control contactPosit"/>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访人联系方式</label>';
				vPhtml+='	<div class="form-inline col-md-6 col-ms-10 contact-wap">';
					vPhtml+='	<input type="text" value="" placeholder="（座机）" class="form-control contactLine" />';
					vPhtml+='	<input type="text" value="" placeholder="（手机）" class="form-control contactPhone"/>';
					vPhtml+='	<input type="text" value="" placeholder="（邮箱）" class="form-control contactEmail"/>';
					vPhtml+='	<input type="text" value="" placeholder="（QQ）" class="form-control nomarg contactQq"/>';
					vPhtml+='	<input type="text" value="" placeholder="（微信）" class="form-control nomarg contactWechat"/>';
					vPhtml+='	<span>（至少填一项）</span>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访计划日期</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<span class="form-control Plandate" data-format="dd-mm-yyyy"/></span>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2">拜访地址</label>';
				vPhtml+='	<div id="city" class="form-inline col-md-6 col-ms-10">';
	            	vPhtml+='	<div class="col-md-2 col-sm-3">';
	            		vPhtml+='	<select class="prov form-control"></select>';
	            	vPhtml+='	</div>';
					vPhtml+='    <div class="col-md-2 col-sm-3">';
					    vPhtml+='	<select class="city form-control" disabled="disabled"></select>';
					vPhtml+='    </div>';
					    vPhtml+=' <div class="col-md-2 col-sm-3">';
					    vPhtml+=' 	<select class="dist form-control" disabled="disabled"></select>'; 
					 vPhtml+='    </div>';
					vPhtml+='    <div class="col-md-6 col-sm-6">';
					    vPhtml+='	<input type="type" class="form-control detailadrs"/>';
					vPhtml+='    </div>';   
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2">交通方式</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<input type="text" value="" placeholder="" class="form-control traffic"/>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访目的</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<select class="form-control VisPurp">';
						vPhtml+='	<option>找到决策人</option>';
						vPhtml+='	<option>达成合作意向</option>';
					vPhtml+='	</select>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2">预估费用</label>';
				vPhtml+='	<div class="col-md-3 col-sm-5">';
					vPhtml+='	<input type="text" value="" placeholder="" class="form-control planCost"/>&nbsp;';
				vPhtml+='	</div>';
				vPhtml+='	<span style="padding-top: 6px;display: inline-block;">元</span>';
			vPhtml+='	</div>
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>最小物料明细</label>';
				vPhtml+='	<div class="col-md-5 col-sm-7">';
					vPhtml+='	<ul class="list-unstyled list-inline bomlist">';
						vPhtml+='	<li>折页</li>';
						vPhtml+='	<li>电脑</li>';
						vPhtml+='	<li>二维码</li>';
						vPhtml+='	<li>演示侧</li>';
						vPhtml+='	<li>U盘</li>';
						vPhtml+='	<li>名片</li>';
						vPhtml+='	<li>演示账号</li>';
						vPhtml+='	<li>试用申请表</li>';
						vPhtml+='	<li>个人物品</li>';
						vPhtml+='	<li>极课内刊</li>';
						vPhtml+='	<li>报价单</li>';
					vPhtml+='	</ul>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
			vPhtml+='	<div class="form-group row">';
				vPhtml+='	<label class="col-md-2 col-sm-4">制定拜访计划原因</label>';
				vPhtml+='	<div class="col-md-4 col-sm-6">';
					vPhtml+='	<textarea class="form-control purpTextare" ></textarea>';
				vPhtml+='	</div>';
			vPhtml+='	</div>';
		vPhtml+='	</div>';
		vPhtml+='	<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			vPhtml+='	<button class="btn btn-primary planConfirm" style="margin-right: 15px;">提交</button>';
			vPhtml+='	<button class="btn btn-primary">重置</button>';
		vPhtml+='	</div>';
	vPhtml+='	</div>';
	return vPhtml;
}
	
	function VisitPlandata(jo){	
		$('.planName').html(jo.visitPlanName);
		$('.contactName').val(bInfoColet.contactName);
		if(bInfoColet.contactTitle=="其它"){
			$('.contactPosit').val(bInfoColet.contactTitleDetail);
		}else{
			$('.contactPosit').val(bInfoColet.contactTitle);
		}
		$('.contactLine').val(bInfoColet.contactLandline);
		$('.contactPhone').val(bInfoColet.contactPhone);
		$('.contactEmail').val(bInfoColet.contactEmail);
		$('.contactQq').val(bInfoColet.contactQq);
		$('.contactWechat').val(bInfoColet.contactWechat);
		$("#city").citySelect({
		    prov: jo.addressProvince,  
		    city: jo.addressCity,  
		    dist: jo.addressCounty,
		    nodata: "none"    
		})
		
	}
	//新建日志时间
		$('.FillInfo').on('click','.Plandate',function(){
			WdatePicker();
			
		})
	//物料明细
		$('.FillInfo').on('click','.bomlist li',function(){
			$(this).toggleClass('check');
		})
		
	function VistPlanInfo(boVisitPlan){
		boVisitPlan.visitPlanName=$('.planName').html();
		boVisitPlan.visitorName=$.trim($('.contactName').val());	
		boVisitPlan.visitorTitle=$.trim($('.contactPosit').val());	
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
		$('.bomlist li').each(function(){ 
			bomitemArry.push($(this).html()); 
		});
		boVisitPlan.tools=bomitemArry.join('#')
		boVisitPlan.visitPlanReason=$.trim($('.purpTextare').val());
		if(boVisitPlan.visitorLandline==""&& boVisitPlan.visitorPhone=="" && boVisitPlan.visitorEmail=="" && boVisitPlan.visitorQq=="" && boVisitPlan.visitorWechat=="" &&){
			pub.Alt('至少填写一项联系方式',false);
			retrun false;
		}
		if(boVisitPlan.visitPlanDate==""){
			pub.Alt('请填写拜访日期',false);
			retrun false;
		}
		if(boVisitPlan.tools==""){
			pub.Alt('请选择最小物料',false);
			retrun false;
		}
		return true;
	}
	
	$('.FillInfo').on('click','.planConfirm',function(){
		if(VistPlanInfo(boVisitPlan)){
			$('.FillInfo').hide();
			$('#addJournal').show();
			$('.journaConfirm').prop('disabled',false);
		}
		
	})
	
	var VistPlanJ={};
	var boVisitPlan={};
	$('.journaConfirm').click(function(){
		VistPlanInfo(boVisitPlan);
		logDateF(logData);
		totalDetailF(totalDetail);
		VistPlanJ.logData=logData;
		VistPlanJ.totalDetail=totalDetail
		VistPlanJ.boVisitPlan=boVisitPlan;
		
		$ajax('post','businessOpportunityLog/addBOLogInformationCollection',VistPlanJ,function succF(jo){
			console.log(jo)
			},function errF(jo){
				
			})
	})


	







