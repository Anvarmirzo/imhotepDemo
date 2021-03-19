/* Offer slider */
const offerSlider = new Swiper('.offer-slider-container', {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: false,
            loop: false,
        }
    }
});

/* Gallery slider */
const gallerySlider = new Swiper('.gallery-slider-container', {
    loop: true,
    speed: 700,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-slider-container .swiper-button-next',
        prevEl: '.gallery-slider-container .swiper-button-prev',
    },
});

/* Advantage slider */
const advantageSlider = new Swiper('.advantage-slider-container', {
    slidesPerView: 5,
    spaceBetween: 21,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.25,
            spaceBetween: 21,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },

        // when window width is >= 768px
        768: {
            slidesPerView: 2.25,
            spaceBetween: 40,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4.25,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: false,
            autoplay: false,
        }
    }
});

/* Questions slider */
const questionsSlider = new Swiper('.questions-slider-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            autoplay: false,
        }
    }
});