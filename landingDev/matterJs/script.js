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
var boundaries = [];

var colors = ['#eff3f5', '#596ac6', '#f48686'];

function setup() {
	createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;
	runner = Runner.create();
	Runner.run(runner, engine);
	var options = {
		isStatic: true,
	};
	boundaries.push(new Boundary(300, 300, 500, 25, -50));
	boundaries.push(new Boundary(700, 550, 500, 25, 320));
}

function newBox() {
	// Creating a random size and color for the new box
	let size = Math.round(Math.random() * 50) + 10;
	let color = colors[Math.round(Math.random() * colors.length)];

	// Create a new Box and push it to the boxes array
	boxes.push(new Box(mouseX, mouseY, size, color));
}

function mouseDragged() {
	// newBox();
	if (Math.random() > 0.7) {
		newBox();
	}
}

function mousePressed() {
	newBox();
}

function draw() {
	background(51);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].show();
	}
	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].show();
	}
	// ground.show();
}
