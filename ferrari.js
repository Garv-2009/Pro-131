img = "";
obj_detect = "";
objects=[];
function preload(){
    img = loadImage("laferrari.jpeg");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("obj_detect").innerHTML = "Status: Object Detecting";
}
function modelloaded(){
  console.log("Model");
  obj_detect = true;
  objectDetector.detect(img,getResult);
}
function getResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
        
    }
    
}
function draw(){
    image(img,0,0,500,500);
    if(obj_detect != "" ){
        for(i=0; i<objects.length; i++){
            document.getElementById("obj_detect").innerHTML = "Status: Ferrari Detected";
            percent = floor(objects[i].confidence * 100);
            fill("red");
            text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x -40 , objects[i].y, objects[i].height, objects[i].width)
            
        }
    }
}