const nav = document.querySelector("#sideBtn");
const navTab = document.querySelector("#sideTab");
const navClose = document.querySelector("#closeBtn");
const navUserlists = document.querySelector("#navUserlists");

const navKeyframesA1 = [
  { transform: "translateX(0vw)" },
  { transform: "translateX(-34vw)" },
];
const navDurationA2 = {
  duration: 900,
  fill: "forwards",
  delay: 300,
  easing: "ease-out",
};

nav.addEventListener("click", () => {
  navTab.animate(navKeyframesA1, navDurationA2);
});

// close 버튼
const navKeyframesB1 = [
  { transform: "translateX(-32vw)" },
  { transform: "translateX(0vw)" },
];
const navDurationB2 = { duration: 300, fill: "forwards", delay: 300 };

navClose.addEventListener("click", () => {
  navTab.animate(navKeyframesB1, navDurationB2);
});

// tab 내부 리스트 애니메이션
const listA = document.querySelector("#liA");
const listB = document.querySelector("#liB");
const listC = document.querySelector("#liC");
const listD = document.querySelector("#liD");
const listE = document.querySelector("#liE");

const navListArray = [listA, listB, listC, listD, listE];

const navKeyframesC1 = [
  { opacity: 0.05, transform: "translateX(6vw)" },
  { opacity: 0.2, transform: "translateX(4vw)" },
  { opacity: 0.4, transform: "translateX(2vw)" },
  { opacity: 1, transform: "translateX(0vw)" },
];
const navDurationC2 = { duration: 1200, fill: "backwards", easing: "ease-out" };

navListArray.forEach((v, i) => {
  nav.addEventListener("click", () => {
    v.animate(navKeyframesC1, { ...navDurationC2, delay: 200 * i });
  });
});
