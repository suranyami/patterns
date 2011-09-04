class Pattern
  constructor: (@elem) ->
    @path = ""
    @_last = 
      x: 0
      y: 0
    @isAbsolute = true
  
  polygon: (x, y, sides, size, angle, line_width, stroke_color) ->
    console.log "#{x}, #{y}, #{sides}, #{size}, #{angle}, #{line_width}, #{stroke_color}"
    @path = ""
    @isAbsolute = true
    @moveTo x, y
    ang = (angle / 180.0) * Math.PI or 0.0
    angle_step = (Math.PI * 2) / sides
    @isAbsolute = false
    s = 0
    
    while s < sides
      xn = size * Math.cos(ang)
      yn = size * Math.sin(ang)
      @lineTo xn, yn
      ang += angle_step
      s++
    p = @elem.path(@path)
    p.attr "stroke-width": line_width or 1.0
    p.attr stroke: stroke_color or "black"
  
  moveTo: (x, y) ->
    @_last = 
      x: x
      y: y
    @path += [ "m", "M" ][+@isAbsolute] + @coords(x, y)
  
  lineTo: (x, y) ->
    @_last = 
      x: x
      y: y
    
    @path += [ "l", "L" ][+@isAbsolute] + @coords(x, y)
  
  coords: (x, y) -> "#{parseFloat(x)} #{parseFloat(y)}"

  wave: (ang) -> Math.sin(ang * Math.PI / 180.0)

$(document).ready ->
  colors = [ "red", "green" ]
  paper = Raphael("notepad", 1000, 800)
  p = new Pattern(paper)

  for a in [100..0]
    c = colors[a % 2]
    console.log c
    p.polygon 200, 100, 6, a * 2, p.wave(a * 10) * 10, a / 10, c
