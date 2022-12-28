class Game {
    constructor (){  
        this.fx = new Fx(); 
        this.player= new Player();
        this.asteroidService = new AsteroidService(this.player);
      }
    
      init() {
        
        this.fx.init();
        this.player.init();
        this.asteroidService.init(20);
        }
    resize(){
        console.log('game resize')
    }
     update(){
        this.player.update();
        this.asteroidService.update();
     }
     render( ){
        this.fx.fillCanvas('#000')
        this.player.render();
        this.asteroidService.render();
     }
}


