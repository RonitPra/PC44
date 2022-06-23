var bg,bg_img;
var player,player_img;
var obstacle,obstacle_img,obstaclesGroup;
var money,money_img,moneyGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
bg_img = loadImage("back.jpg");
player_img = loadImage("player.png"); 
obstacle_img = loadImage("rock.png");
money_img = loadImage("money.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,200);
  bg.addImage(bg_img);
  bg.scale = 6;
  bg.velocityY = 4;

  player = createSprite(width/2,height-350);
  player.addImage(player_img);
  player.scale = 2

  obstaclesGroup = createGroup();
  moneyGroup = createGroup();

 
}

function draw() 
{
  background(0);
 
  if(gameState === PLAY){

    if (bg.y > height){
      bg.y = height/2;
    }

    if(keyDown(RIGHT_ARROW)) {
      player.velocityX = 10;
    }

    if(keyDown(LEFT_ARROW)){
      player.velocityX = -10
    }

    if(obstaclesGroup.isTouching(player)){
      gameState = END;
    }


    spawnObstacles();
    spawnMoney();
 } 
 else if(gameState === END){
  obstaclesGroup.setVelocityXEach(0);
  moneyGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1)
  moneyGroup.setLifetimeEach(-1)
 }

  drawSprites();

}

function spawnObstacles() {
  //write code here to spawn the obstacles
   if (frameCount % 120 === 0) {
    obstacle = createSprite(500,10,20,20);
    obstacle.x = Math.round(random(700,1400));
    obstacle.addImage(obstacle_img);
    obstacle.scale = 0.5;
    obstacle.velocityY = 5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
    
    //adding obstacle to the group
   obstaclesGroup.add(obstacle);
    }
}

function spawnMoney(){
  if(frameCount % 150 === 0) {
    money = createSprite(500,10,20,20);
    money.x = Math.round(random(800,1400));
    money.addImage(money_img);
    money.scale = 0.2;
    money.velocityY = 6;
    
     //assign lifetime to the variable
    money.lifetime = 134;
    
    //adding obstacle to the group
   moneyGroup.add(obstacle);

  }
}

