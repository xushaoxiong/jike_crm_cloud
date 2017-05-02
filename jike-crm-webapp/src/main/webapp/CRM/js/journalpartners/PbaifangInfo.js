function vistInformation(){
	var vFhtml="";
	vFhtml+='<div class="container-fluid">';
		vFhtml+='	<div class="plan-wap">';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">所属拜访计划</label>';
				vFhtml+='	<div class="col-md-4 col-sm-5">';
					vFhtml+='	<span class="form-control visPlan"/></span>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">拜访人姓名</label>';
				vFhtml+='	<div class="col-md-3 col-sm-5">';
					vFhtml+='	<input type="text" value="" placeholder="" class="form-control visName"/>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">拜访人职位</label>';
				vFhtml+='	<div class="col-md-2 col-sm-2">';
					vFhtml+='	<select class="form-control contTitle" onchange="contTitle($(this))">';
						vFhtml+='	<option>校长</option>';
						vFhtml+='	<option>教学副校长</option>';
						vFhtml+='	<option>教务主任</option>';
						vFhtml+='	<option>信息主任</option>';
						vFhtml+='	<option>总务主任</option>';
						vFhtml+='	<option>学科组长</option>';
						vFhtml+='	<option>任课教师</option>';
						vFhtml+='	<option>学校职工</option>';
						vFhtml+='	<option>其它</option>';
					vFhtml+='	</select>';
//					vFhtml+='	<input type="text" value="" placeholder="" class="form-control visPosit"/>';
				vFhtml+='	</div>';
				vFhtml+='	<div class="col-md-2 col-sm-2" style="padding-left: 0;">';
					vFhtml+='	<input type="text" placeholder="" class="form-control otherCont" />';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">拜访人联系方式</label>';
				vFhtml+='	<div class="form-inline col-md-6 col-ms-10 contact-wap" style="padding:0;">';
					vFhtml+='	<input type="text" value="" placeholder="（座机）" class="form-control contactLine" />';
					vFhtml+='	<input type="text" value="" placeholder="（手机）" class="form-control contactPhone"/>';
					vFhtml+='	<input type="text" value="" placeholder="（邮箱）" class="form-control contactEmail"/>';
					vFhtml+='	<input type="text" value="" placeholder="（QQ）" class="form-control nomarg contactQq"/>';
					vFhtml+='	<input type="text" value="" placeholder="（微信）" class="form-control nomarg contactWatch"/>';
					vFhtml+='	<span>（至少填一项）</span>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">拜访地址</label>';
				vFhtml+='	<div id="city" class="form-inline col-md-6 col-ms-10" style="padding:0;">';
	            	vFhtml+='	<div class="col-md-2 col-sm-3">';
	            		vFhtml+='	<select class="prov form-control"></select>';
	            	vFhtml+='	</div>';
					vFhtml+='    <div class="col-md-2 col-sm-3">';
					    vFhtml+='	<select class="city form-control" disabled="disabled"></select>';  
					vFhtml+='    </div>';
					vFhtml+='     <div class="col-md-2 col-sm-3">';
					    vFhtml+=' 	<select class="dist form-control" disabled="disabled"></select> ';
					vFhtml+='     </div>';
					vFhtml+='    <div class="col-md-6 col-sm-6">';
					    vFhtml+='	<input type="type" class="form-control detailadrs"/>';
					vFhtml+='    </div>';    
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">采购预算</label>';
				vFhtml+='	<div class="col-md-3 col-sm-5">';
					vFhtml+='	<input type="text" value="" placeholder="" class="form-control budget"/>&nbsp;';
				vFhtml+='	</div>';
				vFhtml+='	<span style="padding-top: 6px;padding-left:5px;display: inline-block;">元</span>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">拜访目的</label>';
				vFhtml+='	<div class="col-md-2 col-sm-3">';
					vFhtml+='	<select class="form-control vispopuse">';
						vFhtml+='	<option decMarkid="1">认可</option>';
						vFhtml+='	<option decMarkid="2">有意向</option>';
						vFhtml+='	<option decMarkid="3">确定购买</option>';
						vFhtml+='	<option decMarkid="4">确定合作</option>';
					vFhtml+='	</select>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>拜访详情</label>';
				vFhtml+='	<div class="col-md-4 col-sm-6">';
					vFhtml+='	<textarea class="form-control purpTextare" ></textarea>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2"><span class="col">*</span>合作详情</label>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="row" style="margin-left:150px;">';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">合作方式</label>';
				vFhtml+='	<div class="col-md-4 col-sm-6">';
					vFhtml+='	<select class="form-control coptype">';
						vFhtml+='	<option>总代理三星</option>';
						vFhtml+='	<option>总代理二星</option>';
						vFhtml+='	<option>总代理一星</option>';
						vFhtml+='	<option>市代理三星</option>';
						vFhtml+='	<option>市代理二星</option>';
						vFhtml+='	<option>市代理一星</option>';
						vFhtml+='	<option>经销商</option>';
					vFhtml+='	</select>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">注册资金</label>';
				vFhtml+='	<div class="col-md-4 col-sm-6">';
					vFhtml+='	<input type="text" value="" placeholder="" class="form-control registCost" onkeyup="num(this)"/>';
				vFhtml+='	</div>';
				vFhtml+='	<span style="line-height:34px;padding-left:5px;">万元</span>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">从事教育行业案例</label>';
				vFhtml+='	<div class="col-md-4 col-sm-6">';
					vFhtml+='	<input type="text" value="" placeholder="" class="form-control edctCase"/>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">服务人员数量</label>';
				vFhtml+='	<div class="col-md-4 col-sm-6">';
					vFhtml+='	<input type="text" value="" placeholder="" class="form-control servNum"/>';
				vFhtml+='	</div>';
			vFhtml+='	</div>';
			vFhtml+='	<div class="form-group row">';
				vFhtml+='	<label class="col-md-1 col-sm-2">启动资金</label>';
				vFhtml+='	<div class="col-md-4 col-sm-6">';
					vFhtml+='	<input type="text" value="" placeholder="" class="form-control startCost"  onkeyup="num(this)"/>';
				vFhtml+='	</div>';
				vFhtml+='	<span style="line-height:34px;padding-left:5px;">万元</span>';
			vFhtml+='	</div>';
		vFhtml+='	</div>';
		vFhtml+='	</div>';
		vFhtml+='	<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			vFhtml+='	<button class="btn btn-primary visConfirm" style="margin-right: 15px;" onclick="visConfirm()">提交</button>';
//			vFhtml+='	<button class="btn btn-primary">重置</button>';
		vFhtml+='	</div>';
	vFhtml+='	</div>';
	return vFhtml;
}
function visitordata(jodata){
	$('.visPlan').html(jodata.visitPlanName);
	$('.visPlan').attr('visitPlanId',jodata.visitPlanId);
	$('.visName').val(jodata.visitorName);
	if(jodata.visitorTitleDetail==""){
		$('.otherCont').hide();
		$('.contTitle').val(jodata.visitorTitle).prop('selected',true);
	}else{
		$('.contTitle').val('其它').prop('selected',true);
		$('.otherCont').show();
		$('.otherCont').val(jodata.visitorTitleDetail);
	}
	$('.contactLine').val(jodata.visitorLandline);
	$('.contactPhone').val(jodata.visitorPhone);
	$('.contactEmail').val(jodata.visitorEmail);
	$('.contactQq').val(jodata.visitorQq);
	$('.contactWatch').val(jodata.visitorWechat);
	$(".FillInfo #city").citySelect({
	    prov: jodata.visitProvince,  
	    city: jodata.visitCity,  
	    dist: jodata.visitCountry,
	    nodata: "none"    
	}) ;
	$('.detailadrs').val(jodata.visitAddressDetail);
}
//收集拜访信息
	function VistInfo(boVisit){
		boVisit.visitPlanId=$('.visPlan').attr('visitPlanId');
		boVisit.visitPlanName=$('.visPlan').html();
		boVisit.visitorName=$.trim($('.visName').val());	
		boVisit.visitorTitle=$('.contTitle').find('option:selected').val();	
		boVisit.visitorTitleDetail=$.trim($('.otherCont').val());	
		boVisit.visitorTitleDetail=$.trim($('.visPosit').val());	
		boVisit.visitorLandline=$.trim($('.contactLine').val());
		boVisit.visitorPhone=$.trim($('.contactPhone').val());
		boVisit.visitorEmail=$.trim($('.visitorEmail').val());
		boVisit.visitorQq=$.trim($('.contactQq').val());
		boVisit.visitorWechat=$.trim($('.contactWatch').val());
		boVisit.visitProvince=$('.prov').val();
		boVisit.visitCity=$('.city').val();
		boVisit.visitCountry=$('.dist').val();
		boVisit.visitAddressDetail=$.trim($('.detailadrs').val());
		boVisit.procurementBudget=$.trim($('.budget').val());
		boVisit.decisionMakerAdvice=$('.vispopuse').find('option:selected').attr('decMarkid');
		boVisit.visitDetail=$.trim($('.purpTextare').val());
	}
	//收集合作详情信息
	function copratInfo(codata){
		codata.cooperationMode=$('.coptype').find('option:selected').val();	
		codata.registeredCapital=$.trim($('.registCost').val());	
		codata.educationCase=$.trim($('.edctCase').val());	
		codata.servicePersonnelQuantity=$.trim($('.servNum').val());	
		codata.startCapital=$.trim($('.startCost').val());	
		
	}
	//联系人职务其他选框
