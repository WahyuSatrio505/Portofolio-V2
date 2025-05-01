// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const modalContainer = document.getElementById('modal-container');
    const projectModals = document.querySelectorAll('.project-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
    
    // Initialize AOS-like scroll animations
    initScrollAnimations();
    
    // Filter projects
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter projects
        filterProjects(filterValue);
      });
    });
    
    // View project details
    viewDetailsBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
      });
    });
    
    // Close modal
    closeModalBtns.forEach(btn => {
      btn.addEventListener('click', closeModal);
    });
    
    // Close modal when clicking on overlay
    modalOverlay.addEventListener('click', closeModal);
    
    // Gallery thumbnails
    galleryThumbs.forEach(thumb => {
      thumb.addEventListener('click', function() {
        const modal = this.closest('.project-modal');
        const galleryMain = modal.querySelector('.gallery-main img');
        const thumbs = modal.querySelectorAll('.gallery-thumbs img');
        
        // Update main image
        galleryMain.src = this.src;
        
        // Update active thumbnail
        thumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
    
    // Filter projects function
    function filterProjects(category) {
      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        // Remove classes first
        item.classList.remove('hide', 'show');
        
        // Apply filter
        if (category === 'all' || category === itemCategory) {
          item.classList.add('show');
        } else {
          item.classList.add('hide');
        }
      });
    }
    
    // Open modal function
    function openModal(projectId) {
      // Show modal container
      modalContainer.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Show specific project modal
      const modal = document.getElementById(projectId);
      projectModals.forEach(m => m.classList.remove('active'));
      modal.classList.add('active');
      
      // Add entrance animation
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
      }, 100);
    }
    
    // Close modal function
    function closeModal() {
      modalContainer.classList.remove('active');
      document.body.style.overflow = '';
      
      // Reset modals
      setTimeout(() => {
        projectModals.forEach(modal => {
          modal.classList.remove('active');
          modal.style.opacity = '';
          modal.style.transform = '';
        });
      }, 300);
    }
    
    // Initialize scroll animations (similar to AOS)
    function initScrollAnimations() {
      const animatedElements = document.querySelectorAll('.project-card');
      
      // Create intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      // Observe elements
      animatedElements.forEach((el, index) => {
        el.style.transform = 'translateY(30px)';
        el.style.opacity = '0';
        el.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
      });
    }
  });