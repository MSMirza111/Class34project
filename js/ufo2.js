class Ufo2{
 constructor(x,y,width,height){
    this.x =x;
    this.y = y;
     this.width = width;
     this.height = height;
     this.ufo2_image = loadImage("assets/ufo2.png");

    }
    display(){
        push();
        translate(this.x,this.y);
         imageMode(CENTER);
        image(this.ufo2_image,0,0,this.width,this.height);
        pop();
    }
}