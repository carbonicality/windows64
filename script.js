// The Windows 64 Authors, 2025 (get the chromium reference?)
document.addEventListener('DOMContentLoaded', () => { // i forgot i needed this and now i gotta indent everything RAHH
    const startBtn = document.getElementById('startBtn');
    const startMenu = document.getElementById('startMenu');

    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target)&& e.target !== startBtn) {
            startMenu.classList.remove('active');
        }
    });

    function updClock() {
        const now = new Date();
        let hours = now.getHours();
        let mins = now.getMinutes();
        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        document.getElementById('clock').textContent = hours + ':' + mins;
    }

    updClock();
    setInterval(updClock, 1000);

    document.querySelectorAll('.st-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const text = item.querySelector('span').textContent;
            console.log('clicked:', text); // lets remove this in a bit once we add our app logic
        });
    });

    const infoIcon = document.getElementById('infoIcon');
    const infoWindow = document.getElementById('infoWindow');
    infoIcon.addEventListener('dblclick', () => {
        infoWindow.classList.add('active');
    });

    const closeBtn = document.getElementById('closeBtn');
    const okBtn = document.getElementById('okBtn');

    closeBtn.addEventListener('click', () => {
        infoWindow.classList.remove('active');
    });

    okBtn.addEventListener('click', () => {
        infoWindow.classList.remove('active');
    });

    const winTitlebar = document.getElementById('winTitlebar');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    winTitlebar.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX - infoWindow.offsetLeft;
        initialY = e.clientY - infoWindow.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX-initialX;
            currentY = e.clientY-initialY;
            infoWindow.style.left = currentX + 'px';
            infoWindow.style.top = currentY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});