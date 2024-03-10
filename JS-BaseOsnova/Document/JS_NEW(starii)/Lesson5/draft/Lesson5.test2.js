const {f5, isAdult,findMax,nikTest} = require("../Lesson5");
const expect = require("expect");
test("test1", () => {
    expect(f5(2, 3, "+")).toEqual(5)
    expect(f5(5, 3, "-")).toEqual(2)
    expect(f5(5, 3, "sdad")).toEqual("Что то пошло не так")

    expect(f5(undefined, 3, "+")).toEqual("Не хватает аргументов")
    expect(f5(3, undefined, "+")).toEqual("Не хватает аргументов")
    expect(f5(3, 3, undefined)).toEqual("Не хватает аргументов")
    expect(f5()).toEqual("Не хватает аргументов")
})

describe("test isAdult", () => {
    test("isAdult должен быть true", () => {
        expect(isAdult(18)).toEqual(true)
        expect(isAdult(19)).toEqual(true)
    })

    test("isAdult должен быть false", () => {
        expect(isAdult(12)).toEqual(false)
    })

    test("isAdult негативные сценарии", () => {
        expect(isAdult(-1)).toEqual("Не корректные данные")
        expect(isAdult(0)).toEqual("Не корректные данные")
        expect(isAdult()).toEqual("Введите значение")
        expect(isAdult("ddasd")).toEqual("Введите число")
    })
})

describe("nikTest", () => {
    test("nik test sum", () => {
        expect(nikTest(1, 2, "+")).toEqual(3);
    });
});

