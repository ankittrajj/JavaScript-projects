let button = document.getElementById('btn');
let bcg = document.querySelector('body');
let color = ['red','green','yellow','brown','pink','blue','aqua','gray','violet'];

button.addEventListener('click',changeColor);

function changeColor(){
    let randomColor = Math.floor(Math.random()*color.length);
    bcg.style.backgroundColor = color[randomColor];

}