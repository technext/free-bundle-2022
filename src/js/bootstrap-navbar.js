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

	const navbar = () => {
		let totalWidth = 0;

		let nav = document.querySelector(Selector.NAVBAR).clientWidth;
		let dropdown = document.querySelector('.navbar .dropdown').clientWidth;

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
					console.log(link);
					// var wrapper = document.createElement('li');
					// wrapper.classList.add('nav-item');
					// wrapper.innerHTML = link;

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

	navbar();

	// Toggle bg class on window resize
	utils.resize(() => {
		let navElements = document.querySelectorAll('.nav-item');
		navElements.forEach(item => {
			item.style.display = 'block';
		});
		let dropElements = document.querySelectorAll('.category-list');
		dropElements.forEach(item => {
			item.innerHTML = ' ';
		});
		navbar();
	});

	var backToToP = document.querySelector('.back-to-top');
	var navbarEl = document.querySelector('.navbar');

	var myScrollFunc = function () {
		var y = window.scrollY;
		if (y >= 540) {
			backToToP.style.opacity = '1';
			navbarEl.classList.add('sticky-top');
		} else {
			backToToP.style.opacity = '0';
		}
	};

	window.addEventListener('scroll', myScrollFunc);
};
export default navbarInit;
