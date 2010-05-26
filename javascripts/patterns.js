function Patterns(elem) {
	this.path = '';
	this.elem = elem;
	this._last = {x: 0, y: 0};
	this.isAbsolute = true;

	this.polygon = function (x, y, sides, size, angle, line_width, stroke_color) {
		console.log(x + ", " + y + "," + sides + "," + size + "," + angle + "," + line_width + "," + stroke_color);
		this.path = '';
		this.isAbsolute = true;
		this.moveTo(x, y);
		var ang = (angle / 180.0) * Math.PI || 0.0;
		var angle_step = (Math.PI * 2) / sides;
		this.isAbsolute = false;
		for (var s = 0; s < sides; s++) {
	 		var xn = size * Math.cos(ang);
			var yn = size * Math.sin(ang);
			this.lineTo(xn, yn);
			ang += angle_step;
		}
		var p = this.elem.path(this.path);
		p.attr({'stroke-width': line_width || 1.0});
		p.attr({stroke: stroke_color || "black"});
	};

	this.moveTo = function (x, y) {
		this._last = {x: x, y: y};
		this.path += ["m", "M"][+this.isAbsolute] + this.coords(x, y);
	};

	this.lineTo = function (x, y) {
		this._last = {x: x, y: y};
		this.path += ["l", "L"][+this.isAbsolute] + this.coords(x, y);
	};

	this.coords = function (x, y) {
		return parseFloat(x) + " " + parseFloat(y);
	}
}