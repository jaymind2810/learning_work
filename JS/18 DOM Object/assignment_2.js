var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ["red", "orange", "green", "maroon", "pink", "violet"];

var colorTag = document.getElementById('color')
var shapeTag = document.getElementById('shape')


colorTag.addEventListener('click', function(){
    blockId = document.getElementById('block')
    const random = color[Math.floor(Math.random() * color.length)];
    blockId.style.backgroundColor = random;
})

shapeTag.addEventListener('click', function(){
    squareId = document.getElementById(cur)
    const rand = shape[Math.floor(Math.random()* shape.length)]
    squareId.setAttribute("id", rand);
    cur = rand;
})