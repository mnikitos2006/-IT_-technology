//условный оператор
// if ,else if, else


//if
function getResult(param) {
    console.log("Функция запустилась со значением ", param)
    if (param) {
        console.log("Значение истинно")
    }
    console.log("*------------*")
}

// getResult(false)
// getResult(0)
// getResult(-0)
// getResult(NaN)
// getResult(null)
// getResult(NaN)
// getResult(true)
// getResult(1)
// getResult("1")
// getResult([])


// if, else

// function getResult1(num1, num2, znak) {
//     console.log("Функция getResult1 start", znak)
//     if (znak === "-") {
//         console.log(num1 - num2)
//     }
//
//     if (znak === "+") {
//         console.log(num1 + num2)
//     } else {
//         console.log("Знак не известен");
//     }
//     console.log("Функция getResult1 stop \n")
// }

function getResult1(num1, num2, znak) {
    console.log("Функция getResult1 start", znak)
    if (znak === "-") {
        return num1 - num2
    }

    if (znak === "+") {
        return num1 + num2
    } else {
        return "Знак не известен"
    }
    console.log("Функция getResult1 stop \n")
}

//getResult1(5, 5, "+")
//getResult1(5, 5, "mkmk")
//console.log(getResult1(5, 5, "-"));

//if ,else if, else
function getResult2(num1, num2, znak) {
    console.log("Функция getResult2 start", znak)
    if (znak === "-") {
        console.log(num1 - num2)
    } else if (znak === "+") {
        console.log(num1 + num2)
    } else {
        console.log("Знак не известен");
    }
    console.log("Функция getResult2 stop \n")
}

// getResult2(5, 5, "+")
// getResult2(5, 5, "-")
// getResult2(5, 5, "*")


function getResult3(num1, num2, znak) {
    if (!num1 || !num2 || !znak) {
        return "Нет аргументов"
    }
    if (typeof num1 !== "number" && typeof num2 !== "number") {
        return "Передайте пожалуйста числа"
    }
    if (znak === "+") {
        return num1 + num2
    }
    if (znak === "-") {
        return num1 - num2
    }

}

// function isAdult(age) {
//     if (!age) {
//         return "Error404"
//     }
//     if (age < 0) {
//         return "Error1"
//     }
//     if (typeof age !== "number") {
//         return "Error2"
//     }
//
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }


//Решение ЗАДАЧ

//1
function isAdult(age) {

    if (typeof age !== "number" && !age) {
        return "Введите значение"
    }
    if (typeof age !== "number") {
        return "Введите число"
    }

    if (age <= 0) {
        return "Не корректные данные"
    }
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

// console.log(isAdult(19))
// console.log(isAdult("16"))


//2
function findMax(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return "Введите числа, а не строку"
    }
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return "Числа равны"
    }
}

// console.log(findMax(5,20))
// console.log(findMax(20,5))
// console.log(findMax(5,5))
// console.log(findMax("2",5))


//3
function convertScoreToGrade(score) {
    if (typeof score === "string") {
        return "Введите число, а не строку"
    }
    if (score > 5 || score < 2) {
        return "Введите оценку в диапазоне 2-5"
    }
    switch (score) {
        case 2:
            return "F"
        case 3:
            return "D и C"
        case 4:
            return "B"
        case 5:
            return "A"
    }
}

// console.log(convertScoreToGrade(1))
// console.log(convertScoreToGrade(2))
// console.log(convertScoreToGrade(3))
// console.log(convertScoreToGrade(4))
// console.log(convertScoreToGrade(5))
// console.log(convertScoreToGrade(6))
// console.log(convertScoreToGrade("5"))


//4

function znachenieNumber(n) {
    if (typeof n === "string") {
        return "Введите число, а не строку"
    }
    if (n > 9 || n < 0) {
        return "Переменная n содержит только целые цифры от 0 до 9"
    }
    if (!Number.isInteger(n)) {
        return "Переменная n содержит только целые цифры от 0 до 9)))"
    }

    switch (n) {
        case 0:
            return "Ноль"
        case 1:
            return "Один"
        case 2:
            return "Два"
        case 3:
            return "Три"
        case 4:
            return "Четыре"
        case 5:
            return "Пять"
        case 6:
            return "Шесть"
        case 7:
            return "Семь"
        case 8:
            return "Восемь"
        case 9:
            return "Девять"
    }
}

// console.log(znachenieNumber("1"))
// console.log(znachenieNumber(1.9))
// console.log(znachenieNumber(1))
// console.log(znachenieNumber(2))
// console.log(znachenieNumber(3))
// console.log(znachenieNumber(4))
// console.log(znachenieNumber(5))
// console.log(znachenieNumber(6))
// console.log(znachenieNumber(7))
// console.log(znachenieNumber(8))
// console.log(znachenieNumber(9))
// console.log(znachenieNumber(9.98))


//5

function perevestiZnachenie(size, unit) {
    if (unit === "Кб") {
        return size * 1024;
    } else if (unit === "Мб") {
        return size * 1024 * 1024;
    } else if (unit === "Гб") {
        return size * 1024 * 1024 * 1024;
    } else {
        console.log("Неизвестная единица измерения");
        return null;
    }
}

// console.log("БАЙТ= "+perevestiZnachenie(120, "Кб"));


//6

function sredneeChislo(a, b, c) {
    if (a > b && a < c || a > c && a < b) {
        return `Среднее число ${a}`
    } else if (b > a && b < c || b > c && b < a) {
        return `Среднее число ${b}`
    } else if (c > a && c < b || c > b && c < a) {
        return `Среднее число ${c}`
    }
}

// console.log(sredneeChislo(1, 2, 3));


