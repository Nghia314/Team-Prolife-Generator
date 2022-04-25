const Employee = require('../library/Employee');

describe('Employee', () => {
it('should create a new employee', () => {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
})
})

describe('getName.', () => {
    const eName= "David";
    const e = new Employee(eName);
    expect(e.name()).toBe(eName);
})
describe('getId.', () => {
    const eId= "123";
    const e = new Employee(eName, eId);
    expect(e.id()).toBe(eId);
})
describe('getEmail.', () => {
    const eEmail= "david@gmail.com";
    const e = new Employee(eName, eId, eEmail);
    expect(e.email()).toBe(eEmail);
})

test('should get name by getName method.', () => {
     const setName = "David";
     const e = new Employee(setName);
     expect(e.getName()).toBe(setName);
})

test('should get through getID method.', () =>{
    const setID = 123;
    const e = new Employee('David', setID);
    expect (e.getId()).toBe(setID);
})
test('should get email through getEmail method.', () => {
    const setEmail = "davidle@hotmail.com"
    const e = new Employee("David", 123, setEmail);
    expect(e.getEmail()).toBe(setID);
})

test('test role.', () => { 
    const returnRole = 'Employee';
    const e = new Employee("David", 123, "davidle@hotmail.com");
    expect(e.getRole()).toBe(returnRole);
})



