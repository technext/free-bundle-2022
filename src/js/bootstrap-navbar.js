/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/
const navbarInit = () => {
	const Selector = {
		NAV_ITEM: '.nav-item',
		NAVBAR: '.navbar',
		DROPDOWN: '.dropdown'
	};

	utils.resize(() => {
		let navElements = document.querySelectorAll('.nav-item');
		navElements.forEach(item => {
			item.removeAttribute('style');
		});
		let dropElements = document.querySelectorAll('.category-list');
		dropElements.forEach(item => {
			item.innerHTML = ' ';
		});
		navbar();
	});

	const navbar = () => {
		let totalWidth = 0;

		let nav = document.querySelector(Selector.NAVBAR).clientWidth;

		let dropdown = document.querySelector('.dropdown').clientWidth;

		// let navbarNav = document.querySelector('.navbar-nav').clientWidth;

		let navbarWidth = nav - dropdown;

		let elements = document.querySelectorAll('.nav-item');

		elements.forEach(item => {
			let itemWidth = item.clientWidth;

			totalWidth = totalWidth + itemWidth;

			if (totalWidth > navbarWidth) {
				if (!item.classList.contains('dropdown')) {
					item.style.display = 'none';
					let link = item.firstChild;
					let linkItem = link.cloneNode(true);

					document.querySelector('.category-list').appendChild(linkItem);
				}
			}
		});

		let dropdownMenu = document.querySelectorAll('.dropdown-menu .nav-link');

		dropdownMenu.forEach(item => {
			item.classList.remove('nav-link');
			item.classList.add('dropdown-item');
		});
	};

	window.addEventListener('load', event => {
		navbar();
	});

	navbar();

	// Toggle bg class on window resize

	let backToToP = document.querySelector('.back-to-top');
	let navbarEl = document.querySelector('.navbar');

	let myScrollFunc = function () {
		let y = window.scrollY;
		if (y >= 540) {
			backToToP.style.opacity = '1';
			navbarEl.classList.add('sticky-top');
			navbarEl.classList.add('bg-white');
		} else {
			backToToP.style.opacity = '0';
			navbarEl.classList.remove('bg-light');
		}
	};

	let navbarLink = document.querySelectorAll('.nav-link');

	document.addEventListener('click', function (e) {
		for (let x = 0; x < navbarLink.length; x++) {
			navbarLink[x].classList.remove('active');
		}

		e.target.closest('li').classList.add('active');
	});

	window.addEventListener('scroll', myScrollFunc);
};
export default navbarInit;
