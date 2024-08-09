// Its very important topic.........
//.........................EVENT Bubbling & capturing........................

//1. Event bubbling => event bubbling is a type of propagation(moment) where the event 
// first triggers on the innermost target element, and then successivly triggers on the 
// ancestores(parent) of the target element in the same restling hieracht till it reaches the outermost DOM element.

// let outerchild=document.getElementsByTagName("div")[0];
// let innerchild=document.getElementsByTagName("div")[1];
// let btn=document.getElementsByClassName("btn")[0];

// outerchild.addEventListener("click",()=>{
//     console.log("outerchild")

// })

// innerchild.addEventListener("click",()=>{
//     console.log("innerrchild")

// })

// btn.addEventListener("click",()=>{
//     console.log("bottun")

// })

// O/P=>
// bottun
// innerrchild
// outerchild


//....................Event capturing...............

// 2. Event capturing=> it is the event starts from the top of DOM tree and goes down to the target element.
//  it is also know as tricking.

// let outerchild=document.getElementsByTagName("div")[0];
// let innerchild=document.getElementsByTagName("div")[1];
// let btn=document.getElementsByClassName("btn")[0];

// outerchild.addEventListener("click",()=>{
//     console.log("outerchild")

// },true)

// innerchild.addEventListener("click",()=>{
//     console.log("innerrchild")

// },true)

// btn.addEventListener("click",()=>{
//     console.log("bottun")

// },true)

// O/P=>
// outerchild
// innerrchild
// bottun

//..................Stop Propagation..................
//3.Stop Propagation=> It is a mechanism that defines the order in which event handlers are called
//  when one element is nested inside a second element, 
// and both elements have rgistered a handle for the same event.

//3.Stop Propagation=> stops the bubbling or capturing of an event.


// let outerchild=document.getElementsByTagName("div")[0];
// let innerchild=document.getElementsByTagName("div")[1];
// let btn=document.getElementsByClassName("btn")[0];

// outerchild.addEventListener("click",()=>{
//     console.log("outerchild")

// }) 

// innerchild.addEventListener("click",()=>{
//     console.log("innerrchild")
   

// })

// btn.addEventListener("click",(event)=>{
//     console.log("bottun")
//     event.stopPropagation();

// })

// O/P => button


// ..........................Event Delegation..............
// Event Delegation => it allows you to avoid element listeners to specific nodes; instead, the event listener is addd to one parent.
// that event listener analyzes bubbled events to find a match on child elements.  

let ul=document.querySelector("ul");
ul.addEventListener("click",(event)=>{
    console.log(event.target)
})



let h1=document.querySelector("h1")