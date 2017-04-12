$(function(){
	//工时添加按钮
	var timeN=1
	$('.addTime').click(function(){
		timeN++;
		$('.timeVal').val(timeN*0.5);
	})
	$('.minusTime').click(function(){
		timeN--;
		$('.timeVal').val(timeN*0.5);
		if(timeN<0){
			$('.timeVal').val('0');
			timeN=0;
		}
	})
	
})

