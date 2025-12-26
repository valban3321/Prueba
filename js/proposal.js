let noCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");

noBtn.onclick = () => {
    noCount++;

    // 👉 Al octavo "No", redirige
    if (noCount >= 8) {
        window.location.href = "rechazado.html";
        return;
    }

    // Crece el botón de Sí
    yesBtn.style.fontSize = (16 + noCount * 2) + "px";

    // Mensajes dinámicos
    msg.textContent = [
        "¿Segura? 😌",
        "Chance y te estás equivocando de botón 🤭",
        "Échale una pensada 💕",
        "Que este no es 😅",
        "¿Estás segura que es lo que quieres?",
        "Bien segura? 👀",
        "Neta? 😳",
        "…"
    ][noCount];
};

yesBtn.onclick = () => {
    window.location.href = "tree.html";
};
