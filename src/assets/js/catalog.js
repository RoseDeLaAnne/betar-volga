const openCatalog = () => {
    var catalog = document.getElementById('catalog')
    var catalogSpan = document.getElementById('catalog-span')
    var catalogSvg = document.getElementById("catalog-svg");
    var catalogSvgUse = document.getElementById("catalog-svg-use");
    var catalogSvgIconName = catalogSvgUse.href.baseVal.slice(
        catalogSvgUse.href.baseVal.lastIndexOf("#") + 1
    );

    catalog.classList.toggle('border-gray')
    catalog.classList.toggle('border-accent-1')
    catalog.classList.toggle('bg-accent-1')
    catalogSvg.classList.toggle('stroke-gray')
    catalogSpan.classList.toggle('text-gray')

    if (catalogSvgIconName === "burger") {
        catalogSvgUse.setAttribute("href", "assets/icons/sprites.svg#close");
    } else {
        catalogSvgUse.setAttribute(
            "href",
            "assets/icons/sprites.svg#burger"
        );
    }

    document.getElementById('catalog-pop-up').classList.toggle('opacity-0')
    document.getElementById('catalog-pop-up').classList.toggle('opacity-100')
    document.getElementById('catalog-pop-up').classList.toggle('opacity-100')
    document.getElementById('catalog-pop-up').classList.toggle('visible')
    document.getElementById('catalog-pop-up').classList.toggle('invisible')
}

const fullList = (name) => {
    const ul = document.getElementById(`ul-${name}`);

    ul.classList.remove('max-h-[400px]')
    ul.classList.add('max-h-[1024px]')
    ul.classList.remove('overflow-hidden')
    ul.classList.add('overflow-y-auto')
}