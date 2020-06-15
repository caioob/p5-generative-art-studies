const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALLETE = [];

function setup(){
	createCanvas(530, 530,SVG);

	PALLETE = [
		color(255,52,154),
		color(4,0,152)
	]

	noLoop();
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw(){
	//testLines();
	outlineShape();
}

function outlineShape() {
	const strokeColor = getRandomFromPallete();
	const weight = randomSelectTwo() ? 1 : 3;
	const hexagonTrue =  randomSelectTwo();

	stroke(strokeColor);
	strokeWeight(weight);

	push();
		translate(width/2, height/2);
		if(hexagonTrue){
			hexagon(0,0, CRYSTAL_SIZE / 2);
		}
		else{
			ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);
		}
	pop();
}

function testLines(){
	strokeWeight(3);
	const rando = random(1);
	let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

	const strokeColor = getRandomFromPallete();

	noFill();
	stroke(PALLETE[0]);
	push();
		translate(width/2, height/2);
		ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

		stroke(strokeColor)
		const angle = 360 / numShapes;
		for (let i = 0; i < numShapes; i++){
			line(0,0,0,CRYSTAL_SIZE/2)
			rotate(angle);
		}
	pop();
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
