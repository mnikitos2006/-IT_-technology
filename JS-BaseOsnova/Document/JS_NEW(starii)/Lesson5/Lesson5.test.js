const {getResult3, isAdult} = require("./Lesson5")

describe("tests for getResult3", () => {
    test("getResult sum test", () => {
        expect(getResult3(5, 5, "+")).toEqual(10)
    })

    test("getResult minus test", () => {
        expect(getResult3(15, 5, "-")).toEqual(10)
    })

    test("getResult negative", () => {
        expect(getResult3()).toEqual("Нет аргументов")
        expect(getResult3(undefined, null, "+")).toEqual("Нет аргументов")
        expect(getResult3("10", "10", "+")).toEqual("Передайте пожалуйста числа")
    })

})

describe("test for isAdult", () => {
    test("isAdult should return true", () => {
        expect(isAdult(18)).toEqual(true)
        expect(isAdult(19)).toEqual(true)
    })
    test("isAdult should return false", () => {
        expect(isAdult(17)).toEqual(false)
        expect(isAdult(0)).toEqual(false)
    })
    test("isAdult negative scenario", () => {
        expect(isAdult(-1)).toEqual("Error1")
        expect(isAdult("33")).toEqual("Error2")
        expect(isAdult()).toEqual("Error404")
    })
})
