Webcam.set({
    width:340,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id = 'snapshot' src='" + data_uri + "'>";
})
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yL_G6kNVo/model.json', model_loaded);

function model_loaded(){
    console.log("Model Is Loaded");
}

prediction1 = "";
prediction2 = "";

function speak(){
    var synth = windo.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction1;
    speak_data2 = "And the second prediction is " + prediction2;

    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);

    synth.speak(utterThis);
}


