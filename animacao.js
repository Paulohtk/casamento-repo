document.addEventListener('DOMContentLoaded', () => {
    const mensagem = document.getElementById('mensagem');
    const animacaoInicial = document.getElementById('animacao-inicial');
    const porta = document.getElementById('porta');
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
        // Tornar a mensagem invisível
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
        // Animar flores do topo
        setTimeout(() => {
            floresTopo.style.opacity = '1';
        }, 0);

        // Animar flores da base
        setTimeout(() => {
            floresBase.style.opacity = '1';
        }, 500);

        // Animar conteúdo
        elementosConteudo.forEach((elemento, i) => {
            setTimeout(() => {
                elemento.style.opacity = '1';
            }, 1000 + i * 300);
        });
    }

    escreverTexto();
});
