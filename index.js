let lastScroll = 0;

window.addEventListener("scroll", (e) => {
    
if (window.scrollY < lastScroll) {
    navbar.style.top = 0 
} else {
    navbar.style.top = "-60px"
}
lastScroll = window.scrollY;
})
