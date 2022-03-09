/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/
const navbarInit = () => {
	navbar();

	console.log('running');
	// const Selector = {
	// 	NAV_ITEM: '.nav-item',
	// 	CATEGORY_LIST: '.navbar-toggler',
	// 	NAVBAR: '.navbar',
	// 	NAVBAR_DROPDOWN: '.navbar .dropdown'
	// };

	// const ClassNames = {
	// 	COLLAPSED: 'collapsed'
	// };

	// Toggle bg class on window resize
	utils.resize(() => {
		let el = document.getElementsByClassName('nav-item');

		Array.prototype.forEach.call(elements, function (el, i) {
			el.removeAttribute('style');
		});

		document.getElementsByClassName('category-list').innerHTML = ' ';

		navbar();
	});

	function navbar() {
		let totalWidth = 0;

		let navbar = document.querySelector('.navbar');
		let dropdown = document.querySelector('.dropdown');

		let navbarWidth = parseFloat(getComputedStyle(navbar, null).width.replace('px', ''));
		let dropdownWidth = parseFloat(getComputedStyle(dropdown, null).width.replace('px', ''));

		let elWidth = navbarWidth - dropdownWidth;

		// let el = document.getElementsByClassName('nav-item');

		var elements = document.getElementsByClassName('nav-item');

		Array.prototype.forEach.call(elements, function (el, i) {
			let cw = parseFloat(getComputedStyle(el, null).width.replace('px', ''));

			totalWidth += cw;
			if (totalWidth > elWidth) {
				if (!el.classList.contains('dropdown')) {
					// let link = el.textContent;
					// let ch = document.createElement('p');
					// ch.innerHTML = 'home';
					// console.log(ch);

					document.getElementById('category-list').appendChild(el);
				}
			}
		});
	}
};
export default navbarInit;
