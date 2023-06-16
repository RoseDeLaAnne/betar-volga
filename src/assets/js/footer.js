const footerCatalogNav = document.getElementById("footer-catalog-nav");
const footerCatalogSvg = document.getElementById("footer-catalog-svg");
const footerCatalogSvgId = document.getElementById(
    "footer-catalog-svg-id"
);
const footerInformationNav = document.getElementById("footer-information-nav");
const footerInformationSvg = document.getElementById("footer-information-svg");
const footerInformationSvgId = document.getElementById(
    "footer-information-svg-id"
);

const footerCatalogNavToggle = () => {
    footerCatalogNav.classList.toggle("max-h-64");
    footerCatalogSvg.classList.toggle("fill-accent-1");
    if (
        footerCatalogSvgId.href.baseVal ===
        "assets/icons/sprites.svg#arrow_top"
    ) {
        footerCatalogSvgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_bottom"
        );
    } else {
        footerCatalogSvgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_top"
        );
    }
};
const footerInformationNavToggle = () => {
    footerInformationNav.classList.toggle("max-h-64");
    footerInformationSvg.classList.toggle("fill-accent-1");
    if (
        footerInformationSvgId.href.baseVal ===
        "assets/icons/sprites.svg#arrow_top"
    ) {
        footerInformationSvgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_bottom"
        );
    } else {
        footerInformationSvgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_top"
        );
    }
};
