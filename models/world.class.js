class World {
    character = new Character();
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    bottlesbar = new BottlesBar();
    endboss = new Endboss();
    // throwableObject = new ThrowableObject();
    throwableObjects = [];
    keyboard = new Keyboard;
    level = level1;

    smashBottleSound = new Audio('https://freesound.org/data/previews/548/548230_12308033-lq.mp3');
    chickenDies = new Audio('https://freesound.org/data/previews/342/342162_6099553-lq.mp3');
    coinCollection = new Audio('https://freesound.org/data/previews/163/163452_2263027-lq.mp3');
    bottleCollection = new Audio('https://freesound.org/data/previews/195/195227_3628012-lq.mp3');

    // canvas;
    ctx;
    keyboard;
    camera_x;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // this.ctx = document.getElementById('canvas').getContext('2d);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }

    setWorld() {
        this.character.world = this;

        setInterval(() => {
            this.endboss.characterX = this.character.x;
        }, 50);
    }

    run() {
        setInterval(() => {

            this.checkCollisionsWithEndboss();
            this.checkCollisionsWithChicken();
            this.checkCollisionsOfCoins();
            this.checkCollisionsOfBottles();
            this.checkIfBottleHitsEnemy();
            this.checkThrowObjecs();

            if(this.endboss.x - this.character.x <= 350) {
                this.endboss.bossAttacks = true;
            }
        }, 100);
    }

    checkCollisionsWithEndboss() {
        if(this.character.isColliding(this.endboss)) {
            this.character.energy = 0;
            console.log('tot');
        }
    }

    checkCollisionsWithChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    if(!enemy.dead) {
                        enemy.dead = true;
                        enemy.Dead();
                        this.chickenDies.play();
                    }
                } else if (!enemy.dead) {
                    this.character.hit();
                    this.statusbar.setPercentage(this.character.energy);
                }
            }
        });
    }

    checkCollisionsOfCoins() { // function checks collision with coins.
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.coinsbar.coinCollected();
                this.coinCollection.play();
            }
        });
    }

    checkCollisionsOfBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.bottlesbar.bottlesCollected();
                this.bottleCollection.play();
            }
        });
    }

    checkIfBottleHitsEnemy() {

        this.throwableObjects.forEach((object) => {
            if (object.isColliding(this.endboss)) {
                this.smashBottleSound.play();
                this.endboss.energy -= 25;
                this.endboss.bossAttacks = true;
                console.log(object.y)
                this.throwableObjects[this.throwableObjects.indexOf(object)].showSmashingBottleAnimation();

                if (this.endboss.energy <= 0) {
                    this.endboss.Dead();
                } else {
                    this.endboss.imagesAfterHit();
                }
            }
        });
    }

    checkThrowObjecs() {
        if (this.keyboard.D && this.bottlesbar.i > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100, this.character.otherDirection)
            this.throwableObjects.push(bottle);
            this.bottlesbar.bottleThrown();
        }
    }

    //following functions are responsible for drawing the objects onto the canvas and display them in a poper way!

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // moving forwards
        this.addObjectsToMap(this.level.backgroundObjects);
        this.showObjectsInWorld(this.character);
        this.showObjectsInWorld(this.endboss);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0); // moving backwards
        // -- Space for fixed objects --

        this.showObjectsInWorld(this.statusbar);
        this.showObjectsInWorld(this.coinsbar);
        this.showObjectsInWorld(this.bottlesbar);

        this.ctx.translate(this.camera_x, 0); // moving forwards
        this.ctx.translate(-this.camera_x, 0); // moving backwards

        // draw wird immer wieder aufgerufen!
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.showObjectsInWorld(o);
        });
    }

    showObjectsInWorld(mo) {
        if (mo.otherDirection) {
            this.turnCharacter(mo);
        }

        mo.draw(this.ctx);
        mo.drawRectangle(this.ctx);

        if (mo.otherDirection) {
            this.turnCharacterAgain(mo);
        }
    }

    turnCharacter(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    turnCharacterAgain(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}