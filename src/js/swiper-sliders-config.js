// /* Offer slider */
// const offerSlider = new Swiper('.offer-slider-container', {
//     slidesPerView: 3,
//     loop: true,
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1.5,
//             spaceBetween: 20,
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false
//             },
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 1.5,
//             spaceBetween: 30,
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false
//             },
//         },
//         // when window width is >= 768px
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//             autoplay: {
//                 delay: 2000,
//                 disableOnInteraction: false
//             },
//         },
//         // when window width is >= 992px
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//             autoplay: false,
//             loop: false,
//         }
//     }
// });

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

// /* Advantage slider */
// const advantageSlider = new Swiper('.advantage-slider-container', {
//     spaceBetween: 21,
//     slidesPerView: 3,
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//         },
//         480: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         991: {
//             slidesPerView: 3,
//         },
//     },
//     // breakpointsBase: 'container'

// });

// /* Questions slider */
// const questionsSlider = new Swiper('.questions-slider-container', {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1,
//             loop: true,
//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false
//             },
//         },
//         // when window width is >= 768px
//         768: {
//             slidesPerView: 2,
//             loop: true,
//             autoplay: {
//                 delay: 3000,
//                 disableOnInteraction: false
//             },
//         },
//         // when window width is >= 1200px
//         1200: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//             loop: false,
//             autoplay: false,
//         }
//     }
// });