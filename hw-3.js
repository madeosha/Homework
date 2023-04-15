// задание 1
let password = 'зевс';
let check = prompt('Введите пароль');
if (password = 'зевс') {
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
        console.log('Зима');        
        break;
    case 1:
        console.log('Зима');        
        break;
    case 2:
        console.log('Зима');        
        break;
    case 3:
        console.log('Весна');        
        break;
    case 4:
        console.log('Весна');        
        break;
    case 5:
        console.log('Весна');        
        break;
    case 6:
        console.log('Лето');        
        break;
    case 7:
        console.log('Лето');        
        break;
    case 8:
        console.log('Лето');        
        break;
    case 9:
        console.log('Осень');        
        break;
    case 10:
        console.log('Осень');        
        break;
    case 11:
        console.log('Осень');        
        break;
    default:
        console.log('Ввёл что-то не то');
        break;
}