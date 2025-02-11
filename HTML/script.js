const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
let noButtonClickCount = 0;
let yesButtonClickCount = 0;

// When No is clicked, teleport No and grow Yes
noButton.addEventListener('click', () => {
    // Teleport the No button to a random position on the screen
    noButtonClickCount++;
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';  // Ensure button can move freely
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Grow the Yes button by 1.5x with each click
    yesButtonClickCount++;
    const scaleYes = Math.pow(1.5, yesButtonClickCount);
    yesButton.style.transform = `scale(${scaleYes})`;
});

// When Yes is clicked, redirect to the celebration page
yesButton.addEventListener('click', () => {
    // Hide the current content
    document.querySelector('.container').classList.add('hide');
    
    // Create and play confetti
    createConfetti();

    // Play happy music
    playHappyMusic();

    // After 3 seconds (to let confetti play), redirect to celebration.html
    setTimeout(() => {
        window.location.href = "celebration.html"; // Redirect to celebration page
    }, 3000); // Delay to show confetti before redirecting
});

function createConfetti() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const confettiColors = ['#ff6347', '#ffbb33', '#4caf50', '#00bcd4', '#9c27b0'];

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 10 + 5;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    setInterval(drawConfetti, 50);
}

function playHappyMusic() {
    const audio = new Audio('happy-music.mp3'); // Replace with your own audio file
    audio.play();
}
