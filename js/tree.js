const startDate = new Date("2024-10-01T00:00:00"); // CAMBIA LA FECHA
const timer = document.getElementById("timer");
const tree = document.getElementById("tree");

function updateTimer(){
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff % 86400000 / 3600000);
    const seconds = Math.floor(diff % 3600000 / 1000);

    timer.textContent = `${days} días, ${hours} horas y ${seconds} segundos`;
}
setInterval(updateTimer,1000);

let hearts = 0;
setInterval(()=>{
    hearts++;
    tree.innerHTML += "💖";
},700);

function goGalaxy(){
    window.location.href = "galaxy.html";
}
