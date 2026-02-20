document.addEventListener('DOMContentLoaded', () => {

    // Simulate loading time for the preloader (3.5 seconds)
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const mainContent = document.getElementById('main-content');

        // Ensure elements exist
        if (preloader && mainContent) {
            // Fade out preloader
            preloader.classList.add('hidden');

            // Allow scrolling on body
            document.body.classList.remove('loading');

            // Fade in main content
            setTimeout(() => {
                preloader.style.display = 'none'; // remove from DOM flow
                mainContent.classList.add('visible');
            }, 800); // 800ms matches the CSS transition duration
        }
    }, 3200);

    // Scroll effect for Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Make donate button interactive
    const donateBtn = document.getElementById('donateBtn');
    if (donateBtn) {
        donateBtn.addEventListener('click', () => {
            alert("Merci pour votre soutien ! Cette fonctionnalité sera bientôt disponible.");
        });
    }

    // Add smooth scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed navbar height
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
