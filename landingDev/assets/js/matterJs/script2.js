// module aliases
var Engine = Matter.Engine,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite,
	Constraint = Matter.Constraint,
	Mouse = Matter.Mouse,
	MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var circles = [];
var runner;
var ground;
var boundaries = [];

var colors = ['#eff3f5', '#596ac6', '#f48686'];

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

var mConstraint;

function setup() {
	var canvas = createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;
	runner = Runner.create();
	Runner.run(runner, engine);
	var options = {
		isStatic: true,
	};
	// boundaries.push(new Boundary(300, 300, 500, 25, -50));
	boundaries.push(new Boundary(700, 550, 500, 25, 320));

	// create a chain of circles

	var prev = null;
	for (var x = 240; x < 1200; x += 75) {
		var fixed = false;
		if (!prev) fixed = true;
		var c = new Circle(x, 100, 20, 'green', fixed);
		circles.push(c);
		if (prev) {
			constraintOptions = {
				bodyA: prev.body,
				bodyB: c.body,
				// pointA: { x: 0, y: 0 },
				// pointB: { x: 0, y: 0 },
				length: 75,
				stiffness: 0.1,
			};

			var constraints = Constraint.create(constraintOptions);
			Composite.add(world, constraints);
		}
		prev = c;
	}

	var canvasMouse = Mouse.create(canvas.elt);

	// Fixing an issue with pixel density in mac screens
	canvasMouse.pixelRatio = pixelDensity();

	var mouseOptions = {
		mouse: canvasMouse,
	};

	mConstraint = MouseConstraint.create(engine, mouseOptions);
	Composite.add(world, mConstraint);
}

function newCircle() {
	// Creating a random size and color for the new Circle
	let size = Math.round(Math.random() * 50) + 10;
	let color = colors[Math.round(Math.random() * colors.length)];

	// Create a new Circle and push it to the circles array
	circles.push(new Circle(mouseX, mouseY, size, color));
}

// function mouseDragged() {
// 	// newCircle();
// 	if (Math.random() > 0.7) {
// 		newCircle();
// 	}
// }

// function mousePressed() {
// 	newCircle();
// }

function draw() {
	background(51);
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

	if (mConstraint.body) {
		var pos = mConstraint.body.position;
		var offset = mConstraint.constraint.pointB;
		var m = mConstraint.mouse.position;
		stroke(0, 255, 0);
		line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
	}
}
