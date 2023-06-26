const swiperCarousel = new Swiper(".swiper-container-carousel", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-carousel",
        prevEl: ".swiper-button-prev-carousel",
    },
    pagination: {
        el: ".swiper-pagination-carousel",
        clickable: true,
    },
});

const swiperGoods = new Swiper(".swiper-container-goods", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    navigation: {
        nextEl: ".swiper-button-next-goods",
        prevEl: ".swiper-button-prev-goods",
    },
    pagination: {
        el: ".swiper-pagination-goods",
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

const swiperPopularBrands = new Swiper(".swiper-container-popular-brands", {
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
});

const swiperOurBlog = new Swiper(".swiper-container-our-blog", {
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
