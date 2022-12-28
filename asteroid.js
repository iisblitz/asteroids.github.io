class AsteroidService{
    constructor(player){
        this.collection=[]
        this.player = player;
    }
    init(total){
        this.collection = [];
        for ( let i = 0; i < total; i++){
            let asteroid = new Asteroid();
            asteroid.init();
            this.collection.push(asteroid);
        }

    }
    
    update(){
        this.collection.forEach(a =>{
            a.update();
            a.checkForCollisionsWithPhasers(this.player.projectileService.collection);
        })
    }

    render(){
        this.collection.forEach(a =>{
            a.render();})
    }
}


class Asteroid{
    constructor(){
        this.fx = new Fx();
        this.img = null;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.speed = 0
        this.rotation = 0.0;
        this.turnrate= 0.0;
        this.active = false
    }

    init(){
        this.fx.init();
        this.img = window.gui.getResource("asteriod-img");
        this.x = 0- this.img.width/2;
        this.y= 0- this.img.height/2;
        this.angle = Math.random()* Math.PI*2.0;
        this.speed = Math.random()* Math.PI
        this.rotation = 0;
        this.turnrate = Math.random()* (0.04 - -0.04)
        this.active = true;
    }

    update(){
        if(this.active){
        this.x += Math.cos(this.angle)*this.speed;
        this.y += Math.sin(this.angle)*this.speed;
        this.rotation += this.turnrate;
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
    }
    }

    render(){
        if(this.active){
        this.fx.rotateAndDrawImage(this.img, this.x, this.y, this.rotation);
    }
    }

    collisionDetected(){
        this.active = false;
    }

    hasCollidedWithEntity(entity){
        if( !this.active || !entity.active) return false;
        let aLeftOfB = (entity.x + entity.size) < (this.x)
        let aRightOfB= (entity.x + entity.size) > (this.x+ this.img.width);
        let aAboveB = entity.y > (this.y + this.img.height);
        let aBelowB = entity.y + entity.size > (this.y);

        return !(aLeftOfB || aAboveB || aBelowB || aRightOfB)
    }

    checkForCollisionsWithPhasers(phasers){
        phasers.forEach(p => {
            if(this.hasCollidedWithEntity(p)){
            this.collisionDetected();
            p.active = false;
            return
        
        }
    })
}}