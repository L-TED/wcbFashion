const dataLoad = [
  {
    query: document.querySelector("#loader"),
    kf: [{ opacity: 1 }, { opacity: 0 }],
    dr: { duration: 1000, fill: "forwards" },
  },
  {
    query: document.querySelector("#loading"),
    kf: [{ transform: "translateY(0px)" }, { transform: "translateY(-100vh)" }],
    dr: { duration: 600, fill: "forwards", delay: 1000 },
  },
  {
    query: document.querySelector("#underScreen"),
    kf: [
      { opacity: 1, transform: "translateY(0px)" },
      { opacity: 0, transform: "translateY(-100vh)" },
    ],
    dr: { duration: 600, fill: "forwards", delay: 1500 },
  },
];
// 어레이 변수 하나에 묶기

// 호이스팅(코드 우선순위 섞임), 화살표 함수 쓸것
const loadAnimation = () => {
  dataLoad.forEach((v) => v.query.animate(v.kf, v.dr));
};

window.addEventListener("load", () => {
  loadAnimation();
});
