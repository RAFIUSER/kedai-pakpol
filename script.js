window.onload = function () {
  const loading = document.getElementById("loading");
  loading.classList.add("hidden");
};


// AOS Lib
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
})


// Sticky Nav Beranda only
const nav = document.getElementById('nav');
if (document.title == "Beranda - Warung Pak Pol") {   
    window.addEventListener('scroll', () =>{
        if (window.scrollY > 25) {
            nav.classList.add('sticky-active');
        } else {
            nav.classList.remove('sticky-active');
        }
    });
}


// Mobile SideBar
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
// Mobile SideBar End


// Galeri index.html
let slideIndex = 1;
showSlides(slideIndex);

// Ganti gambar otomatis interval
setInterval(function() {
  plusSlides(1);
}, 3000);

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
// End Galeri Index.html



// Popup Modal Galeri
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  modalImage.src = imageSrc;

  // Hapus kelas `hidden` dan tambahkan `flex`
  modal.classList.remove('hidden');
  modal.classList.add('flex');

  // Tambahkan efek animasi
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
    modal.firstElementChild.classList.remove('scale-95');
    modal.firstElementChild.classList.add('scale-100');
  }, 10); // Sedikit delay untuk memulai animasi
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  
  // Tambahkan efek animasi keluar
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');
  modal.firstElementChild.classList.remove('scale-100');
  modal.firstElementChild.classList.add('scale-95');
  
  // Tunggu animasi selesai sebelum menyembunyikan modal
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 300); // Waktu sesuai dengan `duration-300`
}
// Popup Modal Galeri End