function roleList(){
	$.ajax({
	type:"post",
	contentType: "application/json; charset=utf-8",
	url:ajaxUrl+'role/queryRole',
	dataType:'json',
	success:function(jo){
			var RoleHtml="";
			$.each(jo, function(i,item) {
				RoleHtml+='<tr>';
					RoleHtml+='<td class="RoleNum">'+item.roleNum+'</td>';
					RoleHtml+='<td class="RoleName" roleId="'+item.roleId+'">'+item.roleName+'</td>';
					RoleHtml+='<td>'+item.createTime+'</td>';
				RoleHtml+='</tr>';
			});
			$('#role-wap').html(RoleHtml);
		
	},
	error:function(jo){
		alert('服务器忙')
	}
});
}roleList()
	
//新增弹框
	$('.addBtn').click(function(){
		$("#MRole").modal("toggle");
		$('#roleNum').val('');
		$('#roleName').val('');
		$('.Rconfirm').attr('id','addRoleconfirm');
	})
	//添加角色
	$('#MRole').on('click','#addRoleconfirm',function(e){
		e.preventDefault();
		var roleJ={};
		var roleNum=$('#roleNum').val();
		var roleName=$('#roleName').val();
		roleJ.roleNum=roleNum;
		roleJ.roleName=roleName;
		$.ajax({
			type:"post",
			contentType: "application/json; charset=utf-8",
			url:ajaxUrl+"role/addRole",
			dataType:'json',
			data:JSON.stringify(roleJ),
			success:function(jo){
				if(jo.state=='success'){
					console.log(jo)
					$('#MRole').modal('hide');
					roleList();
				}else{
					$('.RoleStats').html('该角色已存在!');
				}
			}
		});
	})
