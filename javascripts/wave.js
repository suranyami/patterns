(function() {
  var Wave;
  Wave = (function() {
    var DEFAULT_LINE_WIDTH, DEFAULT_STROKE_COLOR;
    DEFAULT_LINE_WIDTH = 2.0;
    DEFAULT_STROKE_COLOR = "black";
    function Wave(elem, step) {
      var horiz, origin, p;
      this.elem = elem;
      this.elem.clear();
      for (origin = -100; origin <= 800; origin += step) {
        this.path = "M 0," + origin;
        for (horiz = 0; horiz <= 1000; horiz += 100) {
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
      setInterval((function() {
        return new Wave(paper, step + 1);
      }), 200);
    }
    return Wave;
  })();
  $(document).ready(function() {
    var paper;
    paper = Raphael("notepad", 1000, 800);
    return setInterval((function() {
      return new Wave(paper, step);
    }), 200);
  });
}).call(this);
