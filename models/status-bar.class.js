class StatusBar extends DrawableObject {

    imagesHealth = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.imagesHealth);
        this.x = 20;
        this.y = 10;
        this.height = 60;
        this.width = 170; 
        this.setPercentage(101);
    }

    setPercentage(percentage) {
            this.percentage = percentage;
            let path = this.imagesHealth[this.getIndexOfImages(percentage)];
            // this.loadImage(path);
            this.img = this.imageCache[path];
    }

    getIndexOfImages(percentage) {
        if (percentage == 100) {
            return 6;
        } else if (percentage > 80) {
            return 5;
        } else if (percentage > 60) {
            return 4;
        } else if (percentage > 40) {
            return 3;
        } else if (percentage > 20) {
            return 2;
        } else if (percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}