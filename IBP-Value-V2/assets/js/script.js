const brandColors = ['#85A6FC', '#FC85AD', '#FF4E36', '#0BD18B', '#0BD18B', '#FC85AD', '#FC85AD', '#FF4E36', '#0BD18B'];

const getRandomBrandColor = () => brandColors[Math.floor(Math.random() * brandColors.length)];

gsap.to(".opener", {
    scrollTrigger: {
        trigger: ".precentages",
        toggleActions: "play none none reverse",
        markers: true,
    },
    transform: 'scale(.5)',
    duration: 2
})

gsap.to(".avgPrecentage", {
  scrollTrigger: {
    trigger: ".avgPrecentage",
    markers: true
  },
  delay: 3,
  transform: 'scale(1.5)',
  ease: "power2.out",
  duration: .5
})

let precentages = document.querySelector('.circlesContainer');

let newCircles = [];

for (let i = 0; i < 35; i++) {
    let newCircle = document.createElement("div");
    newCircle.style.backgroundColor = getRandomBrandColor();
    newCircle.style.zIndex = 5;
    newCircle.style.borderRadius = "100%";
    newCircle.style.display = "flex";
    newCircle.style.alignItems = "center";
    newCircle.style.justifyContent = "center";
    newCircle.style.position = "relative";
    newCircle.style.padding = `${Math.random()*500} ${Math.random()*500} ${Math.random()*500} ${Math.random()*500}` 
    const scaleFactor = Math.random()*4;
    // newCircle.style.height = `100*${scaleFactor}px`;
    // newCircle.style.width = `100*${scaleFactor}px`;
    newCircle.style.height = `100px`;
    newCircle.style.width = `100px`;
    newCircle.style.boxShadow = '1px 1px 0px #000000';
    newCircle.style.transform = `scale(${scaleFactor})`
    newCircle.innerHTML=`<h2 style="text-shadow: 1px 1px 0px #000000; color: #FFFFFF;">${Math.floor(Math.random()*15)}%</h2>`;
    newCircles.push(newCircle);
}

function start(counter){
    if(counter < 34){
      setTimeout(function(){
        precentages.appendChild(newCircles[counter]);
        counter++;
        start(counter);
      }, 350);
    }
  }

setTimeout ((start(0)), 3000);