//7

function applyDiscount(price, discount) {
    if (price >= 10000 && price >= "10000") {
        let skidka = price - discount
        return skidka
    } else {
        return "Сумма Вашего заказа слишком маленькая" + `, Итоговая сумма ${price}`
    }
}

// console.log(applyDiscount(7000, 300));
// console.log(applyDiscount(15000, 5000));


//8

function isPasswordStrong(password) {
    if (password.length >= 6 && /[a-zA-Z]/.test(password) === true && /[0-9]/.test(password) === true) {
        return "Отличный пароль"
    } else {
        return "Увы, но пароль плохой"
    }
}

// console.log(isPasswordStrong("dddddddddddekfkeekW1d"))


//9 То же самое что и номер 8


//10

function classifyTemperature(temp) {
    if (typeof temp === "string" || typeof temp === "number" && temp <= 0) {
        return "холодно"
    } else if (typeof temp === "string" || typeof temp === "number" && temp > 0 && temp < 20) {
        return "Тепло"
    } else {
        return "Жарища"
    }
}

// console.log(classifyTemperature(0))


//11

function isEven(number) {
    if (number % 2 === 0) {
        return "Число чётное"
    } else {
        return "Число нечётное"
    }
}

// console.log(isEven(15))


//12

function calculateDeliveryCost(distance, isFragile) {
    let plati = distance * 5
    if (isFragile === "yes") {
        return plati + 10
    } else {
        return plati
    }
}

// console.log("Привет, это программа рассчитывает сумму доставки твоего товара сначала введи КМ(расстояние), а потом " +
//     "введи yes если твой товар хрупкий, в противном случае напиши no =======" + calculateDeliveryCost(5,"no"))


//13


function ageRange(age) {
    if (age <= 0) {
        return "Некорректный возраст"
    }
    if (age > 0 && age <= 12) {
        return "Ты Ребёнок"
    } else if (age > 12 && age <= 18) {
        return "Ты Подросток"
    } else if (age > 18 && age <= 65) {
        return "Вы взрослый"
    } else {
        return "Вы пожилой"
    }
}

// console.log(ageRange("0"));


//14

function getSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        return "Зима"
    } else if (month === 3 || month === 4 || month === 5) {
        return "Весна"
    } else if (month === 6 || month === 7 || month === 8) {
        return "Лето"
    } else if (month === 9 || month === 10 || month === 11) {
        return "Осень"
    } else {
        return "Некорректный месяц"
    }
}

// console.log(getSeason(9))


//15

function getVixodnoy(day) {
    if (day === 1) {
        return "Не братан, сегодня работа, ПОНЕДЕЛЬНИК"
    } else if (day === 2) {
        return "Не братан, сегодня работа, ВТОРНИК"
    } else if (day === 3) {
        return "Не братан, сегодня работа, СРЕДА"
    } else if (day === 4) {
        return "Не братан, сегодня работа, ЧЕТВЕРГ"
    } else if (day === 5) {
        return "Не братан, сегодня работа, ПЯТНИЦА"
    } else if (day === 6) {
        return "УРА, сегодня выходной, СУББОТА"
    } else if (day === 7) {
        return "УРА, сегодня выходной, но завтра на работу, ВОСКРЕСЕНЬЕ"
    } else {
        return "Некорректный день недели"
    }
}

// console.log(getVixodnoy(1));
// console.log(getVixodnoy(2));
// console.log(getVixodnoy(3));
// console.log(getVixodnoy(4));
// console.log(getVixodnoy(5));
// console.log(getVixodnoy(6));
// console.log(getVixodnoy(7));
// console.log(getVixodnoy(8));


//16


function platiNalogSobaka(doxod) {
    let min = doxod * 0.13
    let max = doxod * 0.2
    if (doxod <= 10000) {
        return "Ваш доход ==== " + (doxod - min)
    } else {
        return "Ваш доход ==== " + (doxod - max)
    }
}

// console.log(platiNalogSobaka(5000));


//17
function skidki(age) {
    if (age > 0 && age <= 7) {
        return "Вам одобрена скидка 15%"
    } else if (age > 7 && age <= 17) {
        return "Вам одобрена скидка 10%"
    } else if (age > 17 && age <= 65) {
        return "У Вас скидки нет"
    } else if (age > 65) {
        return "Вам одобрена скидка 20%"
    } else {
        return "Error"
    }
}

// console.log(skidki(90));






//18


function films(film){
    if (film==="G"){
        return "фильм для всех возрастов"
    }else if (film==="PG"){
        return "фильм детям рекомендуется смотреть в сопровождении взрослых"
    }else if (film==="PG-13"){
        return "фильм для детей старше 13 лет"
    }else if (film==="R"){
        return "фильм для лиц старше 17 лет"
    }else{
        return "УВЫ, но такого фильма нет"
    }
}

// console.log(films("G"));
// console.log(films("G5"));



//19
function sytki(time) {
    if (time >= 6 && time < 12) {
        return "утро";
    } else if (time >= 12 && time < 18) {
        return "день";
    } else if (time >= 18 && time < 24) {
        return "вечер";
    } else {
        return "ночь";
    }
}

// console.log(sytki(17))






//20
function zatrata(electro){
    if (electro>0&& electro<=100){
        return "У Вас тариф A"
    }else if (electro>100&&electro<=500){
        return "У Вас тариф Б"
    }else{
        return "У Вас тариф В"
    }
}

// console.log(zatrata(700));


//21



const nikTest=(num1,num2,znak)=>{
    if (znak==="+"){
        return num1+num2
    }
}
module.exports = {nikTest,getResult3, isAdult,}
