document.addEventListener('DOMContentLoaded', () => {
    const animacaoDiv = document.getElementById('animacao');
    const conteudoDiv = document.getElementById('conteudo');
    const confirmarBtn = document.getElementById('confirmar');
    const recusarBtn = document.getElementById('recusar');
    const mensagemDiv = document.getElementById('mensagem');
    const saudacaoDiv = document.getElementById('saudacao');
    const audio = document.getElementById('musica');

    // Função para obter os nomes dos convidados da URL
    function getNomesConvidados() {
        const params = new URLSearchParams(window.location.search);
        const nomes = params.get('nome');
        return nomes ? nomes.replace(' & ', ' & ') : null;
    }

    // Função para gerar a saudação
    function gerarSaudacao() {
        const nomesConvidados = getNomesConvidados();
        if (nomesConvidados) {
            saudacaoDiv.innerHTML = `
                <h2>Olá, <span class="nomes-cursivos">${nomesConvidados}</span>!</h2>
                <p>Paulo e Rhana têm o prazer de convidá-los para celebrar seu casamento.</p>
            `;
        } else {
            saudacaoDiv.innerHTML = `
                <h2>Bem-vindo!</h2>
                <p>Paulo e Rhana têm o prazer de convidá-lo(s) para celebrar seu casamento.</p>
            `;
        }
    }

    // Função para criar as pétalas
    function criarPetalas() {
        const flor = document.querySelector('.flor');
        const numPetalas = 8;
        for (let i = 0; i < numPetalas; i++) {
            const petala = document.createElement('div');
            petala.classList.add('petala');
            petala.style.transform = `rotate(${i * (360 / numPetalas)}deg)`;
            flor.appendChild(petala);
        }
    }

    // Chamamos a função para criar as pétalas
    criarPetalas();

    // Função para animar os elementos
    function animarElementos() {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000,
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: animacaoDiv,
                        opacity: 0,
                        duration: 1000,
                        easing: 'easeOutExpo',
                        complete: () => {
                            animacaoDiv.style.display = 'none';
                            conteudoDiv.style.display = 'block';
                            anime({
                                targets: conteudoDiv,
                                opacity: 1,
                                duration: 1000,
                                easing: 'easeOutExpo'
                            });
                        }
                    });
                }, 1000); // Aumentado para dar mais tempo de ver a animação
            }
        }).add({
            targets: '.coracao',
            opacity: [0, 1],
            scale: [0.5, 1],
            rotate: [45, 45]
        }).add({
            targets: '.alianca',
            opacity: [0, 1],
            scale: [0.5, 1],
            offset: '-=800'
        }).add({
            targets: '.petala',
            opacity: [0, 1],
            scale: [0, 1],
            delay: anime.stagger(100),
            duration: 1000,
            offset: '-=800'
        }).add({
            targets: '.nomes',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100, {start: 500}),
            duration: 1000,
            offset: '-=500'
        }).add({
            targets: '.nomes',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000
        });
    }

    // Chamar a função de animação ao carregar a página
    animarElementos();

    // Chamar a função de saudação ao carregar a página
    gerarSaudacao();

    confirmarBtn.addEventListener('click', () => {
        esconderElementos();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        mensagemDiv.innerHTML = "Paulo e Rhana ficam honrados com sua presença no casamento!";
        mensagemDiv.style.display = 'block';
        audio.play();
    });

    recusarBtn.addEventListener('click', () => {
        esconderElementos();
        mensagemDiv.innerHTML = "Não foi desta vez. Desejamos saúde e alegria!";
        mensagemDiv.style.display = 'block';
    });

    function esconderElementos() {
        saudacaoDiv.style.display = 'none';
        confirmarBtn.style.display = 'none';
        recusarBtn.style.display = 'none';
    }
});
