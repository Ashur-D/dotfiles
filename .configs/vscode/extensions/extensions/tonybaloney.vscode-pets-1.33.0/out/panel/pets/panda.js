"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PANDA_NAMES = exports.Panda = void 0;
const basepettype_1 = require("../basepettype");
class Panda extends basepettype_1.BasePetType {
    label = 'panda';
    static possibleColors = ["black" /* PetColor.black */, "brown" /* PetColor.brown */];
    sequence = {
        startingState: "sit-idle" /* States.sitIdle */,
        sequenceStates: [
            {
                state: "sit-idle" /* States.sitIdle */,
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "run-right" /* States.runRight */,
                    "lie" /* States.lie */,
                ],
            },
            {
                state: "lie" /* States.lie */,
                possibleNextStates: ["walk-right" /* States.walkRight */, "walk-left" /* States.walkLeft */],
            },
            {
                state: "walk-right" /* States.walkRight */,
                possibleNextStates: [
                    "sit-idle" /* States.sitIdle */,
                    "lie" /* States.lie */,
                    "walk-left" /* States.walkLeft */,
                    "run-left" /* States.runLeft */,
                ],
            },
            {
                state: "run-right" /* States.runRight */,
                possibleNextStates: [
                    "sit-idle" /* States.sitIdle */,
                    "lie" /* States.lie */,
                    "walk-left" /* States.walkLeft */,
                    "run-left" /* States.runLeft */,
                ],
            },
            {
                state: "walk-left" /* States.walkLeft */,
                possibleNextStates: [
                    "sit-idle" /* States.sitIdle */,
                    "lie" /* States.lie */,
                    "walk-right" /* States.walkRight */,
                    "run-right" /* States.runRight */,
                ],
            },
            {
                state: "run-left" /* States.runLeft */,
                possibleNextStates: [
                    "sit-idle" /* States.sitIdle */,
                    "lie" /* States.lie */,
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
                possibleNextStates: ["sit-idle" /* States.sitIdle */, "lie" /* States.lie */],
            },
        ],
    };
    get emoji() {
        return '🐼';
    }
    get hello() {
        return `Zzzz bamboo`;
    }
}
exports.Panda = Panda;
exports.PANDA_NAMES = [
    'Boba',
    'Winnie',
    'Teddy',
    'Luna',
    'Tofu',
    'Mochi',
    'Coco',
    'Hana',
];
//# sourceMappingURL=panda.js.map