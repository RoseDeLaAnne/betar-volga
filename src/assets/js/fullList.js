const fullListToggle = (name) => {
    document.getElementById(`${name}-ul`).classList.toggle("max-h-[592px]");
    if (
        document.getElementById(`${name}-svg-id`).href.baseVal ===
        "assets/icons/sprites.svg#arrow_top"
    ) {
        document.getElementById(`${name}-svg-id`).setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_bottom"
        );
    } else {
        document.getElementById(`${name}-svg-id`).setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_top"
        );
    }
};

