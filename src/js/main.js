const burgerBtn = document.querySelector('.nav__mobile-burgerBtn');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav__mobile');
const langBtn = document.querySelector('.nav__settings-lang');
const flagBtn1 = document.querySelector('.nav__settings-flag:nth-child(2)');
const flagBtn2 = document.querySelector('.nav__settings-flag:nth-child(3)');
const profileBtn = document.querySelector('.nav__settings-profile');
const optionsContainer = document.querySelector('.nav__settings-options');
const options = document.querySelectorAll('.nav__settings-option');
const navMiddle = document.querySelector('.nav__middle');
const navMiddleLinks = document.querySelector('.nav__middle-links');

const menuHandler = () => {
	menu.classList.toggle('nav__mobile--active');
};

const langHandler = () => {
	optionsContainer.classList.remove('nav__settings-options--active');
	options.forEach((option) => {
		option.classList.remove('nav__settings-option--active');
	});

	flagBtn1.classList.toggle('nav__settings-flag--active1');
	flagBtn2.classList.toggle('nav__settings-flag--active2');
};

const optionsHandler = () => {
	flagBtn1.classList.remove('nav__settings-flag--active1');
	flagBtn2.classList.remove('nav__settings-flag--active2');

	optionsContainer.classList.toggle('nav__settings-options--active');
	options.forEach((option) => {
		option.classList.toggle('nav__settings-option--active');
	});
};

const navChangeBgc = () => {
	if (window.scrollY >= 80) {
		navMiddle.classList.add('nav__middle--scrolled');
		navMiddleLinks.classList.add('nav__middle-links--scrolled');
	} else {
		navMiddle.classList.remove('nav__middle--scrolled');
		navMiddleLinks.classList.remove('nav__middle-links--scrolled');
	}
};

burgerBtn.addEventListener('click', menuHandler);
langBtn.addEventListener('click', langHandler);
profileBtn.addEventListener('click', optionsHandler);
window.addEventListener('scroll', navChangeBgc);
