// задание 1
let password = 'зевс';
let check = prompt('Введите пароль');
if (password === check) {
    alert ("Пароль введен верно");
} else {
    alert ("Пароль введен неверно");
}


// задание 2
let c = 2;
if (c>0 && c<10) {
    alert ("Верно");
} else {
    alert ("Неверно");
}

// задание 3
let d = 853;
let e = 352;
if (d > 100 || e > 100) {
    alert ("Верно");
} else {
    alert ("Неверно");
}


// задание 4
let a = Number ('2');
let b = Number ('3');
alert(a + b);

// задание 5
let monthNumber = Number(prompt('Введите номер месяца, чтобы узнать сезон'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');        
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');        
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');        
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');        
        break;
    default:
        console.log('Ввёл что-то не то');
        break;
}

// задание 7
let number = prompt('Пожалуйста, введите любое число');

if (isNaN(number)) {
    alert('Вы ввели не число');
} else {
    alert((number % 2 === 0) ? 'Число четное' : 'Число нечетное');
}

// задание 8
const platform = navigator.platform;

let clientIOS = 0;

if (platform === 'Android') {
    clientIOS = 1;
} else {
    clientIOS = 0;
}

alert(clientIOS === 1 ? 'Установите версию приложения для Android по ссылке' : 'Установите версию приложения для iOS по ссылке');
