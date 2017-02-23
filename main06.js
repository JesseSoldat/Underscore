var numbers = [1,2,3,4,5];

var value = _.reduce(numbers, function(lastReducedValue, item){
	// console.log("lastReducedValue: "+lastReducedValue);
	// console.log("item: "+item);
	return lastReducedValue + item;
});
// console.log(value);

var valueRight = _.reduceRight(numbers, function(lastReducedValue, item){
	// console.log("lastReducedValue: "+lastReducedValue);
	// console.log("item: "+item);
	return lastReducedValue + item;
});
// console.log(valueRight);

var colors = ['red','blue','green','yellow'];

var colorValues = _.reduce(colors, function(lastReducedValue, item, index, items){
	if(index === 1){ //first item passed in is at index 1 
		lastReducedValue = "<ul><li>" + lastReducedValue + "</li>";
	}
	var result = lastReducedValue + "<li>" + item + "</li>";
	if(index === (items.length -1)){
		result += "</ul>"
	}
	return result;
});
console.log(colorValues);