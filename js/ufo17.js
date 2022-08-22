class Ufo17 {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.ufo17_image = loadImage("assets/ufo17.png");
    }
    display() {
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.ufo_image, 0, 0, this.width, this.height);
      pop();
    }
  }
  