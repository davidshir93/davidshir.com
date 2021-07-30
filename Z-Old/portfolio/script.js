console.info(
  "Hello there!",
  "Instead of inspecting my website (which is fine),",
  "would you like to hire me as a developer?",
  "Feel free to reach out :)",
  "davidshir93@gmail.com"
);

const hamburger = document.querySelector('.hamburger');
const topnav = document.querySelector('.topnav');
const links = document.querySelectorAll('.topLink li');

hamburger.addEventListener('click', () => {
  topnav.classList.toggle('open');
})