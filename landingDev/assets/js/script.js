const sections = document.querySelectorAll('section');
const marker = document.getElementById('marker');
const nav = document.querySelector('nav');

const options = {
    rootMargin: '0px',
    threshold: 0.4,
}

const navCheck = (entries, observer) => {
    entries.forEach(entry => {

        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const activeAnchorChild = activeAnchor.firstElementChild;
        const coords = activeAnchor.getBoundingClientRect();
        console.log(coords);

        let directions = {
            height: coords.height,
            width: coords.width,
            bottom: coords.bottom,
            left: coords.left,
            right: coords.right
        };

        console.log(directions.width);

        if (entry.isIntersecting) {
            marker.style.setProperty('opacity', '1');
            marker.style.setProperty('left', `${directions.left}px`);
            marker.style.setProperty('bottom', `${directions.top}px`);
            marker.style.setProperty('height', `${directions.height}px`);
            marker.style.setProperty('width', `${directions.width}px`);
            activeAnchorChild.classList.add('active');
        } else {
            activeAnchorChild.classList.remove('active');

        }

        if (entry.intersectionRatio < 0.1) {
            marker.style.setProperty('opacity', '0');
        }

    })
}

let observer = new IntersectionObserver(navCheck, options);

sections.forEach(section => {
    observer.observe(section)
})