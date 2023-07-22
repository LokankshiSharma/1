function setup(){
  canvas=createCanvas(300, 300);
canvas.position(560,150);
video=createCapture( VIDEO );
video.size(550, 500);
PoseNet=ml5.poseNet(video, modelLoaded);
PoseNet.on("pose", gotResult)
}
function draw(){
  background("cadetblue")
}
function modelLoaded(){
  console.log("PoseNet is initialized");
}
function gotResult(results){
if (results.length>0)
{
console.log(results)
}
}
