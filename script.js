const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const langToggle = document.getElementById('langToggle');

let isArabic = false;

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

langToggle.addEventListener('click', () => {
    isArabic = !isArabic;

    if (isArabic) {
        document.body.classList.add('rtl');
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';

        document.getElementById('heroTitle').textContent =
            'اعثر على عقارك المثالي في المملكة العربية السعودية';

        document.getElementById('heroText').textContent =
            'فلل فاخرة وشقق وعقارات للإيجار والبيع في الرياض وجدة وأكثر';

        document.getElementById('heroBtn').textContent = 'تصفح العقارات';
        document.getElementById('searchHeading').textContent = 'بحث متقدم عن العقارات';
        document.getElementById('featuredTitle').textContent = 'العقارات المميزة';

        document.getElementById('city').placeholder = 'المدينة';

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.textContent = link.dataset.ar;
        });

        langToggle.textContent = 'EN';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';

        document.getElementById('heroTitle').textContent =
            'Find Your Dream Property in Saudi Arabia';

        document.getElementById('heroText').textContent =
            'Luxury villas, apartments, and rental properties across Riyadh, Jeddah, and more.';

        document.getElementById('heroBtn').textContent = 'Browse Properties';
        document.getElementById('searchHeading').textContent = 'Advanced Property Search';
        document.getElementById('featuredTitle').textContent = 'Featured Properties';

        document.getElementById('city').placeholder = 'City';

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.textContent = link.dataset.en;
        });

        langToggle.textContent = 'AR';
    }
});

function searchProperty() {
    const city = document.getElementById('city').value;
    const purpose = document.getElementById('purpose').value;
    const type = document.getElementById('type').value;
    const price = document.getElementById('price').value;
    const bedrooms = document.getElementById('bedrooms').value;

    alert(
        `Searching:\nCity: ${city}\nPurpose: ${purpose}\nType: ${type}\nPrice: ${price}\nBedrooms: ${bedrooms}`
    );
}