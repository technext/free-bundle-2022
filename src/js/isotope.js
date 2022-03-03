/*eslint-disable*/

import utils from './utils';

const isotopeFilter = () => {
	var elem = document.querySelector('.grid');
	var iso = new Isotope('.grid', {
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});

	iso.arrange({
		// item element provided as argument
		filter: function (itemElem) {
			var number = itemElem.querySelector('.number').innerText;
			return parseInt(number, 10) > 50;
		}
	});
};
