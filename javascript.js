let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box  = 32; 
let snake = [];
snake [0] = {
    x: 8 + box,
    y: 8 + box
}
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);

}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[1].x, snake[1].y, box, box);

    }
}

function startGame(){
    criarBG();
    criarCobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "rigth") snakex += box;
    if(direction == "left") snakey -= box;
    if(direction == "up") snakex -= box;
    if(direction == "down") snakey += box;

    snake.pop();

    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);

}


let game = setInterval(startGame, 100);