//		$('.FillInfo').on('change','.contTitle',function(){
	function contTitle(_this){
			$('.otherCont').html("");
			if(_this.find('option:selected').val()=="其它"){
				$('.otherCont').show();
			}else{
				$('.otherCont').hide();
			}
		}
//拜访提交
//	$('.FillInfo').on('click','.visConfirm',function(){
	function visConfirm(){
		var visitorLandline=$.trim($('.contactLine').val());
		var visitorPhone=$.trim($('.contactPhone').val());
		var visitorEmail=$.trim($('.visitorEmail').val());
		var visitorQq=$.trim($('.contactQq').val());
		var visitorWechat=$.trim($('.contactWatch').val());
		var visitDetail=$.trim($('.purpTextare').val());
		var contactTitle=$('.contTitle').find('option:selected').val();
		var registeredCapital=$.trim($('.registCost').val());	
		var educationCase=$.trim($('.edctCase').val());	
		var servicePersonnelQuantity=$.trim($('.servNum').val());	
		var startCapital=$.trim($('.startCost').val());	
		if(contactTitle=="其它" && $('.otherCont').val()==""){
			pub.Alt('请填写联系人职位',false);
			return false;
		}
		if(visitorLandline==""&&visitorPhone==""&&visitorEmail==""&&visitorQq==""&&visitorWechat==""){
			pub.Alt('至少填写一项联系方式',false);
			return false;
		}
		if(visitDetail==""){
			pub.Alt('请填写拜访详情',false);
			return false;
		}
		if(registeredCapital==""){
			pub.Alt('请填写注册资金',false);
			return false;
		}
		if(educationCase==""){
			pub.Alt('请填写从事教育行业案例',false);
			return false;
		}
		if(servicePersonnelQuantity==""){
			pub.Alt('请填写服务人员数量',false);
			return false;
		}
		if(startCapital==""){
			pub.Alt('请填写启动资金',false);
			return false;
		}
		$('.FillInfo').hide();
		$('#addJournal').show();
		$('.journaConfirm').prop('disabled',false);
		
	}
	var boVistPlanJ={};
	var boVisit={};
	var cooperationDetails={};
//	$('.journaConfirm').click(function(){
	function vistPanerjournaConfirm(){
		VistInfo(boVisit);
		logDateF(logData);
		totalDetailF(totalDetail);
		copratInfo(cooperationDetails);
		boVistPlanJ.logData=logData;
		boVistPlanJ.totalDetail=totalDetail
		boVistPlanJ.boVisit=boVisit;
		boVistPlanJ.boVisit.cooperationDetails=cooperationDetails;
		
		$ajax('post','businessOpportunityLog/addBOVisit',boVistPlanJ,function succF(jo){
				$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	}