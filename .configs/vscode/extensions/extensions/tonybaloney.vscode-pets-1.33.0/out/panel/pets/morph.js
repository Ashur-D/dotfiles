"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MORPH_NAMES = exports.Morph = void 0;
const basepettype_1 = require("../basepettype");
class Morph extends basepettype_1.BasePetType {
    label = 'morph';
    static possibleColors = ["purple" /* PetColor.purple */];
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
        return '🟣';
    }
    get hello() {
        return ` Spider psycho. 🕷️`;
    }
}
exports.Morph = Morph;
exports.MORPH_NAMES = ['Morph'];
//# sourceMappingURL=morph.js.map