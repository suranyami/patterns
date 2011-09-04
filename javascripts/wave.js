(function() {
  var Wave;
  Wave = (function() {
    var DEFAULT_LINE_WIDTH, DEFAULT_STROKE_COLOR;
    DEFAULT_LINE_WIDTH = 2.0;
    DEFAULT_STROKE_COLOR = "black";
    function Wave(elem) {
      this.elem = elem;
      this.direction = 0.1;
      this.step = 5;
    }
    Wave.prototype.draw = function() {
      var horiz, origin, p, _ref;
      console.log(this.step);
      this.elem.clear();
      for (origin = -100, _ref = this.step; origin <= 800; origin += _ref) {
        this.path = "M 0," + origin;
        for (horiz = 0; horiz <= 1200; horiz += 100) {
          this.path += "q 50,-50 100,0 q 50,50 100,0";
        }
        p = this.elem.path(this.path);
        p.attr({
          "stroke-width": DEFAULT_LINE_WIDTH
        });
        p.attr({
          stroke: DEFAULT_STROKE_COLOR
        });
      }
      if (this.step > 10 || this.step < 3) {
        this.direction = -this.direction;
      }
      return this.step += this.direction;
    };
    return Wave;
  })();
  $(document).ready(function() {
    var paper, wave;
    paper = Raphael("notepad", 1000, 800);
    wave = new Wave(paper);
    return setInterval((function() {
      return wave.draw();
    }), 100);
  });
}).call(this);
