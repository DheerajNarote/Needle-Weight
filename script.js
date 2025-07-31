var wt = document.getElementById("wt");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
// var male = document.getElementById("m");
// var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

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
  // var p = [weight.value, dia.value, lenght.value];
  // if(male.checked){
  //   p.push("male");
  // }else if(female.checked){
  //   p.push("female");
  // }

  // var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  var bmi = Number(p[0] / (0.00616225 * p[1] * p[1] * p[2]) * 1000);


  var result = '';
  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = 'Healthy';
  } else if (25 <= bmi && bmi <= 29.9) {
    result = 'Overweight';
  } else if (30 <= bmi && bmi <= 34.9) {
    result = 'Obese';
  } else if (35 <= bmi) {
    result = 'Extremely obese';
  }



  resultArea.style.display = "block";
  // document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(6);

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
