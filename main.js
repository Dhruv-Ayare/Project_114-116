noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}


function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX);
        console.log("noseY="+noseY);
    }
}


function modelLoaded(){
console.log("poseNet is initialized");
}


function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}


function takeSnapshot(){
    save("Clown nose filter image.png");
}