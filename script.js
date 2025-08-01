var wt = document.getElementById("givenwt");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
// var male = document.getElementById("m");
// var female = document.getElementById("f");
var form = document.getElementById("form");
// let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

gsap.fromTo('.loader__square', { opacity: 1 }, {
  opacity: 0,
  duration: 1.5,
  delay: 1.5,
})


function calculate() {

  if (wt.value == '' || height.value == '' || weight.value == '') {
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [wt.value, height.value, weight.value];

  var bmi = Number(0.00616524 * p[1] * p[1] * p[2]);

  var aa = Number(1 / (0.00616524 * p[1] * p[1] * p[2]) * 1000);

  var cc = Number(450 / (0.00616524 * p[1] * p[1] * p[2]) * 1000);

  var bb = Number(p[0] / (0.00616524 * p[1] * p[1] * p[2]) * 1000);

document.querySelector("#result1").innerHTML = bmi.toFixed(4) + " Grams";
document.querySelector("#result2").innerHTML = aa.toFixed(0) + " Nos";
document.querySelector("#result4").innerHTML = cc.toFixed(0) + " Nos";
document.querySelector("#result3").innerHTML = bb.toFixed(0) + " Nos";

document.getElementById("gWt").innerHTML = wt.value;
}




// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
