class Cloud extends movableObject {
    y = 30;
    width = 500;
    height = 350;

    constructor() {

        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 0 + Math.random() * 500;

    }
}