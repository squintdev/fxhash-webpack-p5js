//place any helper functions in this file to keep sketch code clean and manageable

// function that randomly returns true or false
function randomBoolean () {
    const rando = random(fxrand())
    return rando > .5 ? true : false
}

//creates a hexagon
function hexagon (posX, posY, radius) {                     
    const rotAngle = 360 / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
      const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
  }
  
  //finds a point on a circle
  function pointOnCircle (posX, posY, radius, angle) {         
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
  }

  //gets a random color from palette array
  function getRandomFromPalette () {
    const rando = floor(random(0, PALETTE.length))
    return PALETTE[rando]
  }