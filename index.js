const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow =
        mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
    }
});

const closeBtn = document.querySelector('.mobile-menu__close');

function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);



const searchInput = document.querySelector('.header__search-input');
const searchHint = document.querySelector('.header__search-hint');

searchInput.addEventListener('input', () => {
    searchHint.classList.toggle('hidden', searchInput.value.length > 0);
});