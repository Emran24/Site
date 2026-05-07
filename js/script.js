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

// Modal form submission
const modalForm = document.getElementById('modalForm');
if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = this.querySelector('input[placeholder="Ваше имя"]').value;
        const phone = this.querySelector('input[placeholder="Телефон"]').value;
        const email = this.querySelector('input[placeholder="Email"]').value;
        const company = this.querySelector('input[placeholder="Название компании"]').value;

        const text = `Новая заявка с сайта!\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email || '—'}\nКомпания: ${company || '—'}`;

        const encoded = encodeURIComponent(text);
        window.open(`https://max.ru/u/ВАШ_ЮЗЕРНЕЙМ?text=${encoded}`, '_blank');

        const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        modal.hide();
        this.reset();
    });
}

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

const items = document.querySelectorAll('.usage-list li');
const images = document.querySelectorAll('.grid-img');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const id = item.getAttribute('data-img');
        images.forEach(img => {
            img.classList.remove('active');
            if (img.getAttribute('data-img') === id) {
                img.classList.add('active');
            }
        });
    });
});

const priceBtn = document.querySelector('[data-bs-target="#contactModal"]');
if (priceBtn) {
    priceBtn.addEventListener('click', function (e) {
        if (window.innerWidth < 768) {
            e.preventDefault();
            e.stopImmediatePropagation();
            window.location.href = 'tel:+79873500463';
        }
    });
}