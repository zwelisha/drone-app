class Drone {
    /**
     * @param {number} x - the x position of the drone
     * @param {number} y - the y position of the drone
     * @param {string} f - the direction of the drone, it can NORTH, WEST, EAST or SOUTH
     */
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

    /**
     * Places the drone on the surface
     * @param {number} x - the x position where the drone should be placed
     * @param {number} y - the y position where the drone should be placed
     * @param {string} f - the facing direction of the drone. it can be NORTH, SOUTH, WEST or EAST
     */
    place(x, y, f) {
      if (this.isInSurfaceBoundary(x, y)) {
        this.x = x;
        this.y = y;
        this.f = f.toUpperCase();
      }
    }
    /**
     * moves the toy drone one unit forward in the direction it is currently facing.
     * For example, if the drone is facing NORTH, this functin moves it 1 unit up
     * along the y-axis. In addition the move only happens if the drone won't cross the 
     * surface boundary.
     */
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
    
    /**
     * Fires a projectile 2 units ahead of the current position. 
     * Explode functionality still needs to be implemented.
     */
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
        console.log("projectile fired")
      } else {
        console.log(("Could not fire projectile, reached surface boundary!"));
      }
    }
    
    /**
     * Returns a clean string with all the special characters replaced by an empty string.
     * @returns {string} string outputReport -  a string representation of the current position and direction.
     */
    report() {
      const outputReport = `Output: ${this.x},${this.y},${this.f}`;
      return outputReport;
    }
  
    /**
   * Turns the drone by a given angle in degrees.
   * @param {number} degrees - the angle to rotate the drone by.
   */
    turn(degrees) {
      const faceDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
      const currentFaceIndex = faceDirection.indexOf(this.f);
      const newFaceIndex = (currentFaceIndex + degrees / 90 + 4) % 4;
      this.f = faceDirection[newFaceIndex];
    }

    /**
     * Based on the current drone direction get the angle to rotate the drone.
     * @returns {number} - the angle in degrees to rotate the drone by.
     */
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
    
    /**
     * Checks if the drone is within the surface boundary.
     * @param {number} x - the x position of the drone
     * @param {number} y - the y position of the drone
     * @returns {boolean} - true or false
     */
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
  // console.log(drone.report()); // Output: 0,1,SOUTH

  // console.log("********Test2*********")
  // drone.place(0,0,'NORTH');
  // drone.left()
  // console.log(drone.report()); // Output: 0,0,WEST

  // console.log("********Test3*********")
  // drone.place(1,2,'EAST');
  // drone.move();
  // drone.move();
  // drone.left();
  // drone.move();
  // drone.attack();
  // console.log(drone.report()); // Output: 3,3,NORTH
  
  