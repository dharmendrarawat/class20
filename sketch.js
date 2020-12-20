var fixedbox, movingbox;


function setup() {
  createCanvas(800,400);
  fixedbox=createSprite(200, 200, 50, 80);
fixedbox.shapeColor="green";
fixedbox.debug=true;
movingbox = createSprite(400,200,80,50);
movingbox.shapeColor = "green";
movingbox.debug=true;
}

function draw() {
  background(0,0,0); 
  console.log(movingbox.x-fixedbox.x)
movingbox.x= World.mouseX;
movingbox.y= World.mouseY;

if(movingbox.x-fixedbox.x < fixedbox.width/2 + movingbox.width/2  && 
  fixedbox.x - movingbox.x < fixedbox.width/2 + movingbox.width/2 &&
  movingbox.y-fixedbox.y<fixedbox.height/2 + movingbox.height/2  &&
  fixedbox.y - movingbox.y < fixedbox.height/2 + movingbox.height/2 ){
movingbox.shapeColor = "red";
fixedbox.shapeColor = "red";
}
else{
movingbox.shapeColor = "green";
fixedbox.shapeColor = "green";
}
  drawSprites();
}

