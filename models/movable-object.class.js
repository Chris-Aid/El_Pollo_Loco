class movableObject {

    imageCache = {}
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawRectangle(ctx) {
        if (this instanceof Character || this instanceof chicken) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;

        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    isAboveGround() {
        return this.y < 135;
    }

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementbyId('image') <img id="image">
        this.img.src = path;
    }

    loadImages(arr) {

        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        this.loadImage(images[i])
        this.currentImage++;
    }

    moveLeft() {
        this.x -= this.speed;

    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    jump() {
        this.speedY = 30;
    }
}