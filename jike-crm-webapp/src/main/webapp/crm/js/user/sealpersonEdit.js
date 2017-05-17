//选择被管理者
console.log(111)
$('.EditBymanagePerson').click(function(){
	console.log(111)
	var uid=$('.EditmanagePerson').attr('leaderid');
	var BySaleidArry=[];
	$('.EditBymanagePerson span').each(function(i,item){
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