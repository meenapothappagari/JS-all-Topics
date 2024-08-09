// ...............................ARRAY METHODS............................

// WHAT IS Array?
// JAVASCRIPT  WON'T TAKE NAGETIVE INDEX..(" because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.")
// Array => arrrays are " Non Primitive Data type" (index and value pair)type of array is object.
// 1) Pop
// 2) Push
// 3) Shift
// 4) Unshift

// 5) Special operater => Delete oprater very poor practice to use it.
// let arr=[1,2,3,4,4]
// let arr1=[5,6,7,8,9]
// console.log(arr,arr.length,"this is specisl operater")
// O/P => [ 1, 2, 3, 4, 4 ] 5 this is specisl operater

// 6) Array.at() => It is used to "Return the Element at a specified index".
// console.log(arr.at(0),"this is second element")
// o/p => 1 index okka place ni teliyachestundi

// 7) Concat method() => It is used to "join two or more arrays".
// console.log(arr.concat(arr1))
// o/p => [1, 2, 3, 4, 4,
//     5, 6, 7, 8, 9
//   ]

// 8) copywithin method() => It is used to "Copy a port of an array to another location in the same array"
// (target,start,end) If you don't provide the start and end than it will copy the whole array
// console.log(arr.copywithin(target,start,end))
// let arr=[1,2,3,4,5]
// console.log(arr.copyWithin(2,3))
// o/p=> [ 1, 2, 4, 5, 5 ]                 " Koncham doubt ga undi"

// 9) Flat method => 
// let arr=[1,2,3,4,4]
// let arr1=[5,6,7,[8,9,[1,2,3]]]   " Depth of array" paranthisis lo number maruste anni arrays add avthay
// ikkada naku oka array lo maro array ichanu print lo 1 ichanu kabatti last lo oka array undi inkoti add ayindi.
// 2 va print lo 2 ichanu kabatti motham arrays add ayyay
// console.log(arr1.flat(1))
// console.log(arr1.flat(2))
// o/p=> [ 5, 6, 7, 8, 9, [ 1, 2, 3 ] ]
// [
//   5, 6, 7, 8,
//   9, 1, 2, 3
// ]


// 10) Array.isArray() => It is used to "check whether an object is an array or not Array.isArray"
// let arr1=[1,2,3]


// ........................................ARRAY METHODS............................
// Array length               
// Array at()
// Array join()     (IMPORTANT)
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()  (ITS A BIT  CONFUSE  TO UNDERSTAND)
// Array flat()
// Array splice()    (IMPORTANT)
// Array toSpliced()
// Array slice()     (IMPORTANT)
// Array includes()



// Array pop() => The pop() method removes the last element from an array:
// Example
// let a = [1,2,3,4,5];
// a.pop()
// console.log(a)
//  console.log(a.pop()); ("Last element ni remove chestundi")
// o/p => 5


// Array push() => this method " at the end adds a new element to an array "
// Example
// let a = [1,2,3,4,5];
// a.push("meena")
// console.log(a);


// Array shift() => this methods "removes the 1st array element "
// Example
// let a = ["meena",2,3,4,5];
// console.log(a.shift());
// o/p => meena


// Array unshift() => this method "at the start add a new element to an array"
// Example
// let a= [1,2,3,4,5];
// a.unshift(8)
// console.log(a); ( naku ikkada total array kavali kabatti ila chestam)
// o/p=> [ 8, 1, 2, 3, 4, 5 ]


// Array concat() => Concatenating arrays means joining arrays end-to-end.("join two or more arrays".)
// Note
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.(numbres kuda use chesi rayochu strings ne kakuknda)
// Example (Merging Three Arrays)
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7];
// let arr3 = [8,9];
// console.log(arr1.concat(arr2, arr3));
// o/p =>[
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]


// copywithin method() => It is used to "Copy a port of an array to another position in the same array"
// (target,start,end) If you don't provide the start and end than it will copy the whole array
// console.log(arr.copywithin(target,start,end))
// let arr=[1,2,3,4,5]
// console.log(arr.copyWithin(2,3))
// o/p=> [ 1, 2, 4, 5, 5 ]                


// Array flat() => This method creates a new array with sub-array elements concatenated to a specified depth.
// Example
// let a = [[1,2],[3,4],[5,6]];
// console.log(a.flat());
// o/p=> [ 1, 2, 3, 4, 5, 6 ]


// Array splice() => This method can be used to add new items to an array: 



// Array includes() => This allows us to check if an element is present in an array.
// Example
// let a = [1,2,3,4,5];
// console.log(a.includes(8)); 


// Find Method() => It is used to the "value of the first element" in an array that passes a condition.
// Example 
// let arr=[1,2,3,4,5,6,7,8]
// function callback(value){
//     return value>4;  //ikkada 5 ragane true avtundi kabatti tarvata unna vatitho pani lekunda first vacina element ne print avtundi
// }
// let result=arr.find(callback)
// console.log(result)
// o/p=> 5


// find index method => it is used to return the "index of the first element" in an array that passes a condition.
// Exapmle 
// let arr=[1,2,3,4,5,6,7,8]
// function callback(value){
//     return value>4;  //ikkada element okka index ni teluputundhi
// }
// let result=arr.findIndex(callback)
// console.log(result)

