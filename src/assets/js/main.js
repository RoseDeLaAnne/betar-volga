var slider = document.getElementById("slider");
var input1 = document.getElementById("slider-value1");
var input2 = document.getElementById("slider-value2");

noUiSlider.create(slider, {
    start: [0, 100000],
    connect: true,
    range: {
        min: 0,
        max: 100000,
    },
});

slider.noUiSlider.on("update", function (values, handle) {
    input1.value = values[0];
    input2.value = values[1];
});

input1.addEventListener("change", function () {
    slider.noUiSlider.set([this.value, null]);
});

input2.addEventListener("change", function () {
    slider.noUiSlider.set([null, this.value]);
});