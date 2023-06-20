var body = document.body;
var sideMenu = document.getElementById("side-menu");

const openMenu = () => {
    body.classList.add("h-full");
    body.classList.add("overflow-y-hidden");
    sideMenu.classList.remove("-left-full");
    sideMenu.classList.add("left-0");
};

const closeMenu = () => {
    sideMenu.classList.add("-left-full");
    sideMenu.classList.remove("left-0");
    body.classList.remove("h-full");
    body.classList.remove("overflow-y-hidden");
};

const openUl = (name, level) => {
    var span = document.getElementById(`side-menu-${name}-ul-${level}-span`);
    var svg = document.getElementById(`side-menu-${name}-ul-${level}-svg`);
    var svgId = document.getElementById(`side-menu-${name}-ul-${level}-svg-id`);
    var svgIdIconName = svgId.href.baseVal.slice(
        svgId.href.baseVal.lastIndexOf("#") + 1
    );
    var ul = document.getElementById(`side-menu-${name}-ul-${level}`);

    if (level === 1) {
        span.classList.toggle("text-gray");
        svg.classList.toggle("stroke-textPrimary");
        svg.classList.toggle("stroke-stroke-1");
    } else if (level === 2) {
        span.classList.toggle("text-textPrimary");
        span.classList.toggle("text-accent-2");
        svg.classList.toggle("fill-textPrimary");
        svg.classList.toggle("fill-gray");
    }
    if (svgIdIconName === "plus") {
        svgId.setAttribute("href", "assets/icons/sprites.svg#minus");
    } else if (svgIdIconName === "minus") {
        svgId.setAttribute("href", "assets/icons/sprites.svg#plus");
    } else if (svgIdIconName === "arrow_top") {
        svgId.setAttribute("href", "assets/icons/sprites.svg#arrow_bottom");
    } else if (svgIdIconName === "arrow_bottom") {
        svgId.setAttribute("href", "assets/icons/sprites.svg#arrow_top");
    }

    ul.classList.toggle("max-h-0");
    ul.classList.toggle("max-h-96");
};
