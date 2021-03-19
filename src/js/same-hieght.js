function setMaxHeight(getSelector) {
    let els = document.querySelectorAll(getSelector),
        arr = [];
    for (let i = 0; i < els.length; i++) {
        arr.push({ height: els[i].clientHeight });
    }
    let elsMaxHeight = Math.max(...arr.map(o => o.height));
    for (let i = 0; i < els.length; i++) {
        els[i].style.height = elsMaxHeight + 'px';
    }
}
/* Use this function to apply same height for your elements for this you should write their selector on parameter setMaxHeight() */
setMaxHeight('.same-height');
setMaxHeight('.advantage-slider-container .swiper-slide');
setMaxHeight('.questions-slider-container .swiper-slide');