document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
};

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');
        imagen.src = `img/thumb/${i}.jpg`;
        imagen.alt = `Imagen ${i}`;
        galeria.appendChild(imagen);
    }
}
