class movableObject {

    imageCache = {}
    currentImage = 0;
    speed = 0.15;

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

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveRight() {
        console.log('moving right');
    }

    moveRight() {
        console.log('moving right');
    }
}