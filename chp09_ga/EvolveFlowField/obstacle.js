// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pathfinding w/ Genetic Algorithms

// A class for an obstacle, just a simple rectangle that is drawn
// and can check if a Rocket touches it

// Also using this class for target position

class Obstacle {
  constructor(x, y, w_, h_) {
    this.position = createVector(x, y);
    this.w = w_;
    this.h = h_;
  }

  display() {
    stroke(0);
    fill(175);
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.w, this.h);
  }

  contains(spot) {
    if (spot.x > this.position.x - this.w / 2 && spot.x < this.position.x + this.w / 2 && spot.y > this.position.y - this.h / 2 && spot.y < this.position.y + this.h / 2) {
      return true;
    } else {
      return false;
    }
  }
}