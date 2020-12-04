var rect,wall
var deformation,speed,weight
function setup() {
  createCanvas(800,400);
    
  weight=Math.round(random(1520,3000))
  speed=Math.round(random(45,60))
  rect=createSprite(400, 200, 50, 50);
  rect.velocityX=speed
  wall=createSprite(750,200,20,80)
}

function draw() {
  background("black");

  if(rect.x-wall.x>rect.width/2+wall.width/2){
     deformation=0.5*weight*speed*speed/22500
     rect.velocityX=0
     if(deformation<100){
       rect.shapeColor="green"
     }
     else if(deformation>=100&&deformation<180){
       rect.shapeColor="yellow"
     }
     else{
       rect.shapeColor="red"
     }
  }
  drawSprites();
}