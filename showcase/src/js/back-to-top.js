const backToTop = () => {
	const btnBackToTop = document.querySelector('[data-back-to-top]');

	window.addEventListener('scroll', () => {
		const { scrollY } = window;
		scrollY >= 540 ? (btnBackToTop.style.opacity = '1') : (btnBackToTop.style.opacity = '0');
	});
};

export default backToTop;
