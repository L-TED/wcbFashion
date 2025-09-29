const shop = document.querySelector(".txt");
const secDKeyframesA1 = [
  { opacity: 0, filter: "blur(10px)", transform: "translateY(5vh)" },
  { opacity: 1, filter: "blur(0px)", transform: "translateY(0vh)" },
];
const secDDurationA2 = {
  duration: 1000,
  fill: "forwards",
  easing: "ease-out",
};

const obC = new IntersectionObserver(
  (entries, me) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        shop.animate(secDKeyframesA1, secDDurationA2);

        me.unobserve(v.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0,
  }
);
obC.observe(shop);
