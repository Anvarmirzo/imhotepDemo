function showNumberForm() {
    let numberForm = document.getElementById('number-form');
    let callBtns = document.querySelectorAll('.call-btn');
    let successAnswer = document.getElementById('success-answer');
    let submitBtn = document.getElementById('submit-number-form');
    let closeSuccessAnswer = document.getElementById('close-success-answer');
    let closeBtn = document.querySelectorAll('.close-form');
    callBtns.forEach(callBtn => {
        callBtn.addEventListener('click', function () {
            let dropDown = document.querySelector('.header-nav-links');
            let burgerIcon = document.querySelector('.burger-icon');
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
    closeBtn.forEach(element => {
        element.addEventListener('click', function () {
            numberForm.classList.remove('show-number-form');
            successAnswer.classList.remove('show-number-form');
            document.body.classList.remove('overflow-hidden');
        });
    });
}
showNumberForm();