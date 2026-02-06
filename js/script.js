// =========================================
// DEAR DIARY - Enhanced JavaScript
// Bug fixes and smooth interactions
// =========================================

// Toggle side navigation menu
function toggleMenu() {
    const menu = document.getElementById("sideNav");
    const currentWidth = menu.style.width;
    
    if (currentWidth === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

// Close menu when clicking outside - FIXED
window.onclick = function(event) {
    const menu = document.getElementById("sideNav");
    const icon = document.querySelector(".menu-icon");
    
    // Check if menu is open and click is outside
    if (menu && menu.style.width === "250px") {
        const isClickInsideMenu = event.target.closest('.side-nav');
        const isClickOnIcon = event.target === icon || event.target.closest('.menu-icon');
        
        if (!isClickInsideMenu && !isClickOnIcon) {
            menu.style.width = "0";
        }
    }
}

// Close menu when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const menu = document.getElementById("sideNav");
        if (menu && menu.style.width === "250px") {
            menu.style.width = "0";
        }
    }
});

// =========================================
// SMOOTH SCROLL ENHANCEMENT
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore # and javascript:void(0)
            if (href === '#' || href.startsWith('javascript:')) {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll('.diary-collage, .cutout-frame, .feed-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => observer.observe(el));
});

// =========================================
// PARALLAX EFFECT FOR HERO SECTION
// =========================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-immersive');
    
    if (heroSection) {
        const parallaxSpeed = 0.5;
        heroSection.style.backgroundPositionY = (scrolled * parallaxSpeed) + 'px';
    }
});

// =========================================
// MODAL FUNCTIONS - Enhanced
// =========================================
function openLore() {
    const modal = document.getElementById("item1");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = 'hidden';
        
        // Add animation class
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }
}

function closeLore() {
    const modal = document.getElementById("item1");
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }, 250);
    }
}

// Generic modal functions for World page
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modal.style.animation = 'fadeIn 0.3s ease-out';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 250);
    }
}

// Hub post modal functions
function openPost(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closePost(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modals when clicking outside content
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.lore-overlay, .post-modal-overlay');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// =========================================
// LOADING OPTIMIZATION
// =========================================
// Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// =========================================
// ADD CSS ANIMATIONS DYNAMICALLY
// =========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }
`;
document.head.appendChild(style);

// =========================================
// PERFORMANCE OPTIMIZATION
// =========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations
    const scrollTop = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(13, 13, 13, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    }
}, 10));

// Console Easter Egg
console.log('%c🩸 DEAR DIARY 🩸', 'color: #b30000; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);');
console.log('%cCan you find all the secrets?', 'color: #666; font-size: 14px;');
