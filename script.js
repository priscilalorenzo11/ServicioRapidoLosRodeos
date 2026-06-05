// Smooth scroll para links de navegación
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

// Manejo del formulario de contacto
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Con Netlify Forms, el formulario se envía automáticamente
        // Mostramos un mensaje de éxito
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        formMessage.textContent = '¡Mensaje enviado! Nos pondremos en contacto pronto.';
        
        // Limpiamos el mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.classList.remove('success');
        }, 5000);
    });
}

// Agregar efecto de scroll a la navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Validación básica del formulario en cliente (Netlify también valida)
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(field => {
    field.addEventListener('invalid', function() {
        this.style.borderColor = '#e74c3c';
    });
    
    field.addEventListener('input', function() {
        this.style.borderColor = '#ddd';
    });
});
