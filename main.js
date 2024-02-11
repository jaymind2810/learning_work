// =====================================15.0 Starring JavaScript=================================

// ==> VARIABLE:=
//     Varible define in same as python.
    
//         var a = 10;
//         a = "Hello World"

//     - Types of Variable:
//         Number
//         String
//         boolean
//         null
//         undefined
//         symbol
//         object

//     -Declaration Variable:=  Create Variable but not assign any value
//     -Defination Variable:= Create Variable and assign value

//     var a
//     console.log(a)          => undefined
//         = Undefined := Variable created but yet not value assigned
    
//     var a 
//     a = null
//     console.log(a)          => Null
//         = Null := Variable created and assign null value.

// ==> Inbuilt Functions:

//     parseInt("100")
//         It is used to convert string into Number.

//     Math.sqrt(2)

//     Math.pow(10, 2)

//     parseFloat("23.03")
//         string to Float 
    
//     a = "Number"
//     typeof a
//         check type of Variable

// ==> Difference between == and ===

//     1 == '1'
//         true

//     1 === '1'
//         false

//     var a = 1 / 0



a
    Infinity

Infinity * 4
    Infinity

2 / Infinity
    0

Math.pow(10,2)
    100

Math.pow(10, 1000)
    Infinity            (variable_range < memory_space)

Number.MAX_VALUE;

Math.sqrt(-1)
    NaN                 (Not_a_Number)

parseInt("100")
    100

parseInt("hjah")
    NaN

a = 10;
typeof a
    Number

b = null
typeof b
    Object

typeof Infinity
    Number

typeof NaN
    Number

console.log(1+'1')
    11

console.log(1-'1')
    0

console.log(1*'1')
    1

var a
console.log(a + "b")
    undefinedb

1 == 1
    true

1 == '1'
    true

1 === '1'
    false


/////////////////////////////////////////// Note 16///////////////////////////////////////////


function showAlert(msg){
    alert(msg)
}

// showAlert("Hello World")

function sum(a, b){
    return a + b;
}

var c = sum(4,6)
// console.log(c)

// Varible Hoisting
console.log(z)
var z = 10;
hoistFun()

function hoistFun(){
    console.log(j)
    var j = 10;
}

// FUnctions print in console.log

function multipy(a, b){
    return a*b
}

console.log(multipy)
    // --ƒ multiply(a, b){ return a*b }

// Function Variable [Function Expression.]
// [1. Named Function]

var factorial = function fact(n){
    var ans = 1;
    for(var i = 1; i<=n; i++){
        ans = ans * i;
    }
    return ans  
}

console.log(factorial(5))
    // --120

// [2. Anorymance Function]

var factorial2 = function (n){
    var ans = 1;
    for(var i = 1; i<=n; i++){
        ans = ans * i;
    }
    return ans  
}

console.log(factorial2(5))
    // --120

// Passing function as arguments

var factorial = function fact(n){
    var ans = 1;
    for(var i = 1; i<=n; i++){
        ans = ans * i;
    }
    return ans  
}

function ncr(n, r, factorial){
    return factorial(n) / (factorial(r)*factorial(n-r));
}

console.log(ncr(5,2,factorial));
    // --10


// ARRAY=======

var arr =  [4,5,6,7]
    // Array functions
    arr.length
        // -- 4
    arr.push(10)
        // --5(length)
    arr.pop()
        // --10(element)
    arr.shift()
        // --4(element, left sifted array)
    arr.unshift(10)
        // --4(length)
        
    // Splice Function
    var arr = [2,3,4,5,6]
    arr.splice(1,1);
        // [3]
    arr
        // [2,4,5,6]
    arr.splice(1)
        // [4,5,6]
    arr
        // [2]

    var arr = [1,2,3,4,5]
    arr.splice(2,0,10,20,30)
    arr
        // [1,2,10,20,30,3,4,5]
    arr.splice(2,2,40,50)
    arr 
        // [1,2,40,50,30,3,4,5]



// For Loop on Array:=

var arr = [2,3,4,5,6,7,8]

// for(var i=0; i<= arr.length; i++){
//     console.log(arr[i]);
// }

// For Eaach Loop

function print(element){
    console.log(element);
}

arr.forEach(print);

// =========================================> Note 17 ===============================================

// OBJECTS DEFINE:=

var student = {"name": "Jaymin", roll_no : 2, marks: 90}

typeof(student)
    // Object
student.name;
student['name']
    // Jaymin
student.sem;
    // undefined
student.sem = "First";
student
    // {"name": "Jaymin", roll_no : 2, marks: 90, sem: "First"}

