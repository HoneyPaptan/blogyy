const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".heading", { y:"-100%" }, { y:"10%", duration: 1 });
tl.fromTo(".lists", { y:"-100%" }, { y:"10%", duration: 1 }, "-=1");
tl.fromTo(".texts", { y:"-100vw" }, { y:"3vw", duration: 1, stagger: 0.75 ,}, "-=1");

// tl.to(".texts", { y: "0%", duration: 1, stagger: 0.25 });

// gsap.to(".card", {
//     scrolltrigger: {
//         trigger: ".card",
//         start: "top bottom"

//     }, x:20
// })
