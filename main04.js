var z = _.zip([1, 'John', 'Smith'], [2, 'Alice', 'Taylor'],[3,'Bob','Taylor'],[4,'John','Earn']);
// console.log(z);
// console.log(z[2]);
console.log(_.uniq(z[1])); //take out duplicates 

var o = _.object(["id", "firstName", "lastName"], [1,"Jim","Springer"]);
// console.log(o);

var range = _.range(20);
var range1to20 = _.range(1,21);
var rangeStep =_.range(0,21,2);
// console.log(range1to20);
// console.log(rangeStep);

var colors = ['red','blue','orange','yellow','black','red','purple','blue','white'];

console.log(_.indexOf(colors, 'blue'));
console.log(_.indexOf(range, 2, true)); //true we know the order 
console.log(_.lastIndexOf(colors, 'blue'));

var lastIndex = _.lastIndexOf(colors,'blue');
console.log('---------------------');
console.log(_.lastIndexOf(colors, 'blue', lastIndex -1));

 var tens = _.range(0, 101, 10);
 console.log(tens);
 console.log(_.sortedIndex(tens, 15));//where in the tens array could 15 be put (returns INDEX)

 tens.splice(_.sortedIndex(tens, 15), 0, 15); //(tens, 15) = index 0 = number of items to delete 15 = number to pass in
console.log(tens);//15 is spliced in