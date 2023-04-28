var barco1
var barco2
var sea
function preload(){
barco1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
//sea=addImage("sea.png");
}
function setup(){
  createCanvas(400,400);
  barco2=createSprite(100,250);
  barco2.addAnimation("bolt",barco1);
  barco2.scale=0.2
}
function draw() {
  background("ligtstellhblue");

//if (sea.x < 0){
  sea.x = sea.width/2;
}

    drawSprites();
}
