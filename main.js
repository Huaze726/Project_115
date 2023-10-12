function start_classification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifer = ml5.soundClassifer(
    "https://teachablemachine.withgoogle.com/models/YgL3CY79W/model.json",
    modelLoaded
  );
}
function modelLoaded() {
  console.log("model loaded");
  classifer.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    r = Math.float(Math.random() * 255) + 1;
    g = Math.float(Math.random() * 255) + 1;
    b = Math.float(Math.random() * 255) + 1;
    document.getElementById("results_label").innerHTML =
      "Detected voice is off - " + results[0].label;
    img = document.getElementById("animal_image");
    if(results[0].label == "Barking") {
        img.src = "dog.gif";
    } else if (results[0].label == "Meowing") {
        img.src = "cat.gif";
    } else {
        img.src = "listen.gif"
    }
  }
}
