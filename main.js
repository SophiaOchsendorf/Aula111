//https://teachablemachine.withgoogle.com/models/lqC6HeQsP/

//treinamento do projeto
webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQualit:90
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function takeSnapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier(,modelLoaded);

function modelLoaded() {
    console.log('modelLoaded!');
}






   
        
        
        
        
        
    