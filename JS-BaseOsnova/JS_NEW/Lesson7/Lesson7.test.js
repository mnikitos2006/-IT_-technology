const {getLengthArrayCustom} = require("./Lesson7")
const {users} = require("./data")
describe("tests getLengthArrayCustom", () => {
    test("getLengthArrayCustom must be equal 15 ", () => {
        expect(getLengthArrayCustom(users)).toEqual(15)
    })
})
