console.log("Here....")

// This is smooth scroll to sections..
/////////////////////////////////// Scroll Event to Sections:

// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags, "------------Nav MEnu Anchor Tags")

// for (var i=0; i< navMenuAnchorTags.length; i++){
//     console("Herererere", i)
//     navMenuAnchorTags[i].addEventListener('click', function(event){
//         console("Herererere");
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection)
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect()
//             if (targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return
//             }
//             window.scrollBy(0, 50);
//         }, 50)

//     });
// }


////////////////// => Scroll to Skill Section and add Animation on Skills Progress bar

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

