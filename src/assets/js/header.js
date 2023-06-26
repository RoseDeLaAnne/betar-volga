const header = document.getElementById("header");
const headerLevel1 = document.getElementById("header-level-1");
const headerLevel2 = document.getElementById("header-level-2");
const headerLevel3 = document.getElementById("header-level-3");
var headerHeight = header.offsetHeight;
var scrollPosition = window.scrollY || document.documentElement.scrollTop;
var scrollThreshold = 100; // Adjust this value to your desired scroll threshold
var scrollDirection = "down";
var lastScrollPosition = 0;

const cartSide = document.getElementById('cart-side')
const cartSideBlock = document.getElementById('cart-side-block')

const catalogPopUpBlock = document.getElementById('catalog-pop-up-block')

function toggleFixedHeader() {
    console.log(headerHeight)

    scrollPosition = window.scrollY || document.documentElement.scrollTop;

    cartSide.classList.add(`h-[calc(100%-${headerHeight}px)]`)
    cartSideBlock.classList.add(`h-[calc(100%-${headerHeight}px)]`)
    cartSide.classList.add(`top-[${headerHeight}px]`)

    if (scrollPosition > lastScrollPosition) {
        // Scrolling down
        scrollDirection = "down";

        if (scrollPosition > 48) {
            header.classList.add("fixed");
            header.classList.add("top-0");
            header.classList.add("left-0");
            document.body.style.paddingTop = headerHeight + "px";
            headerLevel1.classList.remove("max-h-64");
            headerLevel1.classList.add("max-h-0");
            headerLevel3.classList.remove("max-h-64");
            headerLevel3.classList.add("max-h-0");

            // cartSide.classList.add(`h-[calc(100%-${headerHeight}px)]`)
            // cartSide.classList.remove('h-[calc(100%-220px)]')
            // cartSideBlock.classList.add(`h-[calc(100%-${headerHeight}px)]`)
            // cartSideBlock.classList.remove('h-[calc(100%-220px)]')
            // cartSide.classList.add(`top-[${headerHeight}px]`)
            // cartSide.classList.remove('top-[220px]')

            // catalogPopUpBlock.classList.remove('top-[220px]')
            catalogPopUpBlock.classList.add(`top-[${headerHeight}px]`)
        }
    } else {
        // Scrolling up
        scrollDirection = "up";

        headerLevel1.classList.remove("max-h-0");
        headerLevel1.classList.add("max-h-64");
        headerLevel3.classList.remove("max-h-0");
        headerLevel3.classList.add("max-h-64");

        // cartSide.classList.remove(`h-[calc(100%-${headerHeight}px)]`)
        // cartSide.classList.add('h-[calc(100%-220px)]')
        // cartSideBlock.classList.remove(`h-[calc(100%-${headerHeight}px)]`)
        // cartSideBlock.classList.add('h-[calc(100%-220px)]')
        // cartSide.classList.remove(`top-[${headerHeight}px]`)
        // cartSide.classList.add('top-[220px]')

        catalogPopUpBlock.classList.remove(`top-[${headerHeight}px]`)
        // catalogPopUpBlock.classList.add('top-[220px]')
    }

    lastScrollPosition = scrollPosition;
}

window.addEventListener("scroll", toggleFixedHeader);
window.addEventListener("resize", function () {
    headerHeight = header.offsetHeight;
    toggleFixedHeader();
});
