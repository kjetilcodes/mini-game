<template>
  <div>
    <canvas id="Arena"></canvas>
    <button @click="addCreature">Add</button>
    <button @click="animate">animate</button>
    <button @click="stopAnimation">stop</button>
    <button @click="clearArena">clear</button>
  </div>
</template>

<script>
const screenSize = 800;
const height = (screenSize / 16) * 9;

const world = {
  screenSize,
  height,
  floor: height - 100,
  ceiling: 0,
  gravity: 2,
  friction: 0.25,
  maxSpeed: 15,
  spawnPoint: screenSize / 2
};

class Creature {
  constructor() {
    this.size = 20;
    this.posX = world.spawnPoint;
    this.posY = 0;
    this.momentumY = 0;
    this.momentumX = 0;
    this.stepSize = 1;
  }

  draw() {
    const canvas = document.getElementById("Arena");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(this.posX, this.posY, this.size, this.size);
  }

  gravityAndFriction() {
    if (this.momentumY <= world.maxSpeed) this.momentumY += world.gravity;
    if (this.momentumY < 0) this.momentumY += world.gravity / 2;

    if (this.momentumX < 0) this.momentumX += world.friction;
    if (this.momentumX > 0) this.momentumX -= world.friction;
  }

  updatePosition() {
    this.posY += this.momentumY;
    this.posX += this.momentumX;
  }

  move(event) {
    /* TODO: THIS.OUTOFBOUNDS PROP */
    if (this.momentumX <= world.maxSpeed) {
      if (event.key === "ArrowLeft") this.momentumX -= this.stepSize;
      if (event.key === "ArrowRight") this.momentumX += this.stepSize;
      if (event.key === "ArrowUp") this.jump();
    }
  }

  jump() {
    if (this.momentumY > 10 || this.momentumY < 10) {
      this.momentumY += world.maxSpeed * 2;
    }
  }

  collision() {
    const canvas = document.getElementById("Arena");
    if (this.posY > world.floor) {
      this.momentumY = -this.momentumY;
      this.posY = world.floor;
    }

    if (this.posY < world.ceiling) {
      this.momentumY = -this.momentumY;
      this.posY = world.ceiling;
    }

    if (this.posX <= 0 || this.posX >= canvas.width - this.size) {
      this.momentumX = -this.momentumX;
      if (this.posX < 0 || this.posX > canvas.width - this.size) {
        this.posX += this.momentumX;
      }
    }
  }
}

export default {
  name: "Arena",
  data() {
    return {
      backgroundColor: "#000000",
      creatures: [],
      animationID: 0
    };
  },

  mounted() {
    // Eventlisteners for resizing and initiation
    window.addEventListener("load", this.eventDrawCanvas);
    window.addEventListener("resize", this.eventDrawCanvas);
    window.addEventListener("keydown", event => {
      event.preventDefault();
      this.moveCreatures(event);
    });
  },

  methods: {
    eventDrawCanvas() {
      this.clearCanvas();
      this.eventCanvasResize(window);
      this.eventCanvasReStyle(window);
      this.drawCreatures(window);
    },

    /* clear canvas */
    clearCanvas() {
      const canvas = document.getElementById("Arena");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    /* Resize canvas on redraw */
    eventCanvasResize() {
      const canvas = document.getElementById("Arena");
      canvas.height = world.height;
      canvas.width = world.screenSize;
    },

    /* Restyle canvas on redraw */
    eventCanvasReStyle() {
      const canvas = document.getElementById("Arena");
      canvas.style.backgroundColor = this.backgroundColor;
    },

    /* Add a creature object to the array of creatures */
    addCreature(window) {
      this.creatures.push(new Creature());
      this.eventDrawCanvas(window);
    },

    moveCreatures(event) {
      this.creatures.map(e => e.move(event));
    },

    /* Draw all the creatures */
    drawCreatures() {
      this.creatures.map(e => {
        e.gravityAndFriction();
        e.updatePosition();
        e.collision();
        e.draw(document.getElementById("Arena"));
        return null;
      });
    },

    clearArena() {
      this.clearCanvas();
      this.creatures = [];
      this.stopAnimation();
    },

    stopAnimation() {
      cancelAnimationFrame(this.animationID);
    },

    animate() {
      this.animationID = requestAnimationFrame(this.animate);
      this.eventDrawCanvas();
      return null;
    }
  }
};
</script>
