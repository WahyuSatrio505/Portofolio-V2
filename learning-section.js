document.addEventListener("DOMContentLoaded", () => {
  // Animasi progress ring saat scroll
  const learningItems = document.querySelectorAll(".learning-item");

  // Observer untuk animasi saat elemen terlihat
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");

          // Animasi progress ring
          const progressRing = entry.target.querySelector(".progress-ring-circle-fill");
          const percent = progressRing.getAttribute("data-percent");
          const circumference = 2 * Math.PI * 45; // 2πr where r=45

          progressRing.style.strokeDasharray = `${circumference}`;
          progressRing.style.strokeDashoffset = `${circumference - (circumference * percent) / 100}`;

          // Hapus observer setelah animasi
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  // Observe semua learning items
  learningItems.forEach((item) => {
    observer.observe(item);
  });

  // Tambahkan efek hover pada item
  learningItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Tambahkan partikel bergerak saat hover
      const particles = this.querySelectorAll(".learning-particles span");
      particles.forEach((particle, index) => {
        particle.style.animation = `float ${6 + index}s ease-in-out infinite ${index * 0.5}s`;
      });
    });
  });

  // Animasi untuk roadmap link
  const roadmapLink = document.querySelector(".roadmap-link");
  if (roadmapLink) {
    roadmapLink.addEventListener("mouseenter", function () {
      const icon = this.querySelector("i");
      icon.style.transform = "translateX(5px)";
    });

    roadmapLink.addEventListener("mouseleave", function () {
      const icon = this.querySelector("i");
      icon.style.transform = "translateX(0)";
    });
  }
});


// new


document.addEventListener("DOMContentLoaded", () => {
  // Animasi parallax untuk background saat scroll
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const section = document.querySelector(".learning-section")

    // Pastikan section ada di halaman
    if (section) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      // Hanya animasikan jika section terlihat di viewport
      if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
        // Efek parallax untuk gelombang
        const waves = document.querySelectorAll(".wave")
        waves.forEach((wave, index) => {
          const speed = 0.1 + index * 0.05
          const yPos = (scrollY - sectionTop) * speed
          wave.style.transform = `translateY(${yPos}px)`
        })

        // Efek parallax untuk partikel
        const particles = document.querySelectorAll(".particle")
        particles.forEach((particle, index) => {
          const speed = 0.05 + index * 0.02
          const yPos = (scrollY - sectionTop) * speed
          const xPos = (scrollY - sectionTop) * (speed / 2)
          particle.style.transform = `translate(${xPos}px, ${yPos}px)`
        })
      }
    }
  })

  // Animasi mouse move untuk partikel
  document.querySelector(".learning-section").addEventListener("mousemove", (e) => {
    const particles = document.querySelectorAll(".particle")
    const section = document.querySelector(".learning-section")

    // Mendapatkan posisi relatif mouse di dalam section
    const rect = section.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Menggerakkan partikel berdasarkan posisi mouse
    particles.forEach((particle, index) => {
      const speed = 0.02 + index * 0.01
      const xPos = (mouseX - rect.width / 2) * speed
      const yPos = (mouseY - rect.height / 2) * speed

      // Menerapkan transformasi dengan animasi halus
      particle.style.transition = "transform 1s ease-out"
      particle.style.transform = `translate(${xPos}px, ${yPos}px)`
    })
  })
})


// bawah bagian kontak
    // Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const newsletter = document.getElementById('newsletter').checked;
        
        // Simulate form submission with timeout
        setTimeout(() => {
            // In a real application, you would send this data to your server
            // For demo purposes, we'll just show a success message
            
            // Show success message
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Reset form
            contactForm.reset();
            
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
            // Log form data (for demo purposes)
            console.log({
                name,
                email,
                phone,
                subject,
                message,
                newsletter
            });
            
        }, 2000); // Simulate 2 second delay for API call
    });

    // Form Input Animation
    const formControls = document.querySelectorAll('.form-control');
    
    formControls.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Scroll Reveal Animation
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger on initial load
    revealOnScroll();

    // Info Item Hover Animation
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.info-icon');
            icon.style.transform = 'rotate(360deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.info-icon');
            icon.style.transform = 'rotate(0deg)';
        });
    });

    // Social Links Animation
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Typing Effect for Section Header
    const sectionHeader = document.querySelector('.section-header h2');
    sectionHeader.classList.add('typing-effect');
    
    // Pulse Animation for Submit Button
    submitBtn.addEventListener('mouseenter', () => {
        submitBtn.classList.add('pulse');
    });
    
    submitBtn.addEventListener('mouseleave', () => {
        submitBtn.classList.remove('pulse');
    });

    // Form Validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !validateEmail(emailInput.value)) {
            emailInput.style.borderColor = '#dc2626';
            emailInput.setCustomValidity('Masukkan alamat email yang valid');
        } else {
            emailInput.style.borderColor = '';
            emailInput.setCustomValidity('');
        }
    });


    // Animasi Navbar

