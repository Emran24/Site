// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 1)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submissions
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // TODO: Добавить отправку формы на сервер
    // Здесь должна быть логика отправки данных

    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

document.getElementById('modalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // TODO: Добавить отправку формы на сервер

    alert('Спасибо за заявку! Коммерческое предложение будет отправлено на вашу почту.');

    // Закрыть модальное окно
    const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    modal.hide();

    this.reset();
});

// Phone number formatting
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value[0] === '7' || value[0] === '8') {
                value = value.substring(1);
            }
            let formatted = '+7';
            if (value.length > 0) formatted += ' (' + value.substring(0, 3);
            if (value.length >= 4) formatted += ') ' + value.substring(3, 6);
            if (value.length >= 7) formatted += '-' + value.substring(6, 8);
            if (value.length >= 9) formatted += '-' + value.substring(8, 10);
            e.target.value = formatted;
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.advantage-card, .product-card, .condition-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});