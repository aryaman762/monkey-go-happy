
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var surviavalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  RocksImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

 bananaGroup=createGroup();
  RocksGroup=createGroup();
  
}


function draw() {
  
  
  
background(225);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  if(keyDown("space")&&monkey.collide(ground)){
    monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  
  spawnbananas();
  spawnRocks();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("blacke");
  textSize(20);
  fill(25);
  survivalTime=Math.round(frameCount/frameRate())
  text("survival Time" + survivalTime,100,50);
  
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana= createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
}
}
function spawnRocks() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var Rocks = createSprite(600,330,40,10);
    Rocks.addImage(RocksImage);
    Rocks.scale = 0.15;
    Rocks.velocityX = -3;
    
     //assign lifetime to the variable
    Rocks.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
    RocksGroup.add(Rocks);
  }
}





