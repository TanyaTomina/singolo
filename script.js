const MENU = document.getElementById('header-menu');
const PORTFOLIO_MENU = document.getElementById('portfolio-menu');
const SLIDER = document.getElementById('slider');
const ARROW_LEFT = document.getElementById('arrow_left');
const ARROW_RIGHT = document.getElementById('arrow_right');
const VERTICAL_IPHONE = document.getElementById('iphone-vertical');
const DISPLAY_1 = document.getElementById('display_1');
const HORIZONTAL_IPHONE = document.getElementById('iphone-horizontal');
const DISPLAY_2 = document.getElementById('display_2');
const PORTFOLIO_IMG = document.getElementById('slider_part2');
const MESSAGE = document.getElementById('close-btn');
const SUBMIT_FORM =  document.getElementById('submit_form');
let animation = false;

let divChildren = Array.prototype.slice.call(SLIDER.querySelectorAll('.slider-block'));
let imgChildren = Array.prototype.slice.call(PORTFOLIO_IMG.querySelectorAll('img'));

    MENU.addEventListener('click', (event) =>  {
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    });

    PORTFOLIO_MENU.addEventListener('click', (event) =>  {
        if (event.target.classList.contains('active')) {
            return;
        }
        PORTFOLIO_MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        imgChildren.unshift(imgChildren.pop());
        imgChildren.forEach(item => PORTFOLIO_IMG.appendChild(item));
        event.target.classList.add('active');
    });

    ARROW_LEFT.addEventListener('click', (event) => {
        if (animation) {
            return;
        }
        const activeElement = SLIDER.querySelector('.slider-block:not(.hidden)');
        SLIDER.querySelectorAll('.slider-block.slider-block--disappearing').forEach(function (element) {
            element.classList.remove('slider-block--disappearing');
        });
        SLIDER.querySelectorAll('.slider-block.slider-block--appearing').forEach(function (element) {
            element.classList.remove('slider-block--appearing');
        });
        let index = divChildren.indexOf(activeElement);
        if (index !== -1) {
            let newIndex = index - 1;
            if (newIndex === -1){
                newIndex = divChildren.length - 1;
            }
            divChildren[newIndex].classList.add('slider-block--appearing');
            divChildren[newIndex].classList.remove('hidden');
            animation = true;
            setTimeout(function () {
                divChildren[index].classList.add('slider-block--disappearing');
                divChildren[newIndex].classList.remove('slider-block--appearing');
            },10);
            setTimeout(function () {
                divChildren[index].classList.add('hidden');
                divChildren[index].classList.remove('slider-block--disappearing');
                animation = false;
            }, 600);
        }
    });

    ARROW_RIGHT.addEventListener('click', (event) => {
        if (animation) {
            return;
        }
        const activeElement = SLIDER.querySelector('.slider-block:not(.hidden)');
        SLIDER.querySelectorAll('.slider-block.slider-block--disappearing').forEach(function (element) {
            element.classList.remove('slider-block--disappearing');
        });
        SLIDER.querySelectorAll('.slider-block.slider-block--appearing').forEach(function (element) {
            element.classList.remove('slider-block--appearing');
        });
        let index = divChildren.indexOf(activeElement);
        if (index !== -1) {
            let newIndex = index + 1;
            if (newIndex >= divChildren.length) {
                newIndex = 0;
            }
            divChildren[newIndex].classList.add('slider-block--appearing');
            divChildren[newIndex].classList.remove('hidden');
            animation = true;
            setTimeout(function () {
                divChildren[index].classList.add('slider-block--disappearing');
                divChildren[newIndex].classList.remove('slider-block--appearing');
            },10);
            setTimeout(function () {
                divChildren[index].classList.add('hidden');
                divChildren[index].classList.remove('slider-block--disappearing');
                animation = false;
            }, 600);
        }
    });

    VERTICAL_IPHONE.addEventListener('click', (event) => {
        let element = SLIDER.querySelector('.display-iphone-vertical');
        if (element.style.display !== 'block') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    DISPLAY_1.addEventListener('click', (event) => {
        let element = SLIDER.querySelector('.display-iphone-vertical');
        if (element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });

    HORIZONTAL_IPHONE.addEventListener('click', (event) => {
        let element = SLIDER.querySelector('.display-iphone-horizontal');
        if (element.style.display !== 'block') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    DISPLAY_2.addEventListener('click', (event) => {
        let element = SLIDER.querySelector('.display-iphone-horizontal');
        if (element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });

    PORTFOLIO_IMG.addEventListener('click', (event) => {
        PORTFOLIO_IMG.querySelectorAll('img').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    });

    SUBMIT_FORM.addEventListener('click', (event) => {
        let subject = document.getElementById('subject').value.toString();
        let describe = document.getElementById('describe').value.toString();
        let name = document.getElementById('form-name').value.toString();
        let email = document.getElementById('form-email').value.toString();

        if (!name || !email) {
            return false;
        }
        if (!subject) {
            document.getElementById('result-subject').innerText = 'Без темы';
        } else {
            document.getElementById('result-subject').innerText = subject;
        }
        if (!describe) {
            document.getElementById('result-describe').innerText = 'Без описания';
        } else {
            document.getElementById('result-describe').innerText = describe;
        }
        document.getElementById('message-block').classList.remove('hidden');
        event.preventDefault();
    });

    MESSAGE.addEventListener('click', (event) => {
        let subject = document.getElementById('subject').value = '';
        let describe = document.getElementById('describe').value = '';
        let name = document.getElementById('form-name').value = '';
        let email = document.getElementById('form-email').value = '';
        document.getElementById('result-subject').innerText = '';
        document.getElementById('result-describe').innerText = '';

        document.getElementById('message-block').classList.add('hidden');
    });