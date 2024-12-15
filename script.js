// Countdown timer
const targetDate = new Date().getTime() + (40 * 24 * 60 * 60 * 1000); // 30 days from now

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days}:${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "We're live!";
    }
}

setInterval(updateCountdown, 1000);