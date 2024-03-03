const {convertUserData} = require("./Lesson10")
describe("tests for convertUserData", () => {
    test("result should be Иван Иванов ", () => {
        expect(convertUserData("иван","петров")).toEqual("Иван Петров")
        expect(convertUserData(" иван","петров ")).toEqual("Иван Петров")
        expect(convertUserData(" иван "," петров ")).toEqual("Иван Петров")
        expect(convertUserData(""," петров ")).toEqual("Петров")
    })
})
