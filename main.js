noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(1100, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    video.position(440, 180);
}

function modelLoaded() {
    console.log('Posenet is initialized.');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY=" + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX=" + leftwristX + "rightwristX=" + rightwristX + "difference=" + difference);
    }
}

function draw() {
    background("#FFC0CB");
    textSize(difference);
    fill("#FF0000");
    text("Nived", 50, 400)
    document.getElementById("square_sides").innerHTML= "Font size of the text will be = " + difference + "pixel";
}