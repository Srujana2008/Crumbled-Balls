
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 20, 40, ball_options);
    World.add(world, ball);

	ground =new Ground(500,490,500,20);

	Engine.run(engine);
  
}


function draw() {
  ground.show();
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 40);
  Engine.update(engine);
  drawSprites();
 
}



