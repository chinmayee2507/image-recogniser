
camera = document.getElementById("camera");
Webcam.attach("#camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
function takeSnapshot(){

    format = Webcam.snap( function (data_uri){

        document.getElementById("result").innerHTML = "<img id='selfie_img' src= '"+ data_uri +"'>" ;
    });
}

console.log("ml5 version:" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oMquZ7Zal/model.json" , modelLoaded );

function check(){

img = document.getElementById("selfie_img");
classifier.classify(img , gotResult);

}

function modelLoaded(){

    console.log("model is loaded");
    
}

function gotResult(error , results){

    if (error){

        console.error(error);

    }

    else{

        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    
}





