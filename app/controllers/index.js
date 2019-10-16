// console.log(jsonData);
let ans = 0;
function getData (req) {
	let data = req.body;
	console.log('>>>', data);
	return { "subject": "info", "data": "received" };
}

function putData (req) {
	let data = req.params.id;
	console.log('>>>ID', data);
	console.log('>>>Body', req.body);
	
	if (jsonData[data]) {
		return { "status": 400, "message": "Id already exists. Operation not allowed!" };	
	}
	else {
		jsonData[data] =  { "amount": req.body.amount, "type": req.body.type };
		
		if(req.body.parentId)
			jsonData[data].parentId = req.body.parentId;
	}
	console.log('>>>>>>',jsonData);
	
	return jsonData;
}

function getSum (req) {
	let data = req.params.id;
	console.log('>>>ID', data);
	console.log('>>>Body', req.body);
	
	if(!jsonData[data]) {
		return { "status": 404, "message": "Cannot find the Id!" };
	}	
	
	let sum = getAggregateAmount(jsonData[data]);
	ans = 0;
	
	return { sum };
}
function getAggregateAmount(data) {
	
	console.log('>>data',data);
	console.log('>>>ans1', ans);
	ans = ans + data.amount;
	console.log('>>>ans2', ans);
	if(data.parentId) {
		console.log('Here?', data.parentId);
		getAggregateAmount(jsonData[data.parentId])
	}

	return ans;

}

module.exports = { getData, putData, getSum };