var player, playerImg;
var enemy1, enemy2, enemy1Img, enemy2Img;


function preload(){
    playerImg = loadImage("galagaShip.png");
    enemy1Img = loadImage("enemy1.png");
    enemy2Img = loadImage("enemy2.png");
    
}

function setup(){
    createCanvas(1440, 830);

    player = createSprite(720, 750, 30, 30);
    player.addImage("player", playerImg);
    player.scale = 0.1;


}

function draw(){
    background("black");


spawnEnemy();

    drawSprites();
}

function keyPressed(){
    if(keyCode===37){
        player.x = player.x-15;
    }
    if(keyCode===39){
        player.x = player.x+15;
    }
}

function spawnEnemy(){
    //console.log(frameCount);
    if(frameCount % 60 === 0){

    var rand = Math.round (random(1,2));
    var randX = Math.round(random(50, 1400));
    var randVx = Math.round(random(-15, 15));
    var randVy = Math.round(random(6,15));

    console.log(rand);
    if(rand ===1){
        enemy1 = createSprite(randX, 200, 30, 30);
        enemy1.addImage("enemy1", enemy1Img);
        enemy1.scale = 0.1;
        enemy1.velocityY=randVy;
        enemy1.velocityX =randVx;

    } else if(rand ===2){
        enemy2 = createSprite(randX, 200, 30, 30);
        enemy2.addImage("enemy2", enemy2Img);
        enemy2.scale = 0.07;
        enemy2.velocityY=randVy;
        enemy2.velocityX =randVx;
    }
        
    }
}