// Remove Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 800);
    }, 1000);
});

// Scroll Reveal Logic (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Advanced WhatsApp Routing Engine
// Directs high-intent leads instantly without the friction of a form
const brandPhone = "2348034415260"; // Official BEH active line

document.querySelectorAll('.wa-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Dynamically capture the specific service intent from the button data attribute
        const serviceIntent = trigger.getAttribute('data-service');
        
        // Construct a highly professional, pre-filled message for the lead
        const rawMessage = `Hello Beauty Endowed Heritage.\n\nI am reaching out from your website. I am highly interested in the *${serviceIntent}*.\n\nPlease share your availability and consultation details.`;
        
        // Encode for WhatsApp API
        const encodedMessage = encodeURIComponent(rawMessage);
        const waUrl = `https://wa.me/${brandPhone}?text=${encodedMessage}`;
        
        // Open WhatsApp instantly
        window.open(waUrl, '_blank');
    });
});

