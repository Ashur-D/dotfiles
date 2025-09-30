"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnowEffect = void 0;
class Vector2 {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function floorRandom(min, max) {
    return (min || 0) + Math.random() * ((max || 1) - (min || 0));
}
function microtime() {
    return new Date().getTime() * 0.001;
}
class Particle {
    origin;
    position;
    velocity;
    size;
    amplitude;
    dx;
    constructor(origin, velocity, size, amplitude) {
        this.origin = origin;
        this.position = new Vector2(origin.x, origin.y);
        this.velocity = velocity || new Vector2(0, 0);
        this.size = size;
        this.amplitude = amplitude;
        // randomize start values a bit
        this.dx = Math.random() * 100;
    }
    update(timeDelta) {
        this.position.y += this.velocity.y * timeDelta;
        // oscillate the x value between -amplitude and +amplitude
        this.dx += this.velocity.x * timeDelta;
        this.position.x = this.origin.x + this.amplitude * Math.sin(this.dx);
    }
}
class SnowEffect {
    name = 'Snow';
    description = 'Falling snow effect';
    canvas;
    ctx;
    particles = [];
    running = false;
    startTime = 0;
    frameTime = 0;
    maxTimeDelta = 0.1;
    pAmount = 2500; // Snowiness
    pSize = [0.5, 1.5]; // min and max size
    pSwing = [0.1, 1]; // min and max oscillation speed for x movement
    pSpeed = [10, 50]; // min and max y speed
    pAmplitude = [5, 20]; // min and max distance for x movement
    floor = 0;
    enable() {
        this.running = true;
        this.startTime = this.frameTime = microtime();
        this.loop();
    }
    disable() {
        this.running = false;
    }
    init(foregroundCanvas, backgroundCanvas, scale, floor, 
    // eslint-disable-next-line no-unused-vars
    themeKind) {
        // use the container width and height
        this.canvas = foregroundCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.floor = floor;
        switch (scale) {
            case "nano" /* PetSize.nano */:
                this.pSize = [0.1, 0.5];
                this.pAmount = 5000;
                break;
            case "small" /* PetSize.small */:
                this.pSize = [0.5, 1.5];
                this.pAmount = 2500;
                break;
            case "medium" /* PetSize.medium */:
                this.pSize = [1, 2];
                this.pAmount = 1000;
                break;
            case "large" /* PetSize.large */:
                this.pSize = [1.5, 3];
                this.pAmount = 500;
                break;
        }
        this.initParticles();
    }
    loop() {
        if (this.running) {
            this.clear();
            this.update();
            this.draw();
            this.queue();
        }
        else {
            console.log('Snow effect stopped');
        }
    }
    initParticles() {
        if (!this.canvas) {
            console.log('Canvas not initialized');
            return;
        }
        // clear the particles array
        this.particles.length = 0;
        for (var i = 0; i < this.pAmount; i++) {
            var origin = new Vector2(floorRandom(0, this.canvas.width), floorRandom(-this.canvas.height, 0));
            var velocity = new Vector2(floorRandom(this.pSwing[0], this.pSwing[1]), floorRandom(this.pSpeed[0], this.pSpeed[1]));
            var size = floorRandom(this.pSize[0], this.pSize[1]);
            var amplitude = floorRandom(this.pAmplitude[0], this.pAmplitude[1]);
            this.particles.push(new Particle(origin, velocity, size, amplitude));
        }
    }
    update() {
        if (!this.canvas) {
            console.log('Canvas not initialized');
            return;
        }
        // calculate the time since the last frame
        // this can be large when window is minimized so also impose a limit
        var timeNow = microtime();
        var timeDelta = Math.min(timeNow - this.frameTime, this.maxTimeDelta);
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            particle.update(timeDelta);
            if (particle.position.y - particle.size >
                this.canvas.height - this.floor) {
                // reset the particle to the top and a random x position
                particle.position.y = -particle.size;
                particle.position.x = particle.origin.x =
                    Math.random() * this.canvas.width;
                particle.dx = Math.random() * 100;
            }
        }
        // save this time for the next frame
        this.frameTime = timeNow;
    }
    draw() {
        if (!this.ctx) {
            console.log('Canvas context not initialized');
            return;
        }
        // TODO: Vary the alpha based on the size of the particle
        this.ctx.fillStyle = 'rgb(255,255,255)';
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            this.ctx.fillRect(particle.position.x, particle.position.y, particle.size, particle.size);
        }
    }
    clear() {
        if (!this.ctx || !this.canvas) {
            console.log('Canvas or context not initialized');
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    queue() {
        window.requestAnimationFrame(() => this.loop());
    }
    handleResize() {
        return;
    }
}
exports.SnowEffect = SnowEffect;
//# sourceMappingURL=snow.js.map