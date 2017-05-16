

	
	function managePersonList(Mdata){
		var Mhtml='';
		$.each(Mdata, function(i,item) {
			Mhtml+='<tr onclick="checkManPer($(this))">';
				Mhtml+='<td class="checkimg"></td>';
				Mhtml+='<td>'+item.name+'</td>';
				Mhtml+='<td>'+item.gender+'</td>';
				Mhtml+='<td>'+item.email+'</td>';
			Mhtml+='</tr>';
		});
		
		$('.BymanagePersonItem').html(Mhtml);
	}
	//选择被管理人员
	function checkManPer(_this){
		_this.find('.checkimg').toggleClass('checkedimg');

	}
