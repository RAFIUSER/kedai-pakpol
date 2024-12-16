const nav = document.getElementById('nav');


// AOS Lib
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
})


window.addEventListener('scroll', () =>{
    if (window.scrollY > 25) {
        nav.classList.add('sticky-active');
        nav.classList.remove('border-b');
    } else {
        nav.classList.remove('sticky-active');
        nav.classList.add('border-b');
    }
});