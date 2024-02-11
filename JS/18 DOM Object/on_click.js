// var helloButton = document.getElementById('btn');
// helloButton.addEventListener('click', function(){
//     alert("Hello......On Click Event Done..")
// });

function sayHello(){
    // console.log('Here..')
    alert('Hello')
}

function sayBye(){
    alert('Bye..!')
}


var helloButton2 = document.getElementById('btn2');
console.log(helloButton2, "-------Button Called...")

helloButton2.addEventListener('click', sayHello);
helloButton2.addEventListener('click', sayBye);
