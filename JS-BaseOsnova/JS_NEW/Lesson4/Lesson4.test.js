const {nikTest}=require("./Lesson4")
const expect = require("expect");

describe("nikTest", () => {
    test("nik test sum", () => {
        expect(nikTest(1, 2, "+")).toEqual(5);
    });
});
