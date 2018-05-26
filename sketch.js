//
// function setup() {
//   createCanvas(640,480);// put setup code here
// }
//
// function draw() {
//
//
//   if (mouseIsPressed){
//     fill(0);
//
//   }else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80,80);// put drawing code here
// }
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

  //println(abs(mouseX - pmouseX));
}
