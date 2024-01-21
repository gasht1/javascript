/*const array = [1, 2, 34, 35, 36, 37, 38, 39];
console.log(array.length);
console.log(array);
const arr = new Array();
arr.length = 10;
arr.fill(2);
console.log(arr);
*/

/*const splice = array.splice(3, 6);
const slice = array.slice(0, 2);
console.log(slice);
array.push(1);
//array.unshift(39);
//array.pop();
//array.pop();
//array.pop();

console.log(`hello ${splice}`);
const age = 19;
age > 18 ? console.log("you can drive") : console.log("you can not drive");*/
const array = [2, 34, 35, 36, 37, 38, 39];
//for (let i = 0; i < array.length; i++) {
//console.log(array[i]);
//array.forEach(function (value, index) {
// console.log(value, index);
//});
//const ArrayMap = array.map(function (value, index) {
//console.log(value, index);
// return value + index;
//});
//console.log(ArrayMap);

/*const ArrayFilter = array.filter(function (value, index) {
  return value > 36;
});
console.log(ArrayFilter);*/
const arrayReduce = array.reduce(function (accumulator, currentValue) {
  //console.log(accumulator);
  return accumulator + currentValue;
}, 0);
console.log(arrayReduce);
