//***** ES6 class *****

//base class
class Human {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Hello! my name is ${this.name}`;
  }
}

//child class
class Person extends Human {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  //override 'tostring' parent function
  toString() {
    return super.toString() + " and my age is " + this.age + ".";
  }
}

//create an instance
var p = new Person("Sergio Forés", 43);
p.toString(); //Hello, my name is Michael Jacksan and my age is 43.

console.log(p.toString());
