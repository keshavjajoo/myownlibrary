var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //rect1=createSprite(100,100,50,50)
 // rect2=createSprite(200,100,50,50)
 // rect1.shapeColor="blue"
 // rect2.shapeColor="blue"
  movingRect.velocityY= -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }
bounceoff(movingRect,fixedRect)

  drawSprites();
}