document.addEventListener('DOMContentLoaded', function() {
    // Asegúrate de que el formulario tenga el ID 'contactForm'
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Extraer los valores de los campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Número de teléfono en formato internacional (Colombia)
        const phoneNumber = '573024167492'; // Reemplaza con el número real

        // Estructurar el mensaje de WhatsApp
        const whatsappMessage = `Buenos días, habla ${name}. Mi correo electrónico es ${email}. ${message}`;

        // Crear un enlace de WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirigir al usuario al enlace de WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});
