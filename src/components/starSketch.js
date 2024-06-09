import p5 from 'p5';

export default function starSketch(p) {
  let stars = [];

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < 100; i++) {
      stars.push(new p.DrawStars(p.random(p.width), p.random(p.height), p.color(255, 255, 255)));
    }
  };

  p.draw = function () {
    // p.background(); // Dark background with slight blue
    stars.forEach(star => {
      star.updateStar();
      star.display();
    });
  };

  class DrawStars {
    constructor(sx, sy, sc) {
      this.x = sx;
      this.y = sy;
      this.c = sc;

      this.brightness = p.random(255);
      this.size = p.random(0, 2);
      this.twinkleTiming = p.random(30, 150);
      this.frameCounter = 0;
    }

    updateStar() {
      this.frameCounter++;
      if (this.frameCounter >= this.twinkleTiming) {
        this.frameCounter = 0;
        this.twinkleTiming = p.random(10, 150);
        this.brightness = p.random(255);
        this.size = p.random(0, 5);
      }
    }

    display() {
      p.fill(this.c, this.brightness);
      p.noStroke();
      p.ellipse(this.x, this.y, this.size, this.size);
    }
  }

  p.DrawStars = DrawStars;
}
