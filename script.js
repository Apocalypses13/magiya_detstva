// Находим элементы на странице
const orderBtn = document.getElementById('orderBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const form = document.querySelector('.form');

// Открыть окно заявки
orderBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Закрыть окно заявки
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрыть при клике вне окна
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка формы
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем значения из полей ввода
    const nameInput = this.querySelector('input[type="text"]');
    const phoneInput = this.querySelector('input[type="tel"]');
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    
    // Показываем персонализированное сообщение
    alert(`Здравствуйте, ${name}! Мы вам перезвоним по номеру ${phone}, хорошего вам дня!`);
    
    // Закрываем окно и очищаем форму
    modal.style.display = 'none';
    this.reset();
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});