function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  movingR=createSprite(350, 250, 50, 50);
}

function draw() {
  background("green"); 
  movingR.x=mouseX;
  movingR.y=mouseY; 
  if(movingR.width/2+fixedR.width/2>=fixedR.x-movingR.x
    &&movingR.width/2+fixedR.width/2>=movingR.x-fixedR.x
    &&movingR.height/2+fixedR.height/2>=fixedR.y-movingR.y
    &&movingR.height/2+fixedR.height/2>=movingR.y-fixedR.y){
   movingR.shapeColor="red";
   fixedR.shapeColor="red";
  }
  else{
    movingR.shapeColor="orange";
    fixedR.shapeColor="orange";
  }
  
  drawSprites();
}