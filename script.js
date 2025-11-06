// وظيفة فتح واتساب
function openWhatsApp() {
    const phoneNumber = "+201003041351"; // +20 لمصر
    const message = "السلام عليكم! عاوز استفسر عن الخدمات اللي بتقدمها";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// تفعيل زر الاتصال - مع التأكد من وجود العنصر
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        openWhatsApp();
    });
}

// تفعيل الروابط في القائمة
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
        } else {
            header.style.background = '#1a1a1a';
        }
    }
});

// تأثيرات دخول العناصر
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة جميع العناصر
document.querySelectorAll('.service-card, .portfolio-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// رسالة تأكيد عند تحميل الصفحة
window.addEventListener('load', function() {
    console.log('موقع شريف قريش جاهز للعمل! 🚀');
    
    // تأثير تحميل بسيط
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});