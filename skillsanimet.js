document.addEventListener("DOMContentLoaded", () => {
  // Animate skill bars
  const skillBars = document.querySelectorAll(".skill-bar");

  setTimeout(() => {
    skillBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = percentage + "%";
    });
  }, 500);

  // Add hover effects to skill cards
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icons = this.querySelectorAll(".skill-icons i");
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.transform = "scale(1.2)";
          icon.style.color = getRandomColor();
        }, index * 100);
      });
    });

    card.addEventListener("mouseleave", function () {
      const icons = this.querySelectorAll(".skill-icons i");
      icons.forEach((icon) => {
        icon.style.transform = "";
        icon.style.color = "white";
      });
    });
  });

  // Add parallax effect
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".skill-card");
    const mouseX = e.clientX / window.innerWidth - 1.5;
    const mouseY = e.clientY / window.innerHeight - 1.5;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      const offsetX = (cardCenterX - e.clientX) / 30;
      const offsetY = (cardCenterY - e.clientY) / 30;

      card.style.transform = `translateY(-5px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    });
  });

  document.addEventListener("mouseleave", () => {
    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card) => {
      card.style.transform = "translateY(-5px) rotateY(0deg) rotateX(0deg)";
    });
  });

  // Add scroll reveal animation
  window.addEventListener("scroll", revealOnScroll);

  function revealOnScroll() {
    const cards = document.querySelectorAll(".skill-card");
    const windowHeight = window.innerHeight;

    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const cardVisible = 150;

      if (cardTop < windowHeight - cardVisible) {
        card.classList.add("visible");
      }
    });
  }

  // Floating animation for skill tags
  const skillTags = document.querySelectorAll(".skill-tag");

  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) translateY(-5px)";
    });

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // Helper function to get random color
  function getRandomColor() {
    const colors = ["#2a9d8f", "#e76f51", "#f4a261", "#e9c46a", "#264653", "#06d6a0", "#118ab2", "#ef476f", "#ffd166", "#073b4c"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Add particle background effect
  createParticles();

  function createParticles() {
    const skillsSection = document.querySelector(".skills-section");
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random styling
      particle.style.position = "absolute";
      particle.style.width = Math.random() * 10 + "px";
      particle.style.height = particle.style.width;
      particle.style.background = "rgba(255, 255, 255, " + Math.random() * 0.3 + ")";
      particle.style.borderRadius = "50%";

      // Random position
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.top = Math.random() * 100 + "vh";

      // Animation
      particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
      particle.style.opacity = Math.random();
      particle.style.zIndex = "1";

      // Add to DOM
      skillsSection.appendChild(particle);
    }
  }

  // Add floating animation
  const style = document.createElement("style");
  style.innerHTML = `
      @keyframes float {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      .particle {
        pointer-events: none;
      }
    `;
  document.head.appendChild(style);
});
