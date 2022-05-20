// module aliases
var Engine = Matter.Engine,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

var engine;
var world;
var boxes = [];
var runner;
var ground;

function setup() {
	createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;
	runner = Runner.create();
	Runner.run(runner, engine);
	var options = {
		isStatic: true,
	};
	ground = Bodies.rectangle(500, height, width, 100, options);
	Composite.add(world, ground);
}

function mousePressed() {
	let size = Math.round(Math.random() * 100);
	boxes.push(new Box(mouseX, mouseY, size, size));
}

function draw() {
	background(51);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].show();
	}
	rectMode(CENTER);
	fill(170);
	rect(ground.position.x, ground.position.y, width, 100);
}
