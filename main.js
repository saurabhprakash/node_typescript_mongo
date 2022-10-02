"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// variable declation
var message = 'Hello World 1';
console.log(message);
// Declare variables with different data types
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var n = null;
var u = undefined;
// Block strings
var sentence = "My name is ".concat(name, "\nI am a beginner in typescript");
console.log(sentence);
// Array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Array with mixed type - tuples, in this the number of element are fixed
var person1 = ['Chris', 22];
// enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// green will have value 6 and blue will have value 7
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
;
// If you're unsure about variable type, use any type
var randomValue = 10;
randomValue = true;
randomValue = 'Saurabh';
var myVariable2 = 10;
myVariable2.toUpperCase();
// Custom type - it checks whether the obj has name property
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// variable which can store multiple type
var multiType;
multiType = 20;
multiType = true;
// num3 is optional parameter, num2 has default value
function add(num1, num2, num3) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
// function with objects
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName1(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager assinging tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
