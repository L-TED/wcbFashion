const navTab = document.querySelector("#sideTab");
const nav = document.querySelector("#sideBtn");
const navClose = document.querySelector("#closeBtn");

const dataNav = [
  {
    query: nav,
    kf: [{ transform: "translateX(0vw)" }, { transform: "translateX(-34vw)" }],
    dr: {
      duration: 900,
      fill: "forwards",
      delay: 300,
      easing: "ease-out",
    },
  },
  {
    query: navClose,
    kf: [{ transform: "translateX(-32vw)" }, { transform: "translateX(0vw)" }],
    dr: { duration: 300, fill: "forwards", delay: 300 },
  },
];

dataNav.forEach((v) =>
  v.query.addEventListener("click", () => {
    navTab.animate(v.kf, v.dr);
  })
);

// 반응형 탭

const dataNavResponsive = [
  {
    query: nav,
    kf: [{ transform: "translateX(0vw)" }, { transform: "translateX(-20rem)" }],
    dr: {
      duration: 900,
      fill: "forwards",
      delay: 300,
      easing: "ease-out",
    },
  },
  {
    query: navClose,
    kf: [{ transform: "translateX(-20rem)" }, { transform: "translateX(0vw)" }],
    dr: { duration: 300, fill: "forwards", delay: 300 },
  },
];

if (window.innerWidth < 768) {
  dataNavResponsive.forEach((v) =>
    v.query.addEventListener("click", () => {
      navTab.animate(v.kf, v.dr);
    })
  );
}

// window.innerWidth < 768 ? dataNav.forEach((v) =>) : dataNavResponsive.forEach((v) =>)

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
