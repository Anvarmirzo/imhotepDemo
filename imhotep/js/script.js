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
      // e.preventDefault();
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
  /* Gallery slider */

  var gallerySlider = new Swiper('.gallery-slider-container', {
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loopAdditionalSlides: 30,
    initialSlide: 1,
    speed: 500,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      }
    }
  });
  /* Objects slider */

  var galleryThumbs = new Swiper('.objects-gallery-thumbs', {
    spaceBetween: 22,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var galleryTop = new Swiper('.objects-gallery-top', {
    spaceBetween: 22,
    thumbs: {
      swiper: galleryThumbs
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  function setMaxHeight(getSelector) {
    var els = document.querySelectorAll(getSelector),
        arr = [];

    for (var _i = 0; _i < els.length; _i++) {
      arr.push({
        height: els[_i].clientHeight
      });
    }

    var elsMaxHeight = Math.max.apply(Math, _toConsumableArray(arr.map(function (o) {
      return o.height;
    })));

    for (var _i2 = 0; _i2 < els.length; _i2++) {
      els[_i2].style.height = elsMaxHeight + 'px';
    }
  }
  /* Use this function to apply same height for your elements for this you should write their selector on parameter setMaxHeight() */


  setMaxHeight('.same-height');
  setMaxHeight('.advantage-slider-container .swiper-slide');
  setMaxHeight('.questions-slider-container .swiper-slide');
  AOS.init({
    offset: 200,
    duration: 400,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
  });
  var linkNav = document.querySelectorAll('[href^="#"]'),
      //???????????????? ?????? ???????????? ?? ?????????? ???? ????????????????
  V = 0.2; // ????????????????, ?????????? ?????????? ?????????????? ???????????????? ?????????? ?????????? (?????? ???????????? ???????????????? - ?????? ???????????? ????????????????)

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      //???? ?????????? ???? ????????????
      e.preventDefault(); //???????????????? ?????????????????????? ??????????????????

      var w = window.pageYOffset,
          // ???????????????????? ?????????????????? ??????????????????
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // ?? id ????????????????, ?? ???????????????? ?????????? ??????????????

      var t = document.querySelector(hash).getBoundingClientRect().top,
          // ???????????? ???? ???????? ???????????????? ???? id
      start = null;
      requestAnimationFrame(step); // ?????????????????? ?????? ?????????????? ???????????????? [developer.mozilla.org]

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);

        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL ?? ??????????
        }
      }
    }, false);
  }
}, false);