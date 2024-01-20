class Drone {
    constructor() {
      this.x = null;
      this.y = null;
      this.f = null;
    }

    set(name,n){
      this[name] = n
    }
    
    get(name) {
      return this[name];
    }

    place(x, y, f) {
      if (this.isInSurfaceBoundary(x, y)) {
        this.x = x;
        this.y = y;
        this.f = f.toUpperCase();
      }
    }
  
    move() {
      if (this.f === 'NORTH' && this.isInSurfaceBoundary(this.x, this.y + 1)) {
        this.y++;
      } else if (this.f === 'SOUTH' && this.isInSurfaceBoundary(this.x, this.y - 1)) {
        this.y--;
      } else if (this.f === 'EAST' && this.isInSurfaceBoundary(this.x + 1, this.y)) {
        this.x++;
      } else if (this.f === 'WEST' && this.isInSurfaceBoundary(this.x - 1, this.y)) {
        this.x--;
      }
    }
  
    left() {
      this.turn(-90);
    }
  
    right() {
      this.turn(90);
    }
  
    attack() {
      let projectileX, projectileY;
      switch (this.f) {
        case 'NORTH':
          projectileX = this.x;
          projectileY = this.y + 2;
          break;
        case 'SOUTH':
          projectileX = this.x;
          projectileY = this.y - 2;
          break;
        case 'EAST':
          projectileX = this.x + 2;
          projectileY = this.y;
          break;
        case 'WEST':
          projectileX = this.x - 2;
          projectileY = this.y;
          break;
        default:
          break;
      }
      
      if (this.isInSurfaceBoundary(projectileX, projectileY)) {
        alert("projectile fired")
      } else {
        alert("Could not fire projectile, reached surface boundary!")
      }
    }
  
    report() {
      console.log(`Output: ${this.x},${this.y},${this.f}`);
    }
  
    turn(degrees) {
      const faceDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
      const currentFaceIndex = faceDirection.indexOf(this.f);
      const newFaceIndex = (currentFaceIndex + degrees / 90 + 4) % 4;
      this.f = faceDirection[newFaceIndex];
    }
    getRotationAngle() {
      switch (this.f.toUpperCase()) {
        case 'SOUTH':
          return 0;
        case 'EAST':
          return 270;
        case 'NORTH':
          return 180;
        case 'WEST':
          return 90;
        default:
          return 0;
      }
    }
  
    isInSurfaceBoundary(x, y) {
      return x >= 0 && x < 10 && y >= 0 && y < 10;
    }
  }

  // Tests
  // const drone = new Drone();
  // console.log("********Test1*********")
  // drone.place(0, 0, 'NORTH');
  // drone.move();
  // drone.left();
  // drone.left();
  // drone.attack();
  // drone.report(); // Output: 0,1,SOUTH

  // console.log("********Test2*********")
  // drone.place(0,0,'NORTH');
  // drone.left()
  // drone.report(); // Output: 0,0,WEST

  // console.log("********Test3*********")
  // drone.place(1,2,'EAST');
  // drone.move();
  // drone.move();
  // drone.left();
  // drone.move();
  // drone.attack();
  // drone.report(); // Output: 3,3,NORTH
  
  