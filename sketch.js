
var monkey , monkey_running,ground;
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score,invisibleground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup()

{
createCanvas(300, 300);
monkey=createSprite(50,220,10,10) 
monkey.addAnimation("running",monkey_running)  
monkey.scale=0.08

   
ground=createSprite(300,250,600,9)
ground.velocityX=-10

obstacleGroup=createGroup() 
invisibleground=createSprite(300,260,600,9)
invisibleground.velocityX=-10  
invisibleground.visible=false 
  
score=0  
}


function draw() {
background("white")
  
 if(ground.x<100)
    {
     
     ground.x= ground.width/2
      
    }
if(invisibleground.x<100)
    {
     
     invisibleground.x= invisibleground.width/2
      
    }
 if(frameCount%50===0) 
 {
 score=score+1  
   
 }
    
 if(keyDown("space")&& monkey.y >= 210) 
 {
 monkey.velocityY = -13;
     
 } 
  monkey.velocityY = monkey.velocityY + 0.6
    
  
monkey.collide(ground)
obstacleGroup.collide(invisibleground)
  
 banana();
 obstacle(); 
drawSprites();
  
stroke("black")  
textSize(15) 
text("Survival Time = "+score,90,280)  

}

function banana()
{
if (frameCount % 80 === 0) {
 var banana=createSprite(300,15,10) 
 banana.y = Math.round(random(40,150));
 banana.addImage(bananaImage) 
 banana.scale=0.1 
 banana.velocityX=-5 
 banana.lifetime=60 
}
}
function obstacle()
{
if (frameCount % 300 === 0) {  
var obstacle=createSprite(300,230,15,10)  
obstacle.addImage(obstaceImage) 
obstacle.scale=0.1
obstacle.velocityX=-6  
obstacle.lifetime=50 
obstacleGroup.add(obstacle)  
}  
  
}

