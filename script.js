// Zero Torque Golf Putter Portfolio - Innovative Design Enhancements
// Custom Scarlet Cursor Glow + Scroll Progress
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let cx = 0, cy = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

const cursorLoop = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(cursorLoop);
};
cursorLoop();

// Magnetic Buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transition = 'transform .3s ease';
        btn.style.transform = '';
    });
});

// Animated scroll progress bar at top of viewport
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${pct}%`;
});

// Hero Canvas Particle Network Animation
const heroCanvas = document.getElementById('hero-canvas');
if (heroCanvas && 'IntersectionObserver' in window) {
    let particles = [];
    let animationFrame = null;
    
    const resizeParticles = () => {
        const rect = heroCanvas.getBoundingClientRect();
        heroCanvas.width = rect.width * devicePixelRatio;
        heroCanvas.height = rect.height * devicePixelRatio;
        
        particles = [];
        const count = Math.floor((rect.width * rect.height) / 9000);
        
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * rect.width,
                y: Math.random() * rect.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                r: Math.random() * 1.8 + 0.4,
                hue: 342 + Math.random() * 30 // scarlet range
            });
        }
    };
    
    const drawParticles = () => {
        if (!heroCanvas.isConnected) return;
        
        heroCanvas.width = heroCanvas.offsetWidth * devicePixelRatio;
        heroCanvas.height = heroCanvas.offsetHeight * devicePixelRatio;
        resizeParticles();
        
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        
        // Animate particles with drift + connections between nearby nodes
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx + Math.sin(performance.now() * 0.001 + i) * 0.05;
            p.y += p.vy + Math.cos(performance.now() * 0.0013 + i) * 0.05;
            
            if (p.x < -20 || p.x > heroCanvas.width + 20) p.vx *= -1;
            if (p.y < -20 || p.y > heroCanvas.height + 20) p.vy *= -1;
            
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
            g.addColorStop(0, `hsla(${p.hue}, 95%, 72%, ${i % 3 === 0 ? 0.85 : 0.35})`);
            g.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
        }
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const alpha = (1 - dist / 150) * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `hsla(${particles[i].hue}, 88%, 68%, ${alpha})`;
                    ctx.lineWidth = Math.max(0.5, (1 - dist / 150) * 2);
                    ctx.stroke();
                }
            }
        }
        
        animationFrame = requestAnimationFrame(drawParticles);
    };
    
    const canvasObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationFrame) drawParticles();
            else if (!entry.isIntersecting && animationFrame) cancelAnimationFrame(animationFrame), animationFrame = null;
        });
    }, { threshold: 0.15 });
    
    canvasObserver.observe(document.querySelector('.hero') || document.body);
}

// Scroll-linked parallax for images and sections
const parallaxElements = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    parallaxElements.forEach(el => {
        if (scrolled < window.innerHeight * 2.5) {
            el.style.transform = `translateY(${scrolled * (parseFloat(el.dataset.speed) || 0.15)}px)`;
        } else el.style.transform = '';
    });
});

// Tilt effect on project/spec cards for 3D feel
document.querySelectorAll('.project-card, .spec-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        if (!card.dataset.tilted) {
            card.style.transition = 'transform .1s ease';
            card.dataset.tilted = 'true';
        }
        card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.dataset.tilted = 'false';
        card.style.transition = 'transform .5s cubic-bezier(.16,.84,.44,1)';
        card.style.transform = '';
    });
});

// Floating badge pulse for featured project
const featuredBadge = document.querySelector('.featured-badge');
if (featuredBadge) {
    setInterval(() => {
        featuredBadge.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.25)', offset: 0.4, color: '#E11D48' },
            { transform: 'scale(1)' }
        ], { duration: 1600, iterations: Infinity });
    }, 6000);
}

// Easing-based metric counter animation
const metricValues = document.querySelectorAll('.metric-value');
if (metricValues.length > 0) {
    const animateCounter = el => {
        const target = parseFloat(el.textContent.replace(/[\d.]/g, '')) || 5000;
        if (!target) return;
        
        let current = 0;
        const start = performance.now();
        
        const loop = now => {
            const p = Math.min((now - start) / 1600, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            current = target * eased;
            el.textContent = Math.round(current).toLocaleString();
            
            if (p < 1) requestAnimationFrame(loop);
            else {
                el.textContent = target.toLocaleString() + '+';
                observer.unobserve(el);
            }
        };
        
        requestAnimationFrame(loop);
    };
    
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) animateCounter(e.target); });
    }, { threshold: 0.5, rootMargin: '0px 0px -40px 0px' });
    
    metricValues.forEach(el => counterObserver.observe(el));
}

// Smooth anchor scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
        }
    });
});

console.log('%c\u{1F680} Zero Torque Portfolio — Enhanced with particle canvas, magnetic buttons & scroll effects', 'color:#E11D48; font-size:15px; font-weight:bold');
