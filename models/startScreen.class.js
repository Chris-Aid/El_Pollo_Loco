class startScreen extends DrawableObject {

    startScreenImage = ['img/9.Intro _ Outro Image/Start Screen/Opción 1.png'];
    
    constructor() {
        super().loadImage(this.startScreenImage[0]);

        this.x = 0;
        this.y = 0;
        this.height = 720;
        this.width = 1280;
    }
}
