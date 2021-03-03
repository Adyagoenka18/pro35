function preload(){
  background=loadImage(background.png);

}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  balloon=addAnimation;
  fireBase=dataBase;

}

function draw() {
  background(255,255,255);
  background(background.png) 

  if (keyDown(LEFT_ARROW)) {
    balloon.x=balloon.x -10;
  }
  if (keyDown(RIGHT_ARROW)) {
    balloon.x=balloon.x +10;
  }
if (keyDown(UP_ARROW)) {
    balloon.y=balloon.y-10;
  }
  if (keyDown(DOWN_ARROW)) {
    balloon.y=balloon.y +10
  }

  textSize=(5);
  Fill("red");
   stroke(7);




  drawSprites();
}