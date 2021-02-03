class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.01};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/Superhero-01.png")
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
    ellipse(0, 0, this.width, this.height);
    imageMode(CENTER)
    image(this.image,1,0,120,120)
    
    pop();
  }
}
