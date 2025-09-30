"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HORSE_NAMES = exports.Horse = void 0;
const basepettype_1 = require("../basepettype");
const states_1 = require("../states");
const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
class Horse extends basepettype_1.BasePetType {
    constructor(spriteElement, collisionElement, speechElement, size, left, bottom, petRoot, floor, name, speed) {
        // Replace spaces with underscores
        // Keeps file names consistent
        const petRootClean = petRoot.replace(' ', '_');
        super(spriteElement, collisionElement, speechElement, size, left, bottom, petRootClean, floor, name, speed);
    }
    label = 'horse';
    static possibleColors = [
        "brown" /* PetColor.brown */,
        "white" /* PetColor.white */,
        "black" /* PetColor.black */,
        "socks beige" /* PetColor.socksbeige */,
        "socks black" /* PetColor.socksblack */,
        "socks brown" /* PetColor.socksbrown */,
        "paint beige" /* PetColor.paintbeige */,
        "paint black" /* PetColor.paintblack */,
        "paint brown" /* PetColor.paintbrown */,
        "magical" /* PetColor.magical */,
        "warrior" /* PetColor.warrior */,
    ];
    sequence = {
        startingState: "stand-right" /* States.standRight */,
        sequenceStates: [
            {
                state: "sit-idle" /* States.sitIdle */,
                // Only on first adding the horse
                possibleNextStates: ["walk-right" /* States.walkRight */],
            },
            {
                state: "stand-right" /* States.standRight */,
                // Can start walking either direction (twice as likely to keep going right), or just keep on eating
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "walk-right" /* States.walkRight */,
                    "walk-left" /* States.walkLeft */,
                    "stand-right" /* States.standRight */,
                ],
            },
            {
                state: "stand-left" /* States.standLeft */,
                // Can start walking either direction (twice as likely to keep going left), or just keep on eating
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "walk-left" /* States.walkLeft */,
                    "walk-left" /* States.walkLeft */,
                    "stand-left" /* States.standLeft */,
                ],
            },
            {
                state: "walk-right" /* States.walkRight */,
                // Can switch directions, start running the same direction, or start eating (more likely)
                possibleNextStates: [
                    "walk-left" /* States.walkLeft */,
                    "run-right" /* States.runRight */,
                    "run-left" /* States.runLeft */,
                    "stand-right" /* States.standRight */,
                    "stand-right" /* States.standRight */,
                    "stand-right" /* States.standRight */,
                ],
            },
            {
                state: "run-right" /* States.runRight */,
                // Can switch directions or slow down to a walk (twice as likely)
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "walk-right" /* States.walkRight */,
                    "run-left" /* States.runLeft */,
                ],
            },
            {
                state: "walk-left" /* States.walkLeft */,
                // Can switch directions, start running the same direciton, or start eating (more likely)
                possibleNextStates: [
                    "walk-right" /* States.walkRight */,
                    "run-left" /* States.runLeft */,
                    "run-right" /* States.runRight */,
                    "stand-left" /* States.standLeft */,
                    "stand-left" /* States.standLeft */,
                    "stand-left" /* States.standLeft */,
                ],
            },
            {
                state: "run-left" /* States.runLeft */,
                // Can switch directions or slow down to a walk (twice as likely)
                possibleNextStates: [
                    "walk-left" /* States.walkLeft */,
                    "walk-left" /* States.walkLeft */,
                    "run-right" /* States.runRight */,
                ],
            },
            {
                state: "chase" /* States.chase */,
                // After the chase, the horse has the ball!
                possibleNextStates: ["idle-with-ball" /* States.idleWithBall */],
            },
            {
                state: "swipe" /* States.swipe */,
                possibleNextStates: ["sit-idle" /* States.sitIdle */],
            },
            {
                state: "idle-with-ball" /* States.idleWithBall */,
                // Can go back to running or have a bite to eat
                possibleNextStates: [
                    "run-right" /* States.runRight */,
                    "run-left" /* States.runLeft */,
                    "stand-right" /* States.standRight */,
                    "stand-left" /* States.standLeft */,
                ],
            },
        ],
    };
    get emoji() {
        if (this.petRoot.endsWith('magical')) {
            return '🦄';
        }
        if (this.name.toLowerCase() === 'beau') {
            return '🤡';
        }
        if (this.petRoot.endsWith('warrior')) {
            return getRandomElement(['🗡️', '🪓', '🔪', '💣', '🧨']);
        }
        return '🐴';
    }
    get hello() {
        let response = Math.random() > 0.5 ? `Neigh!` : `Neigh?`;
        switch (this.name.toLowerCase()) {
            case 'artax':
                response = 'Swamps of Sadness? No thanks!';
                break;
            case 'hugo':
                response = "I'm the world's laziest horse!";
                break;
            case 'james baxter':
                response = 'James Baxter! James... Baxter!';
                break;
            case 'jimison':
                response = 'Son of Jimmy!';
                break;
            case 'mister ed':
            case 'mr. ed':
                response = 'Hello, Wilbur!';
                break;
            case 'mr. horse':
                response = "No sir, I don't like it.";
                break;
            case 'pony soprano':
            case 'tony the pony':
                response = 'Fuggedaboutit!';
                break;
            case 'vigo horsenberg':
            case 'tiny horse jr.':
            case 'ol jethro':
                response = 'To battle!';
                break;
            case 'shadowfax':
                response = 'I am Shadowfax, lord of all horses!';
                break;
            case 'silver':
                response = 'Hi ho, Silver!';
                break;
        }
        if (this.petRoot.endsWith('warrior')) {
            response = response.toUpperCase();
        }
        if (this.petRoot.endsWith('magical')) {
            return `🌈 ${response} ✨`;
        }
        if (this.name.toLowerCase() === 'warner') {
            return `💜 ${response} 🧡`;
        }
        return response;
    }
    swipe() {
        if (this.currentStateEnum === "swipe" /* States.swipe */) {
            return;
        }
        this.holdState = this.currentState;
        this.holdStateEnum = this.currentStateEnum;
        this.currentStateEnum = "swipe" /* States.swipe */;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        this.showSpeechBubble('Neigh!');
    }
}
exports.Horse = Horse;
exports.HORSE_NAMES = [
    'Tiny Horse jr.',
    'Mister Ed',
    'Tony the Pony',
    'Vigo Horsenberg',
    'Ol Jetrho',
    'Pony Soprano',
    'Hugo',
    'Jimison',
    'Copper',
    'Lightning',
    'Pilgrim',
    'Thunder',
    'Buddy',
    'Rusty',
    'Smokey',
    'Tennessee Stud',
    'Duke',
    'Tumbleweed',
    'Buster',
    'Scout',
    'Champ',
    'Whiskey',
    'Henry',
    'Artax',
    'Silver',
    'Trigger',
    'Shadowfax',
    'Mr Horse',
    'Beau',
    'Bullseye',
    'Tornado',
    'Boxer',
    'Clover',
    'Warner',
    'Binky',
    'Porkpie',
    'James Baxter',
    'Buttercup',
    'Maximus',
    'Seabiscuit', // Famous race horse
];
//# sourceMappingURL=horse.js.map