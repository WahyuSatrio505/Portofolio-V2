function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function animateProgressBar() {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach((bar) => {
    if (isInViewport(bar) && !bar.classList.contains("animated")) {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth + "%";
      bar.classList.add("animated");
    }
  });
}

// Jalankan saat scroll dan load
window.addEventListener("scroll", animateProgressBar);
window.addEventListener("load", animateProgressBar);
