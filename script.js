
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
      mobileMenu.classList.remove('active');
    }
  });
  
  // Close mobile menu when clicking on a link
  const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
  mobileMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Resume tabs functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all tab contents
      tabContents.forEach(content => content.classList.add('hidden'));
      
      // Show corresponding tab content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId + '-tab').classList.remove('hidden');
    });
  });
  
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to animate skill bars
  function animateSkillBars() {
    skillBars.forEach(bar => {
      if (isInViewport(bar) && !bar.classList.contains('animated')) {
        const width = bar.getAttribute('style').match(/width: (\d+)%/)[1];
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width + '%';
          bar.classList.add('animated');
        }, 200);
      }
    });
  }
  
  // Initial check for elements in viewport
  animateSkillBars();
  
  // Check on scroll
  window.addEventListener('scroll', function() {
    animateSkillBars();
  });
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add offset for fixed header
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Change navbar background on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(248, 245, 255, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(155, 135, 245, 0.15)';
    } else {
      navbar.style.backgroundColor = 'rgba(248, 245, 255, 0.85)';
      navbar.style.boxShadow = '0 2px 20px rgba(155, 135, 245, 0.1)';
    }
  });
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('#name').value.trim();
      const email = this.querySelector('#email').value.trim();
      const subject = this.querySelector('#subject').value.trim();
      const message = this.querySelector('#message').value.trim();
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For now, just show a success message
      alert('Thanks for your message! I will get back to you soon.');
      this.reset();
    });
  }
  
  // Add scroll reveal animations
  const revealElements = document.querySelectorAll('.section, .skill-category, .project-card, .education-card, .experience-card');
  
  function revealOnScroll() {
    revealElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('revealed')) {
        element.classList.add('fade-in', 'revealed');
      }
    });
  }
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', function() {
    revealOnScroll();
  });
});
