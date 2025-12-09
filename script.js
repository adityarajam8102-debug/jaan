const startBtn = document.getElementById('startBtn');
const loveMessage = document.getElementById('loveMessage');
const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const centerMessage = document.getElementById('centerMessage');

startBtn.addEventListener('click', () => {
    // 1. Hide Button
    startBtn.style.display = 'none';

    // 2. Show Message
    loveMessage.style.display = 'block';

    // 3. Wait 3 seconds
    setTimeout(() => {
        // Fade out Stage 1
        stage1.style.opacity = '0';

        // After fade out (1s), hide stage 1 completely and show stage 2
        setTimeout(() => {
            stage1.style.display = 'none';

            stage2.style.display = 'block';
            centerMessage.style.display = 'block';

            // Trigger reflow to ensure transition happens
            void stage2.offsetWidth;
            stage2.style.opacity = '1';
            centerMessage.style.opacity = '1';
        }, 1000);

    }, 3000);
});
