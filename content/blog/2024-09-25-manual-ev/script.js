const SHUTTER_VALS = [1, 2, 4, 8, 15, 30, 60, 125, 250, 500, 1000, 2000, 4000];
const F_STOPS = [1.0, 1.4, 2.0, 2.8, 4.0, 5.6, 8, 11, 16, 22, 32];
const ISO_VALUES = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];

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

// formula vars
var shutter_value = document.getElementById("shutterValue");
var aperture_value = document.getElementById("apertureValue");
var iso_value = document.getElementById("isoValue");
var exposure_value = document.getElementById("exposureValue");
var light_value = document.getElementById("lightValue");

shutter_output.textContent = 5;
slider_shutter.value = 5;
shutter_value.textContent = SHUTTER_VALS[5];

aperture_output.textContent = 5;
slider_aperture.value = 5;
aperture_value.textContent = F_STOPS[5];

ev_output.textContent = 10;
slider_ev.value = 10;
exposure_value.textContent = 10;
// light_value.textContent =

iso_output.textContent = 400;
slider_iso.value = 2;
iso_value.textContent = ISO_VALUES[2]
light_value.textContent = 10 + 2;

// prev val of ev
var ev_output_previous = 10;


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
  ev_s = Number(ev_s);
  shutter_output.textContent = ev_s;

  var ev_a = Number(aperture_output.textContent);
  var value = Number(ev_s) + ev_a;

  ev_output_previous = value;
  slider_ev.value = value;
  ev_output.textContent = value;
  shutter_value.textContent = SHUTTER_VALS[ev_s];
  exposure_value.textContent = value;
}

function ev_aperture(ev_a) {
  ev_a = Number(ev_a);
  aperture_output.textContent = ev_a;

  var ev_s = Number(shutter_output.textContent);
  var value = ev_s + Number(ev_a);

  ev_output_previous = value;
  slider_ev.value = value;
  ev_output.textContent = value;
  aperture_value.textContent = F_STOPS[ev_a];
  exposure_value.textContent = value;
}

function ev_iso(ev_val) {
  ev_val = Number(ev_val);

  ev_output.textContent = ev_val;
  var delta = Number(ev_val) - ev_output_previous;
  ev_output_previous = ev_val;

  var ev_s = Number(shutter_output.textContent);
  var ev_a = Number(aperture_output.textContent);

  if (delta > 0) {
    if (ev_s > ev_a) {
      ev_a = ev_a + delta;
      ev_s = ev_val - ev_a;
    } else {
      ev_s = ev_s + delta;
      ev_a = ev_val - ev_s;
    }
  } else {
    if (ev_s > ev_a) {
      ev_s = saturating_sub(ev_s, -delta);
      ev_a = ev_val - ev_s;
    } else {
      ev_a = saturating_sub(ev_a, -delta);
      ev_s = ev_val - ev_a;
    }
  }

  shutter_output.textContent = ev_s;
  aperture_output.textContent = ev_a;
  slider_shutter.value = ev_s;
  slider_aperture.value = ev_a;
  shutter_value.textContent = SHUTTER_VALS[ev_s];
  aperture_value.textContent = F_STOPS[ev_a];
  exposure_value.textContent = ev_val;
  light_value.textContent = ev_val - Number(slider_iso.value);
}

function iso(iso_val) {
  iso_val = Number(iso_val);

  iso_output.textContent = ISO_VALUES[iso_val];
  iso_value.textContent = ISO_VALUES[iso_val];
  light_value.textContent = ev_output.textContent - Number(iso_val);
}

// saturating subtraction to 0
function saturating_sub(num, sub) {
  var inter = Number(num) - Number(sub);

  return (inter < 0) ? 0 : inter;
}

function log_vars() {
  console.log("Shutter: " + shutter_output.textContent);
  console.log("Aperture: " + aperture_output.textContent);
  console.log("EV: " + ev_output.textContent);
  console.log("ISO: " + iso_output.textContent);

  console.log("Shutter slider: " + slider_shutter.value);
  console.log("Aperture slider: " + slider_aperture.value);
  console.log("EV slider: " + slider_ev.value);
  console.log("ISO slider: " + slider_iso.value);
}
