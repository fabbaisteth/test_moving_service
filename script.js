// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.06)';
    }
    
    lastScrollTop = scrollTop;
});

// ========================================
// Form Submission Handler
// ========================================
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        moveDate: document.getElementById('moveDate').value,
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        size: document.getElementById('size').value,
        message: document.getElementById('message').value
    };
    
    // Show success message (in a real app, this would send to a server)
    showNotification('Thank you! We\'ll contact you within 24 hours with your free quote.', 'success');
    
    // Reset form
    quoteForm.reset();
    
    // Log data (for demo purposes)
    console.log('Quote Request:', formData);
});

// ========================================
// Notification System
// ========================================
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 16px;
        padding: 1.5rem 2rem;
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: bold;
        flex-shrink: 0;
    }
    
    .notification-success .notification-icon {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        color: white;
    }
    
    .notification-message {
        flex: 1;
        color: #1a1a1a;
        line-height: 1.5;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        transition: color 0.2s;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        color: #1a1a1a;
    }
`;
document.head.appendChild(style);

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards, pricing cards, and testimonial cards
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .about-text, .about-image');
    elements.forEach(el => observer.observe(el));
});

// ========================================
// Button Click Handlers
// ========================================
document.querySelectorAll('.primary-button, .secondary-button').forEach(button => {
    button.addEventListener('click', function() {
        // Scroll to contact section when hero buttons are clicked
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// CTA button in navbar
document.querySelector('.cta-button').addEventListener('click', function() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});

// Pricing buttons
document.querySelectorAll('.pricing-button').forEach(button => {
    button.addEventListener('click', function() {
        const packageName = this.parentElement.querySelector('h3').textContent;
        const contactSection = document.getElementById('contact');
        
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Pre-fill the message field with package selection
            setTimeout(() => {
                const messageField = document.getElementById('message');
                if (messageField) {
                    messageField.value = `I'm interested in the ${packageName} package.`;
                    messageField.focus();
                }
            }, 500);
        }
    });
});

// ========================================
// Parallax Effect for Hero Orbs
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// Set Minimum Date for Moving Date Input
// ========================================
const moveDateInput = document.getElementById('moveDate');
if (moveDateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    
    moveDateInput.min = `${year}-${month}-${day}`;
}

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🚚 Berlin Move - Premium Moving Services', 'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; border-radius: 10px;');
console.log('%cWebsite by Berlin Move Team | 2026', 'font-size: 12px; color: #666;');
