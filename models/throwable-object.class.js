class ThrowableObject extends movableObject {

    imagesBottels = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    smashingBottle = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];

    bottleHit = false;
    allreadyhits = false;

    constructor(x, y, otherDirectionOfCharacter) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.smashingBottle);
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 70;

        // throw bottles to left if character looks to other direction
        this.otherDirection = otherDirectionOfCharacter;
        if (this.otherDirection) {
            this.x = x - 100;
        }

        this.throw();
        this.throwAnimation();
    }


    showSmashingBottleAnimation() {
        this.bottleHit = true;
        this.height = 120;
        this.width = 100;
        let counter = 0;
        let smashBottle = setInterval(() => {
            counter++;
            this.playAnimation(this.smashingBottle);
            if (counter == 1) {
                clearInterval(smashBottle);
            }
        }, 50);
    }

    throw() {

        this.applyGravity();
        this.speedY = 20;
        let throwBottle = setInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.x += 10;
            }
            if (this.y >= 555) {
                clearInterval(throwBottle);
                this.y = this.y + 20;
            }
        }, 10);

    }

    throwAnimation() {
        if (!this.bottleHit) {
            let rotation = setInterval(() => {
                this.playAnimation(this.imagesBottels);
                if (this.y >= 548) {
                    clearInterval(rotation);
                    this.showSmashingBottleAnimation();
                }
            }, 70);
        }
    }
}
