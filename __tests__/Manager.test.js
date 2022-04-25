const Manager = require('../library/manager.js')

describe('should create an officeNumber.', () => {
    const setOfNumbers = 2;
    const e = new Manager('David', 123, "davidle@hotmail.com", setOfNumbers);
    expect(e.officeNumber).tobe(setOfNumbers);
})

describe('should get office number for manager and return it.', () => {
    const setOfNumbers = 2;
    const e = new Manager('David', 123, "davidle@hotmail.com", setOfNumbers);
    expect(e.getOfficeNumber()).tobe(setOfNumbers);
})
test ('role should return engineer', () => {
    const roleReturn = "Manager";
    const e = new Manager('David', 123, "davidle@hotmai.com", 2);
    expect(e.getRole()).tobe(roleReturn)
})

module.exports = Manager;