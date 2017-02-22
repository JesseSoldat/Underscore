var items = [2, "", true, false, 0, null, "some value", undefined, NaN];

//falsy value ---- false, 0, "", null, undefined, Nan

var compact = _.compact(items); //gets rid of all falsey values

// console.log(compact);

var multiArray = [["a","b","c"],[[1,2,3,[4,5,6,[7,8,9]]], [true,false]]];

var flatten = _.flatten(multiArray); //makes a single array
var flatten1 = _.flatten(multiArray, true); //flatten one level
// console.log(flatten);
// console.log(flatten1);

var colors = ["red", "blue", "yellow", "white", "black","red"];

var without = _.without(colors, 'red', 'green'); //remove specific items
// console.log(without);

var union = _.union(colors, ["blue","brown","pink"],["orange","red"]);
console.log(union); //merge arrays leaving out duplicates

var intersection = _.intersection(colors,["blue","black","pink"]);
console.log(intersection); //merge array and only keep values that match

var difference = _.difference(colors,["blue","yellow"]);
var difference2 = _.difference(colors,["blue","yellow"],["red"]);


console.log(difference); //returns array that does not inclue the two items
console.log(difference2);