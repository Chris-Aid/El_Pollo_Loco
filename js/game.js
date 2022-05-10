let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    mobileDevice();
}



window.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
        keyboard.Left = true;
    }
    if (event.keyCode == 38) {
        keyboard.Up = true;
    }
    if (event.keyCode == 39) {
        keyboard.Right = true;
    }
    if (event.keyCode == 32) {
        keyboard.Space = true;
    }
    if (event.keyCode == 68 || document.getElementById('throw').clicked == true) {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 37) {
        keyboard.Left = false;
    }
    if (event.keyCode == 38) {
        keyboard.Up = false;
    }
    if (event.keyCode == 39) {
        console.log('true')
        keyboard.Right = false;
    }
    if (event.keyCode == 32) {
        keyboard.Space = false;
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
    }
});

function mobileDevice() {

    document.getElementById('move-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.Left = true;
    });
    document.getElementById('move-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.Left = false;
    });
    document.getElementById('move-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('true')
        keyboard.Right = true;
    });
    document.getElementById('move-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.Right = false;
    });
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.Space = true;
    });
    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.Space = false;
    });
}

function startGameOnMobileDevice() {
    document.getElementById('startButton').style = "display: none";
    document.getElementById('button-container').style = "height: 100vh";
    document.getElementById('subject').style = "display: none";
    if(window.innerHeight < window.innerWidth){
        document.getElementById('canvas').setAttribute("style", "height:100vh;width:100vw;");
        document.getElementById('showButtons').style = "display: flex";
    } else {
        document.getElementById('startButton').style = "display: none";
        document.getElementById('turnYourDevice').style = "display: flex";
    }
    world.gameStarted = true;
}