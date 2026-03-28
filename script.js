const app = document.getElementById("app");
const titulo = document.getElementById("titulo");
const audio = document.getElementById("bgm");
const particlesContainer = document.querySelector(".particles");
const starsContainer = document.querySelector(".stars");

audio.volume = 0.2;

let iniciado = false;
let particulasGeradas = false;

// Criar partículas flutuantes
function criarParticulas() {
    if (particulasGeradas) return;
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = (5 + Math.random() * 3) + "s";
        particle.style.animationDelay = Math.random() * 2 + "s";
        particlesContainer.appendChild(particle);
    }
    particulasGeradas = true;
}

// Criar estrelas piscantes
function criarEstrelas() {
    if (starsContainer.children.length > 0) return;
    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDuration = (2 + Math.random() * 3) + "s";
        star.style.animationDelay = Math.random() * 2 + "s";
        starsContainer.appendChild(star);
    }
}

function tocar() {
    if (!iniciado) {
        audio.play();
        iniciado = true;
    }
}

function render(html) {
    app.innerHTML = `
        <div class="card">
            ${html}
        </div>
    `;
}

function menu() {
    criarParticulas();
    criarEstrelas();
    
    titulo.innerHTML = `
        <svg width="100%" height="110" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <defs>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
                    @keyframes handwriting {
                        0% {
                            stroke-dashoffset: 1500;
                            opacity: 0;
                        }
                        10% {
                            opacity: 1;
                        }
                        100% {
                            stroke-dashoffset: 0;
                            opacity: 1;
                        }
                    }
                    .writing-text {
                        font-family: 'Great Vibes', cursive;
                        font-size: 95px;
                        font-weight: 400;
                        fill: none;
                        stroke: #ffb3ff;
                        stroke-width: 2.2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-dasharray: 1500;
                        stroke-dashoffset: 1500;
                        animation: handwriting 5s ease-in-out forwards 0.3s;
                        filter: drop-shadow(0 0 6px rgba(255, 182, 255, 0.4)) drop-shadow(0 0 2px rgba(255, 73, 240, 0.3));
                    }
                </style>
            </defs>
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="writing-text">
              15 anos da Eloah
            </text>
        </svg>
    `;

    render(`
        <div id="buttons" style="display:none;">
            <button onclick="historia()">📖 Ver história</button>
            <button onclick="detalhes()">🏰 Detalhes</button>
            <button onclick="presenca()">✅ Confirmar Presença</button>
            <button onclick="presentes()">🎁 Sugestões de Presentes</button>
        </div>
    `);

    setTimeout(() => {
        const buttons = document.getElementById("buttons");
        if (buttons) buttons.style.display = "block";
    }, 1);
}

function historia() {
    render(`
        <h1>✨ Era uma vez…</h1>
        <p>Em um reino onde os sonhos se tornam realidade,<br>
        uma princesa estava prestes a viver<br>o dia mais inesquecível da sua vida.</p>
        <hr>
        <button onclick="princesa()">➡️ Continuar</button>
        <button onclick="menu()">⬅️ Menu</button>
    `);
}

function princesa() {
    render(`
        <h1>👑 A Princesa</h1>
        <p>Essa princesa se chama <b>Eloah</b>.<br>
        Ela está prestes a completar <b>15 anos</b>,<br>
        a idade em que os sonhos ganham asas<br>
        e novos caminhos se abrem no coração.</p>
        <hr>
        <button onclick="convite()">➡️ Continuar</button>
    `);
}

function convite() {
    render(`
        <h1>📜 Convite Real</h1>
        <p>Você acaba de receber um convite real…<br><br>
        <b>Está convidado(a) para a Festa de 15 anos<br>da Princesa Eloah</b>.</p>
        <hr>
        <p style="font-size: 0.95rem; opacity: 0.9;">Uma noite mágica o espera...</p>
        <button onclick="detalhes()">➡️ Detalhes</button>
    `);
}

function detalhes() {
    render(`
        <h1>🏰 Detalhes da Festa</h1>
        <p style="line-height: 2em;">
        📅 <b>Data:</b> 03 de Maio de 2026<br>
        ⏰ <b>Horário:</b> 19:00<br>
        📍 <b>Local:</b> Congregação Batista<br><br>
        👗 <b>Traje:</b> Digno de um conto de fadas
        </p>
        <hr>
        <button onclick="final()">➡️ Mensagem Final</button>
        <button onclick="menu()">⬅️ Menu</button>
    `);
}

function presenca() {
    render(`
        <h1>✅ Confirmar Presença</h1>
        <p>Obrigada por confirmar sua presença!<br><br>
        Sua confirmação foi registrada.<br><br>
        Prepare-se para uma noite inesquecível!</p>
        <hr>
        <p style="font-size: 0.9rem; opacity: 0.8;">Nos vemos em breve! 💜</p>
        <button onclick="menu()">⬅️ Voltar ao Menu</button>
    `);
}

function presentes() {
    render(`
        <h1>🎁 Sugestões de Presentes</h1>
        <p style="text-align: left; margin: 15px 0;">
            <ul>
                <li>Vestido - Tamanho 16</li>
                <li>Moletom - Tamanho 16</li>
                <li>Conjunto Saia e Blusa - Tamanho 16</li>
                <li>Calça Cargo - Tamanho 16</li>
                <li>Blusa - Tamanho 14</li>
                <li>Tênis - Preferência AllStar Tamanho 37</li>
                <li>Sandália - Tamanho 37</li>
                <li>Perfume - Preferência Oboticario, Melu</li>
                <li>Hidratante Corporal - Bubbaloo</li>
                <li>Kit de Skin Scare - Preferência Melu</li>
                <li>Caneca - Preferência Personalizada Guerreiras do K-pop</li>
                <li>Bolsa</li>
                <li>kit Rebecca Bonbon</li>
                <li>Bolssinha de costa</li>
                <li>Livro Princesa Desastrada</li>
            </ul>
        </p>
        <hr>
        <p style="font-size: 0.9rem;">O mais importante é sua presença! 💜</p>
        <button onclick="menu()">⬅️ Voltar ao Menu</button>
    `);
}

function final() {
    render(`
        <h1>✨ A Magia Chega</h1>
        <p>Prepare-se para uma noite inesquecível<br>
        de música, dança e momentos mágicos.<br><br>
        <b>Essa história só fica completa com você lá.</b><br><br>
        🌙✨💜✨🌙</p>
        <hr>
        <p style="font-size: 0.95rem;"><b>Com carinho,</b><br><b>Eloah</b></p>
        <button onclick="menu()">⬅️ Voltar ao Menu</button>
    `);
}

// Iniciar ao carregar
window.addEventListener('load', () => {
    menu();
});

// Tocar áudio ao clicar em qualquer lugar
document.body.addEventListener("click", tocar);

// Pausar áudio ao sair da aba/janela
window.addEventListener('blur', () => {
    if (iniciado && !audio.paused) {
        audio.pause();
    }
});

// Pausar áudio ao fechar ou sair do site
window.addEventListener('beforeunload', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Pausar ao sair da página (tab change, close, etc)
document.addEventListener('pagehide', () => {
    audio.pause();
});

// Retomar áudio ao voltar para a aba
window.addEventListener('focus', () => {
    // Usuário pode clicar para retomar
});
