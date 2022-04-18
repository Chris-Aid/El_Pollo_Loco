class chicken extends movableObject {
    height = 70;
    width = 70;
    y = 345;
    energy = 25;

    imagesWalking = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    imagesDeasd = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
    ];


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')

        this.x = 200 + Math.random() * 1200;
        this.speed = 0.4 + Math.random() * 0.25;
        this.animate();
    }

    Dead() {
        console.log('showImgae')
            this.loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png');

    }

    // imagesAfterHit() {
    //     if(this.hitByBottle) {
    //         setInterval(()=> {
    //             console.log('hallo');
    //             this.playAnimation(this.imagesAfterHit);
    //         }, 200);
    //     }
    // }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 100);
    }

}