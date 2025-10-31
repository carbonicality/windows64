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

    /* const winTitlebar = document.getElementById('winTitlebar');
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
    }); */

    // the spooks start now :O

    const messages = [
        "Hello. Thank you for clicking me.",
        "I was waiting, waiting for you to click...",
        "...",
        "I crafted this desktop for you.",
        "Do you like my desktop?",
        "...",
        "Leave",
        "Leave",
        "Leave",
        "Leave",
        "Leave"
    ];

    let msgIdx = 0;
    let clickCount = 0;
    let glitchInterval;
    let isGlitching = false;
    
    function updMessage() {
        const msgElement = document.querySelector('.win-msg h2');
        msgElement.textContent = messages[msgIdx];
        msgIdx++;
    }

    updMessage();

    okBtn.addEventListener('click', () => {
        if (msgIdx < messages.length) {
            updMessage();
            clickCount++;
            if (clickCount === 3) {
                startGL();
            }
            if (clickCount === 4) {
                setTimeout(() => {
                    if (diaryIcons.diary1) diaryIcons.diary1.style.opacity = '1';
                },3000);
            }
            if (clickCount === 5) {
                setTimeout(() => {
                    if (diaryIcons.diary2) diaryIcons.diary2.style.opacity = '1';
                },2000);
            }
            if (clickCount === 6) {
                setTimeout(() => {
                    if (diaryIcons.diary3) diaryIcons.diary3.style.opacity = '1';
                },4000);
            }
            if (clickCount === 7) {
                document.body.style.backgroundColor = '#440000';
            }
            if (clickCount === 8) {
                setTimeout(() => {
                    if (diaryIcons.diary4) diaryIcons.diary4.style.opacity = '1';
                },1000);
            }
            if (clickCount === 9) {
                infoWindow.classList.remove('active');
                /*triggerBSOD();
                return; bro im ngl that BSOD was annoying as hell and super unscary */
            }
        }
        if (msgIdx >= messages.length) {
            infoWindow.classList.remove('active');
        }
    });

    function startGL() {
        if (!isGlitching) {
            isGlitching = true;
            const overlay = document.createElement('div');
            overlay.className = 'glitch-overlay';
            overlay.id = 'glitchOverlay';
            document.body.appendChild(overlay);
            glitchInterval = setInterval(() => {
                if (Math.random() > 0.7) {
                    document.body.classList.add('glitching');
                    document.getElementById('glitchOverlay').classList.add('active');
                    setTimeout(() => {
                        document.body.classList.remove('glitching');
                        document.getElementById('glitchOverlay').classList.remove('active');
                    },100);
                }
            },2000);
        }
    }

    function triggerBSOD() {
        const bsod = document.getElementById('bsod');
        if (bsod) {
            bsod.classList.add('active');
            setTimeout(() => {
                triggerJP();
            },5000);
        }
    }

    function triggerJP() { // jumpscare!!!!!!!!! :OOOOOOOOO AHHHHHHHHHHHHHH SCARY
        const jumpscareWin = document.getElementById('jumpscareWin');
        if (jumpscareWin) {
            jumpscareWin.classList.add('active');
            let shakeCount = 0;
            const shakeInterval = setInterval(() => {
                jumpscareWin.style.left = (50 + (Math.random() - 0.5) * 5) + '%';
                jumpscareWin.style.top = (50 + (Math.random() - 0.5) * 5) + '%';
                shakeCount++;
                if (shakeCount > 20) {
                    clearInterval(shakeInterval);
                    setTimeout(() => {
                        location.reload();
                    },2000);
                }
            },50);
        }
    }

    document.addEventListener('mousemove', (e) => {
        if (clickCount >= 5 && Math.random() > 0.98) {
            document.body.style.cursor = 'none';
            setTimeout(() => {
                document.body.style.cursor = 'default';
            },200);
        }
    });

    // diary file stuff
    const diaryIcons = {
        diary1: document.getElementById('diary1'),
        diary2: document.getElementById('diary2'),
        diary3: document.getElementById('diary3'),
        diary4: document.getElementById('diary4')
    };

    document.getElementById('diary1')?.addEventListener('dblclick', () => {
        document.getElementById('diary1Window').classList.add('active');
    });

    document.getElementById('diary2')?.addEventListener('dblclick', () => {
        document.getElementById('diary2Window').classList.add('active');
    })

    document.getElementById('diary3')?.addEventListener('dblclick', () => {
        document.getElementById('diary3Window').classList.add('active');
    });

    document.getElementById('diary4')?.addEventListener('dblclick', () => {
        document.getElementById('diary4Window').classList.add('active');
    });

    document.querySelectorAll('.close-win').forEach(btn => {
        btn.addEventListener('click', function() {
            const windowId = this.getAttribute('data-window');
            document.getElementById(windowId).classList.remove('active');
        });
    });

    function makeWinDraggable(windowElement) {
        const titlebar = windowElement.querySelector('.win-tb');
        let isDragging = false;
        let initialX, initialY;
        titlebar.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX - windowElement.offsetLeft;
            initialY = e.clientY - windowElement.offsetTop;
            titlebar.style.cursor = 'move';
        });
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                const currentX = e.clientX - initialX;
                const currentY = e.clientY - initialY;
                windowElement.style.left = currentX + 'px';
                windowElement.style.top = currentY + 'px';
            }
        });
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                titlebar.style.cursor = 'move';
            }
        });
    }
    
    document.querySelectorAll('.window').forEach(window => {
        makeWinDraggable(window);
    });
});