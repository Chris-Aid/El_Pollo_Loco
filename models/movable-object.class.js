class movableObject {

    imageCache = {}
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround()) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            }  
        }, 1000 / 25);

        // setInterval(() => { add jumping animation here

        //     if (this.world.keyboard.Up || this.world.keyboard.Space) {
                
        //     } 
        // }, 100);
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
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveRight() {

    }

    moveRight() {

    }
}