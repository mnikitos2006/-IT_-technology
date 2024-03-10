// Типы кавычек "" '' ``

let single = 'Одиночные кавычки'
let double = 'Двойные кавычки'
let backTick = `Бектики`


let testStr = "Спортивный клуб пенсионеров 'СПАРТАК' "


const getSum = (a, b) => {
    let result = a + b
    return `Сумма ${a}+${b} = ${result}`
}
// console.log(getSum(1, 2));


const getSum1 = (a, b) => {
    return `Сумма ${a}+${b} = ${a + b}`
}
// console.log(getSum1(1, 2));


const testString = "Hello\nWorld"

// console.log(testString.length)
// let last=testString.length-1
// console.log(testString[last])
// console.log(testString.at(-1))


const testLoopFor = (str) => {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
    }
}
// console.log(testLoopFor(testString))


const testLoopForOf = (str) => {
    for (const strElement of str) {
        console.log(strElement)
    }
}
// console.log(testLoopForOf(testString));


const testFunStr = () => {
    const str = "Hello"
    str[0] = "h"//не работает
    console.log(str)
}


const testToUpperCase = (str) => {
    console.log(str.toUpperCase())
}
// console.log(testToUpperCase(testString));

const testToLowerCase = (str) => {
    console.log(str.toLowerCase());
}
// console.log(testToLowerCase(testString));


const testToTrim = () => {
    let probelStr = "Иван "
    console.log(probelStr.trim().length)
    console.log(probelStr.length)
}
// console.log(testToTrim());


//Поиск элементов в строке

const testSearch = (str) => {
    // console.log(str)
    // console.log(str.indexOf("порт"))
    // console.log(str.indexOf("н",1))

    const target = "н"
    let pos = 0
    let count = 0
    while (true) {
        let foundPos = str.indexOf(target, pos)
        pos = foundPos + 1
        count = count + 1
        if (foundPos === -1) {
            break
        }
        console.log("Нашли на позиции:" + foundPos)
        console.log(count)

    }
}
// console.log(testSearch(testStr));


const testIncludes = (str, searchStr) => {
    // console.log(str)
    return str.toLowerCase().includes(searchStr.toLowerCase().trim())
}
// console.log(testIncludes(testStr,"Спартак"));


const testStartWith = (str, start) => {
    return str.startsWith(start)
}
//console.log(testStartWith("https://mail.ru", "https://"));


// срез строки

const testSlice = (str) => {
    console.log(str.slice(16))
}
// console.log(testSlice(testStr));

const trimAndUpperStr = (str) => {
    if (!str) return ''
    const trimStr = str.trim()
    const firstLetter = trimStr[0].toUpperCase()
    return `${firstLetter}${trimStr.slice(1)}`
}
const convertUserData = (firstName, lastName) => {
    // return `${trimAndUpperStr(firstName)} ${trimAndUpperStr(lastName)}`.trim()
    const args = [firstName, lastName]
    const result = []
    args.forEach(el => {
        result.push(trimAndUpperStr(el))
    })
    return result.join(" ").trim()
}
// console.log(convertUserData("иван", "петров"));


const testSplit = (str) => {
    return str.split(" ").join(" - ")
}
// console.log(testSplit(testStr))


const testSravnenie = () => {
    const a = "a"
    const z = "z"
    const Z = "Z"
    console.log(a.codePointAt(0))
    console.log(z.codePointAt(0))
    console.log(Z.codePointAt(0))
    console.log(a > z)
    console.log("Создание символа", String.fromCodePoint(97))
    const str=[]
    for (let i = 0; i <150; i++) {
        str.push(String.fromCodePoint(i))
    }
    console.log(str.join(", "))
}
console.log(testSravnenie())

module.exports = {convertUserData}
