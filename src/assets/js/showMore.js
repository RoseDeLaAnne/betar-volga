var gridItemsSeasonalGoods = document.getElementsByClassName("grid-item-seasonal-goods");
var gridItemsPromotions = document.getElementsByClassName("grid-item-promotions");
var gridItemsOurBlog = document.getElementsByClassName("grid-item-our-blog");
var gridItemsPopularBrands = document.getElementsByClassName("grid-item-popular-brands");

// for (var i = 4; i < gridItemsSeasonalGoods.length; i++) {
//     gridItemsSeasonalGoods[i].classList.add("grid-hidden");
// }
// for (var i = 4; i < gridItemsPromotions.length; i++) {
//     gridItemsPromotions[i].classList.add("grid-hidden");
// }
// for (var i = 3; i < gridItemsOurBlog.length; i++) {
//     gridItemsOurBlog[i].classList.add("grid-hidden");
// }
// for (var i = 5; i < gridItemsPopularBrands.length; i++) {
//     gridItemsPopularBrands[i].classList.add("grid-hidden");
// }

function showAllRows(name) {
    switch (name) {
        case 'seasonal-goods':
            for (var i = 0; i < gridItemsSeasonalGoods.length; i++) {
                gridItemsSeasonalGoods[i].classList.remove("grid-hidden");
            }
            break;
        case 'promotions':
            for (var i = 0; i < gridItemsPromotions.length; i++) {
                gridItemsPromotions[i].classList.remove("grid-hidden");
            }
            break;
        case 'our-blog':
            for (var i = 0; i < gridItemsOurBlog.length; i++) {
                gridItemsOurBlog[i].classList.remove("grid-hidden");
            }
            break;
        case 'popular-brands':
            for (var i = 0; i < gridItemsPopularBrands.length; i++) {
                gridItemsPopularBrands[i].classList.remove("grid-hidden");
            }
            break;
    }
    document.getElementById(`show-more-${name}`).classList.add('hidden')
}
