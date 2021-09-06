//Arithmetic operations:
let a = 10;
let b = 20;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("Exponent: a ** b = ", a ** b);

var x = 10;
var x = 20;
//let a = 10;
//Datatypes: number, string, boolean, undefined, null, object, bigint, symbol

const m = [10, 'abcd', '20', true, '$', null, num = {'num1': 10, 'num2': 20}]
console.log(m)

//Different types of Function Definitions:

function isEven(x) {
    if (x%2 == 0) 
        return true;
    else if (x%2 == 1)
        return false;
}
console.log("Used 1st type of function definition: isEven(10): ", isEven(10));

var add2Nums = function(a, b) {
    return a + b;
}
console.log("Used 2nd type of function definition called Anonymous function: add2Nums(10, 20): ", add2Nums(10, 20));

var findSquare = (x) => {
    return x*x;
}
console.log("Used 3rd type of function definition called arrow functions: findSquare(10): ", findSquare(10));

//Arrays:
let arr = [10, 'abcd', '20', true, '$', null, num = {'num1': 10, 'num2': 20}]

console.log("Iterating an array: \n");
for (let v of arr) {
    console.log(v);
}

arr.unshift(100); //Inserts all elements given as parameters at the beginning of array
console.log(arr);
arr.unshift(200, 'abc', '30');
console.log(arr);
arr.push(80) //Inserts at end
console.log(arr);
arr.shift(); //Can delete only 1 element from start
console.log(arr);
arr.pop(); //Can delete only 1 element from end
console.log(arr);
//splice(startIndex, number of elements to delete, elements to insert)
arr.splice(2, 0, 400, 500) // Used for both inserting and deleting
console.log(arr);
arr.splice(3, 2, 12, 100, 'abc');
console.log(arr);
/*
//Objects:
//They are of 3 types: Object literal, Constructor fn class

//Object Literal:
let emp = {
    eno: 100,
    name: 'Abcd',
    city: 'Hyderabad',
}

//Accessing objects:
console.log(emp['name'])   //bracket notation
console.log(emp.name)      //Dot notation

//Adding new properties to existing objects:
emp.sal = 50000
emp.eno = 300
console.log(emp);

delete emp.sal;
console.log(emp);

//Iterating an object:
for (let v in emp) {
    console.log(v);
    console.log(emp[v]);
}

//Real time objects are complex Objects:
emp  = {
    eno: 100,
    name: 'Ravi',
    skills: ['Javascript', 'Html', 'Angular', 'Node'],
    address: {
        flatno: 300,
        street: 'Street 1',
        city: 'Hyderabad',
        pincodes: [1200, 4500]
    },
    getAge: function() {
        return 30;
    },
    basic: 50000,
    getSalary: function() {
        let hra = this.basic*0.15;
        let da = this.basic*0.1;
        let salary = this.basic + hra + da;
        return salary;
    }
};
console.log(emp);
let salary = emp.getSalary();
console.log(salary);

//Constructor function: (We won't discuss about it because it is not currently in use but it's like constructors in c++)

//Class:

class Emp {
    constructor(id, name, age) {
        this.empid = id;
        this.empname = name;
        this.empage = age;
    }
    printData() {
        console.log('eid: ', this.empid);
        console.log('ename: ', this.empname);
        console.log('Emp age: ', this.empage);
    }
};
let emp1 = new Emp(1, 'Person1', 19);
let emp2 = new Emp(2, 'Person2', 20);
let emp3 = new Emp(3, 'Person3', 19);
console.log(emp1.printData())
console.log(emp2.printData())
console.log(emp3.printData())

//For inheritance use extends keyword(same as Java)
*/