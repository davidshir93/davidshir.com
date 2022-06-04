// module aliases
var Engine = Matter.Engine,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

var engine;
var world;
var circles = [];
var runner;
var ground;
var boundaries = [];

var colors = [colorBPurple, colorCPink];

// Get the gravity state
var gravityToggleEl = document.getElementById('gravity');
var gravityIsOpposite = false;
gravityToggleEl.addEventListener('click', toggleGravity);

function toggleGravity() {
	gravityIsOpposite = !gravityIsOpposite;
	if (gravityIsOpposite) {
		engine.gravity.y = -1;
	} else {
		engine.gravity.y = 1;
	}
}

function setup() {
	// Create a full screen size canvas
	let renderer = createCanvas(windowWidth, windowHeight);
	renderer.parent('open-banner');

	// Initialize matter-js
	engine = Engine.create();
	world = engine.world;
	runner = Runner.create();
	Runner.run(runner, engine);

	// Create static objects
	var options = {
		isStatic: true,
	};
	boundaries.push(new Boundary(windowWidth - 1200, 300, 500, 25, -50));
	boundaries.push(new Boundary(windowWidth - 300, 550, 500, 25, 320));
}

function newCircle() {
	// Creating a random size and color for the new Circle
	let size = Math.round(Math.random() * 50) + 10;
	let color = colors[Math.round(Math.random() * colors.length)];

	// Create a new Circle and push it to the circles array
	circles.push(new Circle(mouseX, mouseY, size, color));
}

function mouseDragged() {
	// newCircle();
	if (Math.random() > 0.7) {
		newCircle();
	}
}

function mousePressed() {
	newCircle();
}

function draw() {
	background(colorEAlmostWhite);
	for (var i = 0; i < circles.length; i++) {
		circles[i].show();
		if (circles[i].isOffscreen()) {
			circles[i].removeFromWorld();
			circles.splice(i, 1);
			i--;
		}
	}
	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].show();
	}
	// ground.show();
	// console.log(gravityToggle.value);
	// console.log(gravityIsOpposite);
}

// Resizing the canvas when the user changes screen size
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	boundaries[0].relocate(windowWidth / 4.5, 300);
	boundaries[1].relocate(windowWidth / 1.5, 300);
}
