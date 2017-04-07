$(function(){
	$('.L-wap').height($(window).height()-60)
		//列表
	$.ajax({
		type:"post",
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+"permission/queryLoginPermission",
		dataType:'json',
		success:function(jo){
			if(jo.state=='unLogin'){
				pub.Alt(jo.message,true,function(){
					$('.confirm').click(function(){
						window.location.href='login.html';
						return;
					})
				})
			}
			$('.indexName').html(jo.name);
			var NavHtml='';
			$.each(jo.menu1,function(i,item){
				NavHtml+='<li class="L-list-item">';
				NavHtml+='<div class="navTitle" menuId="'+item.menuId+'">';
					NavHtml+='<span class="glyphicon glyphicon-wrench img-icon"></span>';
					NavHtml+='<span>'+item.menuName+'</span>';
				if(item.menu2==undefined){
					NavHtml+='</div>';
					NavHtml+='</li>';
				}else{
					NavHtml+='<span class="caret"></span>';
					NavHtml+='</div>';
					NavHtml+='<ul class="hide-menu">';
					$.each(item.menu2,function(i2,item2){
					NavHtml+='<li menuId="'+item2.menuId+'" url="'+item2.sourceUrl+'"><a>'+item2.menuName+'</a></li>';
				})	
				NavHtml+='</ul>';
				NavHtml+='</li>';
				}				
			})
			$('.L-list').append(NavHtml);
		
			
		},
		error:function(){
			alert('服务器忙！')
		}
	});

	$('.L-list').on('click','.navTitle',function(){
		$(this).next().slideToggle()
	});
	
	$('.L-list').on('click','.hide-menu li',function(){
		
		var url=$(this).attr('url');
		console.log(url)
		$('.R-wap').load(url);
			
	})	
	
	//退出
	$('.loginOut').click(function(){
		$.ajax({
			type:"get",
			contentType: "application/json; charset=utf-8",
			url:ajaxUrl+"user/loginOut",
			dataType:'json',
			success:function(jo){
				if(jo.state=='success'){
					window.location.href="login.html";
				}
			}
		});
	})
	
})
