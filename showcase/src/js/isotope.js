/*eslint-disable*/

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

		filtersElem.forEach(() => {
			document.addEventListener('click', event => {
				if (event.target.id != 'navbarDropdown') {
					let filterValue = event.target.getAttribute('data-filter');

					iso.arrange({ filter: filterValue });
				}
			});
		});
	});
};

export default isotopeFilter;
