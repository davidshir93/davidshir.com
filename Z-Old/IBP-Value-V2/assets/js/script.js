const brandColors = ['#85A6FC', '#FC85AD', '#FF4E36', '#0BD18B', '#0BD18B', '#FC85AD', '#FC85AD', '#FF4E36', '#0BD18B'];

const getRandomBrandColor = () => brandColors[Math.floor(Math.random() * brandColors.length)];

// Opener

gsap.to(".opener", {
    scrollTrigger: {
        trigger: ".opener",
        toggleActions: "play none none reverse",
        start: "center center",
        scrub: true,
    },
    scaleX: 0.3,
    scaleY: 0.3
})

// Below Max Discount

gsap.to(".avgPrecentage", {
  scrollTrigger: {
    trigger: ".avgPrecentage",
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

// KPI Cards

gsap.to(".cartScroll img", {
  scrollTrigger: {
      trigger: ".cartScroll img",
      toggleActions: "play reset none reverse",
      end: "bottom center",
      // start: "top center",
      scrub: true,
  },
  duration: 8.5,
  transform: 'translateX(100vw)',
  opacity: '1',
})

gsap.to(".KPI-card", {
  scrollTrigger: {
      trigger: ".cartScroll",
      toggleActions: "play reset none reverse",
      end: "bottom center",
      // start: "top center",
      scrub: true,
  },
  ease: "power2.out",
  stagger: 0.08,
  delay: 1.08,
  transform: 'translateY(0%) scale(1) rotate(0deg)',
  opacity: '1',
})

// Summary

gsap.to("#summaryBG", {
  scrollTrigger: {
      trigger: ".revenue",
      end: "center center",
      toggleActions: "play none none reverse",
      scrub: true,
  },
  transform: 'scale(.95) rotate(0deg) translateY(0%) translateX(0%)',
})

gsap.to(".summaryCard", {
  scrollTrigger: {
      trigger: ".summaryCard",
      toggleActions: "play none none reverse",
  },
  stagger: 0.2,
  transform: 'translateY(0%)',
  opacity: '1',
})

gsap.to(".summaryCardSec", {
  scrollTrigger: {
      trigger: ".summaryCard",
      toggleActions: "play none none reverse",
  },
  stagger: 0.2,
  delay: 0.55,
  transform: 'translateY(0%)',
  opacity: '1',
})

// Circles - To Be Replaced with Vue.js

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
    newCircle.style.textShadow = '4px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000, 2px 2px 0px #000;';
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

ScrollTrigger.create({
  trigger: '#belowMaxText',
  start: "top top",
  end: "+=700px",
  pinSpacing: false,
  pin: true
})