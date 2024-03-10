// Объекты

let user = new Object()
const user1 = {}

const student = {
    name: "Ivan",
    age: 19,
    isStudent: true,
    voice: function (a) {
        return "Привет" + a
    },
    "likes birds": false
}
// console.log(student.name)
// console.log(student.age)
// console.log(student.voice("?"))

student.from = {city: "London"}
// console.log(student.from)

//Удаление
delete student.age
// console.log(student["likes birds"])

const getValue = (key) => {
    return student[key]
}
// console.log(getValue("voice")("!"))
// console.log(student.voice("!"))

const setValue = (key, value) => {
    const newStudent = {
        [key]: value
    }
    return newStudent
}
// console.log(setValue("name","Ivan"))

const mapperUserArr = () => {
    const users = [
        {id: "user1", name: "Bob1"},
        {id: "user2", name: "Bob2"},
        {id: "user3", name: "Bob3"},
    ]
    const result = {}
    const mappedUser = {}
    users.forEach((user) => {
        console.log(user.id, user)
        mappedUser[user.id] = user
    })
    console.log(mappedUser)
    console.log(mappedUser.user2)
}
// console.log(mapperUserArr())


const createObj = (name, age) => {

    return {
        name,
        age
    }
}
// console.log(createObj("Ivan", 27));


// console.log("name" in student)


const getAllValue = (obj) => {
    for (const key in obj) {
        console.log(key)
        console.log(obj[key])
    }
}
// console.log(getAllValue(student));


//копирование объекта
const copyObj = () => {
    const user = {
        name: "Bob",
        age: 17,
        from: "Russia"
    }
    // const newUser=user
    // newUser.city = "Moscow"
    // console.log(user)
    // console.log(newUser)
    const newCopyUser = {...user}
    newCopyUser.city = "Krasnodar"
    console.log(user)
    console.log(newCopyUser)
}
// console.log(copyObj());

const copyObj2 = () => {
    const user = {
        name: "Bob",
        age: 17,
        from: {
            city: "Krasnodar",
        }
    }
    const newUser = {}
    for (const userKey in user) {
        newUser[userKey] = user[userKey]
    }
    user.from.city = "Moscow"
    console.log(user)
    console.log(newUser)
}
// console.log(copyObj2());

const copyObj3 = () => {
    const user = {
        name: "Bob",
        age: 17,
        from: {
            city: "Krasnodar",
        }
    }
    const newUser = {}
    Object.assign(newUser, user)
    user.from.city = "Taganrog"
    console.log(user)
    console.log(newUser)
}
// console.log(copyObj3());

const optionsChain = () => {
    const user = {
        name: "Bob",
        age: 17,
        voice:()=>{
            return "Chinazes"
        },
        student: {
            adress: {
                street: {
                    name: "StreetName"
                }
            }
        },
        from: {
            city: "Krasnodar",
        }
    }
    if (user.student) {
        if (user.student.adress){
            if (user.student.adress.street){

            }
        }
        console.log(user.student.adress.street.name)
    } else {
        console.log("Такого свойства нет")
    }

    console.log(user.student?.adress?.street?.name)
    console.log(user.voice?.())
}
// console.log(optionsChain());


