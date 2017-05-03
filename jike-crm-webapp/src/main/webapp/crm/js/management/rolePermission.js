	function checked(){
		var roleId=$('.roleList').find('option:checked').attr('roleid');
		console.log(roleId);
		$.ajax({
			type:"post",
			contentType: "application/json; charset=utf-8",
			url:ajaxUrl+'permission/queryPermissionByRoleId',
			data:'{"roleId":'+roleId+'}',
			dataType:'json',
			success:function(jo){
				$('.check3 li').find('input').prop('checked',false);
				if(jo.menu1!=undefined){
					$.each(jo.menu1,function(i,item){
					if(item.menu2==undefined){
							$('.check3 li').find('input').prop('checked',false);
					}else{
						$.each(item.menu2, function(i2,item2) {
							$('.check3 li[menuId="'+item2.menuId+'"]').find('input').prop('checked',true);
						});
					}
					
				})
				}
			}
		});
	}
	//角色列表
	$.ajax({
		type:"post",
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+'role/queryRole',
		dataType:'json',
		success:function(jo){
			var roleList='';
			$.each(jo, function(i,item) {
				roleList+='<option class="RoleName" roleid="'+item.roleId+'">'+item.roleName+'</option>';
			})
			$('.roleList').html(roleList);
		}
		
		
	});
	//权限列表
	$.ajax({
		type:"post",
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+'permission/queryLoginPermission',
//		data:'{"roleId":2}',
		dataType:'json',
		success:function(jo){
			var perHtml='';
			$.each(jo.menu1,function(i,item){
				perHtml+='<ul class="check2 list-unstyled col-md-3 col-sm-3">';
				perHtml+='<li class="checkList"><span menuId="'+item.menuId+'">'+item.menuName+'</span></li>';
				if(item.menu2==undefined){
					perHtml+='</ul>';
				}else{
					perHtml+='<ul class="check3 list-unstyled">';
					$.each(item.menu2, function(i2,item2) {
						perHtml+='<li menuId="'+item2.menuId+'" style="line-height:25px;"><input type="checkbox"/>'+item2.menuName+'</li>';
					});
					perHtml+='</ul>';
					perHtml+='</ul>';
				}
				
			})
			$('.checkItem').html(perHtml);
			checked();
		}
	});
	//全选
	$('.checkAll').find('input').click(function(){
		var uid=$(this).attr('uid');		
		if(uid=='0'){
			$('.checkItem').find('input').prop('checked',true);
			$('.checkAll').find('input').attr('uid','1')
		}else{
			$('.checkItem').find('input').prop('checked',false);
			$('.checkAll').find('input').attr('uid','0')
			
		}
	})
	
	$('.roleList').change(function(){
		checked();
	})
	
	
	//确定
	$('.rolePerConfirm').click(function(){
		var roleId=$('.roleList option:checked').attr('roleid');
		var PermisionJ={};
		PermisionJ.roleId=roleId;
		PermisionJ.permissonList=[];
		
		//获取一级权限id
		$('.check2').each(function(i1){
			if($('.check2').eq(i1).find('input').is(':checked')){
				var menuId1=$(this).find('span').attr('menuid');
				PermisionJ.permissonList.push({"permissionId":menuId1})
			}
		})
		//获取二级权限id
		$('.check3 input').each(function(i){
			if($('.check3 input').eq(i).is(':checked')){
				var menuId2=$(this).parent().attr('menuId');
				PermisionJ.permissonList.push({"permissionId":menuId2})
			}
			
		})
	
		$.ajax({
			type:"post",
			contentType: "application/json; charset=utf-8",
			url:ajaxUrl+'role/addRolePermission',
//			data:'{"roleId":2,"permissonList":[{"permissionId":1},{"permissionId":2},{"permissionId":3}]}',
			data:JSON.stringify(PermisionJ),
			dataType:'json',
			success:function(jo){
				pub.Alt('分配成功！',false,function(){
					checked();
				});
				
			}
		});
	})
	