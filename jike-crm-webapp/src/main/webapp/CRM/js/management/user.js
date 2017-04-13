
	//初始用户列表
	//设置每页数量开始页
	var paginatorJ={"name":"","start":1,"pageSize":10};	
	var creaPage = function (jo){
		var options={
			alignment:"center",
	        bootstrapMajorVersion:1,    //版本
	        numberOfPages:9,    //最多显示Page页
	        totalPages:jo.totalPage,    //所有数据可以显示的页数
	        onPageClicked:function(e,originalEvent,type,page){//点击跳转页
		      	paginatorJ.start=page;
		      	clickPage(paginatorJ)

	        },
	        currentPage:paginatorJ.start,    //当前页数
	        pageUrl:function(type, page, current){
	        	 
	        }        
	    }
		$(".pagination").bootstrapPaginator(options);
			$('.totalPage').html('共'+jo.totalCount+'条');
			$('.totalNum').html(jo.totalPage+'页');
	}
	//列表
	var uselist=function(jo){
		var userHtml='';
		$.each(jo.userList,function(i,item){
			userHtml+='<tr>';
			userHtml+='<td class="loginName">'+item.loginName+'</td>';
			userHtml+='<td class="Name">'+item.name+'</td>';
			if(item.gender=='男'){
				userHtml+='<td class="gender" gid="1">'+item.gender+'</td>';
			}else{
				userHtml+='<td class="gender" gid="0">'+item.gender+'</td>';
			}
			
			userHtml+='<td class="phone">'+item.phone+'</td>';
			userHtml+='<td class="email">'+item.email+'</td>';
			userHtml+='<td class="employeeNum">'+item.employeeNum+'</td>';
			if(item.isEmployment=='在职'){
				userHtml+='<td class="isEmployment" epid="0">'+item.isEmployment+'</td>';
			}else{
				userHtml+='<td class="isEmployment" epid="1">'+item.isEmployment+'</td>';
			}				
			userHtml+='<td class="entryDate">'+item.entryDate+'</td>';
			userHtml+='<td class="roleId" roleid="'+item.roleId+'">'+item.roleName+'</td>';
			userHtml+='<td>';
				userHtml+='<a class="userAmend">修改</a>';
			userHtml+='</td>';
		userHtml+='</tr>';
		})
		$('.userList').html(userHtml);
	}
	//点击跳转页
	function clickPage(PJson){
		$.ajax({
		type:"post",
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+'user/getUserByPage',
		data:JSON.stringify(PJson),
		dataType:'json',
		success:function(jo){
			uselist(jo);
			creaPage(jo);
		}
	});
	}
	clickPage(paginatorJ);
	
	//搜索
	
	$('.userSearch').click(function(){
		var nameVal=$.trim($('.userName').val());
		paginatorJ.start = 1;
		paginatorJ.name=nameVal;
		clickPage(paginatorJ)
	})
	
	//新增
	 $(".addBtn").click(function(){
	 	$('.userModalAlt').html('');
      	$("#newAdd").modal("toggle");
      	$('#newAdd .modal-title').html('新增账户');
      	$('.AccountInp-wap,.password-wap').show();
      	$('#workStats').hide();
      	$('.userConfirm').attr('id','addUserCofirm');
      	$("#newAdd").find('input').val('');
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
				$('.RoleInp').html(roleList);
			}

		});
		
		
    });
	$('#newAdd').on('click','#addUserCofirm',function(e){
		e.preventDefault();
		var userJ={};
		userJ.loginName=$.trim($('.AccountInp').val());
		userJ.password=$.trim($('.PwdInp').val());
		userJ.name=$.trim($('.NameInp').val());
		userJ.gender=$('.genderGroup').find('input[type=radio]:checked').attr('gid');
		userJ.phone=$.trim($('.phoneInp').val());
		userJ.email=$.trim($('.emailInp').val());
		userJ.employeeNum=$.trim($('.eplyeNumInp').val());
		userJ.entryDate=$.trim($('#indate').val());
		userJ.roleId=$(".RoleInp").find("option:selected").attr('roleid');
		if(userJ.loginName==''){
			$('.userModalAlt').html('请填写登录名');
			return false;
		}
		if(userJ.name==''){
			$('.userModalAlt').html('请填写姓名');
			return false;
		};
		if(userJ.password==''){
			$('.userModalAlt').html('请填写密码');
			return false;
		}
		
		if(userJ.phone==''){
			$('.userModalAlt').html('请填写手机号');
			return false;
		};
		if(userJ.email==''){
			$('.userModalAlt').html('请填写邮箱');
			return false;
		};
		if(!phoneCheck(userJ.phone,".userModalAlt")){
			return;
		}
		
		if(!isEmail(userJ.email,".userModalAlt")){
			
			return;
		}

		if(userJ.employeeNum==''){
			$('.userModalAlt').html('请填写工号');
			return false;
		};
		if(userJ.entryDate==''){
			$('.userModalAlt').html('请填写入职日期');
			return false;
		};
		$.ajax({
			type:"post",
			contentType: "application/json; charset=utf-8",
			url:ajaxUrl+'user/addUser',
			data:JSON.stringify(userJ),
			dataType:'json',
			success:function(jo){
				if(jo.state=='success'){
					$('.userModalAlt').html('');
					$("#newAdd").modal("hide");
					userpage();
				}else{
					$('.userModalAlt').html(jo.message);
					return;
				}
				
			}

		});
	})
	
	
	//修改
	$('.userList').on('click','.userAmend',function(e){	
		$("#newAdd").modal("toggle");
		$('.userModalAlt').html('');
		$('#newAdd .modal-title').html('修改账户');
		$('.userConfirm').attr('id','editUserCofirm');
		e.preventDefault();
		$('.AccountInp-wap,.password-wap').hide();
		$('#workStats').show();
		var trs=$(this).parents('tr');
		loginName=trs.find('.loginName').html();
		var Name=trs.find('.Name').html();
		var gender=trs.find('.gender').attr('gid');
		var isEmployment=trs.find('.isEmployment').attr('epid');
		var phone=trs.find('.phone').html();
		var email=trs.find('.email').html();
		var entryDate=trs.find('.entryDate').html();
		var employeeNum=trs.find('.employeeNum').html();
		var roleId=trs.find('.roleId').attr('roleid');
		$('.NameInp').val(Name);
		$('.genderGroup').find('input[gid='+gender+']').prop('checked',true);
		$('.phoneInp').val(phone);
		$('.emailInp').val(email);
		$('.eplyeNumInp').val(employeeNum);
		$('#workStats').find('input[epid='+isEmployment+']').prop('checked',true);
		$('#indate').val(entryDate);
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
				$('.RoleInp').html(roleList);
				$('.RoleInp').find('option[roleid="'+roleId+'"]').prop('selected',true);
			}

		});
	})
	$('#newAdd').on('click','#editUserCofirm',function(e){
//		$("#newAdd").modal("hide");
		$('.userModalAlt').html('');
		var editUserJ={};
		editUserJ.name=$('.NameInp').val();
		editUserJ.gender=$('.genderGroup').find('input[type=radio]:checked').attr('gid');
		editUserJ.isEmployment=$('#workStats').find('input[type=radio]:checked').attr('epid');
		editUserJ.phone=$('.phoneInp').val();
		editUserJ.email=$('.emailInp').val();
		editUserJ.entryDate=$('#indate').val();
		editUserJ.roleId=$('.RoleInp').find('option:selected').attr('roleid');
		editUserJ.employeeNum=$('.eplyeNumInp').val();
		editUserJ.loginName=loginName;
		if(editUserJ.name==''){
			$('.userModalAlt').html('请填写员工姓名');
			return;
		};
		if(!phoneCheck(editUserJ.phone,".userModalAlt")){
			
			return;
		}
		
		if(!isEmail(editUserJ.email,".userModalAlt")){
			
			return;
		}
		if(editUserJ.employeeNum==''){
			$('.userModalAlt').html('请填写工号');
			return;
		};
		if(editUserJ.entryDate==''){
			$('.userModalAlt').html('请填写入职日期');
			return;
		};
		$.ajax({
			type:"post",
			contentType: "application/json; charset=utf-8",
			url:ajaxUrl+'user/updateUser',
			data:JSON.stringify(editUserJ),
			dataType:'json',
			success:function(jo){
				if(jo.state=='success'){
					$("#newAdd").modal("hide");
					userpage();
				}else{
					$('.userModalAlt').html(jo.message);
					return;
				}
				
			}
		})
	})