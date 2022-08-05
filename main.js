function preload(){
    song1= loadSound("Sia_-_Unstoppable_(thinknews.com.ng)-[AudioTrimmer.com]");
    song2= loadSound("boloharharshivaayringtone-23073");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}
