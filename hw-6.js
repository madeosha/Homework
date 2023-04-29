// задание 1
const numeral = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numeral.length; i++) {
console.log(numeral[i]);
if (numeral[i] == 10) break;
}

//задание 2
const position = [1, 5, 4, 10, 0, 3];
position.indexOf(4);

// задание 3
const unity = [1, 3, 5, 10, 20];
const str = unity.join('');

console.log(str);

// задание 4
let arr = [];

for (let i = 0;i <= 2; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 2; j++) {
		arr[i][j]=1; 
	}
}

console.log(arr);

//задание 5
const numbs = [1, 1, 1];
numbs.push(2,2,2);

console.log(numbs);

// задание 6
let nums = [9, 8, 7, 'a', 6, 5];
nums = nums.sort();

console.log(nums);

let delNums = nums.pop();

console.log(nums);

// задание 7
const arrSearch = [9, 8, 7, 6, 5]; 
 
let userNumber = Number(prompt('Введите число 1 от 10')); 
 
if(arrSearch.includes(userNumber)){ 
    alert('Данное число входит в массив'); 
} else { 
    alert('Данное число не входит в массив'); 
}

// задание 8
let word = 'abcdef';
word = word.split('');

console.log(word);

word = word.reverse();

console.log(word);

word = word.join();

console.log(word);

//задание 9
let array = [[1, 2, 3,],[4, 5, 6]];
array = array.flat();

console.log(array);

//задание 10
let sum = [2, 4, 5, 6, 8];

for (let i = 1; i < sum.length; i++) {
	console.log(sum[i - 1] + sum[i]);
}

// задание 11
const integer = [10, 25, 2, 33];

let result = integer.map(item => (item * 2));

console.log(result);

//задание 12
let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
 
let res = getLengthWords.map(function (item) {
    return item.length;
});

console.log(res)


//задание 13
const set = [5, -3, 50, -6];

function negativeNumbers(set) {
  return set.filter(function(value) {
    return value < 0;
  });
}
console.log(negativeNumbers(set));

//задание 14
//задание 15