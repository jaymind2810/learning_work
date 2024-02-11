var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover', function(){
    console.log('Mouse Over..')
})

outerDiv.addEventListener('mouseout', function(){
    console.log('Mouse Out..')
})

// var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress', function(){
//     console.log("Key Pressed...");
// })

// Used below code for to press key anywhere inside the document.
document.addEventListener('keypress', function(){
    console.log("Key Pressed...");
})

// Used to get which key pressed.
document.addEventListener('keyup', function(event){
    console.log("Up Key Pressed...", event.keyCode);
})