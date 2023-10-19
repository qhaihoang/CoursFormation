"use strict"
const
    indicator = document.querySelector(".scroll-indicator"),
    main = document.querySelector("main"),
    mainP = main.querySelectorAll("p"),
    options = {
        threshold: 0.5,
        root: null
    };

const observer = new IntersectionObserver(setIndicator, options)


function setIndicator(entries) {
    const entry = entries[0]
    console.log(entry);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "100%"

        }
    });

}
function loopObserver(mainP) {
    mainP.forEach((p) => {
        observer.observe(p)
    });

}
loopObserver(mainP)