document.addEventListener('DOMContentLoaded', () => {
    const petalasContainer = document.getElementById('petalas-container');
    
    if (!petalasContainer) {
        console.error('Elemento #petalas-container não encontrado');
        return;
    }

    function criarPetala() {
        const petala = document.createElement('div');
        petala.classList.add('petala');
        petala.style.left = Math.random() * 100 + 'vw';
        petala.style.animationDuration = Math.random() * 3 + 2 + 's';
        petala.style.opacity = Math.random();
        petalasContainer.appendChild(petala);

        setTimeout(() => {
            petala.remove();
        }, 5000);
    }

    // Adiciona um pequeno atraso antes de iniciar
    setTimeout(() => {
        setInterval(criarPetala, 300);
    }, 100);
});