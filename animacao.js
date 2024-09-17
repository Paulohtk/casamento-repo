document.addEventListener('DOMContentLoaded', () => {
    const mensagem = document.getElementById('mensagem');
    const animacaoInicial = document.getElementById('animacao-inicial');
    const porta = document.getElementById('porta');
    const segundaPorta = document.getElementById('segunda-porta');
    const conteudo = document.querySelector('.conteudo');
    const floresTopo = document.querySelector('.flores-topo');
    const floresBase = document.querySelector('.flores-base');
    const elementosConteudo = conteudo.querySelectorAll('*');
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const texto = `Olá ${nome}`;
    let index = 0;

    function escreverTexto() {
        if (index < texto.length) {
            mensagem.textContent += texto.charAt(index);
            index++;
            setTimeout(escreverTexto, 100);
        } else {
            setTimeout(abrirPorta, 1000);
        }
    }

    function abrirPorta() {
        porta.style.transform = 'perspective(1200px) rotateY(-100deg)';
        document.getElementById('mensagem').style.opacity = '0';
        setTimeout(() => {
            porta.style.display = 'none';
            animacaoInicial.style.opacity = '0';
            setTimeout(() => {
                animacaoInicial.style.display = 'none';
                preencherConvite();
            }, 500);
        }, 1000);
    }

    function preencherConvite() {
        setTimeout(() => {
            floresTopo.style.opacity = '1';
        }, 0);

        setTimeout(() => {
            floresBase.style.opacity = '1';
        }, 500);

        elementosConteudo.forEach((elemento, i) => {
            setTimeout(() => {
                elemento.style.opacity = '1';
            }, 1000 + i * 300);
        });
    }

    const btnResponder = document.querySelector('.btn-responder');
    const respostas = document.querySelector('.respostas');

    btnResponder.addEventListener('click', () => {
        fecharPorta();
    });

    function fecharPorta() {
        porta.style.display = 'block';
        setTimeout(() => {
            porta.style.transform = 'perspective(1200px) rotateY(0deg)';

            conteudo.style.opacity = '0';
            floresTopo.style.opacity = '0';
            floresBase.style.opacity = '0';

            setTimeout(() => {
                conteudo.style.display = 'none';
                porta.style.display = 'none';

                abrirSegundaPorta();
            }, 1000);
        }, 100);
    }

    function abrirSegundaPorta() {
        const segundaPorta = document.getElementById('segunda-porta');
        segundaPorta.style.display = 'block';
        setTimeout(() => {
            segundaPorta.style.transform = 'perspective(1200px) rotateY(-100deg)';
            setTimeout(() => {
                segundaPorta.style.opacity = '0';
                setTimeout(() => {
                    segundaPorta.style.display = 'none';
                    mostrarFloresEBotoes();
                }, 500);
            }, 1000);
        }, 100);
    }

    function mostrarFloresEBotoes() {
        floresTopo.style.opacity = '1';
        floresBase.style.opacity = '1';
        respostas.style.display = 'flex';
        respostas.style.opacity = '0';
        setTimeout(() => {
            respostas.style.opacity = '1';
        }, 300);
    }

    function mostrarBotoes() {
        respostas.style.display = 'flex';
        respostas.style.opacity = '0';
        setTimeout(() => {
            respostas.style.opacity = '1';
        }, 300);
    }

    escreverTexto();
});
