function Circle(x, y, radius, color = '#f48686', fixed) {
	var options = {
		friction: 0.8,
		restitution: 1,
		isStatic: fixed,
	};
	this.body = Bodies.circle(x, y, radius, options);
	this.radius = radius;
	this.color = color;
	Composite.add(world, this.body);

	this.isOffscreen = function () {
		var pos = this.body.position;
		return pos.y > height + 100;
	};

	this.removeFromWorld = function () {
		Composite.remove(world, this.body);
	};

	this.show = function () {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		// rectMode(CENTER);
		strokeWeight(0);
		// stroke(255);
		fill(this.color);
		ellipse(0, 0, this.radius * 2);
		pop();
	};
}
