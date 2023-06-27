const inputOnChange = (event, name, name2) => {
    var label = document.getElementById(`label-${name}`);

    var inputsSubject = document.getElementsByName(`${name2}`);

    // if (event.target.checked) {
    //     label.classList.remove('bg-white')
    //     label.classList.add('bg-accent-1-opacity')
    // } else {
    //     label.classList.add('bg-white')
    //     label.classList.remove('bg-accent-1-opacity')
    // }

    if (name === 'subject-legal-entities') {
        document.getElementById('inn-organization').classList.remove('hidden')
        document.getElementById('name-of-the-organization').classList.remove('hidden')
        document.getElementById('for-new-clients-section').classList.remove('hidden')
        document.getElementById('label-payment-method-from-a-client-account').classList.remove('hidden')
        document.getElementById('label-payment-method-online').classList.add('hidden')
        document.getElementById('label-payment-method-courier').classList.add('hidden')
        document.getElementById('label-payment-method-fps').classList.add('hidden')
    } else if (name === 'subject-individuals') {
        document.getElementById('inn-organization').classList.add('hidden')
        document.getElementById('name-of-the-organization').classList.add('hidden')
        document.getElementById('for-new-clients-section').classList.add('hidden')
        document.getElementById('label-payment-method-from-a-client-account').classList.add('hidden')
        document.getElementById('label-payment-method-online').classList.remove('hidden')
        document.getElementById('label-payment-method-courier').classList.remove('hidden')
        document.getElementById('label-payment-method-fps').classList.remove('hidden')
    } else if (name === 'delivery-pickup') {
        document.getElementById('pickup-section').classList.remove('hidden');
    } 
    else if (name === 'delivery-courier') {
        document.getElementById('pickup-section').classList.add('hidden');
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