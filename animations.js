

// =====================
// GSAP Animations
// =====================
gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

// 🔄 Ensure ScrollTrigger recalculates after everything is ready
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

// ✅ Utility: Prevent re-splitting the same element
function safeSplit(selector, options) {
  document.querySelectorAll(selector).forEach(el => {
    if (!el.dataset.split) {
      new SplitType(el, options);
      el.dataset.split = "true";
    }
  });
}

// =====================
// Heading animations
// =====================

// Typewriter-style heading (.heading-animation-1)
document.querySelectorAll('.heading-animation-1').forEach((el) => {
  const originalText = el.textContent;
  el.textContent = "";
  gsap.to(el, {
    duration: 2,
    text: originalText,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none",
      once: true
    }
  });
});

// Line-by-line reveal (.heading-animate)
document.querySelectorAll(".heading-animate").forEach(el => {
  let split = new SplitText(el, { type: "lines" });
  gsap.from(split.lines, {
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      toggleActions: "play none none reset"
    }
  });
});

// Fade paragraphs (.fade-para)
document.querySelectorAll('.fade-para').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 1.5,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      once: true
    }
  });
});

// Scale + blur reveal (.scale-blur-heading)
document.querySelectorAll(".scale-blur-heading").forEach(el => {
  gsap.fromTo(el, {
    scale: 1.3,
    filter: "blur(8px)",
    opacity: 0
  }, {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      scrub: true
    }
  });
});

// Clip reveal (.heading-clip-reveal span)
document.querySelectorAll('.heading-clip-reveal span').forEach(el => {
  gsap.to(el, {
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 98%",
      scrub: true
    }
  });
});

// Expand heading (.heading-expand)
document.querySelectorAll('.heading-expand').forEach(el => {
  gsap.fromTo(el, {
    opacity: 0,
    letterSpacing: "0.5em"
  }, {
    opacity: 1,
    letterSpacing: "normal",
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      once: true
    }
  });
});

// Skew + rise heading (.heading-skew)
document.querySelectorAll('.heading-skew').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    skewY: 5,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      scrub: true
    }
  });
});

// =====================
// SplitType word animations
// =====================
safeSplit("[animate]", { types: "lines, words, chars", tagName: "span" });
gsap.from("[animate] .word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "back.out",
  stagger: 0.1,
  scrollTrigger: { trigger: "[animate]", start: "top 85%", toggleActions: "play none none reset" }
});

safeSplit("[animate-2]", { types: "lines, words, chars", tagName: "span" });
gsap.from("[animate-2] .word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "back.out",
  stagger: 0.1,
  scrollTrigger: { trigger: "[animate-2]", start: "top 85%", toggleActions: "play none none reset" }
});

safeSplit("[animate-3]", { types: "lines, words, chars", tagName: "span" });
gsap.from("[animate-3] .word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "back.out",
  stagger: 0.1,
  scrollTrigger: { trigger: "[animate-3]", start: "top 85%", toggleActions: "play none none reset" }
});

safeSplit("[vmv]", { types: "lines, words, chars", tagName: "span" });
gsap.from("[vmv] .word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "back.out",
  stagger: 0.1,
  scrollTrigger: { trigger: "[vmv]", start: "top 85%", toggleActions: "play none none reset" }
});

safeSplit("[animate-name]", { types: "lines, words, chars", tagName: "span" });
gsap.from("[animate-name] .word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.03,
  scrollTrigger: { trigger: "[animate-name]", start: "top 90%", toggleActions: "play reset play reset" }
});

safeSplit("[animate-name-2]", { types: "lines, words, chars", tagName: "span" });
gsap.from("[animate-name-2] .word", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.03,
  scrollTrigger: { trigger: "[animate-name-2]", start: "top 95%", toggleActions: "play reset play reset" }
});

safeSplit("[letter-fade]", { types: "lines, words, chars", tagName: "span" });
gsap.fromTo("[letter-fade] .char", 
  { y: "50%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.5, ease: "power1.out", stagger: 0.08,
    scrollTrigger: { trigger: "[letter-fade]", start: "top 90%", toggleActions: "play reset play reset" }
  }
);

// =====================
// Other element animations
// =====================

// Logos blur in (.logos)
gsap.set('.logos', { filter: 'blur(8px)', opacity: 0.5 });
gsap.to('.logos', {
  filter: 'blur(0px)',
  opacity: 1,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: { trigger: '.logos', start: 'top 95%', end: 'top 90%', scrub: true }
});

// CTA buttons (.cta-btn)
gsap.from('.cta-btn', {
  y: 50,
  opacity: 0,
  scale: 0.6,
  duration: 0.8,
  ease: 'back.out(1.7)',
  stagger: 0.15,
  scrollTrigger: { trigger: '.cta-btn', start: 'top 90%', toggleActions: 'play none none none' }
});

// Certificates grid (.cert-grid .cert)
function animateCerts() {
  gsap.from(".cert-grid .cert", {
    scale: 0.7,
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "back.out(1.7)",
    stagger: 0.15,
    scrollTrigger: { trigger: ".cert-grid", start: "top 90%", toggleActions: "play none none none" }
  });
}
const certGrid = document.querySelector('.cert-grid');
if (certGrid) {
  const images = certGrid.querySelectorAll('img');
  let loaded = 0;
  if (images.length === 0) {
    animateCerts();
  } else {
    images.forEach(img => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) animateCerts();
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) animateCerts();
        });
        img.addEventListener("error", () => {
          loaded++;
          if (loaded === images.length) animateCerts();
        });
      }
    });
  }
}

// Page title (.page-title)
document.addEventListener("DOMContentLoaded", function () {
  const pageTitle = document.querySelector('.page-title');
  if (pageTitle) {
    if (typeof SplitType !== "undefined") {
      const split = new SplitType(pageTitle, { types: 'words' });
      gsap.from(split.words, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
      });
    } else {
      gsap.from(pageTitle, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out"
      });
    }
  }
});

// Page title on scroll (.page-title-animate)
document.querySelectorAll('.page-title-animate').forEach((el) => {
  if (typeof SplitType !== "undefined") {
    const split = new SplitType(el, { types: 'words' });
    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play reset play reset" }
    });
  } else {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play reset play reset" }
    });
  }
});

// Number cards (.number-card)
document.addEventListener("DOMContentLoaded", function () {
  const numberCards = document.querySelectorAll('.number-card');
  if (numberCards.length > 0) {
    const row = numberCards[0].closest('.row');
    gsap.from(numberCards, {
      opacity: 0,
      y: 50,
      scale: 0.85,
      duration: 0.7,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: { trigger: row, start: "top 85%", toggleActions: "play reset play reset" }
    });
    gsap.from(document.querySelectorAll('.number-card img'), {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: { trigger: row, start: "top 85%", toggleActions: "play reset play reset" }
    });
    gsap.from(document.querySelectorAll('.number-card h2'), {
      opacity: 0,
      y: 20,
      scale: 1.2,
      duration: 0.5,
      stagger: 0.18,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: { trigger: row, start: "top 85%", toggleActions: "play reset play reset" }
    });
  }
});


