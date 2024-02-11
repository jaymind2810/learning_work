
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
    // arr.splice(start_index, deletion_count, element_to_inserted)
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