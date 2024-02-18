const {users} = require("./data")


/// Найти количество элементов в массиве
// 1) получить массив
// 2) создать переменную для хранения количества элементов =0
// 3) Пройтись по всем элементам в массиве //цикл
// 4) В процессе итерации(в момент прохода по конкретному элементу) добавляем к счетчику +1
// 5) Вывод результата работы функции
const getLengthArrayCustom = (arr) => {
    // console.log(arr) -1 step
    let totalCount = 0 // step 2

    for (const arrElement of arr) { // step 3
        totalCount = totalCount + 1 // step 4
    }

    return totalCount // step 5
}


const getLengthArrCustomV2 = (arr) => {
    //делаем копию
    const arrCopy = [...arr]
    //разворачиваем скопированный массив
    const reversArray = arrCopy.reverse()
    // берем 0 элемент из перевернутого(reverseArray) массива (он является последним элементом в исходном)
    const firstElementInReverseArray = reversArray[0]
    // ищем индекс элемента в исходном массиве(arr)
    const index = arr.indexOf(firstElementInReverseArray)
    // плюсуем 1 и выводим значение
    return index + 1
}


// splice   arr.splice(indexStart,deleteCount,elem1,... , elemN)
// indexStart - с какой позиции начинаем
// deleteCount -  сколько элементов удалить
// elem - то что вставим вместо удаленного

const testSpice = (arr) => {
    const arrCopy = [...arr]
    //delete arrCopy[1] удаляет элемент но не удаляет ячейку из массива
    //console.log("deleteElement", arrCopy.splice(1, 10, "1", "2", "3"))
    arrCopy.splice(1, 10, "1", "2", "3")
    // console.log("deleteElement", arrCopy.splice(1, 1, {новые данные}))


    console.log(arr.length)
    console.log(arrCopy.length)
    //вставить не удаляя элементов

    arrCopy.splice(3, 0, "123")

    return arrCopy
}


//удалить 5,6,7 запись в массиве юзеров
// вернуть изменненный массив
// исходник не менять
// последнюю запись меняем на нового пользователя которого создадим руками

const nikTest = () => {
    let arrCopy = [...users]
    let newArr = arrCopy.splice(4, 3)
    let dobavlMas = [{
        "createdAt": "2024-02-10T10:26:27.478Z",
        "firstName": "LOX",
        "lastName": "Rutherford",
        "gender": "male",
        "city": "Severn",
        "numberPhone": "1-514-902-8598 x48113",
        "Age": 29,
        "id": "16"
    }]
    arrCopy.push(dobavlMas)
    return arrCopy
}
// console.log(nikTest());


//slice arr.slice(start,end)

const testSlice = (arr) => {
    const newArr = arr.slice(-1)
    // console.log(newArr.length)
    return newArr
}


// concat  создает новый и копирует данные из других массивов

const testConcat = () => {
    const arr1 = [1, 2, 3]
    const arr3 = [4, 5, 6]
    let newArr = []
    newArr = newArr.concat(arr1, arr3)

    return newArr
}
// console.log(testConcat());

const testSpred = () => {
    // спред оператор
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const result = [...arr2, ...arr1, ...arr1]
    return result
}


//Метод forEach перебор элементов
// arr.forEach(function(item,index,array){
//  ...что то делаете
// })


// Массив покупок
const purchases = [
    {name: "Apple", price: 2.5},
    {name: "Banana", price: 1.5},
    {name: "Orange", price: 3.0}
];

// Переменная для хранения общей суммы покупок
let totalCost = 0;

// Используем forEach для перебора каждой покупки и вычисления общей суммы
purchases.forEach((purchase, index) => {
    totalCost += purchase.price;
    console.log(`Purchase ${index + 1}: ${purchase.name} - $${purchase.price}`);
});

// Выводим общую стоимость покупок
console.log(`Total cost of purchases: $${totalCost}`);


// Задача 10


const uniqueElements = (arr) => {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}

// console.log(uniqueElements([1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, "Hello", "Hello"]));


// Задача 12

const nikFunc = (mass1, mass2) => {
    return mass1.filter(element => !mass2.includes(element))

}
// console.log(nikFunc([1, 2, 3], [1, 1, 5, 4]));

module.exports = {getLengthArrayCustom, getLengthArrCustomV2}
