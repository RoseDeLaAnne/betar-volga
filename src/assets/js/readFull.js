const readFull = () => {
    const ul = document.getElementById('read-full-ul')
    const svgUse = document.getElementById('read-full-svg-use')

    ul.classList.toggle('max-h-16')
    ul.classList.toggle('max-h-96')

    if (
        svgUse.href.baseVal ===
        "assets/icons/sprites.svg#arrow_top"
    ) {
        svgUse.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_bottom"
        );
    } else {
        svgUse.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_top"
        );
    }
}