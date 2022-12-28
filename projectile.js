
class ProjectileService{
    constructor(owner){
        this.owner = owner;
        this.max= 5
        this.pointer = 0;
        this.collection = []
    }

    init(){
        this.pointer = 0
        this.collection= []
        for(let i = 0; i< this.max; i++){
            let p = new Projectile(this.owner);
            p.init();
            this.collection.push(p);
        }
        console.log(this.collection)
    }
    update(){
        this.collection.forEach(p => {
            p.update();
        })
    }
    render(){
        this.collection.forEach(p =>{
            p.render();
        })
    }
    fire(){
        if ( this. pointer < this.max){
            this.collection[this.pointer].fire();
            this.pointer++;
        }
        else{
            this.pointer = 0;

        }
    }
        
    
}

class Projectile{

    constructor(owner){
        this.owner = owner;
        this.angle = this.owner.angle;
        this.speed = 100
        this.x= 0;
        this.y=0;
        this.size = 1
        this.active = false;
        this.lifespan= 100;
        this.alive = this.lifespan;
        this.fx = new Fx();
    }

    init(){
        this.active = false
        this.fx.init();
    }
    update(){
        if(this.active){
            this.x+= Math.cos(this.angle) * this.speed;
            this.y+= Math.sin(this.angle) * this.speed;
            this.alive--;
            this.active= this.active > 0? true: false;

        }
    }
    render() {
        if( this.active){
            console.log(this.x, this.y, this.size)
            this.fx.drawCircle(this.x, this.y, this.size, "blue")

        }
    }
    fire (){
        this.angle = this.owner.angle;
        this.alive = this.lifespan;
        this.x = this.owner.x + this.owner.img.width/2;
        this.y = this.owner.y+ this.owner.img.height/2;
        this.active = true;
    }

}