function criarPetala() {
    const petala = document.createElement('div');
    petala.classList.add('petala');
    petala.style.left = Math.random() * 100 + 'vw';
    petala.style.animationDuration = Math.random() * 3 + 2 + 's';
    petala.style.opacity = Math.random();
    document.getElementById('petalas-container').appendChild(petala);

    setTimeout(() => {
        petala.remove();
    }, 5000);
}

setInterval(criarPetala, 300);