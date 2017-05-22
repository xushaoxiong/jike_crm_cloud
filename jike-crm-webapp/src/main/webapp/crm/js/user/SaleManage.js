 //判断是不是商务（销售人员增删改查；商务只有查看）
    if(sessionStorage.business=='true'){
		$('.newlist').show();
	}else{
		$('.newlist').hide();
	}


//添加关联学校
	$('.newlist').click(function(){
		$('.R-wap').load('user/SalePersonCreat.html',function(){
			breadnav(Fht,netht);
		});
		
	})
 
//列表查询
var salesLaderJ={"leaderName":"","managedName":""};
function SalesLeader(){
	$ajax("post","user/querySalesLeader",salesLaderJ,function succF(jo){
	        $(".list-tr").html("");
	        list(jo.saleLeaderList);
	        managedUserstrb();
	      
		},function errF(jo){
			pub.Alt(jo.message,false);
	})
}SalesLeader()
	
//	//列表内容
	function list(List){
		var Html="";
		$.each(List, function(i,item) {
			Html+='<tr>';
				Html+='<td>'+(i+1)+'</td>';
				Html+='<td class="saleLaderName" leaderid="'+item.leaderId+'">'+item.leaderName+'</td>';	
				Html+='<td class="managedUserNameWap">';
					$.each(item.managedUserList, function(i2,item2) {
						Html+='<span manauserid="'+item2.managedUserId+'" graderid="'+item2.managedGender+'" email="'+item2.managedEmail+'">'+item2.managedUserName+'</span><i class="manauserline">/</i>'
				});
				Html+='<td>';
					if(sessionStorage.business=='true'){
						Html+='<button class="btn btn-primary edit" style="margin-right:8px;" onclick="editBuiness($(this))">编辑</button>';
						Html+='<button class="btn btn-primary delBuiness" onclick="delBuiness($(this))">删除</button>';
					}else{
						Html+='<button class="btn btn-primary" style="margin-right:8px;" disabled="disabled">编辑</button>';
						Html+='<button class="btn btn-primary delBuiness" disabled="disabled">删除</button>';
					}
					
				Html+='</td>';
			Html+='</tr>';
		});
		$('.list-tr').html(Html);
		
	}
	
//	//商机名称字数限制
	function managedUserstrb(){
		for (var i=0;i<$('.managedUserNameWap').length;i++) {
			var managedUserNamespArry=[];
			var managedUserNamespArry2=[];
			var managedUserNamespTitle=""
			var managedUserNamesp=$('.managedUserNameWap').eq(i).find('span');
			if(managedUserNamesp.length>3){
				for (var j=0;j<managedUserNamesp.length;j++) {
					var managedUserNamespJ={};
					managedUserNamespJ.name=managedUserNamesp.eq(j).html();
					managedUserNamespJ.manauserid=managedUserNamesp.eq(j).attr('manauserid');
					managedUserNamespArry.push(managedUserNamespJ);
					managedUserNamespTitle+=managedUserNamesp.eq(j).html()+('/');
				}
//				for (var j=0;j<managedUserNamesp.length;j++) {
//					
//				}
				var managedUserNamespTitlestring=managedUserNamespTitle.substring(0,managedUserNamespTitle.length-1);
				$('.managedUserNameWap').eq(i).addClass('cursorm');
				var manageuserHtml="";
				$.each(managedUserNamespArry, function(i2,item2) {
					if(i2>2){
						manageuserHtml+='<span manauserid="'+item2.manauserid+'" style="display:none;">'+item2.name+'</span><i class="manauserline" style="display:none;">/</i>';
					}else{
						manageuserHtml+='<span manauserid="'+item2.manauserid+'">'+item2.name+'</span><i class="manauserline">/</i>';
					}
					
					$('.managedUserNameWap').eq(i).html(manageuserHtml+'...');
				});

				$('.managedUserNameWap').eq(i).attr('data-toggle','tooltip');
				$('.managedUserNameWap').eq(i).attr('data-placement','bottom');
				$('.managedUserNameWap').eq(i).attr('title',managedUserNamespTitlestring);
			}
			
		}
	}
//	//搜索
	$('.searchBusiness').click(function(){
		var managePerson=$.trim($('.managePerson').val());
		var BymanagePerson=$.trim($('.BymanagePerson').val());
		salesLaderJ.leaderName=managePerson;
		salesLaderJ.managedName=BymanagePerson;
		SalesLeader();
	});
	//编辑
	function editBuiness(_this){
		var BymanagePArry=[];
		var leaderId=_this.parents('tr').find('.saleLaderName').attr('leaderid');
		var leaderhtml=_this.parents('tr').find('.saleLaderName').html();
		var managedUserNameWap=_this.parents('tr').find('.managedUserNameWap');
		managedUserNameWap.find('span').each(function(i,item){
			var BymanagePJ={};
			BymanagePJ.name=$(this).html();
			BymanagePJ.userid=$(this).attr('manauserid');
			BymanagePJ.graderid=$(this).attr('graderid');
			BymanagePJ.email=$(this).attr('email');
			BymanagePArry.push(BymanagePJ);
		})
		$('.R-wap').load('user/sealpersonEdit.html',function(){
			$('.EditmanagePerson').attr('leaderid',leaderId);
			$('.EditmanagePerson').val(leaderhtml);
			var editmanagehtml="";
			$.each(BymanagePArry, function(i2,item2) {
				editmanagehtml+='<i class="division">、</i><span byuserid="'+item2.userid+'" gardeid="'+item2.graderid+'" email="'+item2.email+'">'+item2.name+'</span>';
				
			});
			$('.EditBymanagePerson').html(editmanagehtml);
		})
		
	}
	//删除
	function delBuiness(_this){
		$('#delbuinessModal').modal('toggle');
		var leaderId=_this.parents('tr').find('.saleLaderName').attr('leaderid');
		$('.delConfirm').attr('leaderId',leaderId);
		$('.saleladerName').html($('.saleLaderName[leaderid="'+leaderId+'"]').html())
	}
	$('.delConfirm').click(function(){
		$("#delbuinessModal").modal("hide");
		var delJ={};
		var leaderId=$(this).attr('leaderId')
		delJ.leaderId=leaderId;
		$ajax('post','user/deleteSalesLeader',delJ,function succF(jo){
			$('.saleLaderName[leaderid="'+leaderId+'"]').parent().remove();
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})