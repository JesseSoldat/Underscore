let promiseToCleanRoom = new Promise(function(resolve, reject){
	let isClean = true;

	if(isClean){
		resolve('clean');
	} else {
		reject('The promise could not be resolved');
	}
});

promiseToCleanRoom.then(function(fromResolve){
	console.log('the room is '+ fromResolve);
}).catch(function(fromReject){
	console.log(fromReject);
});

let removeGarbage = function(p) {
	return new Promise(function(resolve, reject){
		resolve('Garbage Removed');
	});
};

let cleanWindows = function(p){
	return new Promise(function(resolve, reject){
		resolve("Windows Clean");
	});
};

let mowLawn = function(p){
	return new Promise(function(resolve, reject){
		resolve("Lawn Mowed");
	});
};

removeGarbage().then(function(res){
	console.log(res);

	return cleanWindows();

}).then(function(res){
	console.log(res);
	return mowLawn()

}).then(function(res){
	console.log(res);
});

Promise.all([cleanWindows(), removeGarbage(), mowLawn()]).then(function(res){
	console.log(res);
});