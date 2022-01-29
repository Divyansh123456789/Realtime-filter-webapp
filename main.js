noseX = 0;
noseY = 0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX - 10,noseY -5,30,30);
}
function take_snapshot(){
    save('Fliter_web_app.png');
}

function modelLoaded(){
    console.log("Posnet is Intialized");
}
function gotPoses(results){
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(results);
    console.log(" nose x = "+ noseX);
    console.log("nose y = "+ noseY);

}