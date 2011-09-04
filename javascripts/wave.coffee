class Wave
  DEFAULT_LINE_WIDTH = 2.0
  DEFAULT_STROKE_COLOR = "black"
  
  constructor: (@elem) ->
    @direction = 0.1
    @step = 5
  
  draw: () ->
    console.log @step
    @elem.clear()
    for origin in [-100..800] by @step
      @path = "M 0,#{origin}"
      for horiz in [0..1200] by 100
        @path += "q 50,-50 100,0 q 50,50 100,0"
      p = @elem.path(@path)
      p.attr "stroke-width": DEFAULT_LINE_WIDTH
      p.attr stroke: DEFAULT_STROKE_COLOR
      
    @direction = -@direction if @step > 10 or @step < 3
    @step += @direction
    
    
$(document).ready ->
  paper = Raphael("notepad", 1000, 800)
  wave = new Wave(paper)
  setInterval((-> wave.draw()), 100)
