$(function(){
	$('.alert-del-wap').height($(window).height());
	//新增
	 $(".addBtn").click(function(){
      	$("#newAdd").modal("toggle");
      	$('#workStats').hide();
      	$('.AccountInp').val('');
		$('.NameInp').val('');
		$(".RoleInp").find("option[idName='0']").prop("selected",true);
		

    });
    
    //日期
    jeDate({
		dateCell:"#indate",
		format:"YYYY/MM/DD ",
		zIndex:2099,
		isinitVal:true,
		fixed:true,
		isTime:true, //isClear:false,
		minDate:"2014-09-19",
		choosefun:function(elem, val) {
			console.log(elem)
		}    //选中日期后的回调, elem当前输入框ID, val当前选择的值
		
	})
	//修改

	$('.amend').each(function(i){
		$(this).click(function(){
			var loginName=$('.loginName').eq(i).html();
			var Name=$('.Name').eq(i).html();
			var genderID=$('.gender').eq(i).attr('gid');
			var phone=$('.phone').eq(i).html();
			var email=$('.email').eq(i).html();
			var employeeNum=$('.employeeNum').eq(i).html();
			var isEmp=$('.isEmployment').eq(i).attr('eid');
			var entryDate=$('.entryDate').eq(i).html();
			var Rid=$('.roleId').eq(i).attr('rid');
			var Rid=$('.roleId').eq(i).html();
			$("#newAdd").modal("toggle");
			$('#workStats').show();//是否在职
			$('.AccountInp').val(loginName);
			$('.NameInp').val(Name);
			$('.genderGroup').find("input[gid='"+genderID+"']").prop('checked',true);
			$('.phoneInp').val(phone);
			$('.emailInp').val(email);
			$('.eplyeNumInp').val(employeeNum);
			$('#workStats').find("input[epid='"+isEmp+"']").prop('checked',true);
			$('#indate').val(entryDate);
			$(".RoleInp").find("option[idName='"+Rid+"']").prop("selected",true);
			
			
		})
	})
	//删除
	$('.del').click(function(){
		var tr=$(this).parents('tr');
		pub.Alt('确定删除？',true,function(){
			$('.confirm').click(function(){
				tr.remove();
				$('.alert-del').hide();
			})
		})
	})
	//分页
	var options={
        bootstrapMajorVersion:1,    //版本
        currentPage:1,    //当前页数
        numberOfPages:5,    //最多显示Page页
        totalPages:10,    //所有数据可以显示的页数
        onPageClicked:function(e,originalEvent,type,page){
//					console.log(e)
			console.log(originalEvent)
//					console.log(type)

        },
        pageUrl:function(type, page, current){
        	 return "zhanghuguanli/"+page;  
        }
                
    }
    $(".pagination").bootstrapPaginator(options);
    var H=$(window).height()-60;
	$(".wapper").mCustomScrollbar({
		set_height:H,
		scrollButtons:{enable:true},
		theme:"minimal-dark",
		scrollbarPosition:"relative",
	
		
	});
})