function Boundary(x, y, width, height, angle) {
	var options = {
		friction: 0.8,
		restitution: 1,
		isStatic: true,
		angle: angle,
	};
	this.body = Bodies.rectangle(x, y, width, height, options);
	this.width = width;
	this.height = height;
	Composite.add(world, this.body);

	this.show = function () {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		noStroke();
		fill(0);
		rect(0, 0, this.width, this.height);
		pop();
	};
}
