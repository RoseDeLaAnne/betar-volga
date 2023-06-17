const inputOnChange = (event, name) => {
    var label = document.getElementById(`label-${name}`);

    console.log(event.target.checked)

    if (event.target.checked) {
        label.classList.remove('bg-white')
        label.classList.add('bg-accent-1-opacity')
    } else {
        label.classList.add('bg-white')
        label.classList.remove('bg-accent-1-opacity')
    }
}

const forNewClients = () => {
    var hideBlock = document.getElementById('for-new-clients-hide-block');
    var svgId = document.getElementById('for-new-clients-svg-id');
    if (
        svgId.dataset.bottom === 'false'
    ) {
        svgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_top"
        );
        svgId.dataset.bottom = 'true'
    } else {
        svgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_bottom"
        );
        svgId.dataset.bottom = 'false'
    }

    hideBlock.classList.toggle('max-h-96');
}