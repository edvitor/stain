window.revelar = ScrollReveal({ reset: true });

revelar.reveal('.reveal-txt', {
    duration: 2000,
    distance: '90px',
    beforeReveal: function (el) {
        const marker = el.querySelector('.marker-primary-2');
        if (marker) {
            marker.classList.add('active');  // Adiciona a classe active ao marcador
        }
    }
});

revelar.reveal('.reveal-img', {
    duration: 2000,
    distance: '90px',
    delay: 500
});

revelar.reveal('.reveal-contact', {
    duration: 2000,
    distance: '90px',
    delay: 600
});