+++
title = "EV, aperture and shutter speed"

[taxonomies]
tags = ["photography"]
+++
<!-- markdownlint-disable MD033 MD041 -->

<!-- interactive section -->
<div class="slider">
  <input type="range" min="0" max="11" value="5" class="slider" id="evShutterSlider">
  EV<sub>s</sub>:
  <!-- <sup>1</sup>/<sub id="evShutterOutput"></sub> -->
  <span id="evShutterOutput" class="slider_output">
</div>

<div class="slider">
  <input type="range" min="0" max="10" value="3" class="slider" id="evApertureSlider">
  EV<sub>f</sub>:
  <span id="evApertureOutput" class="slider_output">
  <!-- EV<sub>f</sub>:
  f<span id="evApertureOutput" class="slider_output"> -->
</div>

<div class="slider">
  <input type="range" min="0" max="17" value="10" class="slider" id="evSlider">
  EV:
  <span id="evValueOutput" class="slider_output">
  <!-- <span id="evValueOutput" class="slider_output"> -->
</div>

<div class="slider">
  <input type="range" min="0" max="7" value="3" class="slider" id="ISOSlider">
  ISO
  <span id="ISOValueOutput" class="slider_output">
</div>

<div class="formula">
formula space
</div>

<script src="./script.js"></script>

<style type="text/css" rel="stylesheet">
  div.slider {
    align: center;
    /* margin-left: auto; */
    /* margin-right: auto; */
  }

  div.formula {
    /* align: center; */
    font-size: 1.5em;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  input.slider {
    width: 50%;
    margin-right: 10px;
    float: left;

    /* justify-content: space-around; */
  }

  span.slider_output {
    font-size: 1.1em;
  }
</style>
