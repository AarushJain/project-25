
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var box1,box2,box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	paperBall= new Paper(50,350,70);

	box1= new Dustbin(430,400,150,20);
	box2= new Dustbin(350,height-340,20,100);
	box3= new Dustbin(500,height-340,20,100);

	
	ground= new Ground(width/2, 600, width, 20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('pink');

  
  	paperBall.display();
	

	ground.display();
	
	box1.display();
	


  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){	
	Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:160, y:-250});	
	}	
	
	}

