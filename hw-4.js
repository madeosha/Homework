// задание 1
let i = 0;

while (i < 2) {
    console.log ("Привет");
    i++;
}

// задание 2
let a = 1;

while (a <= 5) {
    console.log (a);
    a++;
}

// задание 3
let b = 7;

while (b <= 22) {
    console.log (b);
    b++;
}

// задание 4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// задание 5
let num = 0;
for (let n=1000; n>50; n=n/2) {
    console.log(n); num++;
}

// задание 6
for (let friday = 5; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница, ${friday} - e число. Необходимо подготовить отчёт`);
}

