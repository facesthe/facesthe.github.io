// var slider = document.getElementById("myRange");
// var output = document.getElementById("rangeOutput");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function () {
//   output.innerHTML = Math.log2(this.value).toPrecision(1);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // var slider = document.getElementById("myRange");
//   slider.textContent = slider.value + '%';
// })

const SHUTTER_VALS = [1, 2, 4, 8, 15, 30, 60, 125, 250, 500, 1000, 2000, 4000];
const F_STOPS = [1.0, 1.4, 2.0, 2.8, 4.0, 5.6, 8, 11, 16, 22, 32];
const ISO_VALUES = [100, 200, 400, 800, 1600, 3200, 6400];

// sliders
var slider_shutter = document.getElementById("evShutterSlider");
var slider_aperture = document.getElementById("evApertureSlider");
var slider_ev = document.getElementById("evSlider");
var slider_iso = document.getElementById("ISOSlider");

// html vars
var shutter_output = document.getElementById("evShutterOutput");
var aperture_output = document.getElementById("evApertureOutput");
var ev_output = document.getElementById("evValueOutput");
var iso_output = document.getElementById("ISOValueOutput");

var shutter_calc = document.getElementById("");
var aperture_calc;

// ev at a specific ISO - differs according to ISO value
var effective_ev;

slider_shutter.oninput = function () {
  ev_shutter(this.value);
}

slider_aperture.oninput = function () {
  ev_aperture(this.value);
}

slider_ev.oninput = function () {
  ev_iso(this.value);
}

slider_iso.oninput = function () {
  iso(this.value);
}

function ev_shutter(ev_s) {
  shutter_output.innerHTML = ev_s;

  var ev_a = Number(aperture_output.textContent);
  var value = Number(ev_s) + ev_a;
  slider_ev.value = value;
  ev_output.innerHTML = value;
}

function ev_aperture(ev_a) {
  aperture_output.innerHTML = ev_a;

  var ev_s = Number(shutter_output.textContent);
  var value = ev_s + Number(ev_a);

  slider_ev.value = value;
  ev_output.innerHTML = value;
}

function ev_iso(ev_val) {
  ev_output.innerHTML = ev_val;
}

function iso(iso_val) {
  iso_output.innerHTML = iso_val;
}


