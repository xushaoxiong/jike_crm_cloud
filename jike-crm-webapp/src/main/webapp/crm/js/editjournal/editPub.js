		//新建信息内容
		var businessOpportunityLogJson={};
		var boFeeDetailJson={};
		function editLogDateF(logData){
			logData.logDate=$('#indat').html();
			logData.logId=$('#indat').attr('logId');
			logData.businessOpportunityName=$('.businessNameSp').val();
			logData.businessOpportunityNum=$('.businesNumbspInp').val();
			logData.workingHours=$.trim($('.timeVal').val());
			logData.internalParticipant=$.trim($('.innerPerson').val());
			logData.externalParticipant=$.trim($('.outPerson').val());
			logData.eventType=$('.eventType').val();
			logData.specificEvent=$('.specEvent').val();
		}
		//费用明细
		function editTotalDetailF(totalDetail){
			var totalDetailArry=[];
			for (var i=0;i<$('.ReachInp').length;i++) {
				totalDetailArry.push($.trim($('.reachInp'+(i+1)).val()));
			}
			totalDetail.trafficFee=totalDetailArry[0]
			totalDetail.hotelFee=totalDetailArry[1]
			totalDetail.foodFee=totalDetailArry[2]
			totalDetail.entertainFee=totalDetailArry[3]
			totalDetail.giftFee=totalDetailArry[4]
			totalDetail.otherFee=totalDetailArry[5]
			totalDetail.advanceFee=totalDetailArry[6]
			totalDetail.advancePerson=$.trim($('.reachInp8').val())
		}