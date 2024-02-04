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

function isAdult(age) {
    if (!age) {
        return "Error404"
    }
    if (age < 0) {
        return "Error1"
    }
    if (typeof age !== "number") {
        return "Error2"
    }

    if (age >= 18) {
        return true
    } else {
        return false
    }
}


// Логические операторы для проверки двух и более условий

//     || логическое или
// ||=

//&& логическое и

// &&= логическое присваивание и

// ! логическое не

// ?? оператор нулевого слияния

// ?= оператор нулевого присваивания

// ||

// console.log(true || true) //true
// console.log(true || false)//true
// console.log(false || true)//true
// console.log(false || false)/false

function getMessage(result) {
    if (result) {
        console.log("Общее условие истинно!!!")
    } else {
        console.log("условие ложно!!!")
    }
}

function logIli() {
    const a = 2
    const b = 3
    const c = 4

    const usl1 = a > b
    const usl2 = b > c
    const result = usl1 || usl2
    console.log("a < b", usl1)
    console.log("b > c", usl2)
    console.log("a < b || b > c", result)
    getMessage(result)

}

//Логическое И &&

// console.log(true && true)// true
// console.log(false && true) //false
// console.log(true && false) //false
// console.log(false && false) //false

function logI() {
    const a = 2
    const b = 3
    const c = 4
    const usl1 = a > b
    const usl2 = b > c
    const result = usl1 && usl2
    console.log(usl1)
    console.log(usl2)
    console.log(result)
    getMessage(result)
}


//оператор не !

// console.log(true)
// console.log(!true)
// console.log(!!true)
//
// console.log(!"Привет")


function logNE(arg) {
    if (!arg) {
        return "аргумента нет"
    }
    return "Функция работает"
}

function logNE2(arg) {
    if (arg) {
        return "Функция работает"
    } else {
        return "аргумента нет"
    }
}

console.log(logNE())
console.log(logNE2())


module.exports = {getResult3, isAdult}
