function openNavMenu() {
    let burgerIcon = document.querySelector('.burger-icon');

    burgerIcon.addEventListener('click', function () {
        let dropwDown = document.querySelector('.header-nav-links');
        burgerIcon.classList.toggle('active-three');
        if (burgerIcon.classList.contains('active-three')) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        dropwDown.classList.toggle('d-flex');
    })
}

openNavMenu();
