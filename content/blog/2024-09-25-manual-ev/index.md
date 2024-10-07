+++
title = "EV, aperture and shutter speed"

[taxonomies]
tags = ["photography"]
+++
<!-- markdownlint-disable MD033 MD041 -->

<div align="center">
  <input type="range" min=1 max=100 value=50 class="slider" id="myRange">
  <span id="rangeOutput" class="slider_display">
</div>

<div align="center">
  <input type="range" min="-10" max="20" value="6" class="slider" id="evShutter">
  <span id="evShutterWindow" class="slider_display">
</div>

<script>
  var slider = document.getElementById("myRange");
  var output = document.getElementById("rangeOutput");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    output.innerHTML = this.value + '%';
  }

  var evShutter = document.getElementById("evShutter");
  var evShutterOutput = document.getElementById("evShutterWindow");
  evShutterOutput.innerHTML = evShutter.value;

  evShutter.oninput = function() {
    evShutterOutput.innerHTML = this.value + 's';
  }

  // document.addEventListener("DOMContentLoaded", function () {
  //   slider.textContent = slider.value + 'asdads%';
  // })

</script>

<style type="text/css" rel="stylesheet">
  input.slider {
    width: 60%;
    /* margin-right: 10px; */
    float: left;

    /* justify-content: space-around; */
  }

  span.slider_display {
    /* margin-left: 10px; */
    float: right;
  }
</style>

<!-- </div> -->
