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

function littleCircle(color) {
	push();
		translate(width/2, height/2);
		stroke(color);
		const circleSize = random(CRYSTAL_SIZE - 1);
		ellipse(0, 0, circleSize, circleSize);
	pop();
}

function littleRectangle(color) {
	push();
		translate(width/2, height/2);
		stroke(color);
		const rectSize = random(CRYSTAL_SIZE - 1);
		rect(0, 0, rectSize, rectSize);
	pop();
}

function littleHexagon(color) {
	const strokeColor = color;
	const weight = randomSelectTwo() ? 1 : 3;
	const hexSize = random(CRYSTAL_SIZE - 1);
	stroke(strokeColor);
	strokeWeight(weight);

	push();
		translate(width/2, height/2);
		hexagon(0,0, hexSize);
	pop();
}
