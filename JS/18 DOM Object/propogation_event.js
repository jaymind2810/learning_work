"use strict";

var innerDiv = document.getElementById('inner3');
innerDiv.addEventListener('click', function(){
    console.log('Click Inner Div');
    event.stopPropagation();
});

var outerDiv = document.getElementById('outer3');
outerDiv.addEventListener('click', function(){
    console.log("Click Outer Div");
});

document.addEventListener('click', function(){
    console.log('Click Dcument');
});