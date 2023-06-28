var sortByWindow = document.getElementById("sort-by-window");
var sortBySvgId = document.getElementById("sort-by-svg-id");


const openSortByWindow = () => {
    var sortBySvgIdIconName = sortBySvgId.href.baseVal.slice(
        sortBySvgId.href.baseVal.lastIndexOf("#") + 1
    );

    console.log(sortBySvgIdIconName)

    if (sortBySvgIdIconName === "arrow_bottom") {
        sortBySvgId.setAttribute("href", "assets/icons/sprites.svg#arrow_top");
    } else {
        sortBySvgId.setAttribute(
            "href",
            "assets/icons/sprites.svg#arrow_bottom"
        );
    }

    sortByWindow.classList.toggle("visible");
    sortByWindow.classList.toggle("invisible");
    sortByWindow.classList.toggle("opacity-0");
    sortByWindow.classList.toggle("opacity-100");
};

const selectLabelSortBy = () => {
    sortByWindow.classList.remove('opacity-100')
    sortByWindow.classList.remove('visible')
    sortByWindow.classList.add('opacity-0')
    sortByWindow.classList.add('invisible')
};
