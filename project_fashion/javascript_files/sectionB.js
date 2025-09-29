const sectionBtexts = document.querySelector("#textB");

const secBKeyframesA1 = [
  { opacity: 0, filter: "blur(15px)", transform: "translateY(30vh)" },
  { opacity: 1, filter: "blur(0px)", transform: "translateY(0vh)" },
];
const secBDurationA2 = { duration: 1400, fill: "forwards", easing: "ease-out" };

const obA = new IntersectionObserver(
  (entries, me) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        sectionBtexts.animate(secBKeyframesA1, secBDurationA2);

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

obA.observe(sectionBtexts);
