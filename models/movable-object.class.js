class movableObject {

    imageCache = {}
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

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

    walkingAnimation() {
        let i = this.currentImage % this.imagesWalking.length;
        this.loadImage(this.imagesWalking[i])
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