	
	//返回上一级
	$('.goBack').click(function(){
		$('.R-wap').load('user/SaleManage.html');
	})
	
	
	//查询管理者
	$('.managePerson').click(function(){
		var userid=$('.managePerson').attr('saleid');
		$('.managePersonwap').modal('toggle');
		BymanagePState();
		$ajax('post','user/queryNoBeManegeSales','{}',function succF(jo){
			managePersonList(jo.userList);
			$.each(jo.userList, function(i,item) {
				if(item.userId==userid){
					$('.managePersonItem td[userid='+userid+']').prev().addClass('checkedimg');
				}
			});
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	})
	//销售管理者列表
	function managePersonList(Mdata){
		var Mhtml='';
		$.each(Mdata, function(i,item) {
			Mhtml+='<tr onclick="checkManPer($(this))">';
				Mhtml+='<td class="checkimg"></td>';
				Mhtml+='<td userid="'+item.userId+'">'+item.name+'</td>';
				if(item.gender==1){
					Mhtml+='<td>男</td>';
				}else{
					Mhtml+='<td>女</td>';
				}
				Mhtml+='<td>'+item.email+'</td>';
			Mhtml+='</tr>';
		});
		$('.managePersonItem').html(Mhtml);
	}
	$('.managePersonConfirm').click(function(){
		$('.managePersonwap').modal('hide');
		var SaleManagehtml=$('.checkedimg').next().html();
		var SaleManageid=$('.checkedimg').next().attr('userid');
		$('.managePerson').html(SaleManagehtml);
		$('.managePerson').attr('saleid',SaleManageid);
		//当销售管理者改变时去掉被管理者时候相同和管理者相同的人
		$('.BymanagePerson span').each(function(i,item){
			if($(this).attr('byuserid')==SaleManageid){
				$(this).remove();
				$('.division').eq(i).remove();
			}
		})
		BymanagePState();
	})
	
	//选择管理人员
	function checkManPer(_this){
		$('.managePersonItem .checkimg').removeClass('checkedimg');
		_this.find('.checkimg').addClass('checkedimg');

	}
	
	//被管理者
	function BymanagePersonclick(){
		$('.BymanagePerson').on('click',function(){
			var uid=$('.managePerson').attr('saleid');
			var BySaleidArry=[];
			$('.BymanagePerson span').each(function(i,item){
				BySaleidArry.push($(this).attr('byuserid'));
			})
			$('.BymanagePersonwap').modal('toggle');
			$ajax('post','user/queryNoBeManegeSales','{}',function succF(jo){
				BymanagePersonList(jo.userList,uid);
				$.each(BySaleidArry, function(i3,item3) {
					$.each(jo.userList, function(i2,item2) {					
						if(item3==item2.userId){
							$('.BymanagePersonItem td[userid='+item3+']').prev().addClass('checkedimg');
						}
					});
				});
			},function errF(jo){
				pub.Alt(jo.message,false);
			})
		
		})
	}
	//被选择人状态，没有选择管理者被管理者不能点击
	function BymanagePState(){
		if($('.managePerson').html()!='请选择销售管理者'){
			$('.BymanagePerson').attr('disabled',false);
			BymanagePersonclick();
		}else{
			$('.BymanagePerson').attr('disabled',true);
		}
	}BymanagePState()
	//被管理者列表
	function BymanagePersonList(Mdata,uid){
		var Mhtml='';
		$.each(Mdata, function(i,item) {
			if(item.userId==uid){
				Mhtml+='<tr onclick="checkByManPer($(this))" style="display:none;">';
				Mhtml+='</tr>';
			}else{
				Mhtml+='<tr onclick="checkByManPer($(this))">';
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
		$('.BymanagePersonItem').html(Mhtml);
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
			$('.BymanagePerson').html('请选择被管理者');
		}
		$.each(BymanagePArry, function(i2,item2) {
			BymanagePHtml+='<i class="division">、</i><span byuserid="'+item2.userid+'">'+item2.name+'</span>';
			$('.BymanagePerson').html(BymanagePHtml);
		});
		
	})

//提交
	$('.saleConfirm').click(function(){
		var saleJ={};
		var SaleManagehtml=$('.managePerson').html();
		var Saleuid=$('.managePerson').attr('saleid');
		var BySaleManagehtml=$('.BymanagePerson').html();
		var BySaleuid=[];
		$('.BymanagePerson span').each(function(i,item){
			BySaleuid.push($(this).attr('byuserid'));
		})
		saleJ.leaderId=Saleuid;
		saleJ.managedUserIds=BySaleuid;
		var BySaleuid=$('.BymanagePerson').html();
		if(SaleManagehtml=='请选择销售管理者'){
			pub.Alt('请选择销售管理者',false);
			return;
		}
		if(BySaleManagehtml=='请选择被管理者'){
			pub.Alt('请选择被管理者',false);
			return;
		}
		$ajax('post','user/addSalesLeader',saleJ,function succF(jo){
			$('.R-wap').load('user/SaleManage.html');
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
		
		
		
	})








