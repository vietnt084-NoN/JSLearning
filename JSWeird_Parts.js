// 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

function mapForEach(arr, fn){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

const arr = [2,3,4,5];

let newArray = mapForEach(arr, function(item){
    return item + 1;
})

console.log(newArray);


let checkPassLimit = function(item){
    return item + 1;
}

let newArray2 = mapForEach(arr, checkPassLimit.bind(this));
console.log(newArray2)

// // Call, bind, apply 

const Info = {
    name: 'Viet Nguyen',
    age: 25,
    getInfo: function() {
        var info = this.name + ' ' +  this.age;
        return info;
    }
}

var PrintInfo = function() {
    console.log('Info: '+ this.getInfo());
}

var LogInfo = PrintInfo.bind(Info);

LogInfo();


// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function() {
        
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
        
//     }
// }

// var logName = function(lang1, lang2) {

//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('-----------');
    
// }

// var logPersonName = logName.bind(person);
// logPersonName('en');

// logName.call(person, 'en', 'es');
// logName.apply(person, ['en', 'es']);

// (function(lang1, lang2) {

//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('-----------');
    
// }).apply(person, ['es', 'en']);

// // function borrowing
// var person2 = {
//     firstname: 'Jane',
//     lastname: 'Doe'
// }

// console.log(person.getFullName.apply(person2));

// // function currying
// function multiply(a, b) {
//     return a*b;   
// }

// var multipleByTwo = multiply.bind(this, 2);
// console.log(multipleByTwo(4));

// var multipleByThree = multiply.bind(this, 3);
// console.log(multipleByThree(4));





//------------------------------------------
// function LogLater(){
//     const greeting = 'Hello';

//     setTimeout(function(){
//         console.log(greeting);
//     }, 3000);

// }

// LogLater();


// function LogWhenDone(callback){
//     const a = 2000;
//     const b = 3000;

//     callback();
// }


// LogWhenDone(function(){
//     console.log('Hello, Done nhe!')
// });



// -------------------------------------
// // function statement
// function greet(name) {
//     console.log('Hello ' + name);   
// }
// greet('John');

// // using a function expression
// var greetFunc = function(name) {
//     console.log('Hello ' + name);
// };
// greetFunc('John');

// // using an Immediately Invoked Function Expression (IIFE)
// var greeting = function(name) {
    
//     return 'Hello ' + name;
    
// }('John');

// console.log(greeting);

// // IIFE
// var firstname = 'John';

// (function(name) {
    
//     var greeting = 'Inside IIFE: Hello';
//     console.log(greeting + ' ' + name);
    
// }(firstname)); // IIFE


// -------------------------------------



// function greet(firstname, lastname, language, ...data) {
 
//     language = language || 'en';
    
//     if (arguments.length === 0) {
//         console.log('Missing parameters!');
//         console.log('-------------');
//         return;
//     }
    
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(data)
//     console.log(arguments);
//     console.log('arg 0: ' + arguments[0]);
//     console.log('-------------');
    
// }

// greet();
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'es', 'vietnam');

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments


// -------------------------------------


// function a() {
//     console.log(this);
//     this.newvariable = 'hello';
// }

// var b = function() {
//     console.log(this);   
// }

// a();

// console.log(newvariable); // not good!

// b();

// var c = {
//     name: 'The c object',
//     log: function() {
//         var self = this;
        
//         self.name = 'Updated c object';
//         console.log(self);
        
//         var setname = function(newname) {
//             self.name = newname;    // if use this will refer is global object ( window )
//         }
//         setname('Updated again! The c object');
//         console.log(self);
//     }
// }

// c.log();

// -------------------------------------

// var a = 5;
// var b;

// b = a;
// a = 2;

// // value 
// console.log('a: ' + a);
// console.log('b: ' + b);

// const c = { data: 'Hello'};
// var d;

// d = c;
// c.data = 'Goodbye';

// // reference 
// console.log('c: ' + c.data);
// console.log('d: ' + d.data);

// function changeValue(obj){
//     obj.data = 'Hi'
// }

// changeValue(c);

// console.log('c: ' + c.data);
// console.log('d: ' + d.data);




// console.log("Hello, world");

// Hello();

// function Hello(params) {
//     console.log('Hi')
// }

// // Hi(); // Hoisting var Hi not hoisting function Hi

// // var Hi = function () {
// //     console.log('LeuLeu')
// // }

// function log(a){
//     a(); // executing params is a function ( log() )
// }

// log(function(){
//     console.log('Hello, Viet')
// })



// var greeting = 'Hello'
// var greeting = 'Hi'

// // => Object 

// const Greet = {
//     English: 'Hello',
//     Sing: 'Hi'
// };
