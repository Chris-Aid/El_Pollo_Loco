class Coin extends movableObject {
    x = 260;
    y;
    height = 120;
    width = 120;

    constructor(path, y, x) {
        super().loadImage(path);
        // this.x = Math.random() * 7400;
        this.x = x;
        this.y = y;
        this.animate();
    }

    //this animation let the coins blink (getting bigger and smaller)
    animate() {
        setInterval(() => {
            if(this.height < 150) {
                this.height += 30;
                this.width += 30;
                this.y -= 15;
                this.x -= 15;
            } else if (this.height == 150) {
                this.height = 120;
                this.width = 120;
                this.y += 15;
                this.x += 15;
            }
        }, 300);
    }
}