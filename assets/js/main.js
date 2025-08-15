let lastScroll = 0;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // النزول → الشريط يختفي قليلاً
    header.style.top = '-20px';
  } else {
    // الصعود → يظهر الشريط بالكامل
    header.style.top = '0';
  }

  lastScroll = currentScroll;
});

 var swiper = new Swiper(".swiper", {
  slidesPerView: 1, // عرض شريحة واحدة فقط
  loop: false,      // عدم التكرار اللانهائي
  navigation: {
      nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // شريحة وحدة بكل مرة
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 const btn = document.getElementById('aboutBtn');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  btn.classList.remove('animate'); // لإعادة الحركة إذا تكررت
  void btn.offsetWidth; // إعادة تشغيل الأنيميشن
  btn.classList.add('animate');
});

btn.addEventListener('animationend', function() {
  btn.classList.remove('animate');
});
