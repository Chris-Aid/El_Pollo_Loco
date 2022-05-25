class movableObject extends DrawableObject {

    imagesSauce = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;

    // function starts automatically after an object is above ground or character jumps
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 550; // Throwable objects shouldt fall until they reach the ground!
        } else if (this instanceof smallChicken) {
            return this.y < 540;
        } else {
            return this.y < 310;
        }
    }

    // if character is colliding with an enemy this function returns true / proves overlaps of all image corners of the objects
    isColliding(mo) {
        if (this instanceof Character) {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y + 130 < mo.y + mo.height;
        } else {
            return this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height;
        }
    }

    chickenSmashes(chicken) {
       return (this.y + this.height - 10) - (chicken.y + 20) < 20;
    }

    // reduces characters energy after every hit and saves time of last hit
    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    // returns true as long as one second has not passed after last hit
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        this.loadImage(images[i]);
        this.currentImage++;
    }

    moveLeft() {
        this.x -= this.speed;
        // every time an enemy leaves map without getting killed, it respawns at the end!
        if(this instanceof smallChicken && this.x <= 0 || this instanceof chicken && this.x <= 0) {
            this.x = 13000;
        }
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    jump() {
        this.speedY = 30;
    }
}