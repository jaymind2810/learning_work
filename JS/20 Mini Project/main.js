/////////////////////// =========== Const ==========
// ==> It is used to define const variable.
// ==> Defined at declared Time
// ==> Read Only variable.
// ==> hoisting is different

var a;
console.log(a);     // undefined
a = 20;
console.log(a);     // 20

const c = 30;       // Defined this way

// console.log(d)       // Give Error
// const d;            // This give error beacause 
// d = 40;             // const not defined latter


/////////////////////////================== Let =====================================
// Can not use outside of block.

var a = 10;

if (a <= 10){
    var b=20;
} else {
    // var c =30;           // undefined
    let c=30;               // undefined 
}
 
console.log(a, b, c)        // 10 20 undefined


////////////////////// ============= Let vs Var =======================

for (var i=1;i<=5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
}
//              6 6 6 6 6 

for (let i=1;i<=5; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
}
//              1 2 3 4 5

////////////////////////// 4. ========= For Loop =========

var arr = [1,2,3,4]

for (var i=0; i< arr.length; i++){
    console.log(i)
}

for(let i of arr){
    console.log(i)
}

///////////////////////// 5. ========== Smmoth Scroll Demo ===============

window.scrollTo(0,800)
    // go to 800 px of y of our window

window.pageYOffset
    // Give current location of y px

window.scrollBy(0,100)
    // It will make window 100 px down in y direction.
    
////////////////////////////// 6. ========= Scroll Demo 1 ============= 

var setScrollInterval = setInterval(function() {
    window.scrollBy(0, 50);
 }, 50);
    // make 50 ms scroll down at time and go to end of page.

//---- Example Code ---------

var targetPos = 600;
var startingPos = 0;

var setScrollInterval = setInterval(function() {
    window.scrollBy(0, 50);
    startingPos += 50
    if (startingPos >= targetPos){
        clearInterval(setScrollInterval)
        return
    }
}, 50);


///////////////////// 8, 9, 10. Smooth Scroll Hint 2 //////////

var edcationSection = document.getElementById('education');

var coordinates = edcationSection.getBoundingClientRect();

console.log(coordinates);
    // Give the current window all coordinets and element 

var coordinates = targetSection.getBoundingClientRect()
coordinates.top
    // Give target sections coordinates so we can use that coordinates..


// This is smooth scroll to sections..
// Method 1
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags, "------------Nav MEnu Anchor Tags")

for (var i=0; i< navMenuAnchorTags.length; i++){
    console("Herererere", i)
    navMenuAnchorTags[i].addEventListener('click', function(event){
        console("Herererere");
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection)
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect()
            if (targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return
            }
            window.scrollBy(0, 50);
        }, 50)

    });
}

// Method 2, 3

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval
console.log(navMenuAnchorTags, "------------Nav MEnu Anchor Tags")

for (var i=0; i< navMenuAnchorTags.length; i++){
    console("Herererere", i)
    navMenuAnchorTags[i].addEventListener('click', function(event){
        console("Herererere");
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection)
        // var interval = setInterval(scrollVertically(), 50, targetSection)

        interval = setScrollInterval(function(){
            scrollVertically(targetSection);
        }, 50)

    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect()
    if (targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return
    }
    window.scrollBy(0, 50);
}

/////////////////// 11, 12, 13, 14 Resume Skill Bar Task /////////////////

// => Scroll to Skill Section and add Animation on Skills Progress bar

// Steps:
// 1. Handle Screen Event on scroll 
// 2. Check Skills Section is visible or not
// 3. Check that initia width of colored skills divs is zero => initialise
// 4. Start animation on every skills
// 5. Store skill level -> html with help of data attribute

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for (var bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars()

function fillBars(){
    for (let bar of progressBars){
        var targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if (currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll(){
    // We have to check skills container is visible.
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        console.log("-----Skill Sections is visible.");
        fillBars()
    } else if (coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }


}



/////////////// 16. Counter Demo Task //////////////////////