//  findlast()=> used to "return the value of the last element" in an aray.
// [arr.findLast(callback)]

// findlastIndex() => used to "return the Index of last element".

// Map method() => used to creat a new array with the results of calling a function for every array element.
// [arr.map(callback)]
// Example 
// let array= [1,2,3,4,5,6,7,8]
// let resultArr=[]
// for (let i=0; i<array.length; i++){
//     let product= array[i]*2;
//     resultArr.push(product)
// }
// console.log(resultArr)
// o/p=> [
//     2,  4,  6,  8,
//    10, 12, 14, 16
//  ] new array

// .....OR.....(map method)

// let resultArr= arr.map((value)=>{
//     // console.log(value)
//     return value*2
// })
// console.log(resultArr,"new array")
// o/p=> [
//     2,  4,  6,  8,
//    10, 12, 14, 16
//  ] new array



// filter method() => it is used to creat a new array with all the element that pass a condition.












//Array=> Non primitive data type, index and value pair, Mutable, type of array is object. let arr = [];
// console.log(""=="")
// console.log([]==[]) // address is different, reference is different

//1. Shift => It is used to remove the first element from an array. arr.shift()
//2. Unshift => It is used to add one or more elements to the beginning of an array. arr.unshift();
// 3. Pop => It is used to remove the last element from an array. arr.pop()
// 4. Push => It is used to add one or more elements to the end of an array. arr.push();

//Length property => It is used to return the length of an array. arr.length
//////////////0,1,2,3
// let arr = [1,2,3,4];
// console.log(arr.length, "This is the length of an array");
// arr.shift();
// arr.unshift("new element");

// arr.pop();
// arr.push("new element");
// console.log(arr, arr.length,"This is the array after removing the first element");

// //SPECIAL OPERATOR  = > delete operator,used to delete a value from an array. very poor practice to use it, It wont effect the length of an array.

// delete arr[1];
// console.log(arr,arr.length, "This is the array after removing the first element");

// let arr = [1, 2, 3, 4];

// toString => It is used to convert an array to a string. arr.toString()

// console.log(typeof arr.toString(),"This is the type" );

// Array.at() => It is used to return the element at a specified index. arr.at(index); 
//arr[index]

// console.log(arr.at(2), "This is the element at a specified index");
// console.log(arr[2])

//Concat Method => It is used to join two or more arrays. arr.concat(array1, array2, array3)

// let arr = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];

// console.log(arr.concat(arr2, [5,6,7,8]), "This is the joined array");

//Flat method => To flatten an array. arr.flat(depth). It is used to flatten an array to a specified depth. It returns a new array. It does not change the original array.
// let arr = [1,2,3,4];  //single dimensional array
// let arr2 = [1,4,[5,6,7,8,[1,2]]]; // depth of array is 2.
// depth == dimension of the array. [1,2,3] = > depth =1
//[1,2,[3,4]] => depth = 2
// [1,2,3[1,2,3,[1,2,3]]] => depth = 3

// console.log(arr2.flat(2), "This is the flattened array");

//Array.isArray() => It is used to check whether an object is an array or not. Array.isArray(arr).

// console.log(Array.isArray(arr2));

// let arr2 = [1, 4, [5, 6, 7, 8, [1, 2]], {}, "sasd"];
// console.log(Array.isArray(arr2[2]));

// for (let i = 0; i < arr2.length; i++) {
//   // console.log(arr2[i]);
//   console.log(Array.isArray(arr2[i]));
// }


//Array.slice() => It is used to extract a part of an array and returns a new array. arr.slice(start, end) if i dont mention the end it takes the length by default.

// let arr = [1,2,3,4]
// console.log(arr.slice(1,3), "This is the sliced array");


//Array.splice() => It is used to add or remove elements from an array. arr.splice(start index, deleteCount, insert_item1, insert_item2, insert_item3);

// let arr = [1,2,3,4];
// arr.splice(2,0,"new value", "new value2", "new value3");
// console.log(arr, "This is the spliced array");
// arr[arr.length-2] = "new value";
// console.log(arr, "This is the updated array");

//Join method => It is used to join all the elements of an array into a string. arr.join(separator) >> works the same as split method.
// let arr = ["Hello", "Shivansh", "Ankush", "Rahul"];

// console.log(arr.join("&&&&&"), "This is the joined string");

//Reverse method => It is used to reverse the elements of an array. arr.reverse()

// console.log(arr.reverse(), "This is the reversed array");

// let arr = [2,3,7,3,1];
// console.log(arr.reverse(), "This is the sorted array");

//Array.sort() => It is used to sort the elements of an array. arr.sort()

// let arr = [26,11,13,100,1,4]; // ascending order => 1,2,3,3,7 descending order => 7,3,3,2,1

// let strArr = ["Hello", "Shivansh", "Ankush", "Rahul"];

// console.log(arr.sort(), "This is the sorted array");
// console.log(arr.sort((a,b)=>b-a), "This is the sorted array"); 


