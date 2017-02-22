var colors = ["red", "blue", "yellow", "white", "black"];

//first 
var item = _.first(colors);
//alias
var head = _.head(colors);
var take = _.take(colors);
var item3 = _.first(colors, 3); //first three

// console.log(item);
// console.log(head);
// console.log(take);
// console.log(item3);

var initial = _.initial(colors); //all but last
var initial2 = _.initial(colors, 2); //all but last 2

// console.log(initial);
// console.log(initial2);

var last = _.last(colors); //last item
var last2 = _.last(colors, 2); //last 2 items 

console.log(last);
console.log(last2);



