class Heart extends DrawableObject {
    // x = 160;
    y = 200;
    height = 60;
    width = 60;

    constructor(path, x) {
        super().loadImage(path);
        this.x = x;
        this.animate();
    } 

        //this animation let the coins blink (getting bigger and smaller)
        animate() {
            setInterval(() => {
                if(this.height < 80) {
                    this.height += 20;
                    this.width += 20;
                    this.y -= 15;
                    this.x -= 15;
                } else if (this.height == 80) {
                    this.height = 60;
                    this.width = 60;
                    this.y += 15;
                    this.x += 15;
                }
            }, 300);
        }
}