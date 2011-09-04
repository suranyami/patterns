class Wave
  DEFAULT_LINE_WIDTH = 2.0
  DEFAULT_STROKE_COLOR = "black"
  
  constructor: (@elem, step) ->
    @elem.clear()
    for origin in [-100..800] by step
      @path = "M 0,#{origin}"
      for horiz in [0..1000] by 100
        @path += "q 50,-50 100,0 q 50,50 100,0"
      p = @elem.path(@path)
      p.attr "stroke-width": DEFAULT_LINE_WIDTH
      p.attr stroke: DEFAULT_STROKE_COLOR
    
    setInterval((-> new Wave(paper, step + 1)), 200)
    
$(document).ready ->
  paper = Raphael("notepad", 1000, 800)
  setInterval((-> new Wave(paper, step)), 200)
  
