class Rocket  {
    constructor(x, y, width, height ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.rocket_image = loadImage("rocket.png");
    }
    display() {
  
      push();
      translate(this.x, this.y);
      imageMode(CENTER);
      image(this.rocket_image, 0, 0, this.width, this.height);
      pop();
    }
  }
  