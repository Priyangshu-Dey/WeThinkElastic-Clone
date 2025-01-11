window.addEventListener("wheel", (e)=>{
    if(e.deltaY > 0) {
        gsap.to(".nav", {
            y: -120,
            delay: 0.2
        })
    }
    else {
        gsap.to(".nav", {
            y: 0,
            duration: 0.6
        })
    }
})




gsap.from(".page2 video", {
    width: "42%",
    scrollTrigger: {
        trigger: ".page2 video",
        start: "top 100%",
        end: "top -18%",
        scroller: "body",
        scrub: 3,
    }
})




gsap.from(".page3 h1", {
    y: 500,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "bottom 50%"
    }
})

gsap.from(".small-text h4", {
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "bottom 50%"
    }
})


gsap.to(".page8 h1", {
    x: -2000,
    scrollTrigger: {
        trigger: ".page8",
        scroller: "body",
        scrub: 3,
        start: "top 0%",
        end: "top -250%",
        pin: true
    }
})