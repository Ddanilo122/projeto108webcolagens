var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var img_id1=""
var img_id2=""
var img_id3=""
function start()
{
    recognition.start();
    if(img_id1 == "selfie1"){
        document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
     }
     if(img_id2 == "selfie2"){
        document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
     }
     if(img_id3 == "selfie3"){
        document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
     }
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tirando sua selfie nos próximos 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

 setTimeout(function()
 {
img_id1="selfie1"
take_snapshot();
speak_data="Tirando sua selfie em 10 segundos"
var utterThis1=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis1);
 }, 5000 )  ;



 setTimeout(function()
 {
img_id2="selfie2"
take_snapshot();
speak_data="Tirando sua selfie em 15 segundos"
var utterThis2=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis2);
 }, 5000 )  ;

 setTimeout(function()
 {
    img_id3="selfie3"
    take_snapshot();
    speak_data="Tirando sua selfie em 5 segundos"
    var utterThis3=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis3);
 },5000)
 
 



}

