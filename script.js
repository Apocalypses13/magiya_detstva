// Находим элементы на странице
const orderBtn = document.getElementById('orderBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const form = document.querySelector('.form');

// Когда жмем кнопку "Заказать"
orderBtn.addEventListener('click', function() { 
    modal.style.display = 'flex';}); // Показываем окно

// Способ 1 как закрыть окно: Клик на крестик
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';}); // Прячем окно

// Способ 2: Клик на серый фон вокруг окна
modal.addEventListener('click', function(e) {
    if (e.target === modal) { // Если кликнул именно на фон
        modal.style.display = 'none';}}); // Прячем

// Отправка формы
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Не перезагружать страницу!
    
    // Получаем значения из полей ввода,которые вписали
    const nameInput = this.querySelector('input[type="text"]');
    const phoneInput = this.querySelector('input[type="tel"]');
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    
    // Показываем персонализированное уведомление
    alert(`Здравствуйте, ${name}! Мы вам перезвоним по номеру ${phone}, хорошего вам дня!`);
    
    // Закрываем окно и очищаем форму
    modal.style.display = 'none'; //Закрываем
    this.reset();}); // Очищаем

// Плавная прокрутка для ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //Ищет все ссылки, которые ссылаются внутри этой же страницы и берет каждую по очереди
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); //Отменяет обычное поведение ссылки (резкий прыжок).
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { //плавно открывает ссылки
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start' }); } });});

