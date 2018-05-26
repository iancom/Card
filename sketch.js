function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(0);
  rectMode(CENTER);
  noStroke();
}

function draw()
{
  background(constrain(abs(mouseX-pmouseX) * 30, 30, 200));

  rect(width/2, height/2, abs(mouseX-pmouseX) * 5, abs(mouseX-pmouseX) * 5);
}
