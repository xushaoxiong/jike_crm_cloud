function PurchHtml(){
	var PurchHtml="";
	PurchHtml+='<div class="container-fluid">';
		PurchHtml+='<div class="sign-wap">';
			PurchHtml+='<div class="form-group row">';
				PurchHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>硬件到货时间</label>';
				PurchHtml+='<div class="col-md-2 col-sm-4">';
					PurchHtml+='<span class="form-control arrivalTime" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				PurchHtml+='</div>';
			PurchHtml+='</div>';
			PurchHtml+='<div class="form-group row ">';
				PurchHtml+='<label class="col-md-1 col-sm-2"><span class="col">*</span>软件安装时间</label>';
				PurchHtml+='<div class="col-md-2 col-sm-4">';
					PurchHtml+='<span class="form-control installTime" data-format="dd-mm-yyyy" onclick="WdatePicker()"></span>';
				PurchHtml+='</div>';
			PurchHtml+='</div>';
		PurchHtml+='</div>';
		PurchHtml+='<div class="planbtn-group col-md-4 col-sm-6 text-center">';
			PurchHtml+='<button class="btn btn-primary purchConfirm" style="margin-right: 15px;">提交</button>';
//			PurchHtml+='<button class="btn btn-primary">重置</button>';
		PurchHtml+='</div>';
	PurchHtml+='</div>';
	return PurchHtml;
}
//获取采购信息
function PurchaseInfo(boPurchase){
	boPurchase.hardwareArrivalDate=$('.arrivalTime').html();
	boPurchase.softwareInstallationDate=$('.installTime').html();
	
}
//采购详情提交
$('.FillInfo').on('click','.purchConfirm',function(){
	var arrivalTime=$('.arrivalTime').html();
	var installTime=$('.installTime').html();
	if(arrivalTime==''){
		pub.Alt('请填写硬件到货时间',false);
		return false;
	}
	if(installTime==''){
		pub.Alt('请填写软件安装时间',false);
		return false;
	}
	$('.FillInfo').hide();
	$('#addJournal').show();
	$('.journaConfirm').prop('disabled',false);
})

//提交返回后台采购信息
	var PurchaseJ={};
	var boPurchase={};
	$('.journaConfirm').click(function(){
		PurchaseInfo(boPurchase);
		logDateF(logData);
		totalDetailF(totalDetail);
		PurchaseJ.logData=logData;
		PurchaseJ.totalDetail=totalDetail
		PurchaseJ.boPurchase=boPurchase;
		
		$ajax('post','businessOpportunityLog/addBOLogBoPurchase',PurchaseJ,function succF(jo){
			$('.R-wap').load('journal/journalList.html',function(){
				$('.hide-menu li').removeClass('menuCheck');
				$('.hide-menu li[menuid=7]').addClass('menuCheck');
			});
			},function errF(jo){
				pub.Alt(jo.message,false);
		})
	})