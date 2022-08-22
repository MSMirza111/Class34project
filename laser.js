class Laser {
    constructor(x,y,width,height,laserPos){
        this.x = x;
        this.y = y;
        this.laserPosition = laserPos;
         this.width = width;
         this.height = height;
         this.image = loadImage("laser.png");
        this.body = Bodies.rectangle(x,y,width,height,laserPos);
        World.add(world,this.body);

    }
 
    display(){
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y,5,40);
    pop();
    }

    shoot(){
     Body.setVelocity(this.body,{x:0,y:-2})

    }
}
