function infoColle(){
	var html="";
	html+='<div class="container-fluid" id="messBox">';
		html+='	<div class="message-wap">';
			html+='	<p class="text-danger"><b>（备注：标有<img src="img/flag.png" style="width:18px;"/>的信息全部填写完成之后商机状态转化成信息收集完成）</b></p>';
				html+='<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">信息来源</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<select class="form-control scolInfo">';
					html+='	<option></option>';
						html+='	<option>学校官网</option>';
						html+='	<option>教育局网站</option>';
						html+='	<option>政府采购网站</option>';
						html+='	<option>花钱购买学校信息</option>';
						html+='	<option>现有客户转介绍</option>';
						html+='	<option>参加学校会议</option>';
						html+='	<option>教育研究院</option>';
						html+='	<option>教研员</option>';
						html+='	<option>培训机构</option>';
						html+='	<option>学校集团或联盟</option>';
						html+='	<option>学校周边人员</option>';
						html+='	<option>400客服</option>';
						html+='	<option>info邮箱</option>';
						html+='	<option>朋友介绍</option>';
						html+='	<option>参加展会</option>';
						html+='	<option>竞争对手</option>';
					html+='</select>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">学校规模</label>';
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
				html+='	<label class="col-md-1 col-sm-2 flagImg">学校等级</label>';
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
				html+='	<label class="col-md-1 col-sm-2 flagImg">学校性质</label>';
				html+='	<div class="col-md-3 col-sm-5 schoolProperty inpHeight">';
					html+='	<input type="radio"  name="optionsRadios" scpid="0">公立&nbsp;&nbsp;&nbsp;';
					html+='	<input type="radio"  name="optionsRadios" scpid="1">私立&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">学校类别</label>';
				html+='	<div class="col-md-3 col-sm-5 schoolType inpHeight">';
					html+='	<input type="checkbox" value="小学"/>小学&nbsp;&nbsp;&nbsp;';
					html+='	<input type="checkbox" value="初中" />初中&nbsp;&nbsp;&nbsp;';
					html+='	<input type="checkbox" value="高中"/>高中&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">联系人姓名</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<input type="text" value="" placeholder="" class="form-control contName"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">联系人职位</label>';
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
				html+='	<label class="col-md-1 col-sm-2 flagImg">联系人联系方式</label>';
				html+='	<div class="form-inline col-md-6 col-ms-10 contact-wap" style="padding:0;">';
					html+='	<input type="text" value="" placeholder="（座机）例：010-*******" class="form-control contactLandline" />';
					html+='	<input type="text" value="" placeholder="（手机）例：133********" class="form-control contactPhone"/>';
					html+='	<input type="text" value="" placeholder="（邮箱）" class="form-control contactEmail"/>';
					html+='	<input type="text" value="" placeholder="（QQ）" class="form-control nomarg contactQq"/>';
					html+='	<input type="text" value="" placeholder="（微信）" class="form-control nomarg contactWechat"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">决策人姓名</label>';
				html+='	<div class="col-md-3 col-sm-5">';
					html+='	<input type="text" value="" placeholder="" class="form-control decisionMakerName"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2 flagImg">决策人职位</label>';
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
				html+='	<div class="form-inline col-md-6 col-ms-10 contact-wap" style="padding:0;">';
					html+='	<input type="text" value="" placeholder="（座机）例：010-*******" class="form-control decisionMakerLandline" />';
					html+='	<input type="text" value="" placeholder="（手机）例：133********" class="form-control decisionMakerPhone"/>';
					html+='	<input type="text" value="" placeholder="（邮箱）" class="form-control decisionMakerEmail"/>';
					html+='	<input type="text" value="" placeholder="（QQ）" class="form-control nomarg decisionMakerQq"/>';
					html+='	<input type="text" value="" placeholder="（微信）" class="form-control nomarg decisionMakerWechat"/>';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">是否有意向</label>';
				html+='	<div class="col-md-3 col-sm-5  ifIntention inpHeight">';
					html+='	<input type="radio" name="intentionradio" ifintion="0" />是&nbsp;&nbsp;&nbsp;';
					html+='	<input type="radio" name="intentionradio" ifintion="1" />否&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
			html+='	<div class="form-group row">';
				html+='	<label class="col-md-1 col-sm-2">对产品是否感兴趣</label>';
				html+='	<div class="col-md-3 col-sm-5 ifInterested inpHeight">';
					html+='	<input type="radio" name="Interestradio" ifined="0" />是&nbsp;&nbsp;&nbsp;';
					html+='	<input type="radio" name="Interestradio" ifined="1" />否&nbsp;&nbsp;&nbsp;';
				html+='	</div>';
			html+='	</div>';
		html+='	</div>';
		html+='	<div class="mesbtn-group col-md-4 col-sm-6 text-center">';
			html+='	<button class="btn btn-primary mesConfirm" style="margin-right: 15px;">提交</button>';
//			html+='	<button class="btn btn-primary">重置</button>';
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
		if(bInfoColet.contactTitleDetail==""){
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
		if(bInfoColet.decisionMakerTitleDetail==""){
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
		$('.editInfo').on('change','.contTitle',function(){
			$('.otherCont').html("");
			if($(this).find('option:selected').val()=="其它"){
				$('.otherCont').show();
			}else{
				$('.otherCont').hide();
			}
		})
	//决策人职务其他选框
		$('.editInfo').on('change','.decisionMakerTitle',function(){
			$('.otherMaker').html("");
			if($(this).find('option:selected').val()=="其它"){
				$('.otherMaker').show();
			}else{
				$('.otherMaker').hide();
			}
		})
	//信息收集页面内容
//		var jourInJ={};
//		var commonJson={};
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
			
			
			return dataJ;
		}
		$('.editInfo').on('click','.mesConfirm',function(){	
			//收集信息必须至少填写一条才能提交判断
			var contactTitle=$('.contTitle').find('option:selected').val();
			var decisionMakerTitle=$('.decisionMakerTitle').find('option:selected').val();
			var scolInfo=$('.scolInfo').find('option:selected').val();
			var schoolScale=$('.scolPopleNumb').find('option:selected').val();
			var schoolLevel=$('.schoolLevel').find('option:selected').val();
			var schoolProperty=$('.schoolProperty').find('input[type=radio]:checked').attr('scpid');
			var scolTypeArry=[];
			$('.schoolType input[type="checkbox"]:checked').each(function(){ 
				scolTypeArry.push($(this).val()); 
			}); 
			var contName=$.trim($('.contName').val());
			var contactLandline=$.trim($('.contactLandline').val());
			var contactPhone=$.trim($('.contactPhone').val());
			var contactEmail=$.trim($('.contactEmail').val());
			var contactQq=$.trim($('.contactQq').val());
			var contactWechat=$.trim($('.contactWechat').val());
			var decisionMakerName=$.trim($('.decisionMakerName').val());
			var decisionMakerLandline=$.trim($('.decisionMakerLandline').val());
			var decisionMakerPhone=$.trim($('.decisionMakerPhone').val());
			var decisionMakerEmail=	$.trim($('.decisionMakerEmail').val());
			var decisionMakerQq=$.trim($('.decisionMakerQq').val());
			var decisionMakerWechat=$.trim($('.decisionMakerWechat').val());
			var ifIntention=$('.ifIntention').find('input[type=radio]:checked').attr('ifintion');
			var ifInterested=$('.ifInterested').find('input[type=radio]:checked').attr('ifined');
			if(contactTitle==""){
				$('.otherCont').hide();
			}
			if(decisionMakerTitle==""){
				$('.otherMaker').hide();
			}
			if(contactTitle=="其它" && $('.otherCont').val()==""){
				pub.Alt('请填写联系人职位',false);
				return false;
			}
			if(decisionMakerTitle=="其它" && $('.otherMaker').val()==""){
				pub.Alt('请填写决策人职位',false);
				return false;
			}
			if(scolInfo=="" && schoolScale=="" && schoolLevel=="" && schoolProperty==undefined && scolTypeArry.length==0 && contName=="" && contactTitle=="" && contactLandline=="" && contactPhone=="" && contactEmail=="" && contactQq=="" && contactWechat=="" && decisionMakerName=="" && decisionMakerTitle=="" && decisionMakerLandline=="" && decisionMakerPhone=="" && decisionMakerQq=="" && decisionMakerEmail=="" && decisionMakerWechat=="" && ifIntention==undefined && ifInterested==undefined){
				pub.Alt('至少填写一项内容',false);
				return false;
			}
			if(!Landline(contactLandline)&&contactLandline!=""){
				pub.Alt('请填写联系人正确座机号',false);
				return;
			}	

			if(!phoneCheck(contactPhone)&&contactPhone!=""){
				pub.Alt('请填写联系人正确手机号',false);
				return;
			}
			
			if(!isEmail(contactEmail)&&contactEmail!=''){
				pub.Alt('请填写联系人正确邮箱',false);
				return;
			}
			if(!QqCheck(contactQq)&&contactQq!=""){
				pub.Alt('请填写联系人正确QQ号',false);
				return;
			}
			if(!WechatCheck(contactWechat)&&contactWechat!=""){
				pub.Alt('请填写联系人正确微信号',false);
				return;
			}
			if(!Landline(decisionMakerLandline)&&decisionMakerLandline!=""){
				console.log(1)
				pub.Alt('请填写决策人正确座机号',false);
				return;
			}
			
			if(!phoneCheck(decisionMakerPhone)&&decisionMakerPhone!=''){
				pub.Alt('请填写决策人正确手机号',false);
				return;
			}
			if(!isEmail(decisionMakerEmail)&&decisionMakerEmail!=""){
				pub.Alt('请填写决策人正确邮箱号',false);
				return;
			}
			if(!QqCheck(decisionMakerQq)&&decisionMakerQq!=""){
				pub.Alt('请填写决策人正确QQ号',false);
				return;
			}
			if(!WechatCheck(decisionMakerWechat)&&decisionMakerWechat!=""){
				pub.Alt('请填写决策人正确微信号',false);
				return;
			}
			$('.editInfo').hide();
			$('#addJournal').show();
			
		})
	
	