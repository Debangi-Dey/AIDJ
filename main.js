song=""
function preload(){
song=loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(600, 400);
    canvas.center()
    v1=createCapture(VIDEO)
    v1.hide()
}

function draw(){
image(v1, 0, 0, 600, 400)
}

function Play(){
    song.play()
}

function Stop(){
    song.stop()
}