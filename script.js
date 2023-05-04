function gameSeason() {
let monthNumber = Number(prompt('Введите номер месяца, чтобы узнать сезон'));
if (monthNumber >=  1 && monthNumber <= 2 || monthNumber == 12) {
    alert("Зима");    
} else if (monthNumber >=  3 && monthNumber <= 4 || monthNumber == 5) {
    alert("Весна");
} else if (monthNumber >=  6 && monthNumber <= 7 || monthNumber == 8) {
    alert("Лето"); 
} else if (monthNumber >=  9 && monthNumber <= 10 || monthNumber == 11) {
    alert("Осень"); 
} else {
    alert("Вы ввели что-то не то");
}
}


function gameWord() {
let fruitWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruitWords = fruitWords.sort(() => Math.random() - 0.5);
alert(fruitWords);
let questionOne = prompt('Чему равнялся первый элемент массива?');
let questionTwo = prompt('Чему равнялся последний элемент массива?');
    for (let i = 0; i < fruitWords.length; i++) {
        if (questionOne === fruitWords[0] && questionTwo === fruitWords[6]) {
            alert('Поздравляю, ты угадал!');
            break;
        } else if (questionOne === fruitWords[0] || questionTwo === fruitWords[6]) {
            alert('Вы были близки к победе!');
            break;
        } else {
            alert('Ответ неверный, попробуйте еще раз!');
            break;
        }
    }
}