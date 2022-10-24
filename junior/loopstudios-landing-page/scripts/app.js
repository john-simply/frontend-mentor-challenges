// DOM elements
const hamburger = document.getElementById("hamburger");

let isOpen = false;
function toggleNavigation() {
  const navigation = document.querySelector(".main-navigation");
  hamburger.style.opacity = 0;

  navigation.classList.toggle("open");

  setTimeout(() => {
    isOpen
      ? (hamburger.children[0].src = "./images/icon-close.svg")
      : (hamburger.children[0].src = "./images/icon-hamburger.svg");

    hamburger.style.opacity = 1;
  }, 300);

  isOpen = !isOpen;
}

hamburger.addEventListener("click", toggleNavigation);
