//Условный оператор

//if, else, else if

function f1(a) {
    if (a) {
        console.log("Условие истинно")
    }
}

// f1(false)
// f1("")
// f1(0)
// f1(-0)
// f1(NaN)
// f1(undefined)
// f1(null)
// f1()
//
// f1(2-2)

function f2(a) {
    if (a) {
        //a===true
        console.log("Условие истинно")
    } else {
        //a===false
        console.log("Выполнится если условие ложно")
    }
}


function f3(num1, num2, znak) {
    if (znak === "+") {
        return num1 + num2
    }

    if (znak === "-") {
        return num1 - num2
    } else {
        return "Неизвестный знак"
    }
}

// console.log(f3(2, 3, "+"));
// console.log(f3(12, 3, "-"));
// console.log(f3(12, 3, "*"));

function f4(num1, num2, znak) {
    //начало 1 условия
    if (znak === "+") {
        console.log(num1 + num2)
    }
    //конец 1 условия

    //начало 2 условия
    if (znak === "-") {
        console.log(num1 - num2)
    } else {
        console.log("Неизвестный знак")
    }
    //конец 2 условия
}

// console.log("1 вызов")
// f4(2, 3, "+")
// console.log("2 вызов")
// f4(12, 3, "-")
// console.log("3вызов")
// f4(2, 3, "*")

//  if else if esle

function f5(num1, num2, znak) {
    if (num1 && num2 && znak) {
        if (znak === "+") {
            return num1 + num2
        } else if (znak === "-") {
            return num1 - num2
        } else {
            return "Что то пошло не так"
        }
    } else {
        return "Не хватает аргументов"
    }

}

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

console.log(isAdult(18))
function findMax() {

}

module.exports = {f5, isAdult, findMax}
