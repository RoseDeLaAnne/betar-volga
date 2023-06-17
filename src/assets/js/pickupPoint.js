const selectPickupPoint = (id) => {
    var pickupPoint = document.getElementById(`pickup-point-${id}`);
    var logo = document.getElementById(`pickup-point-${id}-logo`);

    if (pickupPoint.classList.contains("border-stroke-1")) {
        pickupPoint.classList.add("border-accent-1");
        pickupPoint.classList.remove("border-stroke-1");
    } else {
        pickupPoint.classList.remove("border-accent-1");
        pickupPoint.classList.add("border-stroke-1");
    }

    if (logo.dataset.color === "false") {
        logo.src = "assets/images/only-logo-color.svg";
        logo.dataset.color = "true";
    } else {
        logo.src = "assets/images/only-logo.svg";
        logo.dataset.color = "false";
    }
};
