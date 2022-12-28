class Player{
    constructor(){
        this.fx = new Fx();
        this.keyHandler = new KeyHandler();
        this.projectileService = new ProjectileService(this);
        this.img = null;
        this.laserSound = null;

        this.turnSpeed = 5;
        this.acceleration = 5;
        this.friction= .99;

        this.x= 0;
        this.y= 0;
        this.thurst = {x:0, y:0};
        this.angle = 0;
        this.rotation = 0;
        this.reload = 10;
        this.frames = 0

    }

    init() {
        this.fx.init();
        this.keyHandler.init();
        this.projectileService.init();
        this.img= window.gui.getResource("player-img");
        this.laserSound = window.gui.getResource("laser-audio");
        this.x = this.fx.cnv.width/2 - this.img.width/2;
        this.y = this.fx.cnv.height/2 - this.img.height/2;
        this.thrust = { x: 0, y:0};
        this.angle = 279/189*Math.PI;
        this.rotation = 0;
        this.reload= 10;
        this.frames = 0;
    }

    update(){
        this.frames++;

        this.rotation = 0;
        this.thrust.x = this.thrust.x * this.friction;
        this.thrust.y = this.thrust.y * this.friction;

        if(this.x > this.fx.cnv.width){
            this.x = 0 - this.img.width/2;
        }
        if(this.x + this.img.width < 0){
            this.x = this.fx.cnv.width
        }
        if(this.y > this.fx.cnv.height){
            this.y = 0 - this.img.height/2;
        }
        if(this.y + this.img.height < 0){
            this.y = this.fx.cnv.height
        }

        if(this.keyHandler.keys.indexOf('ArrowUp') >-1){
            this.thrust.x = this.acceleration * Math.cos(this.angle);
            this.thrust.y = this.acceleration * Math.sin(this.angle);
            
        }

        if(this.keyHandler.keys.indexOf('ArrowLeft') > -1){
            this.rotation = -this.turnSpeed / 180 * Math.PI;
        }

        
        if(this.keyHandler.keys.indexOf('ArrowRight') > -1){
            this.rotation = this.turnSpeed / 180 * Math.PI;
        }

        if(this.keyHandler.keys.indexOf(' ')> -1) {
            if(this.frames > this.reload){
            this.frames = 0
            this.laserSound.pause();
            this.laserSound.currentTime= 0;
            this.laserSound.play();
            this.projectileService.fire();
        }
        }

        this.angle += this.rotation;
        this.x += this.thrust.x;
        this.y += this.thrust.y; 
        this.projectileService.update();
    }

    render( ){
        this.fx.rotateAndDrawImage(this.img, this.x, this.y, this.angle)
        this.projectileService.render();
    }
}