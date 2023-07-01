const header = document.getElementById("header");
const headerLevel1 = document.getElementById("header-level-1");
const headerLevel2 = document.getElementById("header-level-2");
const headerLevel3 = document.getElementById("header-level-3");
var headerHeight = header.offsetHeight;
var scrollPosition = window.scrollY || document.documentElement.scrollTop;
var scrollThreshold = 100; // Adjust this value to your desired scroll threshold
var scrollDirection = "down";
var lastScrollPosition = 0;

const cartSide = document.getElementById("cart-side");
const cartSideBlock = document.getElementById("cart-side-block");

const catalogPopUpBlock = document.getElementById("catalog-pop-up-block");

function toggleFixedHeader() {

    scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > lastScrollPosition) {
        // Scrolling down
        scrollDirection = "down";

        if (window.innerWidth <= 1024) {
            cartSide.classList.remove(`top-[92px]`);
            cartSide.classList.remove(`h-[calc(100%-92px)]`);
            cartSideBlock.classList.remove(`h-[calc(100%-92px)]`);

            cartSide.classList.add(`top-[104px]`);
            cartSide.classList.add(`h-[calc(100%-104px)]`);
            cartSideBlock.classList.add(`h-[calc(100%-104px)]`);
        } else {
            cartSide.classList.remove("top-[104px]");
            cartSide.classList.remove("lg:top-[220px]");
            cartSideBlock.classList.remove("lg:top-[220px]");

            cartSide.classList.add(`top-[92px]`);
            cartSide.classList.add(`h-[calc(100%-92px)]`);
            cartSideBlock.classList.add(`lg:h-[calc(100%-92px)]`);
        }

        if (scrollPosition > 48) {
            header.classList.add("fixed");
            header.classList.add("top-0");
            header.classList.add("left-0");
            document.body.style.paddingTop = headerHeight + "px";
            headerLevel1.classList.remove("max-h-64");
            headerLevel1.classList.add("max-h-0");
            headerLevel3.classList.remove("max-h-64");
            headerLevel3.classList.add("max-h-0");

            catalogPopUpBlock.classList.add(`top-[92px]`);
        }
    } else {
        // Scrolling up
        scrollDirection = "up";

        if (window.innerWidth <= 1024) {
            cartSide.classList.remove(`top-[92px]`);
            cartSide.classList.remove(`h-[calc(100%-92px)]`);
            cartSideBlock.classList.remove(`h-[calc(100%-92px)]`);

            cartSide.classList.add(`top-[104px]`);
            cartSide.classList.add(`h-[calc(100%-104px)]`);
            cartSideBlock.classList.add(`h-[calc(100%-104px)]`);
        } else {
            cartSide.classList.remove(`top-[92px]`);
            cartSide.classList.remove(`h-[calc(100%-92px)]`);
            cartSideBlock.classList.remove(`lg:h-[calc(100%-92px)]`);

            cartSide.classList.add(`top-[220px]`);
            cartSide.classList.add(`h-[calc(100%-220px)]`);
            cartSideBlock.classList.add(`lg:h-[calc(100%-220px)]`);
        }

        headerLevel1.classList.remove("max-h-0");
        headerLevel1.classList.add("max-h-64");
        headerLevel3.classList.remove("max-h-0");
        headerLevel3.classList.add("max-h-64");

        catalogPopUpBlock.classList.remove(`top-[92px]`);
    }

    lastScrollPosition = scrollPosition;
}

window.addEventListener("scroll", toggleFixedHeader);
window.addEventListener("resize", function () {
    headerHeight = header.offsetHeight;
    toggleFixedHeader();
});
