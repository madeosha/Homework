//ЗАДАНИЕ 1
function strCount(str, letter) {
    const result = str.split('');
    const results = result.filter(item => item === letter).length;
    return results;
}
console.log(strCount('Hello'));

//ЗАДАНИЕ 2
function squareSum(numbers) {
    return numbers.reduce( (acc, cur) => acc + (cur **2), 0)
}
console.log(squareSum([1, 2, 2]));

//ЗАДАНИЕ 3
function nearestSq(n){
for (i = 0; i < n; i++) {
    if (n > 0 && Math.sqrt(n) % 1 === 0) {
       return n;
    } else {
        return Math.round(Math.sqrt(n)) ** 2;
    }
}
}
console.log(nearestSq(111));
console.log(nearestSq(144));

//ЗАДАНИЕ 4
function solution(str){
    return str.split('').reverse().join('');
}
console.log(solution('world'));

//ЗАДАНИЕ 5
function addLength(str) {
    let words = str.split(" ");
    let lengths = words.map(word => word + " " + word.length);
    return lengths;
}
console.log(addLength("apple ban"));

//ЗАДАНИЕ 6
function mango(quantity, price) {
    let divider = Math.floor(quantity / 3);
    let remainder = quantity % 3;
    return (divider * 2 * price) + (remainder * price);
}
console.log(mango(3, 3));

//ЗАДАНИЕ 7
function litres(time) {
    return Math.floor(0.5 * time);
}
console.log(litres(3));

//ЗАДАНИЕ 8
function invert(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 0) {
        array[i] = array[i] * -1;
        }
    }
    return array ;
}
console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));

//ЗАДАНИЕ 9
function powersOfTwo(n){
    let result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));

//ЗАДАНИЕ 10
function grow(x){
    return x.reduce(function(product, n){
        return product * n;
    }, 1)
}
console.log(grow([1, 2, 3, 4]));

