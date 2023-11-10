configuração de função (){
createCanvas(900, 900);
background("white");
}

function draw() {

stroke("blue");
fill("red");

//console.log(mouseIsPressed);

if (mouseIsPressed) {
rect(mouseX,mouseY,20,30);
}
}