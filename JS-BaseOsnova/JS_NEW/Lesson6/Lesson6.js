// массивы
// array

//способы создания массивов
const array1 = []//используем этот
const array2 = new Array()//устаревший способ

// console.log(array1)
// console.log(array2)

const fruits = ["apple", "lemon", "banana", "яблоко"]
// console.log(fruits)
fruits.map((el) => {
    // console.log(el)
})

// Добавим элемент в массив с фруктами
fruits[4] = "ананас"
// console.log(fruits)

//Метод push
fruits.push("мандарин")
// console.log(fruits)

// console.log("Длина массива fruits = ", fruits.length)//кол-во элементов в массиве (индекс+1)

fruits[fruits.length] = `киви-${fruits.length}`
// console.log(fruits)

fruits[123] = "фрукт-123"
// console.log(fruits)


const students = [
    {
        id: 1, name: "Иван", age: 25, hello: () => {
            return "Hello1"
        }
    },
    {id: 2, name: "Максим", age: 19},
    {id: 3, name: "Дмитрий", age: 29},
]
// console.log(students)
// console.log("name",students[0].name)
// console.log(students[0].hello())

// Получение последнего элемента из массива students
let posledniiEl = students.length - 1
//console.log("Получение последнего элемента из массива students = ", posledniiEl)

let posledniiElfrukt = fruits.length - 1
//console.log("Получение последнего элемента из массива fruits = ", posledniiElfrukt)

// Получение последнего элемента с помощью at
//console.log(students.at(-1))


//Методы pop/push shift/unshift

//Добавление эл в конец
fruits.push("апельсин")
console.log(fruits)

//Удаление эл с конца
fruits.pop()
console.log(fruits)

// Добавление эл в начало
fruits.unshift("манго")
console.log(fruits)

//Удаление эл с начала
fruits.shift()
console.log(fruits)

// Очередь push/pop
//Стек push/shift

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (const fruit of fruits) {
    console.log(fruit)
}

//всё чётко


//Задачи

// Задача 1
let massivCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const maxCount = () => {
    return Math.max.apply(null, massivCount)
}
// console.log(maxCount());

// Задача 2

let arrayRemove = [0, 1, 2, null, undefined, 3, 4, 5]
const removeFalsy = () => {
    return arrayRemove.filter((el) => {
        return !!el
    })
}
// console.log(removeFalsy());


// Задача 3

const sumArray = () => {
    let massivSum = [10, 10, 10, 10, 10]
    let count = 0
    for (let i = 0; i < massivSum.length; i++) {
        count += massivSum[i]
    }
    // console.log(count)
}
// console.log(sumArray())


// Задача 4
let array9 = [1, 2, 3, 4, 5]
let array10 = [6, 7, 8, 9, 10]

const obedinenMassivi = () => {
    return array9.concat(array10)//concat()---> объеденение массивов
}
// console.log(obedinenMassivi());


// Задача 5
let massivProverka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const proverkaMassivaNaZnachenie = (param) => {
    if (massivProverka.includes(param)) {// includes(param)-------> Проверка: включает ли массив этот param
        return "Такое значение есть в массиве"
    } else {
        return "Такого элемента в массиве нет"
    }
}
// console.log(proverkaMassivaNaZnachenie(10));


// Задача 6

const filterByCondition = (array, condition) => {
    return array.filter(condition);
}
const yslovie = (num) => {
    return num % 2 === 0;
}// Функция, которая проверяет какое-то условие

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// Массив

const filteredArray = filterByCondition(myArray, yslovie); // Сама фильтрация этого массива

// console.log(filteredArray);


// Задача 7

const transformElements = (arr, func) => {
    let transformedArr = [];

    for (let i = 0; i < arr.length; i++) {
        transformedArr.push(func(arr[i]));
    }

    return transformedArr;
}

const vichislenie = (x) => {
    return x ** 3;
}

let arr = [1, 2, 3, 4, 5];
let transformedArr = transformElements(arr, vichislenie);
// console.log(transformedArr);

// Задача 8
let massivKakoito = [1, 1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const countOccurrences = (chislo) => {
    let count = 0;
    for (let i = 0; i < massivKakoito.length; i++) {
        if (massivKakoito[i] === chislo) {
            count++;
        }
    }
    return count;
}
// console.log(countOccurrences());


// Задача 9
let massivChisel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = () => {
    let mas = massivChisel.slice().reverse();
    return mas;
}

// console.log(reverseArray());

