const textAnimation = [
  document.querySelectorAll(".header__logo"),
  document.querySelectorAll(".component__header"),
  document.querySelectorAll(".component__paragraph"),
];
const illustrationAnimation = document.querySelector(
  ".component__illustration"
);
const formAnimation = document.querySelector(".component__form");
const footerAnimation = document.querySelector(".footer");

gsap.from(textAnimation, {
  delay: 0.25,
  opacity: 0,
  duration: 2,
  y: -50,
  stagger: 0.25,
});
gsap.from(formAnimation, {
  delay: 0.75,
  scale: 0,
  duration: 1,
});
gsap.from(illustrationAnimation, {
  delay: 1.25,
  opacity: 0,
  duration: 1,
  x: 50,
});
gsap.from(footerAnimation, {
  delay: 1.5,
  scale: 0,
  duration: 0.75,
});
