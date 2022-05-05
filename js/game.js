let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    // this.mobileDevice();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if(event.keyCode == 37) {
        keyboard.Left = true;
    }
    if(event.keyCode == 38) {
        keyboard.Up = true;
        console.log('gedrückt')
    }
    if(event.keyCode == 39) {
        keyboard.Right = true;
    }
    if(event.keyCode == 32) {
        keyboard.Space = true;
    }
    if(event.keyCode == 68 || document.getElementById('throw').clicked == true) {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (event) => {
    if(event.keyCode == 37) {
        keyboard.Left = false;
    }
    if(event.keyCode == 38) {
        keyboard.Up = false;
    }
    if(event.keyCode == 39) {
        keyboard.Right = false;
    }
    if(event.keyCode == 32) {
        keyboard.Space = false;
    }
    if(event.keyCode == 68) {
        keyboard.D = false;
    }
});

// function mobileDevice() {
//     // document.getElementById('actionBtn1').classList.remove('d-none');
//     // document.getElementById('actionBtn2').classList.remove('d-none');

//     document.getElementById('move-left').ontouchstart = function (e) {
//         keyboard.LEFT = true;
//         // e.preventDefault();
//     }
//     document.getElementById('move-left').ontouchend = function (e) {
//         keyboard.LEFT = false;
//         // e.preventDefault();
//     }
//     document.getElementById('move-right').ontouchstart = function (e) {
//         keyboard.RIGHT = true;
//         // e.preventDefault();
//     }
//     document.getElementById('move-right').ontouchend = function (e) {
//         keyboard.RIGHT = false;
//         // e.preventDefault();
//     }
//     document.getElementById('throw').ontouchstart = function (e) {
//         keyboard.D = true;
//         // e.preventDefault();
//     }
//     document.getElementById('throw').ontouchend = function (e) {
//         keyboard.D = false;
//         // e.preventDefault();
//     }
//     document.getElementById('jump').ontouchstart = function (e) {
//         keyboard.SPACE = true;
//         // e.preventDefault();
//     }
//     document.getElementById('jump').ontouchend = function (e) {
//         keyboard.SPACE = false;
//         // e.preventDefault();
//     }
// }