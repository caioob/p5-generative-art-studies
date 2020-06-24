function hexagon (posX, posY, radius) {
  	const rotAngle = 360 / 6
   	beginShape()
		for (let i = 0; i < 6; i++) {
			const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
			vertex(thisVertex.x, thisVertex.y)
  		}
	endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {
	const x = posX + radius * cos(angle)
	const y = posY + radius * sin(angle)
	return createVector(x, y)
}

function randomSelectTwo(){
	const rando = random(1);
	if(rando > 0.5){
		return true;
	}
	else {
		return false;
	}
}

function getRandomFromPallete () {
	const rando2 = floor(random(0,PALLETE.length));
	return PALLETE[rando2];
}

function testLines () {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPallete();

  noFill()
  stroke(PALLETE [0])
  strokeWeight(1)
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)
      rotate(angle)
    }
  pop()
}

function randomToSize() {
  return floor(random(0, CRYSTAL_SIZE))
}
