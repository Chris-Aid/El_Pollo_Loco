class Character extends movableObject {
    
    height = 270;
    width = 120;
    y = 155;
    x = 10;
    imagesWalking = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.imagesWalking)

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.imagesWalking.length;
            this.loadImage(this.imagesWalking[i])
            this.currentImage++;
        }, 100);
    }

    jump() {

    }
}