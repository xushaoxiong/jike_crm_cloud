//选择被管理者
var addState=true;
$('.EditBymanagePerson').click(function(){
	var uid=$('.EditmanagePerson').attr('leaderid');
	var BySaleidArry=[];
	$('.EditBymanagePerson span').each(function(i,item){
		BySaleidArry.push($(this).attr('byuserid'));
	})
	$('.BymanagePersonwap').modal('toggle');
	$ajax('post','user/queryNoBeManegeSales','{}',function succF(jo){
		BymanagePersonList(jo.userList,uid);
		addState=false;
		$.each(BySaleidArry, function(i3,item3) {
			$('.BymanagePersonItem td[userid='+item3+']').prev().addClass('checkedimg');
		});
	},function errF(jo){
		pub.Alt(jo.message,false);
	})
})

//被管理者列表
	function BymanagePersonList(Mdata,uid){
		var Mhtml='';
		$.each(Mdata, function(i,item) {
			if(item.userId==uid){
				Mhtml+='<tr onclick="checkByManPer($(this))" style="display:none;">';
				Mhtml+='</tr>';
			}else{
				Mhtml+='<tr onclick="checkByManPer($(this))" class="BymanageTrList">';
					Mhtml+='<td class="checkimg"></td>';
					Mhtml+='<td userid="'+item.userId+'">'+item.name+'</td>';
					if(item.gender==1){
						Mhtml+='<td>男</td>';
					}else{
						Mhtml+='<td>女</td>';
					}
					Mhtml+='<td>'+item.email+'</td>';
				Mhtml+='</tr>';
			}	
		});
		if(addState){
			addManage();
			$('.BymanagePersonItem').append(Mhtml);
		}else{
			$('.BymanageTrList').remove();
			$('.BymanagePersonItem').append(Mhtml);
		}
		
		
	}
//选中的被管理者	
function addManage(){
	var html="";
	$.each($('.EditBymanagePerson span'), function() {	
		var userId=$(this).attr('byuserid');
		var gardeid=$(this).attr('gardeid');
		var email=$(this).attr('email');
		var name=$(this).html();
		html+='<tr onclick="checkByManPer($(this))">';
			html+='<td class="checkimg"></td>';
			html+='<td userid="'+userId+'">'+name+'</td>';
			if(gardeid==1){
				html+='<td>男</td>';
			}else{
				html+='<td>女</td>';
			}
			html+='<td>'+email+'</td>';
		html+='</tr>';
		$('.BymanagePersonItem').html(html);
		
	});
}
	
//选择被管理人员
	function checkByManPer(_this){
		_this.find('.checkimg').toggleClass('checkedimg');

	}
	$('.BymanagePersonConfirm').click(function(){
		$('.BymanagePersonwap').modal('hide');
		var BymanagePArry=[];
		$('.BymanagePersonItem .checkedimg').each(function(i,item){
			var BymanagePJ={};
			BymanagePJ.name=$(this).next().html();
			BymanagePJ.userid=$(this).next().attr('userid');
			BymanagePArry.push(BymanagePJ);
		})
		var BymanagePHtml='';
		if(BymanagePArry.length==0){
			$('.EditBymanagePerson').html('请选择被管理者');
		}
		$.each(BymanagePArry, function(i2,item2) {
			BymanagePHtml+='<i class="division">、</i><span byuserid="'+item2.userid+'">'+item2.name+'</span>';
			$('.EditBymanagePerson').html(BymanagePHtml);
		});
		
	})
//提交
	$('.editConfirm').click(function(){
		var editSaleJ={};
		var leaderId=$('.EditmanagePerson').attr('leaderid');
		var BySaleidArry=[];
		$('.EditBymanagePerson span').each(function(i,item){
			BySaleidArry.push($(this).attr('byuserid'));
		})
		editSaleJ.leaderId=leaderId;
		editSaleJ.managedUserIds=BySaleidArry;
		$ajax('post','user/updateSalesLeader',editSaleJ,function succF(jo){
			$('.R-wap').load('user/SaleManage.html')
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
