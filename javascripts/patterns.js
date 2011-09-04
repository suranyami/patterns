(function() {
  var Pattern;
  Pattern = (function() {
    function Pattern(elem) {
      this.elem = elem;
      this.path = "";
      this._last = {
        x: 0,
        y: 0
      };
      this.isAbsolute = true;
    }
    Pattern.prototype.polygon = function(x, y, sides, size, angle, line_width, stroke_color) {
      var ang, angle_step, p, s, xn, yn;
      console.log("" + x + ", " + y + ", " + sides + ", " + size + ", " + angle + ", " + line_width + ", " + stroke_color);
      this.path = "";
      this.isAbsolute = true;
      this.moveTo(x, y);
      ang = (angle / 180.0) * Math.PI || 0.0;
      angle_step = (Math.PI * 2) / sides;
      this.isAbsolute = false;
      s = 0;
      while (s < sides) {
        xn = size * Math.cos(ang);
        yn = size * Math.sin(ang);
        this.lineTo(xn, yn);
        ang += angle_step;
        s++;
      }
      p = this.elem.path(this.path);
      p.attr({
        "stroke-width": line_width || 1.0
      });
      return p.attr({
        stroke: stroke_color || "black"
      });
    };
    Pattern.prototype.moveTo = function(x, y) {
      this._last = {
        x: x,
        y: y
      };
      return this.path += ["m", "M"][+this.isAbsolute] + this.coords(x, y);
    };
    Pattern.prototype.lineTo = function(x, y) {
      this._last = {
        x: x,
        y: y
      };
      return this.path += ["l", "L"][+this.isAbsolute] + this.coords(x, y);
    };
    Pattern.prototype.coords = function(x, y) {
      return "" + (parseFloat(x)) + " " + (parseFloat(y));
    };
    Pattern.prototype.wave = function(ang) {
      return Math.sin(ang * Math.PI / 180.0);
    };
    return Pattern;
  })();
  $(document).ready(function() {
    var a, c, colors, p, paper, _results;
    colors = ["red", "green"];
    paper = Raphael("notepad", 1000, 800);
    p = new Pattern(paper);
    _results = [];
    for (a = 100; a >= 0; a--) {
      c = colors[a % 2];
      console.log(c);
      _results.push(p.polygon(200, 100, 6, a * 2, p.wave(a * 10) * 10, a / 10, c));
    }
    return _results;
  });
}).call(this);
