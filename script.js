const nav = document.getElementById('nav');


// AOS Lib
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
})


// Sticky Nav Beranda only
if (document.title == "Beranda - Warung Pak Pol") {   
    window.addEventListener('scroll', () =>{
        if (window.scrollY > 25) {
            nav.classList.add('sticky-active');
        } else {
            nav.classList.remove('sticky-active');
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburger');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarLinks = document.querySelectorAll('.mobileBtn');
  
    // Fungsi untuk toggle sidebar dan overlay
    function toggleSidebar() {
      sidebar.classList.toggle('translate-x-full');
      overlay.classList.toggle('hidden');
    }
  
    // Event listeners
    hamburger.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
  
    // Tutup sidebar saat link di klik
    sidebarLinks.forEach(link => link.addEventListener('click', toggleSidebar));
});
  

let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" opacity-100", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " opacity-100";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
    