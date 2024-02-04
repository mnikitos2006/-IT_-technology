const {example3, example9} = require("./Lesson4");


test("test lesson3", () => {
    expect(example3(3)).toBe(6)
    expect(example3("Строка")).toBe("Введенное значение не корректно")
    expect(example3(undefined)).toBe("Введенное значение не корректно")
    expect(example3(null)).toBe("Введенное значение не корректно")
    expect(example3([])).toBe("Введенное значение не корректно")
    expect(example3()).toBe("Введенное значение не корректно")
})

test("test example9", () => {
    expect(example9(3, 4)).toBe(true)
    expect(example9(4, 4)).toBe(false)
    expect(example9("4", "5")).toBe(true)
    expect(example9("4", "5")).toBe(true)
    expect(example9("kot", "Kot")).toBe(false)
    expect(example9("kit", "kot")).toBe(true)
    expect(example9("kit", "ko")).toBe(true)
})