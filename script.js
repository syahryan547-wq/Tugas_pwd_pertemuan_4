// Ambil elemen tombol
const scrollBtn = document.getElementById("scrollTopBtn");

// Tampilkan tombol jika scroll > 500px
window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});