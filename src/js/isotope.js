/*eslint-disable*/

import utils from './utils';

const isotopeFilter = () => {
	var iso = new Isotope('.grid', {
		itemSelector: '.item',
		layoutMode: 'packery',
		masonry: {
			// use element for option
			columnWidth: '.item'
		}
	});

	var filtersElem = document.querySelectorAll('[data-bs-nav]');

	filtersElem.forEach(element => {
		element.addEventListener('click', function (event) {
			var filterValue = event.target.getAttribute('data-filter');

			iso.arrange({ filter: filterValue });
		});
	});

	var dropDownEl = document.querySelectorAll('.dropdown-item');
	dropDownEl.forEach(element => {
		element.addEventListener('click', function (event) {
			var filterValue = event.target.getAttribute('data-filter');

			iso.arrange({ filter: filterValue });
		});
	});
};

export default isotopeFilter;
