let noCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");

noBtn.onclick = () => {
    noCount++;
    yesBtn.style.fontSize = (16 + noCount * 2) + "px";
    msg.textContent = [
        "¿Segura? 😌",
        "El verde se ve bonito 💚",
        "Piénsalo otra vez 💕"
    ][noCount % 3];
};

yesBtn.onclick = () => {
    window.location.href = "tree.html";
};
