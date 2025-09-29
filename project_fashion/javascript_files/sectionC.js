const right = document.querySelector("#gallery_rightSide");

// 콘텐츠 애니메이션

const secCKeyframesA1 = [
  { opacity: 0, filter: "blur(25px)", transform: "translateY(5vh)" },
  { opacity: 1, filter: "blur(0px)", transform: "translateY(0vh)" },
];
const secCDurationA2 = { duration: 1000, fill: "forwards", easing: "ease-out" };

const obB = new IntersectionObserver(
  (entries, me) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        right.animate(secCKeyframesA1, secCDurationA2);

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

obB.observe(right);

// 이미지 이벤트

const leftImage = document.querySelector("#galleryLeftImage");
const photos = document.querySelectorAll("#gallery_photos img");

const photoArr = [
  "/image/fashion/img1.jpg",
  "/image/fashion/img2.jpg",
  "/image/fashion/img3.jpg",
  "/image/fashion/img4.jpg",
  "/image/fashion/img5.jpg",
  "/image/fashion/img6.jpg",
  "/image/fashion/img7.jpg",
  "/image/fashion/img8.jpg",
  "/image/fashion/img9.jpg",
];

photos.forEach((v, i) => {
  v.addEventListener("mouseover", () => {
    leftImage.src = photoArr[i];
  });
});
