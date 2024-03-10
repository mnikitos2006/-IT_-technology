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


const isPasswordStrong = (password) => {
    if (password.length < 6) {
        return "Пароль слишком короткий, Минимум 6 символов"
    }

    let sumbolsBukv = false
    for (let el of password) {
        if ((el >= 'a' && el <= 'z') || (el >= 'A' && el <= 'Z')) {
            sumbolsBukv = true
        }
    }
    if (!sumbolsBukv) {
        return "Пароль должен содержать буквы"
    }

    let sumbolsCifr = false
    for (let el of password) {
        if (el >= '0' && el <= '9') {
            sumbolsCifr = true
        }
    }
    if (!sumbolsCifr) {
        return "Пароль должен содержать цифры"
    }

    return "Отличный пароль!";
}

// console.log(isPasswordStrong("opkojhggd67"))


//1
const createAndDisplayPerson = (name, age) => {
    const person = {
        name,
        age
    }
    return person
}
//console.log(createAndDisplayPerson("Nik","17"));


//2
const createObj = (title, author, year) => {
    const book = {
        title,
        author,
        year
    }
    const nazvanie = "Название книги: " + book.title
    const avtor = "Автор книги: " + book.author
    const godIzdaniya = "Год издания книги: " + book.year
    return nazvanie + `\n` + avtor + `\n` + godIzdaniya
}

// console.log(createObj("Тестируем", "Тест", "17"));


//3


let user = {
    name: "Никита",
    email: "mnikitos2006@gmail.com"
}

const updateEmail = (newUser, newEmail) => {
    let copyObjUser = {...user}
    if (copyObjUser.name === newUser) {
        return copyObjUser.email = `Ты изменил свою почту с ${copyObjUser.email} на ` + `\n` + newEmail + `\n` + `\n` + "Вот твои данные: " + `\n` + "Имя: " + copyObjUser.name + `\n` + "Почта: " + newEmail
    } else {
        return "Ты не тот пользователь, ты не сможешь изменить свою почту"
    }
}
// console.log(updateEmail("Никита", "westenterprise@yandex.ru"));
