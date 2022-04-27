const level1 = new Level(

    [
        new chicken(),
        new chicken(),
        new chicken(),
        new chicken(),
        new chicken(),
        new chicken()

    ],
    [
        new Endboss(),
    ],
    [
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 0),
        new Cloud('img/5.Fondo/Capas/4.nubes/2.png', 719),
        new Cloud('img/5.Fondo/Capas/4.nubes/1.png', 719 * 2),
    ],
    [

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1279, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -1279),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1279),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 2, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 1279 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 1279 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 1279 * 2),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1279 * 3, this.height = 720),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 1279 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 1279 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1279 * 3),
    ],
    [
        new Coin('img/8.Coin/Moneda1.png'),
        new Coin('img/8.Coin/Moneda1.png'),
        new Coin('img/8.Coin/Moneda1.png'),
        new Coin('img/8.Coin/Moneda1.png'),
        new Coin('img/8.Coin/Moneda1.png'),
        new Coin('img/8.Coin/Moneda1.png'),
        new Coin('img/8.Coin/Moneda1.png')
    ],
    [
        new Bottle('img/6.botella/2.Botella_enterrada1.png'),
        new Bottle('img/6.botella/2.Botella_enterrada2.png'),
        new Bottle('img/6.botella/2.Botella_enterrada1.png'),
        new Bottle('img/6.botella/2.Botella_enterrada2.png'),
        new Bottle('img/6.botella/2.Botella_enterrada1.png'),
        new Bottle('img/6.botella/2.Botella_enterrada1.png'),
        new Bottle('img/6.botella/2.Botella_enterrada2.png'),
        new Bottle('img/6.botella/2.Botella_enterrada1.png')
    ]
);