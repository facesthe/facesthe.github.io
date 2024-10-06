+++
title = "EV, aperture and shutter speed"

[taxonomies]
tags = ["photography"]
+++

<div>
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
  <span id="rangeOutput" class="accent-data" "50%">

  <script>
    var slider = document.getElementById("myRange");
    var output = document.getElementById("rangeOutput");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value + '%';
    }
  </script>

</div>
