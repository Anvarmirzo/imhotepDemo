"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  /* function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });*/

  function openNavMenu() {
    var burgerIcon = document.querySelector('.burger-icon');
    burgerIcon.addEventListener('click', function () {
      var dropwDown = document.querySelector('.header-nav-links');
      burgerIcon.classList.toggle('active-three');

      if (burgerIcon.classList.contains('active-three')) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }

      dropwDown.classList.toggle('d-flex');
    });
  }

  openNavMenu();

  function showNumberForm() {
    var numberForm = document.getElementById('number-form');
    var callBtns = document.querySelectorAll('.call-btn');
    var successAnswer = document.getElementById('success-answer');
    var submitBtn = document.getElementById('submit-number-form');
    var closeSuccessAnswer = document.getElementById('close-success-answer');
    var closeBtn = document.querySelectorAll('.close-form');
    callBtns.forEach(function (callBtn) {
      callBtn.addEventListener('click', function () {
        var dropDown = document.querySelector('.header-nav-links');
        var burgerIcon = document.querySelector('.burger-icon');
        burgerIcon.classList.remove('active-three');
        dropDown.classList.remove('d-flex');
        numberForm.classList.toggle('show-number-form');
      });
    });
    submitBtn.addEventListener('click', function (e) {
      // WARNING! That' only for testing, you will delete next line (e.preventDefault()) for normal work of forms
      e.preventDefault();
      numberForm.classList.remove('show-number-form');
      successAnswer.classList.toggle('show-number-form');
    });
    closeSuccessAnswer.addEventListener('click', function () {
      successAnswer.classList.remove('show-number-form');
      document.body.classList.remove('overflow-hidden');
    });
    closeBtn.forEach(function (element) {
      element.addEventListener('click', function () {
        numberForm.classList.remove('show-number-form');
        successAnswer.classList.remove('show-number-form');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  showNumberForm();
  /* Offer slider */

  var offerSlider = new Swiper('.offer-slider-container', {
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
        }
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: false,
        loop: false
      }
    }
  });
  /* Gallery slider */

  var gallerySlider = new Swiper('.gallery-slider-container', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.gallery-slider-container .swiper-button-next',
      prevEl: '.gallery-slider-container .swiper-button-prev'
    }
  });
  /* Advantage slider */

  var advantageSlider = new Swiper('.advantage-slider-container', {
    slidesPerView: 3,
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
        }
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2.25,
        spaceBetween: 40,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        autoplay: false
      }
    }
  });
  /* Questions slider */

  var questionsSlider = new Swiper('.questions-slider-container', {
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
        }
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        autoplay: false
      }
    }
  });

  function setMaxHeight(getSelector) {
    var els = document.querySelectorAll(getSelector),
        arr = [];

    for (var i = 0; i < els.length; i++) {
      arr.push({
        height: els[i].clientHeight
      });
    }

    var elsMaxHeight = Math.max.apply(Math, _toConsumableArray(arr.map(function (o) {
      return o.height;
    })));

    for (var _i = 0; _i < els.length; _i++) {
      els[_i].style.height = elsMaxHeight + 'px';
    }
  }
  /* Use this function to apply same height for your elements for this you should write their selector on parameter setMaxHeight() */


  setMaxHeight('.same-height');
  setMaxHeight('.advantage-slider-container .swiper-slide');
  setMaxHeight('.questions-slider-container .swiper-slide');
}, false);