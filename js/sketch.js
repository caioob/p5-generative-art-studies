const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALLETE = [];

function setup(){
	PALLETE = [
		color(53,179,155),
		color(18,76,166),
		color(84,44,143),
		color(166,43,119),
		color(156,69,40)
	]

	createCanvas(700,700, SVG);

	noLoop();
	angleMode(DEGREES);
	rectMode(CENTER);
}
function draw(){
	doubleCircle();
}

//creates two circles, with random  colors
function doubleCircle(){
	circleLines(CRYSTAL_SIZE, 1);
	randomCircles();
}

//Creates a centered circle. 1st parm = size  | 2nd parm if == 1 draw lines, if == 0 do not draw lines
function circleLines(size, lines){
	const rando = random(1);
	let numShapes;
	let rando2 = floor(random(0, PALLETE.length));
	let strokeColor = PALLETE[rando2];

	if(rando > 0.5){
		numShapes = SIDES;
	}
	else{
		numShapes = SIDES * 2;
	}
	const angle = 360/numShapes;



	push();

		translate(width / 2, height / 2);
		stroke(strokeColor);
		ellipse(0, 0, size, size);
		rando2 = floor(random(0, PALLETE.length));

		if(lines == 1){
			for (let i=0; i < numShapes; i++){
				strokeColor = PALLETE[rando2];
				stroke(strokeColor);
				line(0, 0, CRYSTAL_SIZE / 2, 0);
				rotate(angle);
			}
		}
	pop();
}

//creates a circle with random size and random colors within the PALLETE. Wheter or not it has lines it's random as well
function randomCircles(){
	const rando = floor(random(0, PALLETE.length));
	const strokeColor = PALLETE[rando];
	const circleSize = random(499);
	const rando2 = floor(random() * (1 - 0 + 1) ) + 0

	circleLines(circleSize, rando2);
}
