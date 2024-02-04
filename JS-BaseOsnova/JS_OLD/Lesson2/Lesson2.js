// let age = 11
// // Условная конструкция
// if (age >= 18) {
//     console.log("Годен служить")
// } else {
//     console.log("Еще маленький");
// }

// switch (age) {
//     case 18: {
//         console.log("Годен служить")
//         break // приостанавливает дальнейшее выполнение
//     }
//     default: {
//         console.log("Не годен служить")
//     }
// }

// тернарный оператор
// условие ? если условие верно : условие не верно
// age >= 18?console.log("Годен служить"):  console.log("Не годен служить")
// Циклы
// цикл - повтор набора действий пока не нарушится определенное условие
// цикл с параметром
//while цикл с условием
//do while цикл с условием который выполнится в любом случае 1 раз
// var i = 0
//
// while(true){
//     // console.log(i)
//     if(i===800000000){
//         break
//     }
//     i=i+1
// }
// for("начало отсчета";"конец отсчета";'обновление значение'){}
// for("инициализация";"проверка условия";'обновление значение'){}
// for(var i=0;i<=100;i=i+1){
//     console.log(i)
// }
// var j=0 //инициализация
// while (j<=100 ){ //проверка
//     console.log(j)
//     j=j+1 //обновление значения
// }
// Функции

// var a=5
// var b=10

// function summa(num1,num2) {
//     console.log(num1+num2)
// }
// summa(a,b)
// summa(3,5)
// summa(6,5)

// function newSumma(sum1, sum2) {
//     // let summa = sum1 + sum2
//     return sum1 + sum2
// }

// function newSumma(4,5) {
//     let summa=4+5
//     return 9
// }
// console.log(newSumma(4, 5));
// console.log(9);

// console.log(newSumma(4, 5));
var ARCHER = "archer"
var GOBLIN= "goblin"
var EMPLOYEE = "employee"

function createArcher() {
    console.log("Создание лучника")
}
function createEmployee() {
    console.log("Создание работника")
}
function createGoblin() {
    console.log("Создание гоблина")
}

function createCharacter(char) {
    if(char===ARCHER){
        createArcher()
    }
    if(char===EMPLOYEE){
        createEmployee()
    }
    if(char===GOBLIN){
        createGoblin()
    }
}
console.log("Старт Игры")
console.log("Выберите персонажа")
createCharacter("archer")

