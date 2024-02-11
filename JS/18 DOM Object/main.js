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

