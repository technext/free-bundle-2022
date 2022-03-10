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

	// const ClassNames = {
	// 	COLLAPSED: 'collapsed'
	// };

	const navbar = () => {
		let totalWidth = 0;

		let nav = document.querySelector(Selector.NAVBAR).clientWidth;
		let dropdown = document.querySelector('.navbar .dropdown').clientWidth;

		let navbarWidth = nav - dropdown;

		let elements = document.querySelectorAll('.nav-item');

		elements.forEach(item => {
			let cw = item.clientWidth;

			totalWidth += cw;
			// console.log(`totalWidth +${totalWidth}`);
			// console.log(`navbar +${navbarWidth}`);
			if (totalWidth > navbarWidth) {
				if (!item.classList.contains('dropdown')) {
					item.style.display = 'none';
					let link = item.querySelector('.nav-link');
					if (link != null) {
						document.querySelector('.category-list').prepend(link);
					}
				}
			}
		});

		let dropdownItem = document.querySelectorAll('.dropdown-menu .nav-link');

		dropdownItem.forEach(item => {
			item.classList.remove('nav-link');
			item.classList.add('dropdown-item');
		});
	};

	navbar();

	// Toggle bg class on window resize
	utils.resize(() => {
		// let navItem = document.querySelectorAll('.nav-item');

		// navItem.forEach(item => {
		// 	item.style.display = 'block';
		// });

		// let categoryList = document.querySelectorAll('.category-list');

		// categoryList.forEach(item => {
		// 	item.innerHTML = ' ';
		// });

		navbar();
	});
};
export default navbarInit;
