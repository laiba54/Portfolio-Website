document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('header');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let aboutLink = document.querySelector('header nav a[href*="about"]');

    // Toggle menu
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // Sticky navbar
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);

        // Section highlighting on scroll
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    });

    aboutLink.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        aboutLink.classList.add('active');
    });

    // Initial state
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
});
