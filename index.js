let game = new Game();
window.gui = new Gui(game);

window.onload = function(){
    console.log('loading...')
    window.gui.load([
        {id: "player-img", var: playerImg = document.createElement("img"),file: "assets/ship.png"},
        {id: "asteriod-img", var: asteroidImg = document.createElement("img"),file: "assets/asteriod.png"},
        {id: "laser-audio", var: laserAudio = document.createElement("audio"),file: "assets/shoot.mp3"},
        {id: "boom-audio", var: boomAudio = document.createElement("audio"),file: "assets/hit.mp3"},
        {id: "move-audio", var: moveAudio = document.createElement("audio"),file: "assets/move.mp3"}
    ]);
};
window.onrezise = function(){
    console.log('resizing...') 
    window.gui.resize();
};

