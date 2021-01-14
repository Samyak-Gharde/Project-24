const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var dustbinObj, groundObj, paperObj;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	dustbinObj = new dustbin(1200,650);
	paperObj = new paper(200,450,40);
	groundObj = new ground(width/2,670,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObj.display();
  groundObj.display();
  paperObj.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
  }
}



