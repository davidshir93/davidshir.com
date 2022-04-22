const cards = document.querySelectorAll('.card');
const cardsContainer = document.querySelector('.cards-container');

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('show', entry.isIntersecting);

			// stop observing elements that already have shown
			// if (entry.isIntersecting) observer.unobserve(entry.target);

			// Another technique
			// if (entry.isIntersecting) {
			// 	entry.target.classList.add('show');
			// } else {
			// 	entry.target.classList.remove('show');
			// }
		});
		// console.log(entries);
	},
	{
		// threshold: 1,
		// rootMargin: '-75px',
	}
);

cards.forEach((card) => observer.observe(card));

// Adding new card if the last card id visible

const lastCardObserver = new IntersectionObserver(
	(entries) => {
		const lastCard = entries[0];
		if (!lastCard.isIntersecting) return;
		loadNewCard();
		lastCardObserver.unobserve(lastCard.target);
		lastCardObserver.observe(document.querySelector('.card:last-child'));
	},
	{
		rootMargin: '100px',
	}
);

lastCardObserver.observe(document.querySelector('.card:last-child'));

const loadNewCard = () => {
	for (let i = 0; i < 10; i++) {
		const card = document.createElement('div');
		if (i === 9) {
			card.textContent = 'New Last Card';
		} else {
			card.textContent = 'New Card';
		}
		card.classList.add('card');
		observer.observe(card);
		cardsContainer.appendChild(card);
	}
};
