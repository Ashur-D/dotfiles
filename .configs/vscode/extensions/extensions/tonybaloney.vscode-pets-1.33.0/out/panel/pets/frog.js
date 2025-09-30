"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FROG_NAMES = exports.Frog = void 0;
const basepettype_1 = require("../basepettype");
class Frog extends basepettype_1.BasePetType {
    label = 'frog';
    static possibleColors = ["red" /* PetColor.red */, "green" /* PetColor.green */, "blue" /* PetColor.blue */];
    sequence = {
        startingState: "sit-idle" /* States.sitIdle */,
        sequenceStates: [
            {
                state: "sit-idle" /* States.sitIdle */,
                possibleNextStates: ["walk-right" /* States.walkRight */, "run-right" /* States.runRight */],
            },
            {
                state: "walk-right" /* States.walkRight */,
                possibleNextStates: ["walk-left" /* States.walkLeft */, "run-left" /* States.runLeft */],
            },
            {
                state: "run-right" /* States.runRight */,
                possibleNextStates: ["walk-left" /* States.walkLeft */, "run-left" /* States.runLeft */],
            },
            {
                state: "walk-left" /* States.walkLeft */,
                possibleNextStates: ["sit-idle" /* States.sitIdle */],
            },
            {
                state: "run-left" /* States.runLeft */,
                possibleNextStates: ["sit-idle" /* States.sitIdle */],
            },
            {
                state: "chase" /* States.chase */,
                possibleNextStates: ["idle-with-ball" /* States.idleWithBall */],
            },
            {
                state: "idle-with-ball" /* States.idleWithBall */,
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "walk-left" /* States.walkLeft */,
                    "run-left" /* States.runLeft */,
                    "run-right" /* States.runRight */,
                ],
            },
        ],
    };
    get emoji() {
        return '🐸';
    }
    get hello() {
        return Math.random() > 0.5 ? `croak...` : `ribbit!`;
    }
}
exports.Frog = Frog;
exports.FROG_NAMES = [
    'Blinky',
    'Bubbles',
    'Drift',
    'Frogger',
    'Freddy',
    'Hopper',
    'Jumpy',
    'Kermit',
    'Lily',
    'Leapster',
    'Marsh',
    'Misty',
    'Moss',
    'Pebbles',
    'Pip',
    'Pondy',
    'Quagmire',
    'Rango',
    'Razor',
    'Slick',
    'Swamper',
    'Swampy',
    'Sprout',
    'Thistle',
    'Tad',
    'Toady',
    'Warty',
    'Willow',
    'Wiggle',
];
//# sourceMappingURL=frog.js.map