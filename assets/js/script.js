function calcMenu() {
	const sections = [...document.querySelectorAll('[data-section]')];
	const marker = document.getElementById('marker');

	const onIntersect = (entries) => {
		entries.forEach((entry) => {
			const className = entry.target.className;
			const activeAnchor = document.querySelector(`[data-page=${className}]`);
			if (activeAnchor && className !== 'open-banner') {
				const activeAnchorChild = activeAnchor.firstElementChild;
				const coords = activeAnchor.getBoundingClientRect();

				if (entry.isIntersecting) {
					let directions = {
						height: coords.height,
						width: coords.width,
						bottom: coords.bottom,
						left: coords.left,
						right: coords.right,
					};
					marker.style.setProperty('opacity', '1');
					marker.style.setProperty('left', `${directions.left}px`);
					marker.style.setProperty('bottom', `${directions.top}px`);
					marker.style.setProperty('height', `${directions.height}px`);
					marker.style.setProperty('width', `${directions.width}px`);
					const allActiveElements = [...document.querySelectorAll('.active')];
					allActiveElements.forEach((activeElement) => {
						activeElement.classList.remove('active');
					});
					activeAnchorChild.classList.add('active');
				} else {
					activeAnchorChild.classList.remove('active');
				}
			}
			if (className === 'open-banner' && entry.isIntersecting) {
				marker.style.setProperty('opacity', '0');
			}
		});
	};

	const options = {
		rootMargin: '-100px',
		threshold: 0.01,
	};

	const observer = new IntersectionObserver(onIntersect, options);

	sections.forEach((section) => {
		observer.observe(section);
	});
}

calcMenu();

// recalculate after screen size has changed
window.addEventListener('resize', () => {
	calcMenu();
});
