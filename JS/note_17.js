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

