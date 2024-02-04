// string - строка

let stringVariables = "Все что заключенно в кавычки 123"

//number число +- 2^53-1

let numberValues = 45

//bigint целые числа произвольной длинны

let bigIntValue = BigInt(2)

//boolean логическое значение

let trueValue = true
let falseValue = false

//null пустое значение

let nullValue = null

// undefined

let undefValue = undefined

//symbol

let symbolVAlue = Symbol("2")

//object

let newObject = {}
let newObject2 = new Object({a: 2})
let newObject3 = Object.assign({a: 3})

const user = {
    name: "Alex",
    age: 23,
    location: {
        country: "Russia",
        city: "Moskva",
        street: "Krasnaya"
    },
    isStudent: false,
    "my name": "Vasya"
}

// console.log(user.age)
// const user2 = user
// console.log(user.location.city = "Krasnodar")
// console.log("user", user)
// console.log("user2", user2)
// console.log(user["my name"])

//array массивы

const array = [1, 2, 3, 4, 5]
// const users = [user, user2]
// console.log(array)
// console.log(users)
// console.log(array[2] === 3)
//
// console.log("numberValues", typeof numberValues)
// console.log("nullValue", typeof nullValue)
// console.log("newObject", typeof newObject)

//function expression

function func1() {
    return "func12"
}


//вызов функции
func1()

//function Declaration

const func2 = function () {
    return "return func2"
}

//console.log(typeof func2)
func2.newFunc = "Hello world"

//console.log(func2.newFunc);

function getSum(num1, num2) {
    //const sum = num1 + num2
    return num1 + num2
}

let firstNumber = 7

function getSum2(num1, num2) {
    // console.log(firstNumber)
    firstNumber = firstNumber + 1
    const lastNumber = 9
    return num1 + num2
}

//getSum2(2, 3)

const getSum3 = (num1, num2) => {
    return num1 + num2
}
//console.log(getSum3(13,34))


let hello = "Hello world"
let num = 3.123213

// console.log("количество символов в " + hello, hello.length)
//
// console.log(hello.toUpperCase());
//
// console.log(num.toFixed(2))
//
// console.log(String(hello));
// Number(9)
// console.log(Boolean(" "));





// Задачи РЕШЕНИЕ

//Задача номер 1

let a = "number"

let b = 25

let c = {a: 25, b: "25"}

let d = c.a

let e = c["b"]


console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (e))





//Задача номер 2

const student={
    name:"Nikita",
    age: 17,
    adress:{
        city:"Krasnodar",
        street:"Krasnaya",
        numHome:13
    }
}

// console.log(students.adress)


//Задача номер 3

const students = [
    {
        name: "Студент1",
        age: 21,
        adress: {
            city:"Moscow",
            street:"Krasnaya ",
            numHome:15

        }
    },
    {
        name: "Студент2",
        age: 22,
        adress:{
            city:"Piter",
            street:"Bazovskaya ",
            numHome:19
        }
    },
    {
        name: "Студент3",
        age: 23,
        adress: {
            city:"Sochi",
            street:"Volokolamskaya ",
            numHome:1

        }
    }
];
console.log(students)
