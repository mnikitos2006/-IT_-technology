//Явное приведение типов
const a = "42"
const b = Number(a)
//console.log(typeof a)
//console.log(typeof b)

//неявное приведение типов
const c = a * 2
//console.log(typeof c)

//Псевдо истина и псевдо ложь

//false
/*console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(false))*/

//true

/*
console.log(Boolean("d"))
console.log(Boolean(42))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(() => {
}))*/


//Равенство

// == != не строгое равенство (проверка равенства значений)

//console.log(2 == "2")

//console.log([1, 2, 3] == "1,2,3")

//console.log([] == [])
//console.log([] === [])

//const arr = []
//const copyArr = arr
//console.log(arr === copyArr)
// === !== строгое равенство (проверка типов и значений)

//console.log(2 === "2")


//Неравенство < > <= >=

const a1 = 42
const a2 = "43"
const a3 = "44"
const a4 = "44"

console.log(a1 < a2)
console.log(a2 < a3)
console.log(a2 <= a3)

//Задачи РЕШЕНИЕ


//Задача номер 1

console.log(true + false)
console.log(12 / "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log([1] > null)
console.log("foo" + +"bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")
// console.log([‘x’] == ‘x’)
console.log([] + null + 1)
console.log(0 || "0" && {})
console.log([1, 2, 3] == [1, 2, 3])
console.log({} + [] + {} + [1])
console.log(!+[] + [] + ![])
console.log(new Date(0) - 0)
console.log(new Date(0) + 0)


//Задача номер 2

function programmOperation(a, b, znak) {
    if ((typeof a === 'string' && typeof b === 'string') ||
        (typeof a === 'number' && typeof b === 'number')) {

        // switch (znak) {
        //     case '<':
        //         return a < b;
        //     case '>':
        //         return a > b;
        //     case '==':
        //         return a == b;
        //     case '===':
        //         return a === b;
        //     default:
        //         return false;
        // }
        if (znak === '<') {
            return a < b;
        } else if (znak === '>') {
            return a > b;
        } else if (znak === '==') {
            return a == b;
        } else if (znak === '===') {
            return a === b;
        } else {
            console.log("Не те значения");
        }
}}


const nikTest=(num1,num2,znak)=>{
    if (znak==="+"){
        return num1+num2
    }
}

module.exports = {nikTest}
console.log(programmOperation(2, 4, '<'));
console.log(programmOperation('abc', 'def', '>'));
console.log(programmOperation(10, 'abc', '==='));
console.log(programmOperation(undefined, 5, '<'));
console.log(programmOperation(null, null, '==='));
