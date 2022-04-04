/*eslint-disable*/

/*-----------------------------------------------
|                     Isotope
-----------------------------------------------*/

const isotopeFilter = () => {
	window.addEventListener('load', event => {
		const iso = new Isotope('.grid', {
			itemSelector: '.item',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.item'
			}
		});

		const filtersElem = document.querySelectorAll('[data-bs-nav]');

		filtersElem.forEach(() => {
			document.addEventListener('click', event => {
				if (event.target.id != 'navbarDropdown') {
					const filterValue = event.target.getAttribute('data-filter');

					iso.arrange({ filter: filterValue });
				}
			});
		});
	});
};

export default isotopeFilter;
