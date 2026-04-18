/* scripttt.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // ================= 1. LOADER =================
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1500);

    // ================= 2. TYPING ANIMATION =================
    const textElement = document.querySelector('.typewriter');
    const words = ["BTech Student", "Web Developer", "Programmer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // ================= 3. CUSTOM CURSOR =================
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Follower ko slightly delay se move karne ke liye
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effects for cursor
    const hoverTargets = document.querySelectorAll('a, button, .project__card, .service__card');
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.background = 'rgba(0, 224, 255, 0.1)';
        });
        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.background = 'transparent';
        });
    });

    // ================= 4. MOBILE MENU =================
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav__links');
    const navLinksItems = document.querySelectorAll('.nav__links li a');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Icon change (Menu to Close)
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ri-menu-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
        }
    });

    // Close menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
        });
    });

    // ================= 5. SCROLL REVEAL ANIMATION =================
    const revealElements = document.querySelectorAll('.reveal');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    // Check once on load
    checkScroll();

    // ================= 6. SKILL BAR ANIMATION =================
    const skillBars = document.querySelectorAll('.skill__progress');

    function fillSkills() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // Skill bars fill hone chalu honge jab Skills section scroll ke zariye aaye
    const skillsSection = document.querySelector('#skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fillSkills();
            }
        });
    }, { threshold: 0.3 });

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // ================= 7. ACTIVE LINK ON SCROLL =================
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // ================= 8. FORM SUBMISSION (Alert only) =================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const name = contactForm.querySelector('input[type="text"]').value;
            
            // Show alert
            alert(`Thanks ${name}! Your message has been sent successfully.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // ================= 9. SMOOTH SCROLL FOR ANCHOR LINKS =================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});