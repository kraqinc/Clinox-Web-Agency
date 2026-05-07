
const translations = {
    en: {
        "nav-services": "Services", "nav-work": "Projects", "nav-contact": "Contact",
        "hero-title": "Web Development & <span>Page Creation</span>",
        "hero-desc": "We transform ideas into digital experiences.",
        "hero-btn-start": "Get Started", "hero-btn-work": "View projects",
        "work-title": "Live Demos", "services-title": "Our Services"
    },
    es: {
        "nav-services": "Servicios", "nav-work": "Proyectos", "nav-contact": "Contacto",
        "hero-title": "Desarrollo Web & <span>Creación de Páginas</span>",
        "hero-desc": "Transformamos ideas en experiencias digitales.",
        "hero-btn-start": "Empezar", "hero-btn-work": "Ver proyectos",
        "work-title": "Demos en Vivo", "services-title": "Nuestros Servicios"
    }
};
function init() {
    const lang = navigator.language.startsWith('es') ? 'es' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const promos = ["20% OFF E-commerce", "SEO GRATIS", "Hosting Gratis", "Auditoria VIP"];
    document.getElementById('promo-banner').innerText = promos[new Date().getMonth() % promos.length];
    document.getElementById('promo-banner').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', init);
