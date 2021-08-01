const brandColors = ['#85A6FC', '#FC85AD', '#FF4E36', '#0BD18B', '#0BD18B', '#FC85AD', '#FC85AD', '#FF4E36', '#0BD18B'];

const getRandomBrandColor = () => brandColors[Math.floor(Math.random() * brandColors.length)];

gsap.to(".opener", {
    scrollTrigger: {
        trigger: ".opener",
        toggleActions: "play none none reverse",
        start: "center center",
        markers: true,
        scrub: true,
    },
    transform: 'scale(.3)'
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

gsap.to(".newCircle", {
  stagger: .1,
  transform: 'scale(1)',
  ease: "power2.out",
  duration: .2
})

gsap.to(".revenue img", {
  scrollTrigger: {
      trigger: ".revenue",
      end: "center center",
      toggleActions: "play none none reverse",
      markers: true,
      scrub: true,
  },
  transform: 'scale(.75) rotate(0deg) translateY(0%) translateX(0%)',
})

gsap.to(".summaryCard", {
  scrollTrigger: {
      trigger: ".summaryCard",
      toggleActions: "play none none reverse",
      markers: true,
  },
  stagger: 0.2,
  transform: 'translateY(0%)',
  opacity: '1',
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
    const scaleFactor = Math.random()*3;
    // newCircle.style.height = `100*${scaleFactor}px`;
    // newCircle.style.width = `100*${scaleFactor}px`;
    newCircle.style.height = `100px`;
    newCircle.style.width = `100px`;
    newCircle.style.boxShadow = '1px 1px 0px #000000';
    newCircle.style.transform = `scale(${scaleFactor})`
    newCircle.innerHTML=`<h4 style="text-shadow: 1px 1px 0px #000000; color: #FFFFFF;">${Math.floor(Math.random()*15)}%</h4>`;
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