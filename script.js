// Elementos da interface
const revealButton = document.getElementById("revealButton");
const revealText = document.getElementById("revealText");
let clicks = 0;

// Função para revelar o botão após alguns cliques
document.querySelector(".container").addEventListener("click", () => {
    clicks++;

    // Após 3 cliques na área da página, exibe o botão e adiciona a animação
    if (clicks === 3) {
        revealButton.classList.add("revealed", "move");
        setTimeout(() => revealButton.classList.remove("move"), 1500);
    }
});

// Evento para o botão "fugir" do mouse ao passar o cursor
revealButton.addEventListener("mouseover", () => {
    if (!revealButton.classList.contains("clicked")) {
        revealButton.style.left = `${Math.random() * 80}%`;
        revealButton.style.top = `${Math.random() * 80}%`;
    }
});

// Exibe o texto de revelação e confete ao clicar no botão
revealButton.addEventListener("click", () => {
    revealButton.classList.add("clicked");
    revealText.classList.remove("hidden"); // Exibe a frase com as animações CSS
    startConfetti();
});

function startConfetti() {
    const confettiContainer = document.getElementById("confetti");

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti-piece");
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.backgroundColor = randomColor();
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
}

function randomColor() {
    const colors = ["#ffcc00", "#ff6699", "#66ff66", "#0099ff", "#ff9966"];
    return colors[Math.floor(Math.random() * colors.length)];
}
