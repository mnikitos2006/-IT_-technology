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

