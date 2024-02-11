var counterDiv = document.getElementById('counter1');
var count = 0;
counterDiv.addEventListener('click',function(){
    count++;
    var str = document.getElementById('click_number');
    str.innerHTML = "Box Clicked "+count+" Time.";
});