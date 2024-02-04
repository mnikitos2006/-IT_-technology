//Сравнение значений

//Результат сравнения - логическое значение true / false

// Приведение типов
// явное приведение
function example1() {
    var a = 6
    a = String(a)
    console.log(typeof (a))
}

//example1()
// неявное приведение
function example2() {
    var a = "42"
    var b = a * 2
    console.log(b)
}

function example3(a) {
    if (typeof (a) == "number") {
        return a * 2
    } else {
        return "Введенное значение не корректно"
    }
}

//
// console.log(example3(3));
// console.log(example3("Строка"));

// Псевдо ложные и псевдо истинные значения(как будто ложные или истинные)

// псевдо ложные

function example4() {
    var a = ""
    console.log(Boolean(a))
    var a = 0
    console.log(Boolean(a))
    var a = -0
    console.log(Boolean(a))
    var a = NaN
    console.log(Boolean(a))
    var a = false
    console.log(Boolean(a))
    var a = undefined
    console.log(Boolean(a))
    var a = null
    console.log(Boolean(a))
}

//example4()
//псевдо истинные значения
function example5() {
    var a = "hello"
    console.log(Boolean(a))
    var a = " "
    console.log(Boolean(a))
    var a = true
    console.log(Boolean(a))
    var a = []
    console.log(Boolean(a))
    var a = {}
    console.log(Boolean(a))
    var a = function a() {
    }
    console.log(Boolean(a))
}

//example5()

//Равенство

// ==, ===, !=, !==

// ===, !== Строгое равенство проверяет тип и значение (Запрещено приведение типов)
// ==, != Не строгое равенство проверяет только значение(Происходит приведение типов)

function example6() {
    var a = 42
    var b = "42"
    console.log(a == b)
    console.log(a === b)
}

// example6()

function example7(a, b) {
    return a == b
}

function example8(a, b) {
    return a === b
}

// Неравенство
// <, >, <=, >=
function example9(a, b) {
    return a < b
}


module.exports = {example3, example7, example8,example9}
