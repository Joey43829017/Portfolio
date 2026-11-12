/**
 * Joseph Kozlowski Portfolio - Main JavaScript
 * Features: Particle animations, theme toggling, smooth scroll, statistics animation
 */

// =============================================
// CONFIGURATION
// =============================================
const config = {
    particleCount: 60,
    particleSpeed: 0.5,
    particleSizeBase: 2,
    navigationDelay: 200,
    statsAnimationDuration: 2000
};

// =============================================
// THEME MANAGEMENT
// =============================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme or default to light
    applyTheme(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.dataset.theme;
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
}

function applyTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    const iconSpan = document.querySelector('.theme-toggle span');
    if (iconSpan) {
        iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// =============================================
// PARTICLE SYSTEM
// =============================================
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.particleSpeed;
            this.vy = (Math.random() - 0.5) * config.particleSpeed;
            this.size = Math.random() * config.particleSizeBase + 1;
            this.opacity = Math.random() * 0.3 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(30, 58, 95, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Draw connection lines between nearby particles
    function drawConnections() {
        const connectionDistance = 150;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = (1 - distance / connectionDistance) * 0.2;
                    ctx.strokeStyle = `rgba(30, 58, 95, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        drawConnections();
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// =============================================
// STATISTICS ANIMATION
// =============================================
function initStatsAnimation() {
    const statElements = document.querySelectorAll('.stat-number');
    
    statElements.forEach(stat => {
        stat.addEventListener('intersected', () => {
            const target = parseFloat(stat.dataset.target);
            const unit = stat.dataset.unit || '';
            const duration = config.statsAnimationDuration;
            const startTime = performance.now();
            
            function updateStats(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function (ease-out-quart)
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                
                const currentValue = target * easeProgress;
                stat.textContent = currentValue.toFixed(target % 1 === 0 ? 0 : 1) + unit;
                
                if (progress < 1) {
                    requestAnimationFrame(updateStats);
                }
            }
            
            requestAnimationFrame(updateStats);
        });
        
        // Trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.dispatchEvent(new Event('intersected'));
                }
            });
        }, { threshold: 0.5 });
        
        stat.addEventListener('intersected', () => {
            observer.disconnect();
        });
        
        observer.observe(stat);
    });
}

// =============================================
// SMOOTH SCROLLING NAVIGATION
// =============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip navigation for external links or non-anchors
            if (!href || !href.startsWith('#')) return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// =============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// =============================================
function initActiveNavigation() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initialize
}

// =============================================
// TIMELINE ANIMATIONS
// =============================================
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => observer.observe(item));
}

// =============================================
// SCROLL INDICATOR ANIMATION
// =============================================
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > window.innerHeight - 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.transition = 'opacity 0.3s ease';
    } else {
        scrollIndicator.style.opacity = '1';
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight - 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// =============================================
// CONTACT FORM HANDLING
// =============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send to a backend
            console.log('Form submitted:', data);
            
            // Show success message (you could create a toast notification)
            alert('Thank you for your message! This is a demo form - in production, this would send an email.');
            
            contactForm.reset();
        });
    }
}

// =============================================
// PROJECT CARD INTERACTIONS
// =============================================
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Close other open cards if any
            projectCards.forEach(c => {
                if (c !== this) {
                    c.style.maxHeight = null;
                    c.classList.remove('open');
                }
            });
            
            // Toggle current card
            this.style.maxHeight = this.scrollHeight + 'px';
            this.classList.add('open');
        });
    });
}

// =============================================
// SCROLL TO TOP BUTTON
// =============================================
function initScrollToTop() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// =============================================
// NUMBER COUNTER ANIMATION FOR STATS
// =============================================
function animateCounter(element, target, duration = 2000, easing = 'easeOutQuad') {
    const start = performance.now();
    const startPos = 0;
    
    function update(currentTime) {
        const elapsed = currentTime - start;
        
        if (elapsed < duration) {
            const progress = elapsed / duration;
            
            // Easing functions
            switch(easing) {
                case 'easeOutQuad':
                    const easedProgress = 1 - (1 - progress) * (1 - progress);
                    break;
                case 'linear':
                    const linearProgress = progress;
                    break;
                default:
                    const easeProgress = 1 - Math.pow(1 - progress, 4);
            }
            
            const currentValue = target * easedProgress;
            element.textContent = currentValue.toFixed(target % 1 === 0 ? 0 : 1) + (element.dataset.unit || '');
            
            requestAnimationFrame(update);
        } else {
            element.textContent = target + (element.dataset.unit || '');
        }
    }
    
    requestAnimationFrame(update);
}

// =============================================
// UTILITY FUNCTIONS
// =============================================
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

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =============================================
// MOBILE MENU HANDLING
// =============================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Simple toggle for mobile menu
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(30, 58, 95, 0.98)';
            navLinks.style.padding = '2rem';
            navLinks.style.gap = '1rem';
            
            // Add animation
            if (navLinks.style.display === 'none') {
                navLinks.style.animation = 'fadeIn 0.3s ease forwards';
            }
        });
    }
}

// =============================================
// PERFORMANCE OPTIMIZATION
// =============================================
function optimizeScroll() {
    // Use passive listeners for better scroll performance
    window.addEventListener('scroll', 
        debounce(() => {
            // Scroll-related logic here
        }, 16), 
        { passive: true }
    );
}

// =============================================
// INITIALIZATION
// =============================================
function init() {
    console.log('Portfolio initialized ✓');
    
    // Initialize all features
    initTheme();
    initParticles();
    initStatsAnimation();
    initSmoothScroll();
    initActiveNavigation();
    initTimelineAnimations();
    initScrollIndicator();
    initContactForm();
    initProjectCards();
    initScrollToTop();
    initMobileMenu();
    optimizeScroll();
    
    // Wait for images to load before animating stats
    window.addEventListener('load', () => {
        setTimeout(() => {
            const heroStats = document.querySelectorAll('.stat-card');
            heroStats.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-fadeInUp');
                }, index * 100);
            });
        }, 500);
    });
}

// =============================================
// DOM READY
// =============================================
document.addEventListener('DOMContentLoaded', init);
