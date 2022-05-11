class StatusBar extends DrawableObject {

    imagesHealth = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    constructor() {
        super();
        this.loadImages(this.imagesHealth);
        this.x = 20;
        this.y = 10;
        this.height = 60;
        this.width = 170; 
        this.setPercentage(100);
    }

    // percentage gets reduced every time an enemie hits character
    setPercentage(percentage) {
            this.percentage = percentage;
            let path = this.imagesHealth[this.getIndexOfImages(percentage)];
            this.img = this.imageCache[path];
    }

    //returns position of image based on health of character
    getIndexOfImages(percentage) {
        if (percentage == 100) {
            return 5;
        } else if (percentage > 80) {
            return 4;
        } else if (percentage > 60) {
            return 3;
        } else if (percentage > 40) {
            return 2;
        } else if (percentage > 20) {
            return 1;
        } else if (percentage > 0) {
            return 0;
        } else {
            return 0;
        }
    }
}