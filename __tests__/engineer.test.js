const Engineer = require('../library/engineer.js')

describe('should create github for engineer.', () => {
    const setGitHub = "DavidLe";
    const e = new Engineer('David', 123, "davidle@hotmail.com", setGitHub);
    expect(e.github).tobe(setGitHub);
})

describe('should get github and return it.', () => {
    const setGitHub = "DavidLe";
    const e = new Engineer('David', 123, "davidle@hotmail.com", setGitHub);
    expect(e.getGithub()).tobe(setGitHub);
})
test ('role should return engineer', () => {
    const roleReturn = "Engineer";
    const e = new Engineer('David', 123, "davidle@hotmai.com", "DavidLe");
    expect(e.getRole()).tobe(roleReturn)
})

module.exports = Engineer