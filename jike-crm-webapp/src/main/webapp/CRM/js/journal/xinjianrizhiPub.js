		//新建信息内容
		var logData={};
		var totalDetail={};
		function logDateF(logData){
			logData.logDate=$('#indate').html();
			var eventTypeid=$('#eventType').find('option:selected').attr('eveid');
			var SpecItemid=$('#SpecItem').find('option:selected').attr('spcid');
			logData.businessOpportunityId=$('.businessNameSp').attr('businessopptunityid');
//			logData.businessNameSp=$('.businessNameSp').html();
//			logData.businesNumbspInp=$('.businesNumbspInp').html();
			logData.workingHours=$.trim($('.timeVal').val());
			logData.internalParticipant=$.trim($('.insetpeopName').val());
			logData.externalParticipant=$.trim($('.outpeopName').val());
			logData.eventType=$('#eventType').find('option[eveid="'+eventTypeid+'"]').val();
			logData.specificEvent=$('#SpecItem').find('option[spcid="'+SpecItemid+'"]').val();
		}
		//费用明细
		function totalDetailF(totalDetail){
			var totalDetailArry=[];
			for (var i=0;i<$('.ReachInp').length;i++) {
				totalDetailArry.push(Number($.trim($('.reachInp'+(i+1)).val())));
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