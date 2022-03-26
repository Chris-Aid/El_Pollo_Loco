class movableObject {
    // x = 120;
    // // y = 250; 
    // img;
    // height = 150;
    // width = 100;
    imageCache = {}

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

    moveRight() {
        console.log('moving right');
    }

    moveRight() {
        console.log('moving right');
    }
}