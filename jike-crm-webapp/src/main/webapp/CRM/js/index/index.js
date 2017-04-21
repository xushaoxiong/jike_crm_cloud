$(function(){
	$('.L-wap,.R-container').height($(window).height()-60);
	$(window).resize(function(){
		$('.L-wap,.R-container').height($(window).height()-60);
	})
	
	
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
					NavHtml+='<span class="menuname">'+item.menuName+'</span>';
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
		//跳转链接是面包屑导航出现breadcrumb
		$('.breadcrumb').show();
		$('.hide-menu li').removeClass('menuCheck');
		$(this).addClass('menuCheck');
		var menuname=$(this).parents('.L-list-item').find('.menuname').html();
		var thisHtml=$('.menuCheck').find('a').html();
		var url=$(this).attr('url');
		$('.R-wap').load(url,function(){
			Fht=menuname
			netht=thisHtml;
		});
		breadnav(menuname,thisHtml);
		if($(this).attr('menuid')==7){
			$('.breadcrumb').on('click','.curBack',function(){
				breadnav(menuname,'编辑日志');
				$('#addJournal').show();
				$('.editInfo').hide();
			})	
		}
		if($(this).attr('menuid')==6){
			$('.breadcrumb').on('click','.curBack',function(){
				breadnav(menuname,thisHtml);
				$('#addJournal').show();
				$('.FillInfo').hide(function(){
					begineveid=$('#eventType').find('option:selected').attr('eveid');
				});
			})	
		}
	
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
