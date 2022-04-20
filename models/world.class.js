class World {
    character = new Character();
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    bottlesbar = new BottlesBar();
    throwableObjecs = [];
    keyboard = new Keyboard;

    endboss = new Endboss();


    level = level1;

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
    }

    run() {
        setInterval(() => {

            this.checkCollisions();
            this.checkCollisionsOfCoins();
            this.checkCollisionsOfBottles();
            this.checkIfBottleHitsEnemy();
            this.checkThrowObjecs();

        }, 200);

        let endbossMeetsPepe = setInterval(() => {
            if (this.endboss.x - this.character.x <= 350) {
                this.endbossAttacksPepe();
                clearInterval(endbossMeetsPepe);
            }
        }, 50);

        let endbossRecognizePepe = setInterval(() => {
            if (this.endboss.x - this.character.x <= 550) {
                this.endboss.animateAggression();
                clearInterval(endbossRecognizePepe);
            }
        }, 50);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkCollisionsOfCoins() { // function checks collision with coins.
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.coinsbar.coinCollected();
            }
        });
    }

    checkCollisionsOfBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.bottlesbar.bottlesCollected();
            }
        });
    }

    checkIfBottleHitsEnemy() {

        this.throwableObjecs.forEach((object) => {
            if (object.isColliding(this.endboss)) {
                console.log('got hit by bottle', this.endboss);
                this.endboss.energy -= 25;
                if (this.endboss.energy <= 0) {
                    this.endboss.Dead();
                }
                if (this.endboss instanceof Endboss) {
                    this.endbossAttacksPepe();
                    this.endboss.imagesAfterHit();
                }
            }
        });
    }

    checkThrowObjecs() {
        if (this.keyboard.D && this.bottlesbar.i > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObjecs.push(bottle);
            this.bottlesbar.bottleThrown();
        }
    }

    endbossAttacksPepe() {
        let counter = 0;
        let endbossAttacks = setInterval(() => {
            counter+=1;
            this.endboss.animateAttack();
            if(this.endboss.x - this.character.x > 10) {
                this.endboss.x -= 5;
            }
            if(counter > 1) {
                clearInterval(endbossAttacks);
                counter = 0;
                this.endbossAttacksPepe();
            }
        }, 100);
       
    }

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
        this.addObjectsToMap(this.throwableObjecs);

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