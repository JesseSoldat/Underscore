var colors = ['red','blue','green','black'];

var obj = {
	name: "Bob",
	age: 44,
	weight: 177,
	hairColor: "red"
};

var mappedColors = _.map(colors, function(value, key, items){
	return String(value).toUpperCase();
});
// console.log(mappedColors);

var mappedPerson = _.map(obj, function(value, key, items){
	let person = String(value).toUpperCase();
	return person + ' is cool!'
});
var mappedKey = _.map(obj, function(value, key, items){
	let keys = String(key).toUpperCase();
	return keys + ':'
});
// console.log(mappedPerson);
// console.log(mappedKey);
var carListElement = document.getElementById("carList");

var mappedCarList = _.map(carListElement.childNodes, function(value, key, items){
	return value.innerHTML;
});
console.log(_.filter(mappedCarList, undefined));