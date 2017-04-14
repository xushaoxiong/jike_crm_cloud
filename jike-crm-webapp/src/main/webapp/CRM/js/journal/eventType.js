var eventType=function(seltor,eveid){
	var evet=[{"eveid":"0","specIList":[{"spcid":"0","spcitem":""}]},
	{"eveid":"1","specIList":[{"spcid":"101","spcitem":"信息收集"}]},
	{"eveid":"2","specIList":[{"spcid":"201","spcitem":"制定拜访计划"}]},
	{"eveid":"3","specIList":[{"spcid":"301","spcitem":"找到决策人"},{"spcid":"302","spcitem":"洽谈中"},{"spcid":"303","spcitem":"达成合作意向"},{"spcid":"304","spcitem":"失败"}]},
	{"eveid":"4","specIList":[{"spcid":"401","spcitem":"谈判中"},{"spcid":"402","spcitem":"承诺试用"},{"spcid":"403","spcitem":"进入招投标流程"},{"spcid":"404","spcitem":"承诺购买"},{"spcid":"405","spcitem":"失败"}]},
	{"eveid":"5","specIList":[{"spcid":"501","spcitem":"试用准备"},{"spcid":"502","spcitem":"试用结果-承诺购买"},{"spcid":"503","spcitem":"试用结果-失败"},{"spcid":"504","spcitem":"试用结果-招投标"}]},
	{"eveid":"6","specIList":[{"spcid":"601","spcitem":"投标准备"},{"spcid":"602","spcitem":"投标成功"},{"spcid":"603","spcitem":"投标失败"}]},
	{"eveid":"7","specIList":[{"spcid":"701","spcitem":"签约"}]},
//	{"eveid":"8","specIList":[{"spcid":"801","spcitem":"采购"}]},
	{"eveid":"9","specIList":[{"spcid":"901","spcitem":"培训"},{"spcid":"902","spcitem":"其他"},{"spcid":"903","spcitem":"销售支持"}]},
	{"eveid":"10","specIList":[{"spcid":"1001","spcitem":"售后"}]},
	{"eveid":"11","specIList":[{"spcid":"1101","spcitem":"支持"}]},
	{"eveid":"12","specIList":[{"spcid":"1201","spcitem":"培训"}]}]
	
	var html="";
	$.each(evet, function(i,item) {
		if(item.eveid==eveid){
		$.each(item.specIList, function(i2,item2) {
			html+='<option spcid="'+item2.spcid+'">'+item2.spcitem+'</option>';
		});
			$(seltor).html(html);
		}
	});
}
