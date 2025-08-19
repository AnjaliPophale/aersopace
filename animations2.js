// gsap animations starts here ......... 

// GSAP slide-to-right animation for .foreword-left on scroll
gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);


document.querySelectorAll('.page-title-animate').forEach((el) => {
    // Only split into words if SplitType is available and the element has text content
    if (typeof SplitType !== "undefined" && el.textContent.trim().length > 0) {
      // Remove any previous splits to avoid duplicate splits if GSAP/ScrollTrigger reruns
      if (el.splitType) {
        el.splitType.revert();
      }
      // Split the element into words (works for any element, not just headings)
      el.splitType = new SplitType(el, { types: 'words' });
  
      // Animate each word on scroll
      gsap.from(el.splitType.words, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play reset play reset",
          // markers: true, // Uncomment for debugging
        }
      });
    } else {
      // Fallback: Animate the element as a whole on scroll
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play reset play reset",
          // markers: true, // Uncomment for debugging
        }
      });
    }
  });

  document.querySelectorAll(".heading-animate").forEach(el => {
    // Ensure text is justified via JS in case CSS is not applied
    el.style.textAlign = "justify";
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

 