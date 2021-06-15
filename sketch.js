var ball;
var database;

var position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    database = firebase.database();

    database.ref('ball/position').on("value",readpos,errorpos)
}


function readpos(data){
    position = data.val()

    //position = {x:200,y:200}

    ball.x = position.x

    ball.y = position.y
}

function errorpos(){
    console.log("database could not be hit")
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;

    database.ref("ball/position").set({
        x : position.x + x,
        y : position.y + y
    })
}
