// Method 1 (Self):

// var toggle_data = document.getElementById('toggle');
// var circle = document.getElementById('circle');
// var bodyTag = document.body
// var h1Tag = document.getElementsByTagName('h1')
// var toggled = false

// toggle_data.addEventListener('click', function(){
//     console.log(toggle_data,"Here...")
//     if (!toggled){
//         circle.style.marginLeft = '100px';
//         bodyTag.style.backgroundColor = '#000';
//         h1Tag[0].style.color = '#fff';
//         toggled = true;
//     }
//     else {
//         circle.style.marginLeft = '0px';
//         bodyTag.style.backgroundColor = '#ffffff';
//         h1Tag[0].style.color = '#000';
//         toggled = false;

//     }
// });


// Method 2 :

var toggled = false;

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function () {
        
    if(!toggled) {
        
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.style.marginLeft = "100px";
        
        toggled = true;
        
    } else {
        
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.style.marginLeft = "1px";
        
        toggled = false;
        
    }
    
}


// Method 3 (Not Comleted..)