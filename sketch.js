
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ufo
 var background,backgroundImage;
 function preload(){
 backgroundImage = loadImage("black.png");
 }

function setup() {
  createCanvas(890,600);

  engine = Engine.create();  
  world = engine.world;
  
  ufo = new Ufo(90,40,120,120);
  ufo2 = new Ufo (190,40,120,120);
  ufo3 = new Ufo (290,40,120,120);
  ufo4 = new Ufo (390,40,120,120);
  ufo5 = new Ufo (490,40,120,120);
  ufo6 = new Ufo (590,40,120,120);
  ufo7 = new Ufo (690,40,120,120);
  ufo8 = new Ufo (790,40,120,120);
    
  ufo9 = new Ufo(90,100,120,120);
  ufo10 = new Ufo (190,100,120,120);
  ufo11 = new Ufo (290,100,120,120);
  ufo12 = new Ufo (390,100,120,120);
  ufo13 = new Ufo (490,100,120,120);
  ufo14 = new Ufo (590,100,120,120);
  ufo15 = new Ufo (690,100,120,120);
  ufo16 = new Ufo (790,100,120,120);
  
  ufo17 = new Ufo(90,160,120,120);
  ufo18 = new Ufo (190,160,120,120);
  ufo19 = new Ufo (290,160,120,120);
  ufo20 = new Ufo (390,160,120,120);
  ufo21 = new Ufo (490,160,120,120);
  ufo22 = new Ufo (590,160,120,120);
  ufo23 = new Ufo (690,160,120,120);
  ufo24 = new Ufo (790,160,120,120);


}

  
function draw() 
{
  background(backgroundImage);
  Engine.update(engine);
  ufo.display();
  ufo2.display();
  ufo3.display();
  ufo4.display();
  ufo5.display();
  ufo6.display();
  ufo7.display();
  ufo8.display();
  
  ufo9.display();
  ufo10.display();
  ufo11.display();
  ufo12.display();
  ufo13.display();
  ufo14.display();
  ufo15.display();
  ufo16.display();
  
  ufo17.display();
  ufo18.display();
  ufo19.display();
  ufo20.display();
  ufo21.display();
  ufo22.display();
  ufo23.display();
  ufo24.display();

  
}
function keyPressed(){
  if(keyCode === "a"){
  laser =  new Laser(ufo.x,ufo.y,50,50);
  laser.display();
  laser.shoot();
  }
}