//INDEXOF => It is used to return the index of the first occurrence of a specified value in an array. arr.indexOf(value)
// let arr = [2,3,7,3,1];
// console.log(arr.indexOf(3), "This is the index of the first occurrence of a specified value in an array");

// console.log(arr.lastIndexOf(3), "This is the index of the last occurrence of a specified value in an array");


//Array.includes() => It is used to check whether an array contains a specified value. arr.includes(value, start) it returns a boolean value.
// let arr = [2,3,7,3,10];
// console.log(arr.includes(2,4), "This is the boolean value");

//Array.copyWithin() => It is used to copy array elements within the array. arr.copyWithin(target index, start index, end index). if you don't provide the start and end then it will copy the whole array.
//target index -=> where you want to paste the copied array
//start index => from where you want to start copying the array
//end index => till where you want to copy the array

///////////0,1,2,3,5
// let arr = ["shivansh", "ankush", "rahul", "manoj", "muktai"];
// let arr = [1,2,3,4,5,6,7,8];

// let arr = ["A", "B", "C", "D", "E"];

// console.log(arr.copyWithin(0,3), "This is the copied array");

//Find method => It is used to return the value of the first element in an array that passes a condition. arr.find(callback);

// let arr = [1,2,3,4,5,6,7,8];

// function callback(value){
//     return value>6;
// }

// let result = arr.find((value)=>{
//     console.log("This is running", value)
//     return value>6;
// });
// function callback(value){
//     return value>5;
// }
// let result=arr.find((value)=>{
//     console.log(value)
//     return value>5;
// })

// console.log(result, "This is the value of the first element in an array that passes a condition");


//Find Index method => It is used to return the index of the first element in an array that passes a condition. arr.findIndex(callback);


// let arr = [1,2,3,4,5,6,7,8];

// function callback(value){
//     return value>6;
// }

// let result = arr.findIndex((value)=>{
//     console.log("This is running", value)
//     return value>6;
// });
// console.log(result, "This is the index of the first element in an array that passes a condition");

//findlastIndex => It is used to return the index of the last element in an array that passes a condition. arr.findlastIndex(callback);

//findLast() => It is used to return the value of the last element in an array that passes a condition. arr.findLast(callback);


//Map method: It is used to create a new array with the results of calling a function for every array element. arr.map(callback);


// let arr = [1,2,3,4,5,6,7,8];

// let resultArr = [];
// for(let i = 0;i<arr.length;i++){
//     resultArr.push(arr[i]*2);
// }

// let resultArrMap = arr.map((val)=>{
//     console.log("This is running", val);
//     return val+" this is the value";
// })

// console.log(resultArrMap, "This is the new array");



//Filter method => It is used to create a new array with all the elements that pass a condition. arr.filter(callback);

// let arr = [1,2,3,4];

// let resultArr = [];

// for(let i = 0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         resultArr.push(arr[i]);
//     }
// }

// let resultArrMap = arr.filter((val)=>{
//     console.log(val);
//     return val%2==0;
// })

// console.log(resultArrMap, "This is the new array");



//Reduce method => It is used to reduce the array to a single value. arr.reduce(callback, initialValue);

//accumulator = jama karna. Accumulating things

// let arr = [1,2,3,4,5,6,7,8];

// arr.splice(arr.length/2,0,"new value3");
// console.log(arr, "This is the spliced array");
// // let sum = 0;

// // for(let i = 0;i<arr.length;i++){
// //     sum+=arr[i];
// // }
// //
// // let arr = [1,2,3,4,5,6,7,8];  acc = 1 curr = 1 => 1*1 = 1
// // console.log(sum, "This is the sum of the array");
// let fun = (accumulator = 24, value)=>{
//     // console.log( accumulator, value);
//     return accumulator*value;  //stored in accumulator
// }
// let sum = arr.reduce(fun,1)
// console.log(sum, "This is the sum of the array");

//0+1 =1
//1+2 =3
//3+3 =6

// let x = 5;
// let arr = [];
// arr.length = x;
// arr.fill(100);
// console.log(arr);



//Spread Operator: It is used to spread the elements of an array. It is used to copy the elements of an array. syntax = >  ...arr Desctructuring

// let arr = [1,2,3,4,5,6];

// let newArr = ["A","B","C"] //copying , the address or the memory location is being copied.
// // newArr[2] = "Hello js"
// let combinedArr = [...arr, ...newArr];
// console.log(combinedArr, "This is the combined array");


// function sum(a,b,c){
//     return a+b+c;
// }
// let arr = [1,2,3];

// console.log(sum(arr[0],arr[1],arr[2]), "This is the sum of the array");
// console.log(sum(1,2,3), "This is the sum of the array");



// let arr = [1,2,3,4,5,6];
// let newArr =[...arr,1,12,3,123,14,1423];
// console.log(newArr, "This is the copied array");



//Rest Operator: It is used to combine the values of into an array.(bundle); syntax = > ...arr Desctructuring

// let a = 1
// let b = 2;
// let c = 3;
// function sum(...arr){
//   return arr
// }

// console.log(sum(a,b,c), "This is the sum of the array");

// console.log(1 + '1' - 1);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join("-"));