$(function(){
	$('.L-wap,.R-container,.p-first').height($(window).height()-80);
	
	$(window).resize(function(){
		$('.L-wap,.R-container,.p-first').height($(window).height()-80);
	
	})
	//获取链接参数的男女
	var locaurl=(window.location.href).split("?")
	if(locaurl[1]==0){
		$('.my-photo').attr('src','img/girl.png');
	}else{
		$('.my-photo').attr('src','img/man.png');
	}
		//列表
	$.ajax({
		type:"post",
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+"permission/queryLoginPermission",
		dataType:'json',
		success:function(jo){
			server();
			if(jo.state=='unLogin'){
				pub.Alt(jo.message,true,function(){
					$('.confirm').click(function(){
						window.location.href='login.html';
						return;
					})
				})
			}
			$('.indexName').html(jo.name);
			var menuimmg=['img/business.png','img/journal.png','img/sess.png']
			var NavHtml='';
			$.each(jo.menu1,function(i,item){
				NavHtml+='<li class="L-list-item">';
				NavHtml+='<div class="navTitle" menuId="'+item.menuId+'">';
					if(item.menuId==1){
						NavHtml+='<img src="'+menuimmg[0]+'" alt="图片"/>';
					}
					if(item.menuId==2){
						NavHtml+='<img src="'+menuimmg[1]+'" alt="图片"/>';
					}
					if(item.menuId==3){
						NavHtml+='<img src="'+menuimmg[2]+'" alt="图片"/>';
					}
					NavHtml+='<span class="menuname">'+item.menuName+'</span>';
				if(item.menu2==undefined){
					NavHtml+='</div>';
					NavHtml+='</li>';
				}else{
					NavHtml+='<img src="img/creat.png" class="creat"/>';
					NavHtml+='</div>';
					NavHtml+='<ul class="hide-menu">';
					$.each(item.menu2,function(i2,item2){
					NavHtml+='<li menuId="'+item2.menuId+'" url="'+item2.sourceUrl+'">';
						NavHtml+='<span class="circle"></span>';
						NavHtml+='<a>'+item2.menuName+'</a>';
						NavHtml+='</li>';
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
		$('.breadcrumbwap').show();
		$('.hide-menu li').removeClass('menuCheck');
//		$('.R-wapFirst').addClass('R-wap');
		$('.R').removeClass('R-wapFirst');
		$('.R').addClass('R-wap');
		$(this).addClass('menuCheck');
		var menuname=$(this).parents('.L-list-item').find('.menuname').html();
		var thisHtml=$('.menuCheck').find('a').html();
		var url=$(this).attr('url');
		$('.R-wap').load(url,function(){
			Fht=menuname
			netht=thisHtml;
		});
		breadnav(menuname,thisHtml);
		$('.breadcrumb').on('click','.curBack',function(){
			$('.FillInfo').off('click');
			if($('.menuCheck').attr('menuid')==6){
				
				breadnav(menuname,thisHtml);
				$('.FillInfo').hide();
				$('#addJournal').show();
			}
			if($('.menuCheck').attr('menuid')==7){
				breadnav(menuname,'编辑日志');
				$('.editInfo').hide();
				$('#addJournal').show();
			}
		
		})	
	
	})	
	//修改密码
	$('.changepwd').click(function(){
		$('.R').removeClass('R-wapFirst');
		$('.R').addClass('R-wap');
		$('.breadcrumbwap').show();
		$('.breadcrumb').html('<li>修改密码</li>')
		$('.R-wap').load('updateUserPassword.html');
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
	
	
	//判断登录人是否是服务人员
	function server(){
		var userJ={};
		$ajax('post','user/ifServiceRole',userJ,function succF(jo){
			sessionStorage.server=jo.ifService;
		},function errF(jo){
			pub.Alt(jo.message,false);
		})
	}
	
	
	
	
	
	
	
	
})
