// БУРГЕР МЕНЮ

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// СКРОЛЛ ПО МЫШКЕ

const introImg = document.querySelector('.intro__img');
if(introImg) {
    introImg.addEventListener("click", setScrollIntoView);
}

function setScrollIntoView(top) {
    const services = document.querySelector('.services');
    services.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
    });
}

// ПЛАВНАЯ ПРОКРУТКА

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            // ДЛЯ МЕНЮ НА ТЕЛЕФОНЕ, ЧТОБ СКРЫВАЛОСЬ ОКНО И ПРОЛИСТЫВАЛОСЬ ТУДА КУДА НАДО
            if(menuIcon.classList.contains('_active')){
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}

// СЛАЙДЫ

new Swiper('.swiper' , {
    navigation: {
        nextEl: '.services__button-next',
        prevEl: '.services__button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
});