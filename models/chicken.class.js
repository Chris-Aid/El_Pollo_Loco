class chicken extends movableObject {
    height = 70;
    width = 70;
    y = 345;


    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')

        this.x = 200 + Math.random() * 500;
        this.speed = 0.4 + Math.random() * 0.25;
        this.animate();

    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.imagesWalking.length;
            this.loadImage(this.imagesWalking[i])
            this.currentImage++;
        }, 100);
    }
}