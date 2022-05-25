class Cloud extends movableObject {
    y = 30;
    width = 500;
    height = 350;

    constructor(imagePath, pos) {
        super().loadImage(imagePath, pos);
        this.x = pos + Math.random() * 600;

        this.animate();
    }

    // function for clouds to move left
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        
        if(this.x <= 0) {
            this.x = 12000
        }
    }
}