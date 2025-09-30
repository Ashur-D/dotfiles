"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DENO_NAMES = exports.Deno = void 0;
const basepettype_1 = require("../basepettype");
class Deno extends basepettype_1.BasePetType {
    label = 'deno';
    static possibleColors = ["green" /* PetColor.green */];
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
                possibleNextStates: [
                    "sit-idle" /* States.sitIdle */,
                    "walk-right" /* States.walkRight */,
                    "run-right" /* States.runRight */,
                ],
            },
            {
                state: "run-left" /* States.runLeft */,
                possibleNextStates: [
                    "sit-idle" /* States.sitIdle */,
                    "walk-right" /* States.walkRight */,
                    "run-right" /* States.runRight */,
                ],
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
        return '🦕';
    }
    get hello() {
        return `I ❤️ TS`;
    }
}
exports.Deno = Deno;
exports.DENO_NAMES = [
    'Dee',
    'Dee Dee',
    'Deno',
    'Deno Jr.',
    'Deno the Dino',
    'Deploydocus',
    'Dino',
    'Dippy',
    'Dr Deno',
    'Herby',
    'Littlefoot',
    'Ry',
];
//# sourceMappingURL=deno.js.map