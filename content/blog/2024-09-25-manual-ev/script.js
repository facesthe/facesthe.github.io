var slider = document.getElementById("myRange");
var output = document.getElementById("rangeOutput");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = Math.log2(this.value).toPrecision(1);
}

document.addEventListener("DOMContentLoaded", function () {
  // var slider = document.getElementById("myRange");
  slider.textContent = slider.value + '%';
})