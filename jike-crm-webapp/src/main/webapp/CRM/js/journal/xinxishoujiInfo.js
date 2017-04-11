function infoColle(){
	var html="";
	html+='<div class="container-fluid" id="messBox">';
		html+='	<h4><span>新建列表>新建日志>收集信息</span></h4>';
		html+='	<div class="message-wap">';
			html+='	<p class="text-danger">(备注：以下内容填写完成，转入信息收集完成状态：信息来源、学校规模、学校等级、学校性质、学校类别、联系人姓名、联系人职位、、联系人联系方式、决策人姓名、决策人职位)</p>';
				html+='<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">信息来源</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<select class="form-control scolInfo">';
						html+='	<option></option>';
						html+='	<option>学校官网</option>';
						html+='	<option>教育局网站</option>';
						html+='	<option>政府采购网站</option>';
						html+='	<option>花钱购买学校信息</option>';
						html+='	<option>现有客户转介绍</option>';
						html+='	<option>参加学校会议</option>';
					html+='</select>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">学校规模</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<select class="form-control scolPopleNumb">';
						html+='	<option></option>';
						html+='	<option>0-500</option>';
						html+='	<option>501-1000</option>';
						html+='	<option>1001-2000</option>';
						html+='	<option>2000以上</option>';
					html+='	</select>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">学校等级</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<select class="form-control schoolLevel">';
						html+='	<option></option>';
						html+='	<option>普通</option>';
						html+='	<option>区重点</option>';
						html+='	<option>市重点</option>';
						html+='	<option>省重点</option>';
					html+='	</select>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">学校性质</label>';
				html+='	<div class="col-md-3 col-sm-5 schoolProperty">';
					html+='	<input type="radio"  name="optionsRadios" scpid="0">公立&nbsp;&nbsp;&nbsp;';
					html+='	<input type="radio"  name="optionsRadios" scpid="1">私立&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">学校类别</label>';
				html+='	<div class="col-md-3 col-sm-5 schoolType">';
					html+='	<input type="checkbox" value="小学"/>小学&nbsp;&nbsp;&nbsp;';
					html+='	<input type="checkbox" value="初中" />初中&nbsp;&nbsp;&nbsp;';
					html+='	<input type="checkbox" value="高中"/>高中&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">联系人姓名</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<input type="text" value="" placeholder="" class="form-control contName"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">联系人职位</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<select class="form-control contTitle">';
						html+='	<option></option>';
						html+='	<option>校长</option>';
						html+='	<option>教学副校长</option>';
						html+='	<option>教务主任</option>';
						html+='	<option>信息主任</option>';
						html+='	<option>总务主任</option>';
						html+='	<option>学科组长</option>';
						html+='	<option>任课教师</option>';
						html+='	<option>学校职工</option>';
						html+='	<option>其它</option>';
					html+='	</select>';
				html+='	</div>';
				html+='	<div class="col-md-2 col-sm-3" style="padding-left: 0;">';
					html+='	<input type="text" placeholder="" class="form-control otherCont"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">联系人联系方式</label>';
				html+='	<div class="form-inline col-md-6 col-ms-10 contact-wap">';
					html+='	<input type="text" value="" placeholder="（座机）" class="form-control contactLandline" />';
					html+='	<input type="text" value="" placeholder="（手机）" class="form-control contactPhone"/>';
					html+='	<input type="text" value="" placeholder="（邮箱）" class="form-control contactEmail"/>';
					html+='	<input type="text" value="" placeholder="（QQ）" class="form-control nomarg contactQq"/>';
					html+='	<input type="text" value="" placeholder="（微信）" class="form-control nomarg contactWechat"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">决策人姓名</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<input type="text" value="" placeholder="" class="form-control decisionMakerName"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">决策人职位</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<select class="form-control decisionMakerTitle">';
						html+='	<option></option>';
						html+='	<option>校长</option>';
						html+='	<option>教学副校长</option>';
						html+='	<option>教务主任</option>';
						html+='	<option>信息主任</option>';
						html+='	<option>总务主任</option>';
						html+='	<option>学科组长</option>';
						html+='	<option>任课教师</option>';
						html+='	<option>学校职工</option>';
						html+='	<option>其它</option>';
					html+='	</select>';
				html+='	</div>';
				html+='	<div class="col-md-2 col-sm-3" style="padding-left: 0;">';
					html+='	<input type="text" placeholder="" class="form-control otherMaker" />';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">决策人联系方式</label>';
				html+='	<div class="form-inline col-md-6 col-ms-10 contact-wap">';
					html+='	<input type="text" value="" placeholder="（座机）" class="form-control decisionMakerLandline" />';
					html+='	<input type="text" value="" placeholder="（手机）" class="form-control decisionMakerPhone"/>';
					html+='	<input type="text" value="" placeholder="（邮箱）" class="form-control decisionMakerEmail"/>';
					html+='	<input type="text" value="" placeholder="（QQ）" class="form-control nomarg decisionMakerQq"/>';
					html+='	<input type="text" value="" placeholder="（微信）" class="form-control nomarg decisionMakerWechat"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">是否有意向</label>';
				html+='	<div class="col-md-3 col-sm-5  ifIntention">';
					html+='	<input type="radio" name="intentionradio" ifintion="0" />是&nbsp;&nbsp;&nbsp;';
					html+='	<input type="radio" name="intentionradio" ifintion="1" />否&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">对产品是否感兴趣</label>';
				html+='	<div class="col-md-3 col-sm-5 ifInterested">';
					html+='	<input type="radio" name="Interestradio" ifined="0" />是&nbsp;&nbsp;&nbsp;';
					html+='	<input type="radio" name="Interestradio" ifined="1" />否&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
		html+='	</div>';
		html+='	<div class="mesbtn-group col-md-4 col-sm-6 text-center">';
			html+='	<button class="btn btn-primary mesConfirm" style="margin-right: 15px;">提交</button>';
			html+='	<button class="btn btn-primary">重置</button>';
		html+='	</div>';
	html+='	</div>';
	return html;
}
function infodata(bInfoColet){
	$('.scolInfo').val(bInfoColet.informationSources).prop('selected',true);
		$('.scolPopleNumb').val(bInfoColet.schoolScale).prop('selected',true);
		$('.schoolLevel').val(bInfoColet.schoolLevel).prop('selected',true);
		$('.schoolProperty').find('input[type=radio][scpid="'+bInfoColet.schoolProperty+'"]').prop('checked',true);
		var schoolType=bInfoColet.schoolType.split('#');
		$.each(schoolType, function(i,item) {
			$('.schoolType').find('input[type=checkbox][value="'+item+'"]').prop('checked',true);
		});
		$('.contName').val(bInfoColet.contactName);
		if(bInfoColet.contactTitleDetail==undefined){
			$('.otherCont').hide();
			$('.contTitle').val(bInfoColet.contactTitle).prop('selected',true);
		}else{
			$('.contTitle').val('其它').prop('selected',true);
			$('.otherCont').show();
			$('.otherCont').val(bInfoColet.contactTitleDetail);
		}
		$('.contactLandline').val(bInfoColet.contactLandline);
		$('.contactPhone').val(bInfoColet.contactPhone);
		$('.contactEmail').val(bInfoColet.contactEmail);
		$('.contactQq').val(bInfoColet.contactQq);
		$('.contactWechat').val(bInfoColet.contactWechat);
		$('.decisionMakerName').val(bInfoColet.decisionMakerName);
		if(bInfoColet.decisionMakerTitleDetail==undefined){
			$('.otherMaker').hide();
			$('.decisionMakerTitle').val(bInfoColet.decisionMakerTitle).prop('selected',true);
		}else{
			$('.decisionMakerTitle').val('其它').prop('selected',true);
			$('.otherMaker').show();
			$('.otherMaker').val(bInfoColet.decisionMakerTitleDetail);
		}
		$('.decisionMakerLandline').val(bInfoColet.decisionMakerLandline);
		$('.decisionMakerPhone').val(bInfoColet.decisionMakerPhone);
		$('.decisionMakerEmail').val(bInfoColet.decisionMakerEmail);
		$('.decisionMakerQq').val(bInfoColet.decisionMakerQq);
		$('.decisionMakerWechat').val(bInfoColet.decisionMakerWechat);
		$('.ifIntention').find('input[type=radio][ifintion="'+bInfoColet.ifIntention+'"]').prop('checked',true);
		$('.ifInterested').find('input[type=radio][ifined="'+bInfoColet.ifInterested+'"]').prop('checked',true);
}
	//联系人职务其他选框
		$('.FillInfo').on('change','.contTitle',function(){
			$('.otherCont').html("");
			if($(this).find('option:selected').val()=="其它"){
				$('.otherCont').show();
			}else{
				$('.otherCont').hide();
			}
		})
	//决策人职务其他选框
		$('.FillInfo').on('change','.decisionMakerTitle',function(){
			$('.otherMaker').html("");
			if($(this).find('option:selected').val()=="其它"){
				$('.otherMaker').show();
			}else{
				$('.otherMaker').hide();
			}
		})
	//信息收集页面内容
		var jourInJ={};
		var boInformationCollect={};
		function infodetail(dataJ){
			dataJ.informationSources=$('.scolInfo').find('option:selected').val();
			dataJ.schoolScale=$('.scolPopleNumb').find('option:selected').val();
			dataJ.schoolLevel=$('.schoolLevel').find('option:selected').val();
			dataJ.schoolProperty=$('.schoolProperty').find('input[type=radio]:checked').attr('scpid');
			var scolTypeArry=[];
			$('.schoolType input[type="checkbox"]:checked').each(function(){ 
				scolTypeArry.push($(this).val()); 
			}); 
			dataJ.schoolType= scolTypeArry.join('#');
			dataJ.contactName=$.trim($('.contName').val());
			if($('.otherCont').show()){
					dataJ.contactTitle=$('.contTitle').find('option:selected').val();
					dataJ.contactTitleDetail=$.trim($('.otherCont').val());
				}else{
					dataJ.contactTitle=$('.contTitle').find('option:selected').val();
					dataJ.contactTitleDetail=$('.otherCont').val("");
				}
			dataJ.contactLandline=$.trim($('.contactLandline').val());
			dataJ.contactPhone=$.trim($('.contactPhone').val());
			dataJ.contactEmail=$.trim($('.contactEmail').val());
			dataJ.contactQq=$.trim($('.contactQq').val());
			dataJ.contactWechat=$.trim($('.contactWechat').val());
			
			dataJ.decisionMakerName=$.trim($('.decisionMakerName').val());
			if($('.otherMaker').show()){
					dataJ.decisionMakerTitle=$('.decisionMakerTitle').find('option:selected').val();
					dataJ.decisionMakerTitleDetail=$.trim($('.otherMaker').val());
				}else{
					dataJ.decisionMakerTitle=$('.decisionMakerTitle').find('option:selected').val();
					dataJ.decisionMakerTitleDetail=$('.otherMaker').val("");
				}
			dataJ.decisionMakerLandline=$.trim($('.decisionMakerLandline').val());
			dataJ.decisionMakerPhone=$.trim($('.decisionMakerPhone').val());
			dataJ.decisionMakerEmail=	$.trim($('.decisionMakerEmail').val());
			dataJ.decisionMakerQq=$.trim($('.decisionMakerQq').val());
			dataJ.decisionMakerWechat=$.trim($('.decisionMakerWechat').val());
			dataJ.ifIntention=$('.ifIntention').find('input[type=radio]:checked').attr('ifintion');
			dataJ.ifInterested=$('.ifInterested').find('input[type=radio]:checked').attr('ifined');
			//收集信息必须至少填写一条才能提交判断
			if(dataJ.contactTitle==""){
				$('.otherCont').hide();
			}
			if(dataJ.decisionMakerTitle==""){
				$('.otherMaker').hide();
			}
			if(dataJ.contactTitle=="其它" && $('.otherCont').val()==""){
				pub.Alt('请填写联系人职位',false);
				return false;
			}
			if(dataJ.decisionMakerTitle=="其它" && $('.otherMaker').val()==""){
				pub.Alt('请填写决策人职位',false);
				return false;
			}
			if(dataJ.scolInfo=="" && dataJ.schoolScale=="" && dataJ.schoolLevel=="" && dataJ.schoolProperty==undefined && dataJ.schoolType=="" && dataJ.contName=="" && dataJ.contactTitle=="" && dataJ.contactLandline=="" && dataJ.contactPhone=="" && dataJ.contactEmail=="" && dataJ.contactQq=="" && dataJ.contactWechat=="" && dataJ.decisionMakerName=="" && dataJ.decisionMakerTitle=="" && dataJ.decisionMakerLandline=="" && dataJ.decisionMakerPhone=="" && dataJ.decisionMakerQq=="" && dataJ.decisionMakerEmail=="" && dataJ.decisionMakerWechat=="" && dataJ.ifIntention==undefined && dataJ.ifInterested==undefined){
				pub.Alt('至少填写一项内容',false);
				return false;
			}
			return true;
			return dataJ;
		}
		
		$('.FillInfo').on('click','.mesConfirm',function(){	
			if(infodetail(boInformationCollect)){
				$('.FillInfo').hide();
				$('#addJournal').show();
				$('.journaConfirm').prop('disabled',false);
			}
			
		})
	
	//新建日志提交返回后台
	$('.journaConfirm').click(function(){
		infodetail(boInformationCollect);
		logDateF(logData);
		totalDetailF(totalDetail);
		jourInJ.logData=logData;
		jourInJ.totalDetail=totalDetail
		jourInJ.boInformationCollect=boInformationCollect;
		
		$ajax('post','businessOpportunityLog/addBOLogInformationCollection',jourInJ,function succF(jo){
			console.log(jo)
		},function errF(jo){
			
		})
	})