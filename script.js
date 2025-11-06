// وظيفة فتح واتساب
function openWhatsApp() {
    const phoneNumber = "01003041351";
    const message = "السلام عليكم! عاوز استفسر عن الخدمات اللي بتقدمها";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// تأثيرات التمرير المتقدمة
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 100;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // تأثيرات ظهور العناصر
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
});

// تفعيل زر الاتصال
document.querySelector('.cta-button').addEventListener('click', function() {
    openWhatsApp();
});

// تفعيل الروابط في القائمة
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تأثيرات إضافية عند التحميل
window.addEventListener('load', function() {
    // إضافة كلاس reveal للعناصر
    document.querySelectorAll('.service-card, .portfolio-item, .contact-item').forEach(el => {
        el.classList.add('reveal');
    });
    
    // تفعيل تأثيرات التمرير فور التحميل
    window.dispatchEvent(new Event('scroll'));
    
    // تأثير تحميل الصفحة
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
});

// تأثيرات الـ Hover المتقدمة
document.querySelectorAll('.service-card, .portfolio-item, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = this.style.transform + ' rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = this.style.transform.replace(' rotate(1deg)', '');
    });
});

// تأثيرات الإيموشن عند النقر
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});