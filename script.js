// وظيفة فتح واتساب (احتياطية)
function openWhatsApp() {
    const phoneNumber = "+201003041351";
    const message = "السلام عليكم! عاوز استفسر عن الخدمات اللي بتقدمها";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
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
// حركات وإيموشنات للموبايل
function initMobileAnimations() {
    // التأكد أننا على موبايل
    if (window.innerWidth <= 768) {
        
        // تأثير تحميل الصور
        const images = document.querySelectorAll('.service-image img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.parentElement.classList.add('loaded');
            });
        });
        
        // تأثير النقر على العناصر
        const tapElements = document.querySelectorAll('.service-card, .portfolio-item, .guarantee-item');
        tapElements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            el.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // تأثير السحب للتحديث
        let startY;
        document.addEventListener('touchstart', e => {
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchmove', e => {
            if (window.scrollY === 0 && e.touches[0].clientY > startY + 50) {
                // سحب للتحديث
                document.body.style.transform = 'translateY(50px)';
            }
        });
        
        document.addEventListener('touchend', () => {
            document.body.style.transform = 'translateY(0)';
        });
        
        // اهتزاز عند الوصول لأقسام
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'mobileShake 0.5s ease-in-out';
                    setTimeout(() => {
                        entry.target.style.animation = '';
                    }, 500);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
}

// استدعاء الدالة عند التحميل
window.addEventListener('load', function() {
    initMobileAnimations();
});

// إعادة التهيئة عند تغيير حجم النافذة
window.addEventListener('resize', initMobileAnimations);