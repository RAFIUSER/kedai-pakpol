const nav = document.getElementById('nav');


// AOS Lib
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
})


// Sticky Nav
window.addEventListener('scroll', () =>{
    if (window.scrollY > 25) {
        nav.classList.add('sticky-active');
        nav.classList.remove('border-b');
    } else {
        nav.classList.remove('sticky-active');
        nav.classList.add('border-b');
    }
});


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
  
    