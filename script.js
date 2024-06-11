// Cursor and cursor blur animation 
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor_blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"; // dets is used to see position of cursor
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
});

// 
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
})

//When scroll goes in down side direction, at that time nav bar color will change in black color gradually
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1, // you can also set "scrub" value "true". It apply on scroll effect    
    }
})

//When scroll goes in down side direction, at that time body color will change in black color gradually
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

// Animating Right and Left images while scrolling
gsap.from("#about_us img, #about_us_in", {
    y: 300, // Element comes from Y-axis 
    opacity: 0, //Initial opacity of an element will be 0
    duration: 2,
    stagger: 0.3, //Multiple elements ko ek ek karke chalane ka kam "stagger" karta hai
    scrollTrigger: {
        trigger: "#about_us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 85%",
        scrub: 2
    }
})

// Animating 3 cards while scrolling
gsap.from(".card", {
    scale: 0.8, // Size of an elements will grow from small to bigger 
    opacity: 0, //Initial opacity of an element will be 0
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 80%",
        scrub: 2
    }
})

//Animating both quotes 
gsap.from("#quote1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#quote2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quote1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

//Animating h1 title of page-4 from bottom to up
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 4,
    }
})  