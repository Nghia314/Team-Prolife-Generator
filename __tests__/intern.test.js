const Intern = require('../library/intern.js')

describe('should create school for intern.', () => {
    const setSchool = "School Name";
    const e = new Intern('David', 123, "davidle@hotmail.com", setSchool);
    expect(e.school).tobe(setSchool);
})

describe('should get office number for intern.', () => {
    const setSchool = "School Name";
    const e = new Intern('David', 123, "davidle@hotmail.com", setSchool);
    expect(e.getSchool()).tobe(setSchool);
})
test ('role should return engineer', () => {
    const roleReturn = "Intern";
    const e = new Intern('David', 123, "davidle@hotmai.com", "School Name");
    expect(e.getRole()).tobe(roleReturn)
})

module.exports = Intern