$(function(){
	$('.L-wap').height($(window).height()-60)
		//列表
	$.ajax({
		type:"post",
		contentType: "application/json; charset=utf-8",
		url:ajaxUrl+"permission/queryPermissionByRoleId",
		data:'{"roleId":2}',
		dataType:'json',
		success:function(jo){
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
//						
			})
			$('.L-list').append(NavHtml);
		}
	});

	$(document).on('click','.navTitle',function(){
		$(this).next().slideToggle()
	});
	
	$(document).on('click','.hide-menu li',function(){
		var url=$(this).attr('url');
		console.log(url)
			$('.R-wap').load(url);
			
	})
})
