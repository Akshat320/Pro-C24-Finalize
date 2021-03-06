
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	box1 = new Dustbin(1030,650,200,30);
	box2 = new Dustbin(940,600,30,140);
	box3 = new Dustbin(1140,600,30,140);

	

	ground = new Ground(600,670,1200,10);

	ball = new PaperBall(200,630,25);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  if (keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(ball.body, ball.body.position,{x:22,y:-22})
  }

  box2.body.depth = ball.body.depth+1;

  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();

  

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position,{x:18,y:-18})
	}
}

