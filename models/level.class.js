class Level {
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 4400;

    constructor(enemies, endboss, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}

// coins =         new Coin('img/8.Coin/Moneda1.png'),
//                 new Coin('img/8.Coin/Moneda1.png'),
//                 new Coin('img/8.Coin/Moneda1.png')

// this.coins =    new Coin('img/8.Coin/Moneda1.png'),
//                 new Coin('img/8.Coin/Moneda1.png'),
//                 new Coin('img/8.Coin/Moneda1.png')