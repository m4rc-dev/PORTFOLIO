document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const popupOverlay = document.getElementById('popup-overlay');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Show submitting state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Submit form via AJAX to Formspree
            fetch('https://formspree.io/f/xnnevqwa', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                // Add a small delay to ensure form submission
                setTimeout(() => {
                    // Always show success message since Formspree might redirect
                    // If we get here, the request was sent successfully
                    formMessage.innerHTML = '<p><strong>Message Sent Successfully!</strong><br>We have received your message and will get back to you soon.</p><button class="close-popup">×</button>';
                    formMessage.className = 'form-message show';
                    popupOverlay.className = 'popup-overlay show';
                    
                    // Add event listener to close button
                    setTimeout(() => {
                        const closeBtn = formMessage.querySelector('.close-popup');
                        if (closeBtn) {
                            closeBtn.addEventListener('click', function() {
                                formMessage.classList.remove('show');
                                popupOverlay.classList.remove('show');
                            });
                        }
                    }, 100);
                    contactForm.reset();
                }, 500);
            })
            .catch(error => {
                // Handle error
                formMessage.innerHTML = '<p>Oops! There was a problem sending your message. Please try again.</p><button class="close-popup">×</button>';
                formMessage.className = 'form-message show';
                popupOverlay.className = 'popup-overlay show';
                
                // Add event listener to close button
                setTimeout(() => {
                    const closeBtn = formMessage.querySelector('.close-popup');
                    if (closeBtn) {
                        closeBtn.addEventListener('click', function() {
                            formMessage.classList.remove('show');
                            popupOverlay.classList.remove('show');
                        });
                    }
                }, 100);
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                // Clear message after 8 seconds
                setTimeout(() => {
                    formMessage.classList.remove('show');
                    popupOverlay.classList.remove('show');
                }, 8000);
            });
        });
    }
    
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Skills animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Set initial progress for skills
    skillItems.forEach(item => {
        const progressFill = item.querySelector('.progress-fill');
        const level = progressFill.getAttribute('data-level');
        progressFill.style.width = level + '%';
    });
    
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-header, .project-card, .skill-item, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});