// export - removes the errors from variables as its treated as module instead of a script 
export {}

// variable declation
let message = 'Hello World 1';
console.log(message);

// Declare variables with different data types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';
let n: null = null;
let u: undefined = undefined;

// Block strings
let sentence: string =  `My name is ${name}
I am a beginner in typescript`;
console.log(sentence);

// Array type
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// Array with mixed type - tuples, in this the number of element are fixed
let person1: [string, number] = ['Chris', 22];

// enum type
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);
// green will have value 6 and blue will have value 7
enum Color1 {Red = 5, Green, Blue};
 
// If you're unsure about variable type, use any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Saurabh';

let myVariable2: unknown = 10;
(myVariable2 as string).toUpperCase(); 


// Custom type - it checks whether the obj has name property
function hasName(obj: any): obj is {name: string} {
    return !!obj && 
        typeof obj === "object" && 
        "name" in obj
}

if (hasName(myVariable2)) {
    console.log(myVariable2.name)
}

// variable which can store multiple type
let multiType: number | boolean;
multiType = 20;
multiType = true;

// num3 is optional parameter, num2 has default value
function add(num1: number, num2: number=10, num3?: number) {
    return num1 + num2;
}

// function with objects
function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);

interface Person1 {
    firstName: string;
    lastName: string;
    email?: string; // email is marked as optional property
}

function fullName1(person: Person1) {
    console.log(`${person.firstName} ${person.lastName}`);
}

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager assinging tasks`);
    }

}

let m1 = new Manager(`Bruce`);
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);