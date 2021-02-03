class Monster {
    constructor(x, y, width, height) {
      var options = {
          
          frictionAir:0,
          density:5,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/monster-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      imageMode(CENTER);
      image(this.image,5,100,120,120);
     
      
      pop();
    }
  }