//事项类型列表
	//pub/eventType.js中返回eventJson
	function event(jo){
		var eventHtml='';
		$.each(jo, function(i,item) {
			console.log(jo)
			eventHtml+='<option eveid="'+item.eveid+'">'+item.evename+'</option>';
		});
		$('#eventType').append(eventHtml);
	}event(eventJson.evenList)
	//具体事项类型
	function spictype(seltor,eveid){
		var html="";
		$.each(eventJson.evenList, function(i,item) {
			if(item.eveid==eveid){
			$.each(item.specIList, function(i2,item2) {
				html+='<option spcid="'+item2.spcid+'">'+item2.spcitem+'</option>';
			});
				$(seltor).html(html);
			}
		});
	}