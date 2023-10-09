/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].onchange = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = this.value;
        var newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions */

// STEP 1
function changeRgb(channel, value) {
    // STEP 2
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    // STEP 4
    return rgb;
}

// STEP 5
function writeCSS(newRgb) {
    /* STEP 6 */
    var newColor = 'rgb(';
    /* STEP 7 */
    var i = 0;
    while (i < newRgb.length) {
        /* STEP 8 */
        newColor += newRgb[i];
        if (i < newRgb.length - 1) {
            newColor += ', ';
        } else {
            /* STEP 9 */
            newColor += ')';
        }
        i++;
    }
    /* STEP 10 */
    return newColor;
}
