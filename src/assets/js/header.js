// const header = document.getElementById("header");
// const headerLevel1 = document.getElementById("header-level-1");
// const headerLevel2 = document.getElementById("header-level-2");
// const headerLevel3 = document.getElementById("header-level-3");

// window.addEventListener("scroll", () => {
//     console.log(window.scrollY);
//     if (window.scrollY >= 48) {
// header.classList.add("fixed");
// header.classList.add("top-0");
// header.classList.add("left-0");
// document.body.style.paddingTop = "220px";
// headerLevel1.classList.add("hidden");
// headerLevel1.classList.remove("sm:block");
// headerLevel3.classList.add("hidden");
// headerLevel3.classList.remove("sm:block");
//     } else {
//         header.classList.remove("fixed");
//         header.classList.remove("top-0");
//         header.classList.remove("left-0");
//         document.body.style.paddingTop = 0;
//         headerLevel1.classList.remove("hidden");
//         headerLevel1.classList.add("sm:block");
//         headerLevel3.classList.remove("hidden");
//         headerLevel3.classList.add("sm:block");
//     }
// });

const header = document.getElementById("header");
const headerLevel1 = document.getElementById("header-level-1");
const headerLevel2 = document.getElementById("header-level-2");
const headerLevel3 = document.getElementById("header-level-3");
var headerHeight = header.offsetHeight;
var scrollPosition = window.scrollY || document.documentElement.scrollTop;
var scrollThreshold = 100; // Adjust this value to your desired scroll threshold
var scrollDirection = "down";
var lastScrollPosition = 0;

function toggleFixedHeader() {
    scrollPosition = window.scrollY || document.documentElement.scrollTop;

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
            // headerLevel1.classList.add("invisible");
            // headerLevel1.classList.add("max-h-0");
            // headerLevel1.classList.remove("opacity-0");
            // headerLevel1.classList.remove("invisible");
            headerLevel3.classList.remove("max-h-64");
            headerLevel3.classList.add("max-h-0");
            // headerLevel3.classList.add("invisible");
            // headerLevel3.classList.add("max-h-0");
            // headerLevel3.classList.remove("opacity-0");
            // headerLevel3.classList.remove("invisible");
        }
    } else {
        // Scrolling up
        scrollDirection = "up";

        // headerLevel1.classList.remove("opacity-0");
        // headerLevel1.classList.remove("invisible");
        headerLevel1.classList.remove("max-h-0");
        headerLevel1.classList.add("max-h-64");
        // headerLevel3.classList.remove("opacity-0");
        // headerLevel3.classList.remove("invisible");
        headerLevel3.classList.remove("max-h-0");
        headerLevel3.classList.add("max-h-64");
    }

    lastScrollPosition = scrollPosition;
}

window.addEventListener("scroll", toggleFixedHeader);
window.addEventListener("resize", function () {
    headerHeight = header.offsetHeight;
    toggleFixedHeader();
});
