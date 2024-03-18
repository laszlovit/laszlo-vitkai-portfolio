import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateOnScroll() {
  gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
    const fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });

    fadeTl
      .set(element, { y: 60, autoAlpha: 0 })
      .to(element, { y: 0, autoAlpha: 1, duration: 0.5 });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();
});
