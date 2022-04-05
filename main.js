function preload(){

}

nose_x=0;
nose_y=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550)
canvas.position(560,150)
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function draw(){
 background("#96ed64")
 document.getElementById("result").innerHTML="font size will be  ="+difference+"px"
 fill("pink");
 textSize(difference)
 text('Navika',50,400)
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("noseX="+nose_x+"noseY ="+nose_y);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    console.log("leftWrist="+leftWristX+"rightWrist="+rightWristX+"difference="+difference)
    difference=floor(leftWristX-rightWristX)
}
}