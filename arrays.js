//At
let array1 = [10, 20, 30];
console.log(array1.at(1));  
console.log(array1.at(-1));

//Concat
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b)); 


//Constructor
const array2 = [1, 2, 3];
console.log(array2.constructor === Array); 

//CopyWithin
let array3 = [1, 2, 3, 4];
arr.copyWithin(1, 2);
console.log(array3);


//Entries
let array4 = ['a', 'b'];
for (let [i, val] of array4.entries()) {
    console.log(i, val);
}

//Every
let array5 = [2, 4, 6];
console.log(array5.every(n => n % 2 === 0));

//fill
let array6 = [1, 2, 3];
arr.fill(0, 1);
console.log(array6);

//filter
let array7 = [1, 2, 3];
console.log(array7.filter(n => n > 1)); 

//find
let array8 = [1, 2, 3];
console.log(array8.find(n => n > 1)); 

//findIndex
let array9 = [1, 2, 3];
console.log(array9.findIndex(n => n > 1)); 

//findLast
const nums = [1, 4, 3, 8, 5];
const lastEven = nums.findLast(n => n % 2 === 0);
console.log(lastEven); 

//findLastIndex
const array10 = [1, 2, 3, 4, 2];
console.log(array10.findLastIndex(n => n === 2)); 

//flat
let array11 = [1, [2, [3]]];
console.log(array11.flat(2));

//flatMap
let array12 = [1, 2];
console.log(array12.flatMap(x => [x, x * 2]));

//forEach
[1, 2, 3].forEach(n => console.log(n * 2));

//includes
console.log([1, 2, 3].includes(2)); 

//indexOf
console.log([1, 2, 3].indexOf(2)); 

//join
console.log([1, 2, 3].join('-'));

//keys
let array13 = ['a', 'b'];
for (let k of array13.keys()) console.log(k);


//lastIndexOf
console.log([1, 2, 3, 2].lastIndexOf(2)); 

//map
console.log([1, 2, 3].map(n => n * 2)); 

//pop
let array14 = [1, 2, 3];
arr.pop();
console.log(array14); 

//push
let array15 = [1, 2];
arr.push(3);
console.log(array15); 

//reduce
let array16 = [1, 2, 3];
console.log(array16.reduce((a, b) => a + b, 0));

//reduceRight
let array17 = ['a', 'b', 'c'];
console.log(array17.reduceRight((a, b) => a + b));

//reverse
let array18 = [1, 2, 3];
arr.reverse();
console.log(array18);
//shift
let array19 = [1, 2, 3];
arr.shift();
console.log(array19); 

//slice
let array20 = [1, 2, 3];
console.log(array20.slice(1, 3)); 

//some
console.log([1, 2, 3].some(n => n > 2));

//sort
let array21 = [3, 1, 2];
arr.sort();
console.log(array21);

//splice
let array22 = [1, 2, 3];
arr.splice(1, 1, 5);
console.log(array22);

//toLocaleString
let array23 = [1000, 2000];
console.log(array23.toLocaleString());

//toString
console.log([1, 2, 3].toString());

//unshift
let array24 = [2, 3];
arr.unshift(1);
console.log(array24);

//values
let array25 = ['a', 'b'];
for (let val of array25.values()) console.log(val);


