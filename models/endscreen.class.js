class endScreen extends DrawableObject {

    endScreenImage = ['img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png'];
    
    constructor() {
        super().loadImage(this.endScreenImage[0]);

        this.x = 0;
        this.y = 0;
        this.height = 480;
        this.width = 720;
    }
}
