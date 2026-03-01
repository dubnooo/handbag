/ --- СЕРДЕЧКА ТА ЗАВАНТАЖЕННЯ ---

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Лайк для карток товарів
    document.querySelectorAll('.product-heart').forEach(heart => {
        heart.addEventListener('click', function () {
            this.classList.toggle('liked');
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.transform = this.classList.contains('liked') ? 'scale(1.2)' : 'scale(1)';
            }, 200);
        });
    });

    // Пульсація серця в шапці
    const mainHeart = document.querySelector('header .heart');
    if (mainHeart) {
        mainHeart.addEventListener('click', function () {
            this.style.transform = 'scale(1.4)';
            setTimeout(() => this.style.transform = 'scale(1)', 300);
        });
    }
});
