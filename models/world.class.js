class World {
    character = new Character();
    statusbar = new StatusBar();

    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // this.ctx = document.getElementById('canvas').getContext('2d);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusbar.getIndexOfImages(this.character.energy);
                }
            });
        }, 200);
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0); // moving forwards
        this.addObjectsToMap(this.level.backgroundObjects);
        this.showObjectsInWorld(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);

        this.ctx.translate(-this.camera_x, 0); // moving backwards
        // -- Space for fixed objects --

        this.showObjectsInWorld(this.statusbar);

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