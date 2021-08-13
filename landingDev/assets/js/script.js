const sections = document.querySelectorAll('section');
const marker = document.getElementById('marker');
const nav = document.querySelector('nav');

const options = {
    // threshold: 0.5,
    rootMargin: '0px',
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const coords = activeAnchor.getBoundingClientRect();
        console.log(coords)
        let directions = {
            height: coords.height,
            width: coords.width,
            bottom: coords.bottom,
            left: coords.left,
            right: coords.right
        };
        console.log(directions.width);
        if(entry.isIntersecting){
            marker.style.setProperty('left', `${directions.left}px`);
            marker.style.setProperty('bottom', `${directions.top}px`);
            marker.style.setProperty('height', `${directions.height}px`);
            marker.style.setProperty('width', `${directions.width}px`);
        }
    })
}

sections.forEach(section => {
    observer.observe(section)
})