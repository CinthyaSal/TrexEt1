var trex;
var trex_running;
var edges;
var ground;
var groundImage;
var invisibleGround;

function preload(){
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundImage=loadAnimation("ground2.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges=createEdgeSprites();
  trex.scale=0.5;
  trex.x=50;
  
  //crea a ground
  ground=createSprite(200,180,400,20);
  ground.addAnimation("ground",groundImage);
  ground.x=ground.width/2;
  
  invisibleGround=createSprite(200,190,400,20);
  invisibleGround.visible=false;
}

console.log("T-rex Runner");


function draw(){
    background("lightpink")
  
  console.log(trex.y);
    ground.velocityX=-2;

    if(ground.x<0){
      ground.x=ground.width/2;
    }


    //si se presiona la tecla espacio
    if(keyDown("space") && trex.y>=100){
      trex.velocityY=-10;
    }

    trex.velocityY=trex.velocityY+0.5;
    trex.collide(edges[3]);
    trex.collide([invisibleGround]);
    
    drawSprites();
  
}