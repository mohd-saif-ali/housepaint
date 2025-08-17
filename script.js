// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('active');
}

// Smooth scroll to booking form
function scrollToBooking() {
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.scrollIntoView({ behavior: 'smooth' });
}

// FAQ toggle
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const icon = button.querySelector('.faq-icon');
    
    // Close all other FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-icon').textContent = '+';
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        icon.textContent = '−';
    } else {
        icon.textContent = '+';
    }
}

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('consultationForm');
    const formData = new FormData(form);
    
    // Basic validation
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();
    const city = formData.get('city');
    const terms = formData.get('terms');
    
    if (!name || !phone || !email || !city || !terms) {
        alert('Please fill in all required fields and agree to the terms.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success modal
    showSuccessModal();
    
    // Reset form
    form.reset();
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
    
    // Initialize FAQ icons
    document.querySelectorAll('.faq-icon').forEach(icon => {
        icon.textContent = '+';
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});