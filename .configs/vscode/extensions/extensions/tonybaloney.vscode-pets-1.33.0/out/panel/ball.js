"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwAndChase = exports.throwBall = exports.dynamicThrowOff = exports.dynamicThrowOn = exports.setupBallThrowing = void 0;
const states_1 = require("./states");
/// Bouncing ball components, credit https://stackoverflow.com/a/29982343
const gravity = 0.6, damping = 0.9, traction = 0.8, interval = 1000 / 24; // msec for single frame
let then = 0; // last draw
var ballState;
var canvas;
var ballRadius;
var floor;
function calculateBallRadius(size) {
    if (size === "nano" /* PetSize.nano */) {
        return 2;
    }
    else if (size === "small" /* PetSize.small */) {
        return 3;
    }
    else if (size === "medium" /* PetSize.medium */) {
        return 4;
    }
    else if (size === "large" /* PetSize.large */) {
        return 8;
    }
    else {
        return 1; // Shrug
    }
}
function setupBallThrowing(canvasName, petSize, floor_) {
    canvas = document.getElementById(canvasName);
    ballRadius = calculateBallRadius(petSize);
    floor = floor_;
}
exports.setupBallThrowing = setupBallThrowing;
function resetBall() {
    if (ballState) {
        ballState.paused = true;
    }
    if (canvas) {
        canvas.style.display = 'block';
    }
    ballState = new states_1.BallState(100, 100, 4, 5);
}
function dynamicThrowOn(pets) {
    let startMouseX;
    let startMouseY;
    let endMouseX;
    let endMouseY;
    console.log('Enabling dynamic throw');
    window.onmousedown = (e) => {
        if (ballState) {
            ballState.paused = true;
        }
        if (canvas) {
            canvas.style.display = 'block';
        }
        endMouseX = e.clientX;
        endMouseY = e.clientY;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        ballState = new states_1.BallState(e.clientX, e.clientY, 0, 0);
        pets.forEach((petEl) => {
            if (petEl.pet.canChase && canvas) {
                petEl.pet.chase(ballState, canvas);
            }
        });
        ballState.paused = true;
        drawBall();
        window.onmousemove = (ev) => {
            ev.preventDefault();
            if (ballState) {
                ballState.paused = true;
            }
            startMouseX = endMouseX;
            startMouseY = endMouseY;
            endMouseX = ev.clientX;
            endMouseY = ev.clientY;
            ballState = new states_1.BallState(ev.clientX, ev.clientY, 0, 0);
            drawBall();
        };
        window.onmouseup = (ev) => {
            ev.preventDefault();
            window.onmouseup = null;
            window.onmousemove = null;
            ballState = new states_1.BallState(endMouseX, endMouseY, endMouseX - startMouseX, endMouseY - startMouseY);
            pets.forEach((petEl) => {
                if (petEl.pet.canChase && canvas) {
                    petEl.pet.chase(ballState, canvas);
                }
            });
            throwBall();
        };
    };
}
exports.dynamicThrowOn = dynamicThrowOn;
function dynamicThrowOff() {
    console.log('Disabling dynamic throw');
    window.onmousedown = null;
    if (ballState) {
        ballState.paused = true;
    }
    if (canvas) {
        canvas.style.display = 'none';
    }
}
exports.dynamicThrowOff = dynamicThrowOff;
function throwBall() {
    if (!canvas) {
        return;
    }
    if (!ballState.paused) {
        requestAnimationFrame(throwBall);
    }
    // throttling the frame rate
    const now = Date.now();
    const elapsed = now - then;
    if (elapsed <= interval) {
        return;
    }
    then = now - (elapsed % interval);
    if (ballState.cx + ballRadius >= canvas.width) {
        ballState.vx = -ballState.vx * damping;
        ballState.cx = canvas.width - ballRadius;
    }
    else if (ballState.cx - ballRadius <= 0) {
        ballState.vx = -ballState.vx * damping;
        ballState.cx = ballRadius;
    }
    if (ballState.cy + ballRadius + floor >= canvas.height) {
        ballState.vy = -ballState.vy * damping;
        ballState.cy = canvas.height - ballRadius - floor;
        // traction here
        ballState.vx *= traction;
    }
    else if (ballState.cy - ballRadius <= 0) {
        ballState.vy = -ballState.vy * damping;
        ballState.cy = ballRadius;
    }
    ballState.vy += gravity;
    ballState.cx += ballState.vx;
    ballState.cy += ballState.vy;
    drawBall();
}
exports.throwBall = throwBall;
function drawBall() {
    if (!canvas) {
        return;
    }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ballState.cx, ballState.cy, ballRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#2ed851';
    ctx.fill();
}
function throwAndChase(pets) {
    resetBall();
    throwBall();
    pets.forEach((petEl) => {
        if (petEl.pet.canChase && canvas) {
            petEl.pet.chase(ballState, canvas);
        }
    });
}
exports.throwAndChase = throwAndChase;
//# sourceMappingURL=ball.js.map