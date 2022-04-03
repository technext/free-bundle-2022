/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/
const navbarInit = () => {
	const Selector = {
		NAV_ITEM: '[data-nav-item]',
		NAVBAR: '[data-navbar]',
		DROPDOWN: '[data-more-item]',
		CATEGORY_LIST: '[data-category-list]'
	};

	utils.resize(() => {
		const navElements = document.querySelectorAll(Selector.NAV_ITEM);
		const dropElements = document.querySelectorAll(Selector.CATEGORY_LIST);

		navElements.forEach(item => item.removeAttribute('style'));
		dropElements.forEach(item => (item.innerHTML = ''));
		navbar();
	});

	const navbar = () => {
		const navbarWidth = document.querySelector(Selector.NAVBAR).clientWidth;
		const dropdown = document.querySelector(Selector.DROPDOWN).clientWidth;
		const navbarContainerWidth = navbarWidth - dropdown;
		const elements = document.querySelectorAll(Selector.NAV_ITEM);

		let totalItemsWidth = 0;

		elements.forEach(item => {
			const itemWidth = item.clientWidth;

			totalItemsWidth = totalItemsWidth + itemWidth;

			if (totalItemsWidth > navbarContainerWidth && !item.classList.contains('dropdown')) {
				item.style.display = 'none';
				const link = item.firstChild;
				const linkItem = link.cloneNode(true);

				document.querySelector('.category-list').appendChild(linkItem);
			}
		});
		const dropdownMenu = document.querySelectorAll('.dropdown-menu .nav-link');

		dropdownMenu.forEach(item => {
			item.classList.remove('nav-link');
			item.classList.add('dropdown-item');
		});
	};

	window.addEventListener('load', () => navbar());

	let navbarLink = document.querySelectorAll('.nav-link');

	document.addEventListener('click', function (e) {
		navbarLinks.forEach(link => link.classList.remove('active'));

		e.target.closest('li').classList.add('active');
	});
};
export default navbarInit;
