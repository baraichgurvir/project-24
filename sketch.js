
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 675, width, 20, {isStatic:true});
	World.add(world, ground)

	d = Bodies.rectangle(650, 625, 20, 80, {isStatic: true});
	World.add(world, d);
	d2 = Bodies.rectangle(500, 625, 20, 80, {isStatic: true});
	World.add(world, d2);

	paper_obj = new Paper(50, 650, 50);

    console.log();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  fill("white");
  rect(ground.position.x, ground.position.y, width, 20);
  rect(d.position.x, d.position.y, 20, 80);
  rect(d2.position.x, d2.position.y, 20, 80);
  paper_obj.display();
  drawSprites();

  if (keyWentDown("space")) {
  	Matter.Body.applyForce(paper_obj.body, paper_obj.body.position, {x:35, y:-35})
  }
}



