Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera')
    
    
    function take_snapshot() {
    Webcam.snap(function(datauri) {
    document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+"/>"
    });
    }
    
    console.log('ml5 verson:', ml5.verson);
    classifire = ml5.imageclassifire('https://teachablemachine.withgoogle.com/models/X0OTsHIBz/model.json', modelLoded);
    
    function modelLoded()
    {
        console.log('moodel_loded');
    }

    function check(){
        img = document.getElementById('captured_image');
        classifire.classify(img, gotresult);
    }

    function gotresult(error, result)
    {
    if(error){
        console.error(error);
    } else{

console.log(result)
document.getElementById("result_object_name").innerHTML = result[0].lable
document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);



    }





    }
