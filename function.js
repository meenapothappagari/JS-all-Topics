// ...........Function call back.............

// function call baack cheyadam ela?

// function call back is a function that is passing as an argument to another function.
// EXAMPLE 1: Ikkada second ane function ni first call cheyadam
     function first(a){
       a() //ikkada a( anedi second function avtundi)
        console.log("this is first function")
    }
    function second(){
        console.log(" This is second function")
    }
    first(second)
// O/P => This is second function
// this is first function


// EXAMPLE 2:
// function add(a,b){
//     console.log(a+b)
// }
// function product(a,b){
//     console.log(a*b)
// }
// function caluculater(val1,val2,operater){
//     operater(val1,val2)
// }
// caluculater(4,5,add)
// caluculater(4,5,product)
// O/P => 
// 9
// 20

// ................Higher order function...........
// HOF is a function that receives another function as argument another function



// function declaration => normal function ni manam ela rastamo ala rayadame function declaration.
// function sum(a,b){
//     console.log(a+b)
// }
// sum(3,6)

// function expression => 

// let sum=function(a,b){
//     console.log(a+b)

// }
// sum(2,5)
// ...........Ivi 2 function Expression..... 
// name function => with name tho declare cheyadam
// function sum(a,b){
//     console.log(a+b)
// }
// sum(3,6)

// arrow function => direct ga function lekunna sare run avtubdi

let sum=(a,b,callback)=>{
  console.log(a+b)
}
sum(5,8)








// FUNCTIONS : REUSABLE BLOCK OF CODE.
//TYPE OF FUNCTIONS.
//1. FUNCTION DECLARATION: DECLARING A FUNCTION.
//2. FUNCTION EXPRESSION: EXPRESSION A FUNCTION INSIDE A VARIABLE.
//3. ANONYMOUS FUNCTION: A FUNCTION WITHOUT A NAME.
//4. ARROW FUNCTION: A FUNCTION WHICH HAVE A SYNTAX AS AN ARROW. ()=>{  }
//5. IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION.
//6. CALLBACK FUNCTION: A FUNCTION WHICH IS PASSED AS A ARGUMENT TO ANOTHER FUNCTION.
//7. NAMED FUNCTION: A FUNCTION WITH A NAME.
//8. Higher order function: A function which accepts another function as a parameter.

//FUNCTION DECLARATION

// function declaration(a=3, b=4) { //default values
//     function declaration(a = 3, b = 4) {
//       //default values
//       //parameters = > formal values. Just represent the arguments inside a function
//       return a + b; // return keyword is used to return a value from a function. break statement
//        console.log(a + b);
//       console.log(a + b);
//       console.log(a + b);
//       console.log(a + b);
//     }
//     let b = declaration // function ko store karr raha hu.
//     let abc = declaration(1,2); //argurments= > Actual values. FUNCTION KI RETURN VALUE KO STORE KARRA HU.
    
    // console.log(abc); 
    // let b = declaration; // function ko store karr raha hu.
    // let abc = declaration(1, 2); //argurments= > Actual values. FUNCTION KI RETURN VALUE KO STORE KARRA HU.
    
    // console.log(abc);
    
    //FUNCTION EXPRESSION
    
    // let sum = function (a, b) {
    //   console.log( a + b);
    // }
    // sum(2,3)
    
    
    // };
    
    //ANONYMOUS FUNCTION
    //ANONYMOUS FUNCTION ==> Function without a name. And they need to be expressed by a variable.
    
    // let anonymous = function () {
    //   console.log("I am an anonymous function");
    // }
    // };
    
    // Invoking a function and calling a function are used interchangeably.
    
    //ARROW FUNCTION == released in es6, this function handles this keyword in a better way.
    //ARROW FUNCTION == released in es6, this function handles "this" keyword in a better way.It is just a easier way to write a function.
    
    // let arrow = (a, b, callback) => {
    // console.log("this is arrow funciton")
    // callback()
    // }
    //   console.log("This is arrow funciton");
    
    
    // arrow(1,2,callback);
    
    // callback()
    //   console.log("IIFE function");
    // })();
    
    
    //CALLBACK FUNCTION => These are passed inside a function as argument.
    
  //   function callback() { 
  //     console.log("This is a callback function");
  //   function callback(result) {
  //     return result+" this is frm t                                                                        gggggg he callback function";
  //   }
  // }
  //   console.log(callback());
    
    //HIGHER ORDER FUNCTION => A function which accepts another function as a parameter.
    // function higherOrderFunction(callback){
    //   callback();
    //   console.log("This is a higher order function");
    // (function iife(){
    //   console.log("IIFE FUNCTION");
    // })();
    
    // function higherOrder(a, b, iife) {
    //   let result = a + b;
    //   // return callback(result);
    //   iffe()
    // }
    
    // higherOrderFunction(callback)
    // console.log(higherOrder(1, 2, iife));
    
    
    //IIFE FUNCTION => IMMEDIEATELY INVOKED FUNCTION EXPRESSION
    
    
    
    // PENDING THINGS : 
    //1. THIS KEYWORD 
    //2. IIFE FUNCTION : ENCAPSULATION


    // FUNCTIONS : REUSABLE BLOCK OF CODE.

