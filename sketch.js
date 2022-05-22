var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces;
  surface1 = createSprite(105,600,200,23)
  surface1.shapeColor = rgb(0,5,253)
  surface2 = createSprite(310,600,200,23);
  surface2.shapeColor = rgb(255,117,0)
  surface3 = createSprite(515,600,200,23);
  surface3.shapeColor = rgb(0,100,24)
  surface4 = createSprite(720,600,200,23);
  surface4.shapeColor = rgb(173,0,69)


  ball = createSprite(random(750,20));
  ball.scale = 0.25;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
  if(keyDown("space")){
  ball.velocityY = 8;
  }

    //add condition to check if box touching surface and make it box
  if (surface1.isTouching(ball)){
    ball.shapeColor = rgb(0,5,253)
    ball.velocityY = 0;
  }
  if (surface2.isTouching(ball)){
    ball.shapeColor = rgb(255,117,0)
    ball.velocityY = 0;
  }
  if (surface3.isTouching(ball)){
    ball.shapeColor = rgb(0,100,24)
    ball.velocityY = 0;
  }
  if (surface4.isTouching(ball)){
    ball.shapeColor = rgb(173,0,69)
    ball.velocityY = 0;
  }
    drawSprites();
}
