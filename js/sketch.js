const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALLETE = [];

function setup() {
  createCanvas(600, 600, SVG);

  PALLETE = [
    color(255, 52, 154), // pink
    color(4, 0, 152) // blue
  ]

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  let circles = new Circles();
  let lines = new SimpleLines();
  let outline = new OutlineShape();
  let rando = random(1);

  if(rando < 0.3){
    circles.render();
  }

  rando = random(1);
  if(rando < 0.7){
    lines.render();
  }

  rando = random(1);
  if(rando < 0.6){
    outline.render();
  }

  rando = random(1);
  if(rando < 0.8){
      circles.renderSmall();
  }
}
