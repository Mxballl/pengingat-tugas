document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll ---
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // --- Mobile menu ---
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });

    // --- Scroll reveal ---
    const revealTargets = document.querySelectorAll(
        '.hero-hi, .hero-title, .hero-sub, .hero-scroll, ' +
        '.section-top, .project, .about-big, .about-body, ' +
        '.about-now, .toolbox, .contact-heading, .contact-links, ' +
        '.contact-note, .about-photo'
    );

    revealTargets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Smooth scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Current year ---
    // (already hardcoded in HTML, but just in case)

    // --- Project hover tilt (subtle, desktop only) ---
    if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.project').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `translateY(${y * -3}px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
});
