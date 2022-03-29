/*eslint-disable*/

import utils from './utils';
/*-----------------------------------------------
|                     Isotope
-----------------------------------------------*/

// const isotopeFilter = () => {
// 	const Selector = {
// 		ISOTOPE_ITEM: '.isotope-item',
// 		DATA_ISOTOPE: '[grid]',
// 		DATA_FILTER: '[data-filter]',
// 		DATA_FILER_NAV: '[data-bs-nav]'
// 	};

// // 	window.addEventListener('load', event => {
// // 		if (window.Isotope) {
// // 			const masonryItems = document.querySelectorAll(Selector.DATA_ISOTOPE);
// // 			console.log(masonryItems);
// // 			masonryItems.length &&
// // 				masonryItems.forEach(masonryItem => {
// // 					// masonryItem.querySelectorAll(Selector.ISOTOPE_ITEM).forEach(item => {
// // 					// 	// eslint-disable-next-line
// // 					// 	item.style.visibility = 'visible';
// // 					// });

// // 					const defaultOptions = {
// // 						itemSelector: Selector.ISOTOPE_ITEM,
// // 						layoutMode: 'packery'
// // 					};
// // 					// const options = window._.merge(defaultOptions, userOptions);
// // 					const isotope = new window.Isotope(masonryItem, defaultOptions);

// // 					//--------- filter -----------------
// // 					let filtersElem = document.querySelectorAll('[data-bs-nav]');

// // 					filtersElem.forEach(element => {
// // 						element.addEventListener('click', function (event) {
// // 							let filterValue = event.target.getAttribute('data-filter');

// // 							isotope.arrange({ filter: filterValue });
// // 						});
// // 					});

// // 					let dropDownEl = document.querySelectorAll('.dropdown-item');
// // 					dropDownEl.forEach(element => {
// // 						element.addEventListener('click', function (event) {
// // 							let filterValue = event.target.getAttribute('data-filter');

// // 							isotope.arrange({ filter: filterValue });
// // 						});
// // 					});

// // 					//---------- filter end ------------

// // 					return isotope;
// // 				});
// // 		}
// // 	});
// // };

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
			element.addEventListener('click', function (event) {
				let filterValue = event.target.getAttribute('data-filter');

				iso.arrange({ filter: filterValue });
			});
		});
	});
};

export default isotopeFilter;
