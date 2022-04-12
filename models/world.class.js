class World {
    character = new Character();
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    bottlesbar = new BottlesBar();
    throwableObjecs = [];
    keyboard = new Keyboard;

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
            this.checkThrowObjecs();

            this.level.coins.forEach((coin) => { //---------function is suppost to check if character collides with coins
                if (this.character.isColliding(coin)) {
                    console.log('collected Coin', coin);
                }
            });
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObjecs() {
        if(this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObjecs.push(bottle);
        }
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // moving forwards
        this.addObjectsToMap(this.level.backgroundObjects);
        this.showObjectsInWorld(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
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