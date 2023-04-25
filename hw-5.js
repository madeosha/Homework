// задание 1
function numbers(a, b) {
    if (a >= b) {
        return b;
    }
    return 0;
}

console.log(numbers(8, 4));
console.log(numbers(6, 6));

// задание 2
function parity(n) {
    if (n % 2 == 0) {
        return "Число четное";
    }
    return "Число нечетное";
}

console.log(parity(86));
console.log(parity(173));

// задание 3.1
function cub(num) {
	console.log(num * 2);
}

cub(3);

// задание 3.2
function cub(num) {
    return num * num;
}

cub(3);

// задание 4
"use strict";
let age = prompt("Сколько Вам лет?", 12);

let printMessage;

if (age < 0) {
    printMessage = function () {
        console.log("Вы ввели неправильное значение!");
    }
}   else if(age <= 12) {
    printMessage = function () {
        console.log("Привет, друг!");
    }
}   else {
    printMessage = function () {
        console.log("Добро пожаловать!");
    }
}

printMessage();

// задание 5
Num1 = Number(prompt('Введи первое'));
Num2 = Number(prompt('Введи второе'));

const checkNum = (a,b) => {
    if (isNan(a) || isNan(b)) {
        return 'Одно или оба значения не являются числом'
    } 
        else return a*b;
}

// задание 6
function сheck() {
    (n = Number(prompt('Введите число'))); 
    alert(!isNaN(n) ? `n в кубе равняется ${n = n ** 3}` : 'Переданный параметр не является числом')
} 

сheck();

// задание 7
function getRectangleArea() {
    return this.radius ** 2 * this.pi;
  }
  function getRectanglePerimeter() {
    return this.radius * this.pi * 2;
  }
  
  const circle1 = {
    radius: 2,
    pi: 3.14,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  const circle2 = {
    radius: 6,
    pi: 3.14,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());
