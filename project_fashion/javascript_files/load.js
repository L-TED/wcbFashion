export function loadAnimation() {
  // 텍스트
  const loader = document.querySelector("#loader");

  const loadingKeyframesA1 = [{ opacity: 1 }, { opacity: 0 }];
  const loadingDurationA2 = { duration: 1000, fill: "forwards" };

  loader.animate(loadingKeyframesA1, loadingDurationA2);
  // 화면
  const loading = document.querySelector("#loading");

  const loadingKeyframesB1 = [
    { transform: "translateY(0px)" },
    { transform: "translateY(-100vh)" },
  ];
  const loadingDurationB2 = { duration: 600, fill: "forwards", delay: 1000 };
  loading.animate(loadingKeyframesB1, loadingDurationB2);
  // 파란화면

  const underScreen = document.querySelector("#underScreen");

  const loadingKeyframesC1 = [
    { opacity: 1, transform: "translateY(0px)" },
    { opacity: 0, transform: "translateY(-100vh)" },
  ];
  const loadingDurationC2 = { duration: 600, fill: "forwards", delay: 1500 };

  underScreen.animate(loadingKeyframesC1, loadingDurationC2);
}
