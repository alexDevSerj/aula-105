camera = document.getElementById("camera");
      
Webcam.attach( camera );      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    /*Escreva o código para: 
    1.Armazenar a API speech na variável synth, 
    2.Armazenar os dados, na variável speak_data, que queremos que o sistema leia,
    3.Utilize a função SpeechSynthesisUtterance() para converter o texto em fala que salvamos na variável speak_data.
    4.Em seguida, utilize synth.speak() para ler o texto fornecido
    5.Atualize o nome do objeto e precisão, como fizemos antes.
    
    
    */
  var synth = window.speechSynthesis;
  speak_data = "isto é"+results[0].label;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis)
  document.getElementById("result_object_name").innerHTML = results[0].label;
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XdPmOTsTc/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    //Escreva o código para armazenar selfie_image em uma variável img e, em seguida, utilize a função classify() para classificá-la
    img = document.getElementById('selfie_image')
    classifier.classify(img,gotResult)
  }