var student = {
    "name": "Jaymin", 
    roll_no : 2, 
    marks: 90
    // "2" : "new"
}
// console.log(student.2)
    // Error
console.log(student['2'])
    // new
delete student.marks
    // Marks was deleted


// Iterating over Object:
for(var prop in student){
    console.log(prop, student[prop]);
}
    // name jaymin
    // roll_no 2
    // marks 90

var keys = Object.keys(student)
console.log(keys)
    // ["name","roll_no", "marks"]


// Nested Object:
var student = {
    "name": "Jaymin",
    roll_no : 2,
    marks: 90,
    address: {
        city: "Ahmedabad",
        pincode: "3203433"
    }
}
console.log(student.address)
    //address: {
    //     city: "Ahmedabad",
    //     pincode: "3203433"
    // }
console.log(student.address.city)
    // Ahmedabad
console.log(typeof(student.address));
    // object

///////////////Array And Object
var arr = [2,4,5,6,4]
console.log(arr[1])
    // 4
console.log(arr.length)
    // 5

arr.prop1 = "demo"
console.log(arr)
    // [2,4,5,6,4,prop1:"demo"]

console.log(arr.length)
    // 5


/////////////////////////////////////////Time Out Functions///////////////

// setTimeout(function, time)

function sayHello(){
    console.log("HELLO");
}
setTimeout(sayHello, 2000)


// setInterval(function, intervaltime)

var sec = 1
function sayHello(){
    console.log("After ", sec);
    sec++
    if(sec == 6){
        clearInterval(id)
    }
}
var id = setInterval(sayHello, 2000)

// Set Timer Fnction Activity ------ Exercise

var count = 10
function timer () {
    if (count == 0){
        console.log("Time's up");
        clearInterval(id);
        return;
    }
    console.log(count);
    count--;
}
id = setInterval(timer, 1000);


// =========================================================Note 18 =========================================================

/////////////////DOM/////////////

document
    // using access document

document.documentElement
    // all Document element 
document.head
    // Head section 
document.body
    // Body section
    // document.body == window.document.body are same oject

window
    // We can see here all properties of curret page..
    // all properties defined in this object..

screen
    // sreen oject has all detais of height, width, etc...
    // window.screen and screen are same...


// ======Fetching Element

var heading = document.getElementById('one');
    // get elements of id 'one' ad store in heading variale.

heading.style.color = 'red';
    // Change Color to red

heading.style.backgroundColor = 'yellow';
    // background color to yellow


var headings = document.getElementsByTagName('h1');
headings
    // get all h1 tag elements

headings[1].innerHTML = "Second Heading"
    // Change texr name in second h1 tag


var para = document.getElementsByClassName('para');
para
    // get all element of para class

para[0].style.backgroundColor = 'cyan';
    // chenge background color to cyan of para class first elemen.

headings.style
    // get style of headings..


//==================CSS Query Selector

var qurey1 = document.querySelector('#one');
qurey1
    // Get CSS of id one tag

qurey1.innerHTML = "Hey"
    // Using CSS querySelector change text of id="one" tag

var para = document.querySelector('.para');
    // outut = first para class element return..

var para = document.querySelectorAll('.para');
    // output = all para class element return..


/////////////////Event Handaling////////////////////////////////////

//==> onclick Event Handling

    // Method 1: Attribute
<button id="btn" onclick="alert('Hello..!!')">Say Hello</button>

    // Method 2:
//<button id="btn">Say Hello</button>
var helloButton = document.getElementById('btn');
helloButton.addEventListener('click', function(){
    alert('Hello...')
})

// Other Events are:
// mouseover
// mouseout
// keypress
// keyup
// keydown

// Used to get which key pressed. that will give ASCI value of key.
document.addEventListener('keypress', function(event){
    console.log("Key Pressed...", event.keyCode);
})


//==> Propogation [Event Bubbling] In JavaScript:

// innerDiv ==> OuterDiv ==> Document
// When we click on inner div at that outer div event also called that is called propogation.

// We Stop Propogation using this.
var innerDiv = document.getElementById('inner3');
innerDiv.addEventListener('click', function(){
    console.log('Click Inner Div');
    event.stopPropagation();
});

//==> Strict Mode...:
// "use strict"; Need this beacause some time we forget to define variable at that time default javaScript
// Not give any error so "use strict"; give to error for follow strict javascript rule.

//=> we can also apply strict mode on particular function.
"use strict";


// => Get Random Value From list:
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down"];
const rand = shape[Math.floor(Math.random()* shape.length)]
