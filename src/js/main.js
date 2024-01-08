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
const howToJoinBtnLeft = document.querySelector('.howToJoin__choice-left');
const howToJoinBtnRight = document.querySelector('.howToJoin__choice-right');
const noActionElements = document.querySelectorAll('#noAction');

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
	if (window.innerWidth >= 772) {
		if (window.scrollY >= 80) {
			navMiddle.classList.add('nav__middle--scrolled');
			navMiddleLinks.classList.add('nav__middle-links--scrolled');
		} else {
			navMiddle.classList.remove('nav__middle--scrolled');
			navMiddleLinks.classList.remove('nav__middle-links--scrolled');
		}
	} else {
		if (window.scrollY >= 40) {
			nav.classList.add('nav--scrolled');
		} else {
			nav.classList.remove('nav--scrolled');
		}
	}
};

const howToJoinActionLeft = () => {
	howToJoinBtnLeft.classList.toggle('howToJoin__choice--actionReavelLeft');
	howToJoinBtnRight.classList.toggle('howToJoin__choice--actionHideRight');
};

const howToJoinActionRight = () => {
	howToJoinBtnRight.classList.toggle('howToJoin__choice--actionReavelRight');
	howToJoinBtnLeft.classList.toggle('howToJoin__choice--actionHideLeft');
};

document.addEventListener('DOMContentLoaded', function () {
	noActionElements.forEach(function (noActionElement) {
		noActionElement.addEventListener('click', function (event) {
			event.stopPropagation();
		});
	});
});

burgerBtn.addEventListener('click', menuHandler);
langBtn.addEventListener('click', langHandler);
profileBtn.addEventListener('click', optionsHandler);
window.addEventListener('scroll', navChangeBgc);
howToJoinBtnLeft.addEventListener('click', howToJoinActionLeft);
howToJoinBtnRight.addEventListener('click', howToJoinActionRight);
