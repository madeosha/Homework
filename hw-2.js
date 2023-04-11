// задание 1
let a;
a = 10;
alert(a);
a = 20;
alert(a);

// задание 2
let iPhone;
iPhone = 'Год выпуска первого iPhone - 2007';
alert(iPhone);

// задание 3
let creatorJs;
creatorJs = 'JavaScript создал Брендан Айк';
alert(creatorJs);

// задание 4
let first = 10;
let second = 2;
alert(first+second);
alert(first-second);
alert(first*second);
alert(first/second);

// задание 5
let result = 2**5;
alert(result);


// задание 6
let b = 9;
let c = 2;
alert(b % c);

// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// задание 8
let age = prompt('Сколько Вам лет?');
alert(age);

//задание 9
const user = {
    name: 'Елена',
    age: 27,
    isAdmin: true
};
user.cityOfResidence = 'Пермь';
user.age = 35;
delete user ['cityOfResidence'];
let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//задание 10
let question = prompt("Как Вас зовут?");
alert(`Привет, ${question}!`);