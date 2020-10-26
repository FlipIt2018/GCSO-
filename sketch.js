var car,car2,car3,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 10, 300);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(405,200,15,15);
  

  wall = createSprite(1500,200,5,height/2);

  car.velocityX = speed;
  
}

function draw() {
  background("black");  



  if (wall.x<wall.width/2-car.width/2){
  car.velocityX = 0;
}

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
      car.shapeColor = color(250,0,0);
  }
  if(deformation<180 && deformation>100)
  {
      car.shapeColor = color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
}

wall.debug = false;
  drawSprites();
}