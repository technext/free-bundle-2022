/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|                     Isotope
-----------------------------------------------*/

const isotopeFilter = () => {
	window.addEventListener('load', event => {
		let iso = new Isotope('.grid', {
			itemSelector: '.item',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.item'
			}
		});

		let filtersElem = document.querySelectorAll('[data-bs-nav]');

		filtersElem.forEach(element => {
			document.addEventListener('click', function (event) {
				console.log(event.target.id);

				if (event.target.id != 'navbarDropdown') {
					let filterValue = event.target.getAttribute('data-filter');

					iso.arrange({ filter: filterValue });
				}
			});
		});
	});
};

export default isotopeFilter;
