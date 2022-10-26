const hamburger = document.getElementById("hamburger");
let isOpen = false;

function toggleNavigation() {
  isOpen = !isOpen;
  hamburger.style.opacity = 0;
  document.querySelector("body").classList.toggle("overflow");

  // animate
  isOpen ? menuTimeline.play() : menuTimeline.reverse();

  setTimeout(() => {
    isOpen
      ? (hamburger.children[0].src = "./images/icon-close.svg")
      : (hamburger.children[0].src = "./images/icon-hamburger.svg");

    hamburger.style.opacity = 1;
  }, 300);
}

hamburger.addEventListener("click", toggleNavigation);
