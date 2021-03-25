/* Gallery slider */
const gallerySlider = new Swiper('.gallery-slider-container', {
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loopAdditionalSlides: 30,
    initialSlide: 1,
    speed: 500,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
/* Objects slider */
const galleryThumbs = new Swiper('.objects-gallery-thumbs', {
    spaceBetween: 22,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
const galleryTop = new Swiper('.objects-gallery-top', {
    spaceBetween: 22,
    thumbs: {
        swiper: galleryThumbs
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});