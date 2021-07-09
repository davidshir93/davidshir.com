console.info(
  "Hello there!",
  "Instead of inspecting my website (which is fine),",
  "would you like to hire me as a developer?",
  "Feel free to reach out :)",
  "davidshir93@gmail.com"
);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var isClicked = false;

var f = document.getElementById("foo");
document.addEventListener(
  "click",
  function (ev) {
    if (!isClicked) {
      f.style.borderRadius = "25px";
      f.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
      f.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
      isClicked = true;
    } else {
      f.style.borderRadius = "0";
      f.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
      f.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
      f.style.transform += "scale(2)";

      isClicked = false;
    }
  },
  false
);