//TYPE OF FUNCTIONS.

//1. FUNCTION DECLARATION: DECLARING A FUNCTION.
//2. FUNCTION EXPRESSION: EXPRESSION A FUNCTION INSIDE A VARIABLE.
//3. ANONYMOUS FUNCTION: A FUNCTION WITHOUT A NAME.
//4. ARROW FUNCTION: A FUNCTION WHICH HAVE A SYNTAX AS AN ARROW. ()=>{  }
//5. IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION.
//6. CALLBACK FUNCTION: A FUNCTION WHICH IS PASSED AS A ARGUMENT TO ANOTHER FUNCTION.
//7. Higher order function: A function which accepts another function as a parameter.

//FUNCTION DECLARATION

// function declaration(a = 3, b = 4) {
//   //default values
//   //parameters = > formal values. Just represent the arguments inside a function
//   return a + b; // return keyword is used to return a value from a function. break statement
//   console.log(a + b);
//   console.log(a + b);
//   console.log(a + b);
// }
// let b = declaration; // function ko store karr raha hu.
// let abc = declaration(1, 2); //argurments= > Actual values. FUNCTION KI RETURN VALUE KO STORE KARRA HU.

// console.log(abc);

//FUNCTION EXPRESSION

// let varFunc = function (a, b) {
//   return a + b;
// };

//ANONYMOUS FUNCTION ==> Function without a name. And they need to be expressed by a variable.

// let anonymous = function () {
//   console.log("I am an anonymous function");
// };

// Invoking a function and calling a function are used interchangeably.

//ARROW FUNCTION == released in es6, this function handles "this" keyword in a better way.It is just a easier way to write a function.

// let arrow = (a, b, callback) => {
//   console.log("This is arrow funciton");
// };

// arrow(1,2,callback);

//IIFE=> Immediately Invoked Function Expression

// (function iife(){
//   console.log("IIFE function");
// })();

//CALLBACK FUNCTION => These are passed inside a function as argument.

// function callback(result) {
//   return result + " this is frm the callback function";
// }
// console.log(callback());

// (function iife(){
//   console.log("IIFE FUNCTION");
// })();

// function higherOrder(a, b, iife) {
//   let result = a + b;
//   // return callback(result);
//   callback()
// }

// console.log(higherOrder(1, 2, iife));

//IIFE FUNCTION => IMMEDIEATELY INVOKED FUNCTION EXPRESSION

// PENDING THINGS :
//1. THIS KEYWORD
//2. IIFE FUNCTION : ENCAPSULATION

//Function declaration

// add(2,7);

// function add (a,b){
//   console.log("Add function");
// }
// add=(2,6)

//Function expression  = => NOt hoisted

// let add = function(){
//   console.log("Add function");
// }

// add();

// anonymous function

//  let add =  function(){
//     console.log("Add function");
//   }``

//Arrow function

// let add =  () =>{
//   console.log("Add function");
// }

//Higher Order Function

// function HOF(a, b, callback) {
//   let result = a + b;
//   return callback(result);
// }

// console.log(HOF(1, 2, callback));

// //callback function

// function callback(result) {
//   return result + " this is from the callback function";
// }


//IIFE FUNCTION =   Immediately Invoked Function Expression


// let a = 12;
// (function add(){
//   console.log("Add function");
//   console.log(a)
// })();

// add()


//Methods: Functions inside an object are called methods.
//map =- > it returns a new array. modify each element based on the condition in callback function.
// let ar = [1, 2, 3, 4, 5];

// function callback(value){
//   return value*2;
// }
// let newArr = ar.map(callback);

// console.log(newArr, ar);


//filter => it returns a new array based on the condition.

// let ar = [1, 2, 3, 4, 5];
// let newArr = ar.filter((value) => {
//   return value % 2==0;
// });

// console.log(newArr, ar);





//reduce method => it returns a single value based on the condition.
// the second argument is the accumulator value.( inital value)
// let ar = [1, 2, 3, 4, 5];

// const sumArr = ar.reduce((acc, curr)=>{
//   return acc+curr;
// },10)
// console.log(sumArr)

