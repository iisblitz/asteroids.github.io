let game = new Game();
window.gui = new Gui(game);

window.onload = function(){
    
    window.gui.load([
        {id: "player-img", var: playerImg = document.createElement("img"),file: "assets/ship.png"},
        {id: "asteroid-large", var: asteroidLargeImg = document.createElement("img"),file: "assets/asteroid_Large.png"},
        {id: "asteroid-img", var: asteroidImg = document.createElement("img"),file: "assets/asteroid.png"},
        {id: "asteroid-small", var: asteroidSmallImg = document.createElement("img"),file: "assets/asteroid_Small.png"},
        {id: "laser-audio", var: laserAudio = document.createElement("audio"),file: "assets/shoot.mp3"},
        {id: "boom-audio", var: boomAudio = document.createElement("audio"),file: "assets/hit.mp3"},
        {id: "move-audio", var: moveAudio = document.createElement("audio"),file: "assets/move.mp3"}
    ]);
    
};
window.onrezise = function(){
    
    window.gui.resize();
};

