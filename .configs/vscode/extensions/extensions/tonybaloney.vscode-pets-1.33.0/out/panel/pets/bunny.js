"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUNNY_NAMES = exports.Bunny = void 0;
const basepettype_1 = require("../basepettype");
class Bunny extends basepettype_1.BasePetType {
    label = 'bunny';
    static possibleColors = ["white" /* PetColor.white */, "purple" /* PetColor.purple */, "gray" /* PetColor.gray */];
    sequence = {
        startingState: "sit-idle" /* States.sitIdle */,
        sequenceStates: [
            {
                state: "lie" /* States.lie */,
                // Will sit idle after lying
                possibleNextStates: ["sit-idle" /* States.sitIdle */],
            },
            {
                state: "sit-idle" /* States.sitIdle */,
                // Can lie back, walk right/left or stand left/right
                possibleNextStates: [
                    "lie" /* States.lie */,
                    "walk-right" /* States.walkRight */,
                    "walk-left" /* States.walkLeft */,
                    "stand-left" /* States.standLeft */,
                    "stand-right" /* States.standRight */,
                ],
            },
            {
                state: "stand-left" /* States.standLeft */,
                // Can lie back, walk right, walk left (twice the chance)
                possibleNextStates: [
                    "lie" /* States.lie */,
                    "walk-right" /* States.walkRight */,
                    "walk-left" /* States.walkLeft */,
                    "walk-left" /* States.walkLeft */,
                ],
            },
            {
                state: "stand-right" /* States.standRight */,
                // Can lie back, walk right, walk left (twice the chance)
                possibleNextStates: [
                    "lie" /* States.lie */,
                    "walk-right" /* States.walkRight */,
                    "walk-right" /* States.walkRight */,
                    "walk-left" /* States.walkLeft */,
                ],
            },
            {
                state: "walk-right" /* States.walkRight */,
                // Can walk left, run right (twice the chance)
                possibleNextStates: [
                    "walk-left" /* States.walkLeft */,
                    "run-right" /* States.runRight */,
                    "run-right" /* States.runRight */,
                ],
            },
            {
                state: "walk-left" /* States.walkLeft */,
                // Can walk right, run left (twice the chance)
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "run-left" /* States.runLeft */,
                    "run-left" /* States.runLeft */,
                ],
            },
            {
                state: "run-right" /* States.runRight */,
                // Can walk left or run left (twice the chance)
                possibleNextStates: [
                    "walk-left" /* States.walkLeft */,
                    "run-left" /* States.runLeft */,
                    "run-left" /* States.runLeft */,
                ],
            },
            {
                state: "run-left" /* States.runLeft */,
                // After running left always stand
                possibleNextStates: ["stand-left" /* States.standLeft */],
            },
            {
                state: "chase" /* States.chase */,
                // After the chase always idle with ball
                possibleNextStates: ["idle-with-ball" /* States.idleWithBall */],
            },
            {
                state: "idle-with-ball" /* States.idleWithBall */,
                // Can walk right, walk left, run left, run right
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
        return '🐰';
    }
    get hello() {
        return `Your pookie bunny ${this.name} hopin' by!`;
    }
}
exports.Bunny = Bunny;
exports.BUNNY_NAMES = [
    'Bella',
    'Bugs',
    'BunBun',
    'Bunny',
    'Bunny',
    'Boo',
    'Charlie',
    'Coco',
    'Daisy',
    'Daisy',
    'Ginger',
    'Hazel',
    'Honey',
    'Hopper',
    'Lily',
    'Lola',
    'Lucy',
    'Luna',
    'Minnie',
    'Misty',
    'Mocha',
    'Mocha',
    'Molly',
    'Oreo',
    'Penny',
    'Peter',
    'Pookie',
    'Rosie',
    'Ruby',
    'Sandy',
    'Sunny',
    'Thumper',
    'Willow',
];
//# sourceMappingURL=bunny.js.map