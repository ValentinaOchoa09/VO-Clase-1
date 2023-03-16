function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
  textSize(25);
createA('https://github.com/ValentinaOchoa09/VO-Clase-1', 'Mis avances sesión 1', '_blank').id('Valentina');
  background(150, 100, 200);
}

function draw() {
  text("🍡", mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}


