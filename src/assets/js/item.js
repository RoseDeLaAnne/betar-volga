const itemShowContent = (name) => {
    document.getElementById(`item-description-li`).classList.remove('bg-accent-1')
    document.getElementById(`item-description-li`).classList.remove('text-fullWhite')
    document.getElementById(`item-description-li`).classList.remove('bg-white')
    document.getElementById(`item-description-li`).classList.remove('text-white')
    document.getElementById(`item-description-li`).classList.remove('text-textPrimary')
    
    document.getElementById(`item-advantages-li`).classList.remove('bg-accent-1')
    document.getElementById(`item-advantages-li`).classList.remove('text-fullWhite')
    document.getElementById(`item-advantages-li`).classList.remove('bg-white')
    document.getElementById(`item-advantages-li`).classList.remove('text-white')
    document.getElementById(`item-advantages-li`).classList.remove('text-textPrimary')

    document.getElementById(`item-payment-li`).classList.remove('bg-accent-1')
    document.getElementById(`item-payment-li`).classList.remove('text-fullWhite')
    document.getElementById(`item-payment-li`).classList.remove('bg-white')
    document.getElementById(`item-payment-li`).classList.remove('text-white')
    document.getElementById(`item-payment-li`).classList.remove('text-textPrimary')

    document.getElementById(`item-${name}-li`).classList.add('bg-accent-1')
    document.getElementById(`item-${name}-li`).classList.add('text-fullWhite')
    document.getElementById(`item-${name}-li`).classList.remove('bg-white')
    document.getElementById(`item-${name}-li`).classList.remove('text-white')
    document.getElementById(`item-${name}-li`).classList.remove('text-textPrimary')

    document.getElementById(`content-description`).classList.add('hidden')
    document.getElementById(`content-description`).classList.remove('flex')
    document.getElementById(`content-advantages`).classList.add('hidden')
    document.getElementById(`content-advantages`).classList.remove('flex')
    document.getElementById(`content-payment`).classList.add('hidden')
    document.getElementById(`content-payment`).classList.remove('flex')

    document.getElementById(`content-${name}`).classList.add('flex')
    document.getElementById(`content-${name}`).classList.remove('hidden')
    
}

const openImage = (id) => {
    const mainItemImage = document.getElementById('main-item-image');

    console.log(mainItemImage.src = `assets/images/catalog-item-${id}.png`)
}

window.addEventListener('scroll', function() {
    var contentBlock = document.getElementById('cart-image-below');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 500) {
      contentBlock.style.display = 'block';
    } else {
      contentBlock.style.display = 'none';
    }
  });