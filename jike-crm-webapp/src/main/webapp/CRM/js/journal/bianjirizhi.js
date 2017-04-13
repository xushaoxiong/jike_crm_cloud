
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
	//费用弹框
	$('.btnCost').click(function(){
		$('.totalCostwap').modal('toggle');
	})
	
	var Mesclic=false;
	//点击添加信息
	$('.addMessage').click(function(){
		if($('.specEvent').val()=='信息收集'){
			if(Mesclic){
				$('.editInfo').show();
			}else{
				$.getScript("js/editjournal/xinxishoujiInfo.js",function(){
					$('.editInfo').html(infoColle());
					Mesclic=true;
				})
			}
		}
	})
