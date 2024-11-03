+++
title = "EV, aperture and shutter speed"
draft = true

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
  <input type="range" min="0" max="20" value="10" class="slider" id="evSlider">
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
  EV<sub id="isoValue"></sub>
  <span id="exposureValue"></span>
  (LV <span id="lightValue"></span>) :
  1&frasl;<span id="shutterValue"></span>s
  @
  f<span id="apertureValue"></span>
</div>

<script src="./script.js"></script>

<style type="text/css" rel="stylesheet">
  div.slider {
    text-align: center;
    margin-inline: auto;
  }

  div.formula {
      font-size: 2em;
      font-style: italic;
      font-family: georgia, serif;
      text-align: center;
      max-width: fit-content;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
      /* margin: 1em; */
      padding: 0.5em;

      border-style: dotted hidden dotted hidden;
      border-width: 2px;
      /* border-radius: 8px; */
  }

  sub {
    font-size: 0.4em;
  }

  input.slider {
    width: 50%;
    margin-left: 10%;
    margin-right: 5%;
    float: left;
  }

  span.slider_output {
    font-size: 1.1em;
  }

</style>
