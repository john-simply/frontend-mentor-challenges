gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".main-header");
const menuItems = document.querySelectorAll(".main-navigation__list li");
const menuNavigation = document.querySelector(".main-navigation");

const menuTimeline = gsap.timeline({ paused: true });

menuTimeline.to(menuNavigation, {
  x: 0,
});

menuTimeline.from(menuItems, {
  x: -50,
  opacity: 0,
  stagger: 0.2,
});
