const {users} = require("./data")
//indexOf lastIndexOf

const testArr = ["Яблоко", "Груша", "Банан"]
const testIndexOf = (arr, searchElement) => {
    const copyArr = arr.slice()
    console.log(copyArr.indexOf(searchElement));
    return arr
}
// console.log(testIndexOf(testArr,"Банан"));

const testLastIndexOf = (arr, searchElement) => {
    const copyArr = arr.slice()
    copyArr.lastIndexOf(searchElement)
    return arr
}
// console.log(testLastIndexOf(testArr, "Яблоко"));


//includes

const testIncludes = (arr, searchElement) => {
    const copyMassiv = arr.slice()
    if (copyMassiv.includes(searchElement)) {
        return "В массиве данный элемент уже есть"
    } else {
        return "Данного элемента в массиве нет"
    }

    return arr
}

// console.log(testIncludes(testArr,"Банан"));

const acceptScore = ["4", "5"]

const proxodStudenta = (arr, score) => {
    return arr.includes(score)
}

// console.log(proxodStudenta(acceptScore,"5"));


//find findIndex

const testFind = (arr) => {
    const callebeck = (el) => {
        return el.firstName === "Emily"
    }
    return arr.find(callebeck)
}

// console.log(testFind(users));


const customFind = (array, callback) => {

    for (const elem of array) {
        if (callback(elem)) {
            return elem
        }
    }
    return undefined
}
const getFirstName = (elem) => {
    // if (elem.lastName === "Nitzsche") {
    //     return true
    // } else {
    //     return false
    // }
    return elem.lastName === "Nitzsche" ? true : false
}
// console.log(customFind(users, getFirstName));


const testFindIndex = (arr) => {
    return arr.findIndex(el => el.firstName === "Emily")
}
// console.log(testFindIndex(users));
// console.log(users[testFindIndex(users)])


const testFilter = (arr) => {
    const arrCopy=[...arr]
    arrCopy.filter((elem) => {
        console.log(elem.Age < 50, elem.Age)
        return elem.Age < 50
    })
}
// console.log(testFilter(users))

const getAllMale=(arr)=>{
const arrCopy=[...arr]
    // return arrCopy.filter(el=>el.gender==="female")

    return arr.filter((el)=>{
        return el.gender==="male"
    })
}
// console.log(getAllMale(users));


const testMap=(arr)=>{
    return arr.map((el)=>{
        return {...el,gender:el.gender==="female"?"1":el.gender}
    })
}
// console.log(testMap(users));

const testMap1=(arr)=>{
    return arr.map((el)=>{
        return {...el,scores:el.age>50?[1,2,3,4,5]:[1,2,3]}
    })
}
// console.log(testMap1(users));


const gettAllNames=(arr)=>{
    return arr.map((el)=>{
        return el.firstName
    })
}
// console.log(gettAllNames(users));
// console.log(gettAllNames(users).indexOf("Emily"));



const testSortByAge=(arr)=>{
    const arrCopy=[...arr]
    return arrCopy.sort((a,b)=>{
        console.log(a.Age-b.Age, a.Age,b.Age)
        return b.Age-a.Age
    })
}
console.log(testSortByAge(users));


