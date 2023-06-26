const swiperSplash = new Swiper(".swiper-container-splash", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-splash",
        prevEl: ".swiper-button-prev-splash",
    },
    pagination: {
        el: ".swiper-pagination-splash",
        clickable: true,
    },
});

const swiperCertificates = new Swiper(".swiper-container-certificates", {
    navigation: {
        nextEl: ".swiper-button-next-certificates",
        prevEl: ".swiper-button-prev-certificates",
    },
    pagination: {
        el: ".swiper-pagination-certificates",
        clickable: true,
    },
});

var init = false;

var swiperSeasonalGoods;
var swiperPromotions;
var swiperPopularBrands;
var swiperOurBlog;

function swiperCard() {
    if (window.innerWidth >= 1024) {
        if (!init) {
            init = true;
            swiperSeasonalGoods = new Swiper(".swiper-container-seasonal-goods", {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup: 4,
                navigation: {
                    nextEl: ".swiper-button-next-seasonal-goods",
                    prevEl: ".swiper-button-prev-seasonal-goods",
                },
                pagination: {
                    el: ".swiper-pagination-seasonal-goods",
                    clickable: true,
                },
            });
            swiperPromotions = new Swiper(".swiper-container-promotions", {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup: 4,
                navigation: {
                    nextEl: ".swiper-button-next-promotions",
                    prevEl: ".swiper-button-prev-promotions",
                },
                pagination: {
                    el: ".swiper-pagination-promotions",
                    clickable: true,
                },
            });
            swiperPopularBrands = new Swiper(
                ".swiper-container-popular-brands",
                {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 3,
                    navigation: {
                        nextEl: ".swiper-button-next-popular-brands",
                        prevEl: ".swiper-button-prev-popular-brands",
                    },
                    pagination: {
                        el: ".swiper-pagination-popular-brands",
                        clickable: true,
                    },
                }
            );
            swiperOurBlog = new Swiper(".swiper-container-our-blog", {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
                navigation: {
                    nextEl: ".swiper-button-next-our-blog",
                    prevEl: ".swiper-button-prev-our-blog",
                },
                pagination: {
                    el: ".swiper-pagination-our-blog",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);
