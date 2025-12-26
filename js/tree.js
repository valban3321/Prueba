const startDate = new Date("2025-09-19T15:00:00");
const timer = document.getElementById("timer");
const container = document.getElementById("heart-container");
const music = document.getElementById("bgMusic");
const particles = document.querySelector(".particles");

/* ===== CONTADOR ===== */
function updateTimer(){
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diff / 86400);
    diff %= 86400;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    timer.textContent =
        `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}
setInterval(updateTimer, 1000);
updateTimer();

/* ===== PARTÍCULAS DE FONDO ===== */
function createParticle(){
    const span = document.createElement("span");
    span.textContent = Math.random() > 0.5 ? "💖" : "💕";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 8 + Math.random() * 6 + "s";
    span.style.fontSize = 16 + Math.random() * 14 + "px";
    particles.appendChild(span);

    setTimeout(() => span.remove(), 14000);
}
setInterval(createParticle, 400);

/* ===== CORAZÓN GRANDE ===== */
const points = [];
for (let t = 0; t < Math.PI * 2; t += 0.15) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);
    points.push({ x, y });
}

let i = 0;
const scale = 8;

const drawHeart = setInterval(() => {
    if (i >= points.length) {
        clearInterval(drawHeart);
        return;
    }

    const p = points[i];
    const span = document.createElement("span");
    span.className = "heart-pixel";
    span.textContent = "💖";

    span.style.left = 150 + p.x * scale + "px";
    span.style.top = 120 - p.y * scale + "px";

    container.appendChild(span);
    i++;
}, 120);

/* ===== MÚSICA ===== */
function startMusic(){
    music.volume = 0.6;
    music.play().catch(() => {});
}
window.addEventListener("load", startMusic);
document.body.addEventListener("click", startMusic, { once:true });

/* ===== NAVEGACIÓN ===== */
function goGalaxy(){
    window.location.href = "galaxy.html";
}
