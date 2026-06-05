// Inicializar EmailJS (usar tu clave pública)
emailjs.init("YOUR_PUBLIC_KEY"); // Se reemplazará después

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
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Preparar parámetros para EmailJS
        const templateParams = {
            to_email: 'serviciorapidolosrodeos@gmail.com',
            from_email: email,
            from_name: nombre,
            telefono: telefono,
            asunto: asunto,
            mensaje: mensaje
        };
        
        // Enviar email
        emailjs.send('service_serviciorapido', 'template_serviciorapido', templateParams)
            .then(function(response) {
                // Mostrar mensaje de éxito
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                formMessage.textContent = '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.';
                
                // Limpiar formulario
                contactForm.reset();
                
                // Limpiar mensaje después de 5 segundos
                setTimeout(() => {
                    formMessage.classList.remove('success');
                }, 5000);
            }, function(error) {
                // Mostrar mensaje de error
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
                formMessage.textContent = 'Error al enviar el mensaje. Por favor intenta de nuevo.';
                
                console.log('Error:', error);
            });
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

// Validación básica del formulario en cliente
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(field => {
    field.addEventListener('invalid', function() {
        this.style.borderColor = '#e74c3c';
    });
    
    field.addEventListener('input', function() {
        this.style.borderColor = '#ddd';
    });
});
