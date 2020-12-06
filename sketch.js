
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

	d = Bodies.rectangle(650, 625, 20, 50, {isStatic: true});
	World.add(world, d);

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
  rect(d.position.x, d.position.y, 20, 50);
  paper_obj.display();
  drawSprites();

  if (keyWentDown("space")) {
  	for (var i = 0; i < 200; i++) {
  		if (paper_obj.body.position.x >= d.position.x) {
  			i = 250;ß
  		}
		paper_obj = new Paper(50 + i, 650, 50);
	}
  }
}



