var numbers = [1,1,1,1,2,2,2,3,4,5,5,5,6,7,7,7];

var transportName = ['car','bus','airplane','boat','train','bicyle','bus','car'];

var transports = [
	{name: 'airplane', type: 'air'},
	{name: 'car', type: 'road'},
	{name: 'bus', type: 'road'},
	{name: 'boat', type: 'water'},
	{name: 'train', type: 'rail'},
	{name: 'subway', type: 'rail'},
	{name: 'bicyle', type: 'road'},
];

var unique = _.uniq(numbers); //only the unique items
var uniqueSort = _.uniq(numbers, true); //since numbers is sorted already unique knows this and can work faster

// console.log(unique);
// console.log(uniqueSort);

var uniqueTransportName = _.uniq(transportName);
// console.log(uniqueTransportName);

var uniqueTransportType = _.uniq(transports, function(item, itemIndex, items){
	// console.log(item);
	if(itemIndex === 0) return; //first item is always unique
	
	for (var x=0; x < itemIndex; x++){
		
		if(item.type === items[x].type){
			// console.log(items[x]);
			return;
		}
	}
	return item;

}).map(function(item){
	return item.type;
});

console.log(uniqueTransportType);


