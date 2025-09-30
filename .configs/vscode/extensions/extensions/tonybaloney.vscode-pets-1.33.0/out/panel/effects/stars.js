"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarEffect = void 0;
class Star {
    x;
    y;
    size;
    brightness;
    twinkleDirection;
    sizeMin;
    sizeMax;
    constructor(x, y, size, sizeMin, sizeMax) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.brightness = Math.random();
        this.twinkleDirection = 1;
        this.sizeMin = sizeMin;
        this.sizeMax = sizeMax;
    }
    twinkle() {
        // Change size and brightness
        this.size += 0.1 * this.twinkleDirection;
        this.brightness += 0.1 * this.twinkleDirection;
        // Clamp brightness to the range [0, 1]
        if (this.brightness > 1) {
            this.brightness = 1;
        }
        if (this.brightness < 0) {
            this.brightness = 0;
        }
        // Reverse direction if limits are reached
        if (this.size > this.sizeMax || this.size < this.sizeMin) {
            this.twinkleDirection *= -1;
        }
    }
}
class StarEffect {
    name = 'Stars';
    description = 'Twinkling stars effect';
    enabled = false;
    canvas;
    scale;
    stars = [];
    ctx;
    pSize = [0, 0];
    pDensity = 0;
    themeKind = 2 /* ColorThemeKind.dark */;
    init(foregroundCanvas, backgroundCanvas, scale, floor, themeKind) {
        this.themeKind = themeKind;
        this.canvas = backgroundCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.scale = scale;
        switch (this.scale) {
            case "nano" /* PetSize.nano */:
                this.pSize = [0.5, 1.5];
                this.pDensity = 100;
                break;
            case "small" /* PetSize.small */:
                this.pSize = [0.5, 1.5];
                this.pDensity = 75;
                break;
            case "medium" /* PetSize.medium */:
                this.pSize = [1, 2];
                this.pDensity = 50;
                break;
            case "large" /* PetSize.large */:
                this.pSize = [1.5, 3];
                this.pDensity = 35;
                break;
        }
        this.pDensity = Math.floor((this.pDensity * this.canvas.width * this.canvas.height) / 100_000);
        // Generate stars
        for (let i = 0; i < this.pDensity; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const size = Math.random() * (this.pSize[1] - this.pSize[0]) + this.pSize[0];
            this.stars.push(new Star(x, y, size, this.pSize[0], this.pSize[1]));
        }
        console.log('Stars initialized 🌟');
    }
    handleResize() {
        if (this.canvas && this.ctx && this.scale) {
            this.stars = [];
            this.init(this.canvas, this.canvas, this.scale, 0, this.themeKind);
        }
    }
    enable() {
        if (this.themeKind === 1 /* ColorThemeKind.light */ ||
            this.themeKind === 4 /* ColorThemeKind.highContrastLight */) {
            // You can't see stars in the daytime
            this.enabled = false;
            return;
        }
        // Draw the stars
        if (this.ctx === null || !this.canvas) {
            console.log('Canvas context not initialized');
            return;
        }
        this.enabled = true;
        this.loop();
        console.log('Stars enabled');
    }
    draw() {
        this.stars.forEach((star) => {
            if (!this.ctx) {
                return;
            }
            star.twinkle();
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            this.ctx.fillRect(star.x, star.y, star.size, star.size);
        });
    }
    disable() {
        if (!this.ctx || !this.canvas) {
            console.log('Canvas context not initialized');
            return;
        }
        this.enabled = false;
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log('Stars disabled');
    }
    loop() {
        if (this.enabled) {
            this.clear();
            this.draw();
            this.queue();
        }
        else {
            console.log('Stars effect stopped');
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
        setTimeout(() => {
            window.requestAnimationFrame(() => this.loop());
        }, 1000);
    }
}
exports.StarEffect = StarEffect;
//# sourceMappingURL=stars.js.map