/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ALL_THEMES = exports.ALL_SCALES = exports.ALL_COLORS = exports.ALL_PETS = exports.WebviewMessage = void 0;
class WebviewMessage {
    constructor(text, command) {
        this.text = text;
        this.command = command;
    }
}
exports.WebviewMessage = WebviewMessage;
exports.ALL_PETS = [
    "bunny" /* PetType.bunny */,
    "cat" /* PetType.cat */,
    "chicken" /* PetType.chicken */,
    "clippy" /* PetType.clippy */,
    "cockatiel" /* PetType.cockatiel */,
    "crab" /* PetType.crab */,
    "dog" /* PetType.dog */,
    "deno" /* PetType.deno */,
    "fox" /* PetType.fox */,
    "frog" /* PetType.frog */,
    "horse" /* PetType.horse */,
    "mod" /* PetType.mod */,
    "morph" /* PetType.morph */,
    "panda" /* PetType.panda */,
    "rat" /* PetType.rat */,
    "rocky" /* PetType.rocky */,
    "rubber-duck" /* PetType.rubberduck */,
    "snail" /* PetType.snail */,
    "snake" /* PetType.snake */,
    "totoro" /* PetType.totoro */,
    "turtle" /* PetType.turtle */,
    "zappy" /* PetType.zappy */,
];
exports.ALL_COLORS = [
    "black" /* PetColor.black */,
    "brown" /* PetColor.brown */,
    "lightbrown" /* PetColor.lightbrown */,
    "green" /* PetColor.green */,
    "yellow" /* PetColor.yellow */,
    "gray" /* PetColor.gray */,
    "purple" /* PetColor.purple */,
    "red" /* PetColor.red */,
    "white" /* PetColor.white */,
    "orange" /* PetColor.orange */,
    "akita" /* PetColor.akita */,
    "socks black" /* PetColor.socksblack */,
    "socks beige" /* PetColor.socksbeige */,
    "socks brown" /* PetColor.socksbrown */,
    "paint beige" /* PetColor.paintbeige */,
    "paint black" /* PetColor.paintblack */,
    "paint brown" /* PetColor.paintbrown */,
    "magical" /* PetColor.magical */,
    "warrior" /* PetColor.warrior */,
    "null" /* PetColor.null */,
];
exports.ALL_SCALES = [
    "nano" /* PetSize.nano */,
    "small" /* PetSize.small */,
    "medium" /* PetSize.medium */,
    "large" /* PetSize.large */,
];
exports.ALL_THEMES = [
    "none" /* Theme.none */,
    "forest" /* Theme.forest */,
    "castle" /* Theme.castle */,
    "beach" /* Theme.beach */,
    "winter" /* Theme.winter */,
];


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomName = void 0;
const bunny_1 = __webpack_require__(4);
const cat_1 = __webpack_require__(7);
const chicken_1 = __webpack_require__(8);
const morph_1 = __webpack_require__(9);
const clippy_1 = __webpack_require__(10);
const cockatiel_1 = __webpack_require__(11);
const crab_1 = __webpack_require__(12);
const deno_1 = __webpack_require__(13);
const dog_1 = __webpack_require__(14);
const fox_1 = __webpack_require__(15);
const frog_1 = __webpack_require__(16);
const mod_1 = __webpack_require__(17);
const panda_1 = __webpack_require__(18);
const rocky_1 = __webpack_require__(19);
const rubberduck_1 = __webpack_require__(20);
const snail_1 = __webpack_require__(21);
const snake_1 = __webpack_require__(22);
const totoro_1 = __webpack_require__(23);
const zappy_1 = __webpack_require__(24);
const rat_1 = __webpack_require__(25);
const turtle_1 = __webpack_require__(26);
const horse_1 = __webpack_require__(27);
function randomName(type) {
    const collection = {
        ["bunny" /* PetType.bunny */]: bunny_1.BUNNY_NAMES,
        ["cat" /* PetType.cat */]: cat_1.CAT_NAMES,
        ["chicken" /* PetType.chicken */]: chicken_1.CHICKEN_NAMES,
        ["dog" /* PetType.dog */]: dog_1.DOG_NAMES,
        ["fox" /* PetType.fox */]: fox_1.FOX_NAMES,
        ["frog" /* PetType.frog */]: frog_1.FROG_NAMES,
        ["crab" /* PetType.crab */]: crab_1.CRAB_NAMES,
        ["clippy" /* PetType.clippy */]: clippy_1.CLIPPY_NAMES,
        ["deno" /* PetType.deno */]: deno_1.DENO_NAMES,
        ["mod" /* PetType.mod */]: mod_1.MOD_NAMES,
        ["totoro" /* PetType.totoro */]: totoro_1.TOTORO_NAMES,
        ["snail" /* PetType.snail */]: snail_1.SNAIL_NAMES,
        ["snake" /* PetType.snake */]: snake_1.SNAKE_NAMES,
        ["rubber-duck" /* PetType.rubberduck */]: rubberduck_1.DUCK_NAMES,
        ["zappy" /* PetType.zappy */]: zappy_1.ZAPPY_NAMES,
        ["rocky" /* PetType.rocky */]: rocky_1.ROCKY_NAMES,
        ["cockatiel" /* PetType.cockatiel */]: cockatiel_1.COCKATIEL_NAMES,
        ["rat" /* PetType.rat */]: rat_1.RAT_NAMES,
        ["turtle" /* PetType.turtle */]: turtle_1.TURTLE_NAMES,
        ["horse" /* PetType.horse */]: horse_1.HORSE_NAMES,
        ["panda" /* PetType.panda */]: panda_1.PANDA_NAMES,
        ["morph" /* PetType.morph */]: morph_1.MORPH_NAMES,
    }[type] ?? cat_1.CAT_NAMES;
    return (collection[Math.floor(Math.random() * collection.length)] ?? 'Unknown');
}
exports.randomName = randomName;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BUNNY_NAMES = exports.Bunny = void 0;
const basepettype_1 = __webpack_require__(5);
class Bunny extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'bunny';
        this.sequence = {
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
    }
    get emoji() {
        return '🐰';
    }
    get hello() {
        return `Your pookie bunny ${this.name} hopin' by!`;
    }
}
exports.Bunny = Bunny;
Bunny.possibleColors = ["white" /* PetColor.white */, "purple" /* PetColor.purple */, "gray" /* PetColor.gray */];
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


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasePetType = exports.InvalidStateError = void 0;
const states_1 = __webpack_require__(6);
class InvalidStateError extends Error {
    constructor(fromState, petType) {
        super(`Invalid state ${fromState} for pet type ${petType}`);
        this.fromState = fromState;
        this.petType = petType;
    }
}
exports.InvalidStateError = InvalidStateError;
class BasePetType {
    constructor(spriteElement, collisionElement, speechElement, size, left, bottom, petRoot, floor, name, speed) {
        this.label = 'base';
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [],
        };
        this.el = spriteElement;
        this.collision = collisionElement;
        this.speech = speechElement;
        this.petRoot = petRoot;
        this._floor = floor;
        this._left = left;
        this._bottom = bottom;
        this.initSprite(size, left, bottom);
        this.currentStateEnum = this.sequence.startingState;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        this._name = name;
        this._size = size;
        this._speed = this.randomizeSpeed(speed);
        // Increment the static count of the Pet class that the constructor belongs to
        this.constructor.count += 1;
    }
    initSprite(petSize, left, bottom) {
        this.el.style.left = `${left}px`;
        this.el.style.bottom = `${bottom}px`;
        this.el.style.width = 'auto';
        this.el.style.height = 'auto';
        this.el.style.maxWidth = `${this.calculateSpriteWidth(petSize)}px`;
        this.el.style.maxHeight = `${this.calculateSpriteWidth(petSize)}px`;
        this.collision.style.left = `${left}px`;
        this.collision.style.bottom = `${bottom}px`;
        this.collision.style.width = `${this.calculateSpriteWidth(petSize)}px`;
        this.collision.style.height = `${this.calculateSpriteWidth(petSize)}px`;
        this.speech.style.left = `${left}px`;
        this.speech.style.bottom = `${bottom + this.calculateSpriteWidth(petSize)}px`;
        this.hideSpeechBubble();
    }
    get left() {
        return this._left;
    }
    get bottom() {
        return this._bottom;
    }
    repositionAccompanyingElements() {
        this.collision.style.left = `${this._left}px`;
        this.collision.style.bottom = `${this._bottom}px`;
        this.speech.style.left = `${this._left}px`;
        this.speech.style.bottom = `${this._bottom + this.calculateSpriteWidth(this._size)}px`;
    }
    calculateSpriteWidth(size) {
        if (size === "nano" /* PetSize.nano */) {
            return 30;
        }
        else if (size === "small" /* PetSize.small */) {
            return 40;
        }
        else if (size === "medium" /* PetSize.medium */) {
            return 55;
        }
        else if (size === "large" /* PetSize.large */) {
            return 110;
        }
        else {
            return 30; // Shrug
        }
    }
    positionBottom(bottom) {
        this._bottom = bottom;
        this.el.style.bottom = `${this._bottom}px`;
        this.repositionAccompanyingElements();
    }
    positionLeft(left) {
        this._left = left;
        this.el.style.left = `${this._left}px`;
        this.repositionAccompanyingElements();
    }
    get width() {
        return this.el.width;
    }
    get floor() {
        return this._floor;
    }
    get hello() {
        // return the sound of the name of the animal
        return ` says hello 👋!`;
    }
    getState() {
        return { currentStateEnum: this.currentStateEnum };
    }
    get speed() {
        return this._speed;
    }
    randomizeSpeed(speed) {
        const min = speed * 0.7;
        const max = speed * 1.3;
        const newSpeed = Math.random() * (max - min) + min;
        return newSpeed;
    }
    get isMoving() {
        return this._speed !== 0 /* PetSpeed.still */;
    }
    recoverFriend(friend) {
        // Recover friends..
        this._friend = friend;
    }
    recoverState(state) {
        // TODO : Resolve a bug where if it was swiping before, it would fail
        // because holdState is no longer valid.
        this.currentStateEnum = state.currentStateEnum ?? "sit-idle" /* States.sitIdle */;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        if (!(0, states_1.isStateAboveGround)(this.currentStateEnum)) {
            // Reset the bottom of the sprite to the floor as the theme
            // has likely changed.
            this.positionBottom(this.floor);
        }
    }
    get canSwipe() {
        return !(0, states_1.isStateAboveGround)(this.currentStateEnum);
    }
    get canChase() {
        return !(0, states_1.isStateAboveGround)(this.currentStateEnum) && this.isMoving;
    }
    showSpeechBubble(message, duration = 3000) {
        this.speech.innerHTML = message;
        this.speech.style.display = 'block';
        setTimeout(() => {
            this.hideSpeechBubble();
        }, duration);
    }
    hideSpeechBubble() {
        this.speech.style.display = 'none';
    }
    swipe() {
        if (this.currentStateEnum === "swipe" /* States.swipe */) {
            return;
        }
        this.holdState = this.currentState;
        this.holdStateEnum = this.currentStateEnum;
        this.currentStateEnum = "swipe" /* States.swipe */;
        this.currentState = (0, states_1.resolveState)(this.currentStateEnum, this);
        this.showSpeechBubble('👋');
    }
    chase(ballState, canvas) {
        this.currentStateEnum = "chase" /* States.chase */;
        this.currentState = new states_1.ChaseState(this, ballState, canvas);
    }
    faceLeft() {
        this.el.style.transform = 'scaleX(-1)';
    }
    faceRight() {
        this.el.style.transform = 'scaleX(1)';
    }
    setAnimation(face) {
        if (this.el.src.endsWith(`_${face}_8fps.gif`)) {
            return;
        }
        this.el.src = `${this.petRoot}_${face}_8fps.gif`;
    }
    chooseNextState(fromState) {
        // Work out next state
        var possibleNextStates = undefined;
        for (var i = 0; i < this.sequence.sequenceStates.length; i++) {
            if (this.sequence.sequenceStates[i].state === fromState) {
                possibleNextStates =
                    this.sequence.sequenceStates[i].possibleNextStates;
            }
        }
        if (!possibleNextStates) {
            throw new InvalidStateError(fromState, this.label);
        }
        // randomly choose the next state
        const idx = Math.floor(Math.random() * possibleNextStates.length);
        return possibleNextStates[idx];
    }
    nextFrame() {
        if (this.currentState.horizontalDirection === states_1.HorizontalDirection.left) {
            this.faceLeft();
        }
        else if (this.currentState.horizontalDirection === states_1.HorizontalDirection.right) {
            this.faceRight();
        }
        this.setAnimation(this.currentState.spriteLabel);
        // What's my buddy doing?
        if (this.hasFriend &&
            this.currentStateEnum !== "chase-friend" /* States.chaseFriend */ &&
            this.isMoving) {
            if (this.friend?.isPlaying &&
                !(0, states_1.isStateAboveGround)(this.currentStateEnum)) {
                this.currentState = (0, states_1.resolveState)("chase-friend" /* States.chaseFriend */, this);
                this.currentStateEnum = "chase-friend" /* States.chaseFriend */;
                return;
            }
        }
        var frameResult = this.currentState.nextFrame();
        if (frameResult === states_1.FrameResult.stateComplete) {
            // If recovering from swipe..
            if (this.holdState && this.holdStateEnum) {
                this.currentState = this.holdState;
                this.currentStateEnum = this.holdStateEnum;
                this.holdState = undefined;
                this.holdStateEnum = undefined;
                return;
            }
            var nextState = this.chooseNextState(this.currentStateEnum);
            this.currentState = (0, states_1.resolveState)(nextState, this);
            this.currentStateEnum = nextState;
        }
        else if (frameResult === states_1.FrameResult.stateCancel) {
            if (this.currentStateEnum === "chase" /* States.chase */) {
                var nextState = this.chooseNextState("idle-with-ball" /* States.idleWithBall */);
                this.currentState = (0, states_1.resolveState)(nextState, this);
                this.currentStateEnum = nextState;
            }
            else if (this.currentStateEnum === "chase-friend" /* States.chaseFriend */) {
                var nextState = this.chooseNextState("idle-with-ball" /* States.idleWithBall */);
                this.currentState = (0, states_1.resolveState)(nextState, this);
                this.currentStateEnum = nextState;
            }
        }
    }
    get hasFriend() {
        return this._friend !== undefined;
    }
    get friend() {
        return this._friend;
    }
    get name() {
        return this._name;
    }
    makeFriendsWith(friend) {
        this._friend = friend;
        console.log(this.name, ": I'm now friends ❤️ with ", friend.name);
        return true;
    }
    get isPlaying() {
        return (this.isMoving &&
            (this.currentStateEnum === "run-right" /* States.runRight */ ||
                this.currentStateEnum === "run-left" /* States.runLeft */));
    }
    get emoji() {
        return '🐶';
    }
}
exports.BasePetType = BasePetType;
BasePetType.count = 0;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StandLeftState = exports.StandRightState = exports.JumpDownLeftState = exports.ClimbWallLeftState = exports.ChaseFriendState = exports.ChaseState = exports.RunLeftState = exports.RunRightState = exports.WalkLeftState = exports.WalkRightState = exports.IdleWithBallState = exports.SwipeState = exports.LandState = exports.WallHangLeftState = exports.LieState = exports.SitIdleState = exports.resolveState = exports.isStateAboveGround = exports.BallState = exports.FrameResult = exports.HorizontalDirection = exports.PetPanelState = exports.PetElementState = exports.PetInstanceState = void 0;
class PetInstanceState {
}
exports.PetInstanceState = PetInstanceState;
class PetElementState {
}
exports.PetElementState = PetElementState;
class PetPanelState {
}
exports.PetPanelState = PetPanelState;
var HorizontalDirection;
(function (HorizontalDirection) {
    HorizontalDirection[HorizontalDirection["left"] = 0] = "left";
    HorizontalDirection[HorizontalDirection["right"] = 1] = "right";
    HorizontalDirection[HorizontalDirection["natural"] = 2] = "natural";
})(HorizontalDirection = exports.HorizontalDirection || (exports.HorizontalDirection = {}));
var FrameResult;
(function (FrameResult) {
    FrameResult[FrameResult["stateContinue"] = 0] = "stateContinue";
    FrameResult[FrameResult["stateComplete"] = 1] = "stateComplete";
    // Special states
    FrameResult[FrameResult["stateCancel"] = 2] = "stateCancel";
})(FrameResult = exports.FrameResult || (exports.FrameResult = {}));
class BallState {
    constructor(cx, cy, vx, vy) {
        this.cx = cx;
        this.cy = cy;
        this.vx = vx;
        this.vy = vy;
        this.paused = false;
    }
}
exports.BallState = BallState;
function isStateAboveGround(state) {
    return (state === "climb-wall-left" /* States.climbWallLeft */ ||
        state === "jump-down-left" /* States.jumpDownLeft */ ||
        state === "land" /* States.land */ ||
        state === "wall-hang-left" /* States.wallHangLeft */);
}
exports.isStateAboveGround = isStateAboveGround;
function resolveState(state, pet) {
    switch (state) {
        case "sit-idle" /* States.sitIdle */:
            return new SitIdleState(pet);
        case "walk-right" /* States.walkRight */:
            return new WalkRightState(pet);
        case "walk-left" /* States.walkLeft */:
            return new WalkLeftState(pet);
        case "run-right" /* States.runRight */:
            return new RunRightState(pet);
        case "run-left" /* States.runLeft */:
            return new RunLeftState(pet);
        case "lie" /* States.lie */:
            return new LieState(pet);
        case "wall-hang-left" /* States.wallHangLeft */:
            return new WallHangLeftState(pet);
        case "climb-wall-left" /* States.climbWallLeft */:
            return new ClimbWallLeftState(pet);
        case "jump-down-left" /* States.jumpDownLeft */:
            return new JumpDownLeftState(pet);
        case "land" /* States.land */:
            return new LandState(pet);
        case "swipe" /* States.swipe */:
            return new SwipeState(pet);
        case "idle-with-ball" /* States.idleWithBall */:
            return new IdleWithBallState(pet);
        case "chase-friend" /* States.chaseFriend */:
            return new ChaseFriendState(pet);
        case "stand-right" /* States.standRight */:
            return new StandRightState(pet);
        case "stand-left" /* States.standLeft */:
            return new StandLeftState(pet);
    }
    return new SitIdleState(pet);
}
exports.resolveState = resolveState;
class AbstractStaticState {
    constructor(pet) {
        this.label = "sit-idle" /* States.sitIdle */;
        this.spriteLabel = 'idle';
        this.holdTime = 50;
        this.horizontalDirection = HorizontalDirection.left;
        this.idleCounter = 0;
        this.pet = pet;
    }
    nextFrame() {
        this.idleCounter++;
        if (this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
class SitIdleState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "sit-idle" /* States.sitIdle */;
        this.spriteLabel = 'idle';
        this.horizontalDirection = HorizontalDirection.right;
        this.holdTime = 50;
    }
}
exports.SitIdleState = SitIdleState;
class LieState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "lie" /* States.lie */;
        this.spriteLabel = 'lie';
        this.horizontalDirection = HorizontalDirection.right;
        this.holdTime = 50;
    }
}
exports.LieState = LieState;
class WallHangLeftState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "wall-hang-left" /* States.wallHangLeft */;
        this.spriteLabel = 'wallgrab';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 50;
    }
}
exports.WallHangLeftState = WallHangLeftState;
class LandState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "land" /* States.land */;
        this.spriteLabel = 'land';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 10;
    }
}
exports.LandState = LandState;
class SwipeState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "swipe" /* States.swipe */;
        this.spriteLabel = 'swipe';
        this.horizontalDirection = HorizontalDirection.natural;
        this.holdTime = 15;
    }
}
exports.SwipeState = SwipeState;
class IdleWithBallState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "idle-with-ball" /* States.idleWithBall */;
        this.spriteLabel = 'with_ball';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 30;
    }
}
exports.IdleWithBallState = IdleWithBallState;
class WalkRightState {
    constructor(pet) {
        this.label = "walk-right" /* States.walkRight */;
        this.spriteLabel = 'walk';
        this.horizontalDirection = HorizontalDirection.right;
        this.speedMultiplier = 1;
        this.holdTime = 60;
        this.leftBoundary = Math.floor(window.innerWidth * 0.95);
        this.pet = pet;
        this.idleCounter = 0;
    }
    nextFrame() {
        this.idleCounter++;
        this.pet.positionLeft(this.pet.left + this.pet.speed * this.speedMultiplier);
        if (this.pet.isMoving &&
            this.pet.left >= this.leftBoundary - this.pet.width) {
            return FrameResult.stateComplete;
        }
        else if (!this.pet.isMoving && this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.WalkRightState = WalkRightState;
class WalkLeftState {
    constructor(pet) {
        this.label = "walk-left" /* States.walkLeft */;
        this.spriteLabel = 'walk';
        this.horizontalDirection = HorizontalDirection.left;
        this.speedMultiplier = 1;
        this.holdTime = 60;
        this.pet = pet;
        this.idleCounter = 0;
    }
    nextFrame() {
        this.pet.positionLeft(this.pet.left - this.pet.speed * this.speedMultiplier);
        if (this.pet.isMoving && this.pet.left <= 0) {
            return FrameResult.stateComplete;
        }
        else if (!this.pet.isMoving && this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.WalkLeftState = WalkLeftState;
class RunRightState extends WalkRightState {
    constructor() {
        super(...arguments);
        this.label = "run-right" /* States.runRight */;
        this.spriteLabel = 'walk_fast';
        this.speedMultiplier = 1.6;
        this.holdTime = 130;
    }
}
exports.RunRightState = RunRightState;
class RunLeftState extends WalkLeftState {
    constructor() {
        super(...arguments);
        this.label = "run-left" /* States.runLeft */;
        this.spriteLabel = 'walk_fast';
        this.speedMultiplier = 1.6;
        this.holdTime = 130;
    }
}
exports.RunLeftState = RunLeftState;
class ChaseState {
    constructor(pet, ballState, canvas) {
        this.label = "chase" /* States.chase */;
        this.spriteLabel = 'run';
        this.horizontalDirection = HorizontalDirection.left;
        this.pet = pet;
        this.ballState = ballState;
        this.canvas = canvas;
    }
    nextFrame() {
        if (this.ballState.paused) {
            return FrameResult.stateCancel; // Ball is already caught
        }
        if (this.pet.left > this.ballState.cx) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pet.positionLeft(this.pet.left - this.pet.speed);
        }
        else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pet.positionLeft(this.pet.left + this.pet.speed);
        }
        if (this.canvas.height - this.ballState.cy <
            this.pet.width + this.pet.floor &&
            this.ballState.cx < this.pet.left &&
            this.pet.left < this.ballState.cx + 15) {
            // hide ball
            this.canvas.style.display = 'none';
            this.ballState.paused = true;
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.ChaseState = ChaseState;
class ChaseFriendState {
    constructor(pet) {
        this.label = "chase-friend" /* States.chaseFriend */;
        this.spriteLabel = 'run';
        this.horizontalDirection = HorizontalDirection.left;
        this.pet = pet;
    }
    nextFrame() {
        if (!this.pet.hasFriend || !this.pet.friend?.isPlaying) {
            return FrameResult.stateCancel; // Friend is no longer playing.
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (this.pet.left > this.pet.friend.left) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pet.positionLeft(this.pet.left - this.pet.speed);
        }
        else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pet.positionLeft(this.pet.left + this.pet.speed);
        }
        return FrameResult.stateContinue;
    }
}
exports.ChaseFriendState = ChaseFriendState;
class ClimbWallLeftState {
    constructor(pet) {
        this.label = "climb-wall-left" /* States.climbWallLeft */;
        this.spriteLabel = 'wallclimb';
        this.horizontalDirection = HorizontalDirection.left;
        this.pet = pet;
    }
    nextFrame() {
        this.pet.positionBottom(this.pet.bottom + 1);
        if (this.pet.bottom >= 100) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.ClimbWallLeftState = ClimbWallLeftState;
class JumpDownLeftState {
    constructor(pet) {
        this.label = "jump-down-left" /* States.jumpDownLeft */;
        this.spriteLabel = 'fall_from_grab';
        this.horizontalDirection = HorizontalDirection.right;
        this.pet = pet;
    }
    nextFrame() {
        this.pet.positionBottom(this.pet.bottom - 5);
        if (this.pet.bottom <= this.pet.floor) {
            this.pet.positionBottom(this.pet.floor);
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
exports.JumpDownLeftState = JumpDownLeftState;
class StandRightState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "stand-right" /* States.standRight */;
        this.spriteLabel = 'stand';
        this.horizontalDirection = HorizontalDirection.right;
        this.holdTime = 60;
    }
}
exports.StandRightState = StandRightState;
class StandLeftState extends AbstractStaticState {
    constructor() {
        super(...arguments);
        this.label = "stand-right" /* States.standRight */;
        this.spriteLabel = 'stand';
        this.horizontalDirection = HorizontalDirection.left;
        this.holdTime = 60;
    }
}
exports.StandLeftState = StandLeftState;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CAT_NAMES = exports.Cat = void 0;
const basepettype_1 = __webpack_require__(5);
class Cat extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'cat';
        this.sequence = {
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
                        "climb-wall-left" /* States.climbWallLeft */,
                        "walk-right" /* States.walkRight */,
                        "run-right" /* States.runRight */,
                    ],
                },
                {
                    state: "run-left" /* States.runLeft */,
                    possibleNextStates: [
                        "sit-idle" /* States.sitIdle */,
                        "climb-wall-left" /* States.climbWallLeft */,
                        "walk-right" /* States.walkRight */,
                        "run-right" /* States.runRight */,
                    ],
                },
                {
                    state: "climb-wall-left" /* States.climbWallLeft */,
                    possibleNextStates: ["wall-hang-left" /* States.wallHangLeft */],
                },
                {
                    state: "wall-hang-left" /* States.wallHangLeft */,
                    possibleNextStates: ["jump-down-left" /* States.jumpDownLeft */],
                },
                {
                    state: "jump-down-left" /* States.jumpDownLeft */,
                    possibleNextStates: ["land" /* States.land */],
                },
                {
                    state: "land" /* States.land */,
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
    }
    get emoji() {
        return '🐱';
    }
    get hello() {
        return `brrr... Meow!`;
    }
}
exports.Cat = Cat;
Cat.possibleColors = [
    "black" /* PetColor.black */,
    "brown" /* PetColor.brown */,
    "gray" /* PetColor.gray */,
    "lightbrown" /* PetColor.lightbrown */,
    "orange" /* PetColor.orange */,
    "white" /* PetColor.white */,
];
exports.CAT_NAMES = [
    'Bella',
    'Charlie',
    'Molly',
    'Coco',
    'Ruby',
    'Oscar',
    'Lucy',
    'Bailey',
    'Milo',
    'Daisy',
    'Archie',
    'Ollie',
    'Rosie',
    'Lola',
    'Frankie',
    'Roxy',
    'Poppy',
    'Luna',
    'Jack',
    'Millie',
    'Teddy',
    'Cooper',
    'Bear',
    'Rocky',
    'Alfie',
    'Hugo',
    'Bonnie',
    'Pepper',
    'Lily',
    'Tilly',
    'Leo',
    'Maggie',
    'George',
    'Mia',
    'Marley',
    'Harley',
    'Chloe',
    'Lulu',
    'Missy',
    'Jasper',
    'Billy',
    'Nala',
    'Monty',
    'Ziggy',
    'Winston',
    'Zeus',
    'Zoe',
    'Stella',
    'Sasha',
    'Rusty',
    'Gus',
    'Baxter',
    'Dexter',
    'Willow',
    'Barney',
    'Bruno',
    'Penny',
    'Honey',
    'Milly',
    'Murphy',
    'Simba',
    'Holly',
    'Benji',
    'Henry',
    'Lilly',
    'Pippa',
    'Shadow',
    'Sam',
    'Lucky',
    'Ellie',
    'Duke',
    'Jessie',
    'Cookie',
    'Harvey',
    'Bruce',
    'Jax',
    'Rex',
    'Louie',
    'Jet',
    'Banjo',
    'Beau',
    'Ella',
    'Ralph',
    'Loki',
    'Lexi',
    'Chester',
    'Sophie',
    'Chilli',
    'Billie',
    'Louis',
    'Scout',
    'Cleo',
    'Purfect',
    'Spot',
    'Bolt',
    'Julia',
    'Ginger',
    'Daisy',
    'Amelia',
    'Oliver',
    'Ghost',
    'Midnight',
    'Pumpkin',
    'Shadow',
    'Binx',
    'Riley',
    'Lenny',
    'Mango',
    'Alex',
    'Boo',
    'Botas',
    'Romeo',
    'Bob',
    'Clyde',
    'Simon',
    'Mimmo',
    'Carlotta',
    'Felix',
    'Duchess',
    'Byrt',
];


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CHICKEN_NAMES = exports.Chicken = void 0;
const basepettype_1 = __webpack_require__(5);
class Chicken extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'chicken';
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [
                {
                    state: "sit-idle" /* States.sitIdle */,
                    possibleNextStates: [
                        "walk-right" /* States.walkRight */,
                        "run-right" /* States.runRight */,
                        "swipe" /* States.swipe */,
                    ],
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
                    state: "swipe" /* States.swipe */,
                    possibleNextStates: ["sit-idle" /* States.sitIdle */],
                },
                {
                    state: "idle-with-ball" /* States.idleWithBall */,
                    possibleNextStates: [
                        "walk-right" /* States.walkRight */,
                        "walk-left" /* States.walkLeft */,
                        "run-left" /* States.runLeft */,
                        "run-right" /* States.runRight */,
                        "swipe" /* States.swipe */,
                    ],
                },
            ],
        };
    }
    get emoji() {
        return '🐔';
    }
    get hello() {
        return ` Puk Puk Pukaaak - just let me lay my egg. 🥚`;
    }
}
exports.Chicken = Chicken;
Chicken.possibleColors = ["white" /* PetColor.white */];
exports.CHICKEN_NAMES = [
    'Hen Solo',
    'Cluck Vader',
    'Obi Wan Henobi',
    'Albert Eggstein',
    'Abrahen Lincoln',
    'Cluck Norris',
    'Sir Clucks-A-Lot',
    'Frank-hen-stein',
    'Richard',
    'Dixi',
    'Nugget',
    'Bella',
    'Cotton',
    'Pip',
    'Lucky',
    'Polly',
    'Mirabel',
    'Elsa',
    'Bon-Bon',
    'Ruby',
    'Rosie',
    'Teriyaki',
    'Penguin',
    'Sybil',
];


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MORPH_NAMES = exports.Morph = void 0;
const basepettype_1 = __webpack_require__(5);
class Morph extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'morph';
        this.sequence = {
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
    }
    get emoji() {
        return '🟣';
    }
    get hello() {
        return ` Spider psycho. 🕷️`;
    }
}
exports.Morph = Morph;
Morph.possibleColors = ["purple" /* PetColor.purple */];
exports.MORPH_NAMES = ['Morph'];


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CLIPPY_NAMES = exports.Clippy = void 0;
const basepettype_1 = __webpack_require__(5);
class Clippy extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'clippy';
        this.sequence = {
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
    }
    get emoji() {
        return '📎';
    }
    get hello() {
        return ` Hi, I'm Clippy, would you like some assistance today? 👋!`;
    }
}
exports.Clippy = Clippy;
Clippy.possibleColors = [
    "black" /* PetColor.black */,
    "brown" /* PetColor.brown */,
    "green" /* PetColor.green */,
    "yellow" /* PetColor.yellow */,
];
exports.CLIPPY_NAMES = [
    'Clippy',
    'Karl Klammer',
    'Clippy Jr.',
    'Molly',
    'Coco',
    'Buddy',
    'Ruby',
    'Oscar',
    'Lucy',
    'Bailey',
];


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COCKATIEL_NAMES = exports.Cockatiel = void 0;
const basepettype_1 = __webpack_require__(5);
class Cockatiel extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'cockatiel';
        this.sequence = {
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
    }
    get emoji() {
        return '🦜';
    }
    get hello() {
        // TODO: #191 Add a custom message for cockatiel
        return ` Hello, I'm a good bird 👋!`;
    }
}
exports.Cockatiel = Cockatiel;
Cockatiel.possibleColors = ["gray" /* PetColor.gray */];
exports.COCKATIEL_NAMES = [
    'Cocktail',
    'Pipsqueak',
    'Sir Chirps a Lot',
    'Nibbles',
    'Lord of the Wings',
    'Girl Nest Door',
    'Wingman',
    'Meryl Cheep',
    'Jack Sparrow',
    'Godfeather',
    'Mickey',
    'Baquack Obama',
    'Dame Judi Finch',
    'Kanye Nest',
    'Speck',
    'Cheecky',
    'Arthur',
    'Paco',
    'Bobo',
    'Walt',
    'Happy',
    'Junior',
    'Coco',
    'Yoyo',
    'Milo',
    'Skipper',
    'Scarlet',
    'Diva',
    'Ursula',
    'Donna',
    'Lola',
    'Kiko',
    'Luna',
];


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CRAB_NAMES = exports.Crab = void 0;
const basepettype_1 = __webpack_require__(5);
class Crab extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'crab';
        this.sequence = {
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
    }
    get emoji() {
        return '🦀';
    }
    get hello() {
        return ` Hi, I'm Crabsolutely Clawsome Crab 👋!`;
    }
}
exports.Crab = Crab;
Crab.possibleColors = ["red" /* PetColor.red */];
exports.CRAB_NAMES = [
    'Ferris',
    'Pinchy',
    'Grabby',
    'Big Red',
    'Crabby',
    'Buddy',
    'Ruby Red',
    'Oscar',
    'Lucy',
    'Bailey',
    'Crabito',
    'Percy',
    'Rocky',
    'Mr. Krabs',
    'Shelly',
    'Santa Claws',
    'Clawdia',
    'Scuttle',
    'Snappy',
    'Hermit',
    'Horseshoe',
    'Snapper',
    'Coconut',
    'Sebastian',
    'Abby',
    'Bubbles',
    'Bait',
    'Big Mac',
    'Biggie',
    'Claws',
    'Copper',
    'Crabette',
    'Crabina',
    'Crabmister',
    'Crusty',
    'Crabcake',
    'Digger',
    'Nipper',
    'Pincer',
    'Poopsie',
    'Recluse',
    'Salty',
    'Squirt',
    'Groucho',
    'Grumpy',
    'Lenny Krabitz',
    'Leonardo DaPinchy',
    'Peeves',
    'Penny Pincher',
    'Prickl',
];


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DENO_NAMES = exports.Deno = void 0;
const basepettype_1 = __webpack_require__(5);
class Deno extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'deno';
        this.sequence = {
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
    }
    get emoji() {
        return '🦕';
    }
    get hello() {
        return `I ❤️ TS`;
    }
}
exports.Deno = Deno;
Deno.possibleColors = ["green" /* PetColor.green */];
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


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOG_NAMES = exports.Dog = void 0;
const basepettype_1 = __webpack_require__(5);
class Dog extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'dog';
        this.sequence = {
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
                    possibleNextStates: [
                        "walk-right" /* States.walkRight */,
                        "walk-left" /* States.walkLeft */,
                        "run-left" /* States.runLeft */,
                        "run-right" /* States.runRight */,
                    ],
                },
            ],
        };
    }
    get emoji() {
        return '🐶';
    }
    get hello() {
        return ` Every dog has its day - and today is woof day! Today I just want to bark. Take me on a walk`;
    }
}
exports.Dog = Dog;
Dog.possibleColors = [
    "black" /* PetColor.black */,
    "brown" /* PetColor.brown */,
    "white" /* PetColor.white */,
    "red" /* PetColor.red */,
    "akita" /* PetColor.akita */,
];
exports.DOG_NAMES = [
    'Bella',
    'Charlie',
    'Max',
    'Molly',
    'Coco',
    'Buddy',
    'Ruby',
    'Oscar',
    'Lucy',
    'Bailey',
    'Milo',
    'Daisy',
    'Archie',
    'Ollie',
    'Rosie',
    'Lola',
    'Frankie',
    'Toby',
    'Roxy',
    'Poppy',
    'Luna',
    'Jack',
    'Millie',
    'Teddy',
    'Harry',
    'Cooper',
    'Bear',
    'Rocky',
    'Alfie',
    'Hugo',
    'Bonnie',
    'Pepper',
    'Lily',
    'Leo',
    'Maggie',
    'George',
    'Mia',
    'Marley',
    'Harley',
    'Chloe',
    'Lulu',
    'Jasper',
    'Billy',
    'Nala',
    'Monty',
    'Ziggy',
    'Winston',
    'Zeus',
    'Zoe',
    'Stella',
    'Sasha',
    'Rusty',
    'Gus',
    'Baxter',
    'Dexter',
    'Diesel',
    'Willow',
    'Barney',
    'Bruno',
    'Penny',
    'Honey',
    'Milly',
    'Murphy',
    'Holly',
    'Benji',
    'Henry',
    'Lilly',
    'Pippa',
    'Shadow',
    'Sam',
    'Buster',
    'Lucky',
    'Ellie',
    'Duke',
    'Jessie',
    'Cookie',
    'Harvey',
    'Bruce',
    'Jax',
    'Rex',
    'Louie',
    'Bentley',
    'Jet',
    'Banjo',
    'Beau',
    'Ella',
    'Ralph',
    'Loki',
    'Lexi',
    'Chester',
    'Sophie',
    'Billie',
    'Louis',
    'Charlie',
    'Cleo',
    'Spot',
    'Harry',
    'Bolt',
    'Ein',
    'Maddy',
    'Ghost',
    'Midnight',
    'Pumpkin',
    'Shadow',
    'Sparky',
    'Linus',
    'Cody',
    'Slinky',
    'Toto',
    'Balto',
    'Golfo',
    'Pongo',
    'Beethoven',
    'Hachiko',
    'Scooby',
    'Clifford',
    'Astro',
    'Goofy',
    'Chip',
    'Einstein',
    'Fang',
    'Truman',
    'Uggie',
    'Bingo',
    'Blue',
    'Cometa',
    'Krypto',
    'Huesos',
    'Odie',
    'Snoopy',
    'Aisha',
    'Moly',
    'Chiquita',
    'Chavela',
    'Tramp',
    'Lady',
    'Puddles',
];


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FOX_NAMES = exports.Fox = void 0;
const basepettype_1 = __webpack_require__(5);
class Fox extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'fox';
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [
                {
                    state: "sit-idle" /* States.sitIdle */,
                    possibleNextStates: [
                        "lie" /* States.lie */,
                        "walk-right" /* States.walkRight */,
                        "walk-left" /* States.walkLeft */,
                        "run-right" /* States.runRight */,
                        "run-left" /* States.runLeft */,
                    ],
                },
                {
                    state: "lie" /* States.lie */,
                    possibleNextStates: [
                        "walk-right" /* States.walkRight */,
                        "walk-left" /* States.walkLeft */,
                        "run-right" /* States.runRight */,
                        "run-left" /* States.runLeft */,
                    ],
                },
                {
                    state: "walk-right" /* States.walkRight */,
                    possibleNextStates: [
                        "sit-idle" /* States.sitIdle */,
                        "walk-left" /* States.walkLeft */,
                        "run-left" /* States.runLeft */,
                    ],
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
                    state: "run-right" /* States.runRight */,
                    possibleNextStates: [
                        "lie" /* States.lie */,
                        "sit-idle" /* States.sitIdle */,
                        "walk-left" /* States.walkLeft */,
                        "run-left" /* States.runLeft */,
                    ],
                },
                {
                    state: "run-left" /* States.runLeft */,
                    possibleNextStates: [
                        "lie" /* States.lie */,
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
                        "lie" /* States.lie */,
                        "walk-right" /* States.walkRight */,
                        "walk-left" /* States.walkLeft */,
                        "run-right" /* States.runRight */,
                        "run-left" /* States.runLeft */,
                    ],
                },
            ],
        };
    }
    get emoji() {
        return '🦊';
    }
    get hello() {
        return `fox says hello`;
    }
}
exports.Fox = Fox;
Fox.possibleColors = ["red" /* PetColor.red */, "white" /* PetColor.white */];
exports.FOX_NAMES = [
    'Arizona',
    'Frankie',
    'Rosy',
    'Cinnamon',
    'Ginger',
    'Todd',
    'Rocky',
    'Felix',
    'Sandy',
    'Archie',
    'Flynn',
    'Foxy',
    'Elmo',
    'Ember',
    'Hunter',
    'Otto',
    'Sonic',
    'Amber',
    'Maroon',
    'Spark',
    'Sparky',
    'Sly',
    'Scout',
    'Penny',
    'Ash',
    'Rose',
    'Apollo',
    'Chili',
    'Blaze',
    'Radish',
    'Scarlett',
    'Juliet',
    'Goldie',
    'Rooney',
    'Paprika',
    'Alpine',
    'Rusty',
    'Maple',
    'Vixen',
    'David',
    'Apricot',
    'Claire',
    'Wilma',
    'Copper',
    'Pepper',
    'Crimson',
    'Ariel',
    'Arvi',
    'George',
    'Eva',
    'Fuzzy',
    'Russell',
    'Rufus',
    'Mystic',
    'Leopold',
    'Scully',
    'Ferris',
    'Robin',
    'Zorro',
    'Scarlet',
    'Comet',
    'Rowan',
    'Jake',
    'Hope',
    'Molly',
    'Mars',
    'Apple',
    'Geneva',
    'Redford',
    'Chestnut',
    'Evelyn',
    'Red',
    'Aurora',
    'Agniya',
    'Fitz',
    'Crispin',
    'Sunny',
    'Autumn',
    'Bridget',
    'Ruby',
    'Iris',
    'Pumpkin',
    'Rose',
    'Rosie',
    'Vesta',
    'Adolf',
    'Lava',
    'Conan',
    'Flame',
    'Oswald',
    'Tails',
    'Chester',
    'Jasper',
    'Finch',
    'Scarlet',
    'Chewy',
    'Finnick',
    'Biscuit',
    'Prince Harry',
    'Loki',
    'Pip',
    'Pippin',
];


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FROG_NAMES = exports.Frog = void 0;
const basepettype_1 = __webpack_require__(5);
class Frog extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'frog';
        this.sequence = {
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
    }
    get emoji() {
        return '🐸';
    }
    get hello() {
        return Math.random() > 0.5 ? `croak...` : `ribbit!`;
    }
}
exports.Frog = Frog;
Frog.possibleColors = ["red" /* PetColor.red */, "green" /* PetColor.green */, "blue" /* PetColor.blue */];
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


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MOD_NAMES = exports.Mod = void 0;
const basepettype_1 = __webpack_require__(5);
class Mod extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'mod';
        this.sequence = {
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
    }
    get emoji() {
        return '🤖';
    }
    get hello() {
        return ` Hi, I'm Mod the dotnet bot, what are you building today?`;
    }
}
exports.Mod = Mod;
Mod.possibleColors = ["purple" /* PetColor.purple */];
exports.MOD_NAMES = [
    'Mod',
    'Moddy',
    'Dotnetbot',
    'Bot',
    'Purple Pal',
    'Ro Bot',
];


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PANDA_NAMES = exports.Panda = void 0;
const basepettype_1 = __webpack_require__(5);
class Panda extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'panda';
        this.sequence = {
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
    }
    get emoji() {
        return '🐼';
    }
    get hello() {
        return `Zzzz bamboo`;
    }
}
exports.Panda = Panda;
Panda.possibleColors = ["black" /* PetColor.black */, "brown" /* PetColor.brown */];
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


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROCKY_NAMES = exports.Rocky = void 0;
const basepettype_1 = __webpack_require__(5);
class Rocky extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'rocky';
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [
                {
                    state: "sit-idle" /* States.sitIdle */,
                    possibleNextStates: ["walk-right" /* States.walkRight */, "run-right" /* States.runRight */],
                },
                {
                    state: "walk-right" /* States.walkRight */,
                    possibleNextStates: ["sit-idle" /* States.sitIdle */, "run-right" /* States.runRight */],
                },
                {
                    state: "run-right" /* States.runRight */,
                    possibleNextStates: ["sit-idle" /* States.sitIdle */, "walk-right" /* States.walkRight */],
                },
            ],
        };
    }
    get emoji() {
        return '💎';
    }
    get canChase() {
        return false;
    }
    get hello() {
        return ` 👋 I'm rock! I always Rock`;
    }
}
exports.Rocky = Rocky;
Rocky.possibleColors = ["gray" /* PetColor.gray */];
exports.ROCKY_NAMES = [
    'Rocky',
    'The Rock',
    'Quartzy',
    'Rocky I',
    'Rocky II',
    'Rocky III',
    'Pebbles Sr.',
    'Big Granite',
    'Boulder',
    'Rockefeller',
    'Pebble',
    'Rocksanne',
    'Rockstar',
    'Onix',
    'Rock and Roll',
    'Dolomite',
    'Granite',
    'Miss Marble',
    'Rock On',
    'Amberstone',
    'Rock With Me',
    'Rock On It',
    'Rock Out',
];


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DUCK_NAMES = exports.RubberDuck = void 0;
const basepettype_1 = __webpack_require__(5);
class RubberDuck extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'rubber-duck';
        this.sequence = {
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
    }
    get emoji() {
        return '🐥';
    }
    get hello() {
        return ` Hi, I love to quack around 👋!`;
    }
}
exports.RubberDuck = RubberDuck;
RubberDuck.possibleColors = ["yellow" /* PetColor.yellow */];
exports.DUCK_NAMES = [
    'Quacky',
    'Floaty',
    'Duck',
    'Molly',
    'Sunshine',
    'Buddy',
    'Chirpy',
    'Oscar',
    'Lucy',
    'Bailey',
    'Beaky',
    'Jemima',
    'Peaches',
    'Quackers',
    'Jelly Beans',
    'Donald',
    'Chady',
    'Waddles',
    'Bill',
    'Bubbles',
    'James Pond',
    'Moby Duck',
    'Quack Sparrow',
    'Peanut',
    'Psyduck',
    'Mr Quack',
    'Louie',
    'Golduck',
    'Daisy',
    'Pickles',
    'Ducky Duck',
    'Mrs Fluffs',
    'Squeek',
    'Ace',
    'Rubberduck',
    'Mrs Beak',
    'April',
    'Tutu',
    'Billy the duck',
    'Ducky',
    'Neco',
    'Dodo',
    'Colonel',
    'Franklin',
    'Emmett',
    'Bubba',
    'Dillard',
    'Duncan',
    'Pogo',
    'Uno',
    'Peanut',
    'Nero',
    'Mowgli',
    'Eggspresso',
    'Webster',
    'Quacker Jack',
    'Plucker',
    'Meeko',
];


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SNAIL_NAMES = exports.Snail = void 0;
const basepettype_1 = __webpack_require__(5);
class Snail extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'snail';
        this.sequence = {
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
    }
    get emoji() {
        return '🐌';
    }
    get hello() {
        return 'hello! 👋';
    }
}
exports.Snail = Snail;
Snail.possibleColors = ["brown" /* PetColor.brown */];
exports.SNAIL_NAMES = [
    'Flash',
    'Sonwy',
    'Shally',
    'Taggy',
];


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SNAKE_NAMES = exports.Snake = void 0;
const basepettype_1 = __webpack_require__(5);
class Snake extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'snake';
        this.sequence = {
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
    }
    get emoji() {
        return '🐍';
    }
    get hello() {
        return `Sss... Oh. Oh my gosh! I'm a snake!`;
    }
}
exports.Snake = Snake;
Snake.possibleColors = ["green" /* PetColor.green */];
exports.SNAKE_NAMES = [
    'Sneaky',
    'Mr Slippery',
    'Hissy Elliott',
    'Molly',
    'Coco',
    'Buddy',
    'Ruby',
    'Bailey',
    'Max',
    'Seb',
    'Kaa',
    'Mr Hiss',
    'Miss Hiss',
    'Snaku',
    'Kaa',
    'Madame Snake',
    'Sir Hiss',
    'Loki',
    'Steelix',
    'Gyarados',
    'Seviper',
    'Ekanes',
    'Arbok',
    'Snivy',
    'Servine',
    'Serperior',
    'Mojo',
    'Moss',
    'Nigel',
    'Tootsie',
    'Sammy',
    'Ziggy',
    'Asmodeus',
    'Attila',
    'Basil',
    'Diablo',
    'Eden',
    'Eve',
    'Heaven',
    'Hydra',
    'Indiana',
    'Jafaar',
    'Kaa',
    'Medusa',
    'Naga',
    'Severus',
    'Slytherin',
    'Snape',
    'Raven',
    'Slider',
    'Slinky',
    'Stripes',
];


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TOTORO_NAMES = exports.Totoro = void 0;
const basepettype_1 = __webpack_require__(5);
class Totoro extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'totoro';
        this.sequence = {
            startingState: "sit-idle" /* States.sitIdle */,
            sequenceStates: [
                {
                    state: "sit-idle" /* States.sitIdle */,
                    possibleNextStates: ["walk-right" /* States.walkRight */, "lie" /* States.lie */],
                },
                {
                    state: "lie" /* States.lie */,
                    possibleNextStates: ["walk-right" /* States.walkRight */, "walk-left" /* States.walkLeft */],
                },
                {
                    state: "walk-right" /* States.walkRight */,
                    possibleNextStates: ["walk-left" /* States.walkLeft */, "sit-idle" /* States.sitIdle */],
                },
                {
                    state: "walk-left" /* States.walkLeft */,
                    possibleNextStates: [
                        "sit-idle" /* States.sitIdle */,
                        "climb-wall-left" /* States.climbWallLeft */,
                        "sit-idle" /* States.sitIdle */,
                    ],
                },
                {
                    state: "climb-wall-left" /* States.climbWallLeft */,
                    possibleNextStates: ["wall-hang-left" /* States.wallHangLeft */],
                },
                {
                    state: "wall-hang-left" /* States.wallHangLeft */,
                    possibleNextStates: ["jump-down-left" /* States.jumpDownLeft */],
                },
                {
                    state: "jump-down-left" /* States.jumpDownLeft */,
                    possibleNextStates: ["land" /* States.land */],
                },
                {
                    state: "land" /* States.land */,
                    possibleNextStates: [
                        "sit-idle" /* States.sitIdle */,
                        "walk-right" /* States.walkRight */,
                        "lie" /* States.lie */,
                    ],
                },
                {
                    state: "chase" /* States.chase */,
                    possibleNextStates: ["idle-with-ball" /* States.idleWithBall */],
                },
                {
                    state: "idle-with-ball" /* States.idleWithBall */,
                    possibleNextStates: ["walk-right" /* States.walkRight */, "walk-left" /* States.walkLeft */],
                },
            ],
        };
    }
    get emoji() {
        return '🐾';
    }
    get hello() {
        return `Try Laughing. Then Whatever Scares You Will Go Away. 🎭`;
    }
}
exports.Totoro = Totoro;
Totoro.possibleColors = ["gray" /* PetColor.gray */];
exports.TOTORO_NAMES = [
    'Totoro',
    'トトロ',
    'Max',
    'Molly',
    'Coco',
    'Buddy',
    'Ruby',
    'Oscar',
    'Lucy',
    'Bailey',
    'Big fella',
];


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZAPPY_NAMES = exports.Zappy = void 0;
const basepettype_1 = __webpack_require__(5);
class Zappy extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'zappy';
        this.sequence = {
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
    }
    get emoji() {
        return '⚡';
    }
    get hello() {
        // TODO: #193 Add a custom message for zappy
        return ` Hello this is Zappy! Do I look familiar?? I am the mascot for Azure Functions😉`;
    }
}
exports.Zappy = Zappy;
Zappy.possibleColors = ["yellow" /* PetColor.yellow */];
exports.ZAPPY_NAMES = [
    'Zappy',
    'Zippy',
    'Zappy Jr.',
    'Zoppy',
    'Zuppy',
    'Zeppy',
    'Big Z',
    'Little z',
    'The Flash',
    'Thor',
    'Electric Bolt',
    'Azula',
    'Lightning Bolt',
    'Power',
    'Sonic',
    'Speedy',
    'Rush',
];


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RAT_NAMES = exports.Rat = void 0;
const basepettype_1 = __webpack_require__(5);
class Rat extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'rat';
        this.sequence = {
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
    }
    get emoji() {
        return '🐀';
    }
    get hello() {
        return `Rat noises...`;
    }
}
exports.Rat = Rat;
Rat.possibleColors = ["gray" /* PetColor.gray */, "white" /* PetColor.white */, "brown" /* PetColor.brown */];
exports.RAT_NAMES = [
    'Molly',
    'Coco',
    'Ruby',
    'Lucy',
    'Milo',
    'Daisy',
    'Archie',
    'Ollie',
    'Rosie',
    'Lola',
    'Frankie',
    'Roxy',
    'Poppy',
    'Luna',
    'Millie',
    'Rocky',
    'Alfie',
    'Hugo',
    'Pepper',
    'Lily',
    'Tilly',
    'Leo',
    'Maggie',
    'Mia',
    'Chloe',
    'Lulu',
    'Missy',
    'Jasper',
    'Billy',
    'Nala',
    'Ziggy',
    'Zoe',
    'Penny',
    'Milly',
    'Holly',
    'Henry',
    'Lilly',
    'Pippa',
    'Shadow',
    'Lucky',
    'Duke',
    'Jessie',
    'Cookie',
    'Bruce',
    'Jax',
    'Rex',
    'Louie',
    'Jet',
    'Banjo',
    'Beau',
    'Ella',
    'Ralph',
    'Loki',
    'Lexi',
    'Chilli',
    'Billie',
    'Louis',
    'Scout',
    'Cleo',
    'Spot',
    'Bolt',
    'Ginger',
    'Daisy',
    'Amelia',
    'Oliver',
    'Ghost',
    'Midnight',
    'Pumpkin',
    'Shadow',
    'Binx',
    'Riley',
    'Lenny',
    'Mango',
    'Boo',
    'Botas',
    'Romeo',
    'Simon',
    'Mimmo',
    'Carlotta',
    'Felix',
    'Duchess',
    'Walter',
    'Jesse',
    'Hank',
    'Gus',
    'Mike',
    'Saul',
    'Hector',
    'Tuco',
    'Jupiter',
    'Venus',
    'Apollo',
    'Alexandrite',
    'Amazonite',
    'Flint',
    'Jett',
    'Kyanite',
    'Mica',
    'Micah',
    'Splinter',
    'Remy',
];


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TURTLE_NAMES = exports.Turtle = void 0;
const basepettype_1 = __webpack_require__(5);
class Turtle extends basepettype_1.BasePetType {
    constructor() {
        super(...arguments);
        this.label = 'turtle';
        this.sequence = {
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
                    possibleNextStates: [
                        "walk-right" /* States.walkRight */,
                        "walk-left" /* States.walkLeft */,
                        "run-left" /* States.runLeft */,
                        "run-right" /* States.runRight */,
                    ],
                },
            ],
        };
    }
    get emoji() {
        return '🐢';
    }
    get hello() {
        return ` Slow and steady wins the race!`;
    }
}
exports.Turtle = Turtle;
Turtle.possibleColors = ["green" /* PetColor.green */, "orange" /* PetColor.orange */];
exports.TURTLE_NAMES = [
    'Shelldon',
    'Shelly',
    'Shelley',
    'Sheldon',
    'Tortuga',
    'Tortellini',
    'Charlie',
    'Ross',
    'Squirt',
    'Crush',
    'Squirtle',
    'Koopa',
    'Bowser',
    'Bowsette',
    'Franklin',
    'Koopa Troopa',
    'Blastoise',
    'Cecil',
    'Wartortle',
    'Donatello',
    'Michaelangelo',
    'Leonardo',
    'Leo',
    'Donny',
    'Mikey',
    'Raphael',
    'Chelone',
    'Emily',
    'Joseph',
    'Anne',
    'Zagreus',
    'Kratos',
    'Atreus',
    'Loki',
    'Freya',
    'Brevity',
    'Arthur',
    'Doyle',
    'Sherlock',
    'Charli',
];


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HORSE_NAMES = exports.Horse = void 0;
const basepettype_1 = __webpack_require__(5);
const states_1 = __webpack_require__(6);
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
        this.label = 'horse';
        this.sequence = {
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
    }
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
Horse.possibleColors = [
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


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringListAsQuickPickItemList = exports.TranslatedQuickPickItem = void 0;
const vscode = __webpack_require__(1);
class TranslatedQuickPickItem {
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
}
exports.TranslatedQuickPickItem = TranslatedQuickPickItem;
function stringListAsQuickPickItemList(collection) {
    return collection.map((el) => {
        return { label: vscode.l10n.t(String(el)), value: el };
    });
}
exports.stringListAsQuickPickItemList = stringListAsQuickPickItemList;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeColor = exports.availableColors = exports.createPet = exports.InvalidPetException = exports.PetCollection = exports.PetElement = void 0;
const bunny_1 = __webpack_require__(4);
const cat_1 = __webpack_require__(7);
const chicken_1 = __webpack_require__(8);
const clippy_1 = __webpack_require__(10);
const cockatiel_1 = __webpack_require__(11);
const crab_1 = __webpack_require__(12);
const deno_1 = __webpack_require__(13);
const dog_1 = __webpack_require__(14);
const fox_1 = __webpack_require__(15);
const frog_1 = __webpack_require__(16);
const horse_1 = __webpack_require__(27);
const mod_1 = __webpack_require__(17);
const morph_1 = __webpack_require__(9);
const panda_1 = __webpack_require__(18);
const rat_1 = __webpack_require__(25);
const rocky_1 = __webpack_require__(19);
const rubberduck_1 = __webpack_require__(20);
const snail_1 = __webpack_require__(21);
const snake_1 = __webpack_require__(22);
const totoro_1 = __webpack_require__(23);
const turtle_1 = __webpack_require__(26);
const zappy_1 = __webpack_require__(24);
class PetElement {
    remove() {
        this.el.remove();
        this.collision.remove();
        this.speech.remove();
        this.color = "null" /* PetColor.null */;
        this.type = "null" /* PetType.null */;
    }
    constructor(el, collision, speech, pet, color, type) {
        this.el = el;
        this.collision = collision;
        this.speech = speech;
        this.pet = pet;
        this.color = color;
        this.type = type;
    }
}
exports.PetElement = PetElement;
class PetCollection {
    constructor() {
        this._pets = new Array(0);
    }
    get pets() {
        return this._pets;
    }
    push(pet) {
        this._pets.push(pet);
    }
    reset() {
        this._pets.forEach((pet) => {
            pet.remove();
        });
        this._pets = [];
    }
    locate(name) {
        return this._pets.find((collection) => {
            return collection.pet.name === name;
        });
    }
    locatePet(name, type, color) {
        return this._pets.find((collection) => {
            return (collection.pet.name === name &&
                collection.type === type &&
                collection.color === color);
        });
    }
    remove(targetPet) {
        this._pets.forEach((pet) => {
            if (pet === targetPet) {
                pet.remove();
            }
        });
        this._pets = this._pets.filter((pet) => {
            return pet !== targetPet;
        });
    }
    seekNewFriends() {
        if (this._pets.length <= 1) {
            return;
        } // You can't be friends with yourself.
        const theFriendless = this._pets.filter((pet) => !pet.pet.hasFriend);
        if (theFriendless.length <= 1) {
            return;
        } // Nobody to be friends with.
        theFriendless.forEach((lonelyPet) => {
            const potentialFriends = theFriendless.filter((pet) => pet !== lonelyPet); // Exclude the lonely pet itself.
            potentialFriends.forEach((potentialFriend) => {
                if (!potentialFriend.pet.canChase) {
                    return;
                } // Pet is busy doing something else.
                if (potentialFriend.pet.left > lonelyPet.pet.left &&
                    potentialFriend.pet.left <
                        lonelyPet.pet.left + lonelyPet.pet.width) {
                    // We found a possible new friend..
                    console.log(lonelyPet.pet.name, ' wants to be friends with ', potentialFriend.pet.name, '.');
                    if (lonelyPet.pet.makeFriendsWith(potentialFriend.pet)) {
                        potentialFriend.pet.showSpeechBubble('❤️', 2000);
                        lonelyPet.pet.showSpeechBubble('❤️', 2000);
                    }
                }
            });
        });
    }
}
exports.PetCollection = PetCollection;
class InvalidPetException {
    constructor(message) {
        this.message = message;
    }
}
exports.InvalidPetException = InvalidPetException;
function createPet(petType, el, collision, speech, size, left, bottom, petRoot, floor, name) {
    if (name === undefined || name === null || name === '') {
        throw new InvalidPetException('name is undefined');
    }
    const standardPetArguments = [el, collision, speech, size, left, bottom, petRoot, floor, name];
    switch (petType) {
        case "bunny" /* PetType.bunny */:
            return new bunny_1.Bunny(...standardPetArguments, 5 /* PetSpeed.veryFast */);
        case "cat" /* PetType.cat */:
            return new cat_1.Cat(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "chicken" /* PetType.chicken */:
            return new chicken_1.Chicken(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "deno" /* PetType.deno */:
            return new deno_1.Deno(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "dog" /* PetType.dog */:
            return new dog_1.Dog(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "fox" /* PetType.fox */:
            return new fox_1.Fox(...standardPetArguments, 4 /* PetSpeed.fast */);
        case "frog" /* PetType.frog */:
            return new frog_1.Frog(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "crab" /* PetType.crab */:
            return new crab_1.Crab(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "clippy" /* PetType.clippy */:
            return new clippy_1.Clippy(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "mod" /* PetType.mod */:
            return new mod_1.Mod(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "totoro" /* PetType.totoro */:
            return new totoro_1.Totoro(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "snail" /* PetType.snail */:
            return new snail_1.Snail(...standardPetArguments, 1 /* PetSpeed.verySlow */);
        case "snake" /* PetType.snake */:
            return new snake_1.Snake(...standardPetArguments, 1 /* PetSpeed.verySlow */);
        case "rubber-duck" /* PetType.rubberduck */:
            return new rubberduck_1.RubberDuck(...standardPetArguments, 4 /* PetSpeed.fast */);
        case "zappy" /* PetType.zappy */:
            return new zappy_1.Zappy(...standardPetArguments, 5 /* PetSpeed.veryFast */);
        case "rocky" /* PetType.rocky */:
            return new rocky_1.Rocky(...standardPetArguments, 0 /* PetSpeed.still */);
        case "cockatiel" /* PetType.cockatiel */:
            return new cockatiel_1.Cockatiel(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "rat" /* PetType.rat */:
            return new rat_1.Rat(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "turtle" /* PetType.turtle */:
            return new turtle_1.Turtle(...standardPetArguments, 1 /* PetSpeed.verySlow */);
        case "horse" /* PetType.horse */:
            return new horse_1.Horse(...standardPetArguments, 3 /* PetSpeed.normal */);
        case "panda" /* PetType.panda */:
            return new panda_1.Panda(...standardPetArguments, 2 /* PetSpeed.slow */);
        case "morph" /* PetType.morph */:
            return new morph_1.Morph(...standardPetArguments, 3 /* PetSpeed.normal */);
        default:
            throw new InvalidPetException("Pet type doesn't exist");
    }
}
exports.createPet = createPet;
function availableColors(petType) {
    switch (petType) {
        case "bunny" /* PetType.bunny */:
            return bunny_1.Bunny.possibleColors;
        case "cat" /* PetType.cat */:
            return cat_1.Cat.possibleColors;
        case "chicken" /* PetType.chicken */:
            return chicken_1.Chicken.possibleColors;
        case "morph" /* PetType.morph */:
            return morph_1.Morph.possibleColors;
        case "dog" /* PetType.dog */:
            return dog_1.Dog.possibleColors;
        case "deno" /* PetType.deno */:
            return deno_1.Deno.possibleColors;
        case "fox" /* PetType.fox */:
            return fox_1.Fox.possibleColors;
        case "frog" /* PetType.frog */:
            return frog_1.Frog.possibleColors;
        case "crab" /* PetType.crab */:
            return crab_1.Crab.possibleColors;
        case "clippy" /* PetType.clippy */:
            return clippy_1.Clippy.possibleColors;
        case "mod" /* PetType.mod */:
            return mod_1.Mod.possibleColors;
        case "totoro" /* PetType.totoro */:
            return totoro_1.Totoro.possibleColors;
        case "snail" /* PetType.snail */:
            return snail_1.Snail.possibleColors;
        case "snake" /* PetType.snake */:
            return snake_1.Snake.possibleColors;
        case "rubber-duck" /* PetType.rubberduck */:
            return rubberduck_1.RubberDuck.possibleColors;
        case "zappy" /* PetType.zappy */:
            return zappy_1.Zappy.possibleColors;
        case "rocky" /* PetType.rocky */:
            return rocky_1.Rocky.possibleColors;
        case "cockatiel" /* PetType.cockatiel */:
            return cockatiel_1.Cockatiel.possibleColors;
        case "rat" /* PetType.rat */:
            return rat_1.Rat.possibleColors;
        case "turtle" /* PetType.turtle */:
            return turtle_1.Turtle.possibleColors;
        case "horse" /* PetType.horse */:
            return horse_1.Horse.possibleColors;
        case "panda" /* PetType.panda */:
            return panda_1.Panda.possibleColors;
        default:
            throw new InvalidPetException("Pet type doesn't exist");
    }
}
exports.availableColors = availableColors;
/**
 * Some pets can only have certain colors, this makes sure they haven't been misconfigured.
 * @param petColor
 * @param petType
 * @returns normalized color
 */
function normalizeColor(petColor, petType) {
    const colors = availableColors(petType);
    if (colors.includes(petColor)) {
        return petColor;
    }
    else {
        return colors[0];
    }
}
exports.normalizeColor = normalizeColor;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.spawnPetDeactivate = exports.activate = exports.storeCollectionAsMemento = exports.PetSpecification = void 0;
const vscode = __webpack_require__(1);
const types_1 = __webpack_require__(2);
const names_1 = __webpack_require__(3);
const localize = __webpack_require__(28);
const pets_1 = __webpack_require__(29);
const EXTRA_PETS_KEY = 'vscode-pets.extra-pets';
const EXTRA_PETS_KEY_TYPES = EXTRA_PETS_KEY + '.types';
const EXTRA_PETS_KEY_COLORS = EXTRA_PETS_KEY + '.colors';
const EXTRA_PETS_KEY_NAMES = EXTRA_PETS_KEY + '.names';
const DEFAULT_PET_SCALE = "nano" /* PetSize.nano */;
const DEFAULT_COLOR = "brown" /* PetColor.brown */;
const DEFAULT_PET_TYPE = "cat" /* PetType.cat */;
const DEFAULT_POSITION = "panel" /* ExtPosition.panel */;
const DEFAULT_THEME = "none" /* Theme.none */;
class PetQuickPickItem {
    constructor(name_, type, color) {
        this.name_ = name_;
        this.type = type;
        this.color = color;
        this.name = name_;
        this.label = name_;
        this.description = `${color} ${type}`;
    }
}
let webviewViewProvider;
function getConfiguredSize() {
    var size = vscode.workspace
        .getConfiguration('vscode-pets')
        .get('petSize', DEFAULT_PET_SCALE);
    if (types_1.ALL_SCALES.lastIndexOf(size) === -1) {
        size = DEFAULT_PET_SCALE;
    }
    return size;
}
function getConfiguredTheme() {
    var theme = vscode.workspace
        .getConfiguration('vscode-pets')
        .get('theme', DEFAULT_THEME);
    if (types_1.ALL_THEMES.lastIndexOf(theme) === -1) {
        theme = DEFAULT_THEME;
    }
    return theme;
}
function getConfiguredThemeKind() {
    return vscode.window.activeColorTheme.kind;
}
function getConfigurationPosition() {
    return vscode.workspace
        .getConfiguration('vscode-pets')
        .get('position', DEFAULT_POSITION);
}
function getThrowWithMouseConfiguration() {
    return vscode.workspace
        .getConfiguration('vscode-pets')
        .get('throwBallWithMouse', true);
}
function getEffectsDisabledConfiguration() {
    return vscode.workspace
        .getConfiguration('vscode-pets')
        .get('disableEffects', false);
}
function updatePanelDisableEffects() {
    const panel = getPetPanel();
    if (panel !== undefined) {
        panel.updateDisableEffects(getEffectsDisabledConfiguration());
    }
}
function updatePanelThrowWithMouse() {
    const panel = getPetPanel();
    if (panel !== undefined) {
        panel.setThrowWithMouse(getThrowWithMouseConfiguration());
    }
}
async function updateExtensionPositionContext() {
    await vscode.commands.executeCommand('setContext', 'vscode-pets.position', getConfigurationPosition());
}
class PetSpecification {
    constructor(color, type, size, name) {
        this.color = color;
        this.type = type;
        this.size = size;
        if (!name) {
            this.name = (0, names_1.randomName)(type);
        }
        else {
            this.name = name;
        }
    }
    static fromConfiguration() {
        var color = vscode.workspace
            .getConfiguration('vscode-pets')
            .get('petColor', DEFAULT_COLOR);
        if (types_1.ALL_COLORS.lastIndexOf(color) === -1) {
            color = DEFAULT_COLOR;
        }
        var type = vscode.workspace
            .getConfiguration('vscode-pets')
            .get('petType', DEFAULT_PET_TYPE);
        if (types_1.ALL_PETS.lastIndexOf(type) === -1) {
            type = DEFAULT_PET_TYPE;
        }
        return new PetSpecification(color, type, getConfiguredSize());
    }
    static collectionFromMemento(context, size) {
        var contextTypes = context.globalState.get(EXTRA_PETS_KEY_TYPES, []);
        var contextColors = context.globalState.get(EXTRA_PETS_KEY_COLORS, []);
        var contextNames = context.globalState.get(EXTRA_PETS_KEY_NAMES, []);
        var result = new Array();
        for (let index = 0; index < contextTypes.length; index++) {
            result.push(new PetSpecification(contextColors?.[index] ?? DEFAULT_COLOR, contextTypes[index], size, contextNames[index]));
        }
        return result;
    }
}
exports.PetSpecification = PetSpecification;
async function storeCollectionAsMemento(context, collection) {
    var contextTypes = new Array(collection.length);
    var contextColors = new Array(collection.length);
    var contextNames = new Array(collection.length);
    for (let index = 0; index < collection.length; index++) {
        contextTypes[index] = collection[index].type;
        contextColors[index] = collection[index].color;
        contextNames[index] = collection[index].name;
    }
    await context.globalState.update(EXTRA_PETS_KEY_TYPES, contextTypes);
    await context.globalState.update(EXTRA_PETS_KEY_COLORS, contextColors);
    await context.globalState.update(EXTRA_PETS_KEY_NAMES, contextNames);
    context.globalState.setKeysForSync([
        EXTRA_PETS_KEY_TYPES,
        EXTRA_PETS_KEY_COLORS,
        EXTRA_PETS_KEY_NAMES,
    ]);
}
exports.storeCollectionAsMemento = storeCollectionAsMemento;
let spawnPetStatusBar;
async function handleRemovePetMessage(message) {
    var petList = Array();
    switch (message.command) {
        case 'list-pets':
            message.text.split('\n').forEach((pet) => {
                if (!pet) {
                    return;
                }
                var parts = pet.split(',');
                petList.push({
                    type: parts[0],
                    name: parts[1],
                    color: parts[2],
                });
            });
            break;
        default:
            return;
    }
    if (!petList) {
        return;
    }
    if (!petList.length) {
        await vscode.window.showErrorMessage(vscode.l10n.t('There are no pets to remove.'));
        return;
    }
    await vscode.window
        .showQuickPick(petList.map((val) => {
        return new PetQuickPickItem(val.name, val.type, val.color);
    }), {
        placeHolder: vscode.l10n.t('Select the pet to remove.'),
    })
        .then(async (pet) => {
        if (pet) {
            const panel = getPetPanel();
            if (panel !== undefined) {
                panel.deletePet(pet.name, pet.type, pet.color);
                const collection = petList
                    .filter((item) => {
                    return item.name !== pet.name;
                })
                    .map((item) => {
                    return new PetSpecification(item.color, item.type, "medium" /* PetSize.medium */, item.name);
                });
                await storeCollectionAsMemento(this, collection);
            }
        }
    });
}
function getPetPanel() {
    if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
        webviewViewProvider) {
        return webviewViewProvider;
    }
    else if (PetPanel.currentPanel) {
        return PetPanel.currentPanel;
    }
    else {
        return undefined;
    }
}
function getWebview() {
    if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
        webviewViewProvider) {
        return webviewViewProvider.getWebview();
    }
    else if (PetPanel.currentPanel) {
        return PetPanel.currentPanel.getWebview();
    }
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.start', async () => {
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
            webviewViewProvider) {
            await vscode.commands.executeCommand('petsView.focus');
        }
        else {
            const spec = PetSpecification.fromConfiguration();
            PetPanel.createOrShow(context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
            if (PetPanel.currentPanel) {
                var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
                collection.forEach((item) => {
                    PetPanel.currentPanel?.spawnPet(item);
                });
                // Store the collection in the memento, incase any of the null values (e.g. name) have been set
                await storeCollectionAsMemento(context, collection);
            }
        }
    }));
    spawnPetStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    spawnPetStatusBar.command = 'vscode-pets.spawn-pet';
    context.subscriptions.push(spawnPetStatusBar);
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBar));
    context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBar));
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateExtensionPositionContext));
    updateStatusBar();
    const spec = PetSpecification.fromConfiguration();
    webviewViewProvider = new PetWebviewViewProvider(context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
    updateExtensionPositionContext().catch((e) => {
        console.error(e);
    });
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(PetWebviewViewProvider.viewType, webviewViewProvider));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.throw-ball', () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.throwBall();
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.delete-pet', async () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.listPets();
            getWebview()?.onDidReceiveMessage(handleRemovePetMessage, context);
        }
        else {
            await createPetPlayground(context);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.roll-call', async () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.rollCall();
        }
        else {
            await createPetPlayground(context);
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.export-pet-list', async () => {
        const pets = PetSpecification.collectionFromMemento(context, getConfiguredSize());
        const petJson = JSON.stringify(pets, null, 2);
        const fileName = `pets-${Date.now()}.json`;
        if (!vscode.workspace.workspaceFolders) {
            await vscode.window.showErrorMessage(vscode.l10n.t('You must have a folder or workspace open to export pets.'));
            return;
        }
        const filePath = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, fileName);
        const newUri = vscode.Uri.file(fileName).with({
            scheme: 'untitled',
            path: filePath.fsPath,
        });
        await vscode.workspace
            .openTextDocument(newUri)
            .then(async (doc) => {
            await vscode.window
                .showTextDocument(doc)
                .then(async (editor) => {
                await editor.edit((edit) => {
                    edit.insert(new vscode.Position(0, 0), petJson);
                });
            });
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.import-pet-list', async () => {
        const options = {
            canSelectMany: false,
            openLabel: 'Open pets.json',
            filters: {
                json: ['json'],
            },
        };
        const fileUri = await vscode.window.showOpenDialog(options);
        if (fileUri && fileUri[0]) {
            console.log('Selected file: ' + fileUri[0].fsPath);
            try {
                const fileContents = await vscode.workspace.fs.readFile(fileUri[0]);
                const petsToLoad = JSON.parse(String.fromCharCode.apply(null, Array.from(fileContents)));
                // load the pets into the collection
                var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
                // fetch just the pet types
                const panel = getPetPanel();
                for (let i = 0; i < petsToLoad.length; i++) {
                    const pet = petsToLoad[i];
                    const petSpec = new PetSpecification((0, pets_1.normalizeColor)(pet.color, pet.type), pet.type, pet.size, pet.name);
                    collection.push(petSpec);
                    if (panel !== undefined) {
                        panel.spawnPet(petSpec);
                    }
                }
                await storeCollectionAsMemento(context, collection);
            }
            catch (e) {
                await vscode.window.showErrorMessage(vscode.l10n.t('Failed to import pets: {0}', e?.message));
            }
        }
    }));
    const pathExists = async (uri) => {
        try {
            await vscode.workspace.fs.stat(uri);
            return true; // File exists
        }
        catch {
            return false; // File doesn't exist
        }
    };
    const getPetIconPath = async (petType, color) => {
        if (color) {
            const colorClean = color.replace(' ', '_');
            const iconColorUri = vscode.Uri.joinPath(context.extensionUri, 'media', petType, `icon_${colorClean}.png`);
            if (await pathExists(iconColorUri)) {
                return iconColorUri;
            }
        }
        const iconUri = vscode.Uri.joinPath(context.extensionUri, 'media', petType, 'icon.png');
        if (await pathExists(iconUri)) {
            return iconUri;
        }
        // No custom icon found, use fallback
        return vscode.Uri.joinPath(context.extensionUri, 'media', 'cat.svg');
    };
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.spawn-pet', async () => {
        const panel = getPetPanel();
        if (getConfigurationPosition() === "explorer" /* ExtPosition.explorer */ &&
            webviewViewProvider) {
            await vscode.commands.executeCommand('petsView.focus');
        }
        if (panel) {
            // Create QuickPick items with proper icon paths
            const quickPickItems = await Promise.all(localize
                .stringListAsQuickPickItemList(types_1.ALL_PETS)
                .map(async (qpi) => ({
                ...qpi,
                iconPath: await getPetIconPath(qpi.value),
            })));
            const selectedPetType = await vscode.window.showQuickPick(quickPickItems, {
                placeHolder: vscode.l10n.t('Select a pet'),
            });
            if (selectedPetType === undefined) {
                console.log('Cancelled Spawning Pet - No Pet Type Selected');
                return;
            }
            var petColor = DEFAULT_COLOR;
            const possibleColors = (0, pets_1.availableColors)(selectedPetType.value);
            if (possibleColors.length > 1) {
                const colorQuickPickItems = await Promise.all(localize
                    .stringListAsQuickPickItemList(possibleColors)
                    .map(async (qpi) => ({
                    ...qpi,
                    iconPath: await getPetIconPath(selectedPetType.value, qpi.value),
                })));
                var selectedColor = await vscode.window.showQuickPick(colorQuickPickItems, {
                    placeHolder: vscode.l10n.t('Select a color'),
                });
                if (selectedColor === undefined) {
                    console.log('Cancelled Spawning Pet - No Pet Color Selected');
                    return;
                }
                petColor = selectedColor.value;
            }
            else {
                petColor = possibleColors[0];
            }
            if (petColor === undefined) {
                console.log('Cancelled Spawning Pet - No Pet Color Selected');
                return;
            }
            const name = await vscode.window.showInputBox({
                placeHolder: vscode.l10n.t('Leave blank for a random name'),
                prompt: vscode.l10n.t('Name your pet'),
                value: (0, names_1.randomName)(selectedPetType.value),
            });
            const spec = new PetSpecification(petColor, selectedPetType.value, getConfiguredSize(), name);
            if (!spec.type || !spec.color || !spec.size) {
                return vscode.window.showWarningMessage(vscode.l10n.t('Cancelled Spawning Pet'));
            }
            else if (spec) {
                panel.spawnPet(spec);
            }
            var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
            collection.push(spec);
            await storeCollectionAsMemento(context, collection);
        }
        else {
            await createPetPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pet Playground has been created. You can now use the 'Spawn Additional Pet' Command to add more pets."));
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-pets.remove-all-pets', async () => {
        const panel = getPetPanel();
        if (panel !== undefined) {
            panel.resetPets();
            await storeCollectionAsMemento(context, []);
        }
        else {
            await createPetPlayground(context);
            await vscode.window.showInformationMessage(vscode.l10n.t("A Pet Playground has been created. You can now use the 'Remove All Pets' Command to remove all pets."));
        }
    }));
    // Listening to configuration changes
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration('vscode-pets.petColor') ||
            e.affectsConfiguration('vscode-pets.petType') ||
            e.affectsConfiguration('vscode-pets.petSize') ||
            e.affectsConfiguration('vscode-pets.theme') ||
            e.affectsConfiguration('workbench.colorTheme')) {
            const spec = PetSpecification.fromConfiguration();
            const panel = getPetPanel();
            if (panel) {
                panel.updatePetColor(spec.color);
                panel.updatePetSize(spec.size);
                panel.updatePetType(spec.type);
                panel.updateTheme(getConfiguredTheme(), getConfiguredThemeKind());
                panel.update();
            }
        }
        if (e.affectsConfiguration('vscode-pets.position')) {
            void updateExtensionPositionContext();
        }
        if (e.affectsConfiguration('vscode-pets.throwBallWithMouse')) {
            updatePanelThrowWithMouse();
        }
        if (e.affectsConfiguration('vscode-pets.disableEffects')) {
            updatePanelDisableEffects();
        }
    }));
    if (vscode.window.registerWebviewPanelSerializer) {
        // Make sure we register a serializer in activation event
        vscode.window.registerWebviewPanelSerializer(PetPanel.viewType, {
            async deserializeWebviewPanel(webviewPanel) {
                // Reset the webview options so we use latest uri for `localResourceRoots`.
                webviewPanel.webview.options = getWebviewOptions(context.extensionUri);
                const spec = PetSpecification.fromConfiguration();
                PetPanel.revive(webviewPanel, context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
            },
        });
    }
}
exports.activate = activate;
function updateStatusBar() {
    spawnPetStatusBar.text = `$(squirrel)`;
    spawnPetStatusBar.tooltip = vscode.l10n.t('Spawn Pet');
    spawnPetStatusBar.show();
}
function spawnPetDeactivate() {
    spawnPetStatusBar.dispose();
}
exports.spawnPetDeactivate = spawnPetDeactivate;
function getWebviewOptions(extensionUri) {
    return {
        // Enable javascript in the webview
        enableScripts: true,
        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
    };
}
class PetWebviewContainer {
    constructor(extensionUri, color, type, size, theme, themeKind, throwBallWithMouse, disableEffects) {
        this._disposables = [];
        this._extensionUri = extensionUri;
        this._petColor = color;
        this._petType = type;
        this._petSize = size;
        this._theme = theme;
        this._themeKind = themeKind;
        this._throwBallWithMouse = throwBallWithMouse;
        this._disableEffects = disableEffects;
        this._tickIntervalId = setInterval(() => {
            this.tick();
        }, 100);
    }
    petColor() {
        return (0, pets_1.normalizeColor)(this._petColor, this._petType);
    }
    petType() {
        return this._petType;
    }
    petSize() {
        return this._petSize;
    }
    theme() {
        return this._theme;
    }
    themeKind() {
        return this._themeKind;
    }
    throwBallWithMouse() {
        return this._throwBallWithMouse;
    }
    disableEffects() {
        return this._disableEffects;
    }
    updatePetColor(newColor) {
        this._petColor = newColor;
    }
    updatePetType(newType) {
        this._petType = newType;
    }
    updatePetSize(newSize) {
        this._petSize = newSize;
    }
    updateTheme(newTheme, themeKind) {
        this._theme = newTheme;
        this._themeKind = themeKind;
    }
    setThrowWithMouse(newThrowWithMouse) {
        this._throwBallWithMouse = newThrowWithMouse;
        void this.getWebview().postMessage({
            command: 'throw-with-mouse',
            enabled: newThrowWithMouse,
        });
    }
    updateDisableEffects(disableEffects) {
        this._disableEffects = disableEffects;
        void this.getWebview().postMessage({
            command: 'disable-effects',
            disabled: disableEffects,
        });
    }
    throwBall() {
        void this.getWebview().postMessage({
            command: 'throw-ball',
        });
    }
    resetPets() {
        void this.getWebview().postMessage({
            command: 'reset-pet',
        });
    }
    spawnPet(spec) {
        void this.getWebview().postMessage({
            command: 'spawn-pet',
            type: spec.type,
            color: spec.color,
            name: spec.name,
        });
        void this.getWebview().postMessage({
            command: 'set-size',
            size: spec.size,
        });
    }
    listPets() {
        void this.getWebview().postMessage({ command: 'list-pets' });
    }
    rollCall() {
        void this.getWebview().postMessage({ command: 'roll-call' });
    }
    deletePet(petName, petType, petColor) {
        void this.getWebview().postMessage({
            command: 'delete-pet',
            name: petName,
            type: petType,
            color: petColor,
        });
    }
    getWebview() {
        throw new Error('Not implemented');
    }
    _update() {
        const webview = this.getWebview();
        webview.html = this._getHtmlForWebview(webview);
    }
    update() { }
    _getHtmlForWebview(webview) {
        // Local path to main script run in the webview
        const scriptPathOnDisk = vscode.Uri.joinPath(this._extensionUri, 'media', 'main-bundle.js');
        // And the uri we use to load this script in the webview
        const scriptUri = webview.asWebviewUri(scriptPathOnDisk);
        // Local path to css styles
        const styleResetPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css');
        const stylesPathMainPath = vscode.Uri.joinPath(this._extensionUri, 'media', 'pets.css');
        const silkScreenFontPath = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'Silkscreen-Regular.ttf'));
        // Uri to load styles into webview
        const stylesResetUri = webview.asWebviewUri(styleResetPath);
        const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);
        // Get path to resource on disk
        const basePetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media'));
        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();
        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading images from https or from our extension directory,
					and only allow scripts that have a specific nonce.
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';
                font-src ${webview.cspSource};">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${stylesResetUri}" rel="stylesheet" nonce="${nonce}">
				<link href="${stylesMainUri}" rel="stylesheet" nonce="${nonce}">
                <style nonce="${nonce}">
                @font-face {
                    font-family: 'silkscreen';
                    src: url('${silkScreenFontPath}') format('truetype');
                }
                </style>
				<title>VS Code Pets</title>
			</head>
			<body>
                <div id="petCanvasContainer">
                    <canvas id="ballCanvas"></canvas>
                    <canvas id="foregroundEffectCanvas"></canvas>
                    <canvas id="backgroundEffectCanvas"></canvas>
                </div>
				<div id="petsContainer"></div>
				<div id="foreground"></div>
                <div id="background"></div>
				<script nonce="${nonce}" src="${scriptUri}"></script>
				<script nonce="${nonce}">petApp.petPanelApp("${basePetUri}", "${this.theme()}", ${this.themeKind()}, "${this.petColor()}", "${this.petSize()}", "${this.petType()}", ${this.throwBallWithMouse()}, ${this.disableEffects()});</script>
			</body>
			</html>`;
    }
    tick() {
        throw new Error('Not implemented');
    }
    dispose() {
        // Dispose of all disposables
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
        if (this._tickIntervalId) {
            clearInterval(this._tickIntervalId);
            this._tickIntervalId = undefined;
        }
    }
}
function handleWebviewMessage(message) {
    switch (message.command) {
        case 'alert':
            void vscode.window.showErrorMessage(message.text);
            return;
        case 'info':
            void vscode.window.showInformationMessage(message.text);
            return;
    }
}
/**
 * Manages pet coding webview panels
 */
class PetPanel extends PetWebviewContainer {
    static createOrShow(extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        if (PetPanel.currentPanel) {
            if (petColor === PetPanel.currentPanel.petColor() &&
                petType === PetPanel.currentPanel.petType() &&
                petSize === PetPanel.currentPanel.petSize()) {
                PetPanel.currentPanel._panel.reveal(column);
                return;
            }
            else {
                PetPanel.currentPanel.updatePetColor(petColor);
                PetPanel.currentPanel.updatePetType(petType);
                PetPanel.currentPanel.updatePetSize(petSize);
                PetPanel.currentPanel.update();
            }
        }
        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(PetPanel.viewType, vscode.l10n.t('Pet Panel'), vscode.ViewColumn.Two, getWebviewOptions(extensionUri));
        PetPanel.currentPanel = new PetPanel(panel, extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects);
    }
    static revive(panel, extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects) {
        PetPanel.currentPanel = new PetPanel(panel, extensionUri, petColor, petType, petSize, theme, themeKind, throwBallWithMouse, disableEffects);
    }
    constructor(panel, extensionUri, color, type, size, theme, themeKind, throwBallWithMouse, disableEffects) {
        super(extensionUri, color, type, size, theme, themeKind, throwBallWithMouse, disableEffects);
        this._panel = panel;
        // Set the webview's initial html content
        this._update();
        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        // Update the content based on view changes
        this._panel.onDidChangeViewState(() => {
            this.update();
        }, null, this._disposables);
        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(handleWebviewMessage, null, this._disposables);
    }
    tick() {
        if (this._panel.visible) {
            void this.getWebview().postMessage({ command: 'tick' });
        }
    }
    dispose() {
        PetPanel.currentPanel = undefined;
        // Clean up our resources
        this._panel.dispose();
        super.dispose();
    }
    update() {
        if (this._panel.visible) {
            this._update();
        }
    }
    getWebview() {
        return this._panel.webview;
    }
}
PetPanel.viewType = 'petCoding';
/**
 * Managers pet coding webview views (Explorer)
 */
class PetWebviewViewProvider extends PetWebviewContainer {
    resolveWebviewView(webviewView) {
        this._webviewView = webviewView;
        webviewView.webview.options = getWebviewOptions(this._extensionUri);
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(handleWebviewMessage, null, this._disposables);
    }
    tick() {
        if (this._webviewView) {
            void this.getWebview().postMessage({ command: 'tick' });
        }
    }
    getWebview() {
        if (this._webviewView === undefined) {
            throw new Error(vscode.l10n.t('Panel not active, make sure the pets view is visible before running this command.'));
        }
        else {
            return this._webviewView.webview;
        }
    }
    dispose() {
        this._webviewView = undefined;
        super.dispose();
    }
}
PetWebviewViewProvider.viewType = 'petsView';
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
async function createPetPlayground(context) {
    const spec = PetSpecification.fromConfiguration();
    PetPanel.createOrShow(context.extensionUri, spec.color, spec.type, spec.size, getConfiguredTheme(), getConfiguredThemeKind(), getThrowWithMouseConfiguration(), getEffectsDisabledConfiguration());
    if (PetPanel.currentPanel) {
        var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
        collection.forEach((item) => {
            PetPanel.currentPanel?.spawnPet(item);
        });
        await storeCollectionAsMemento(context, collection);
    }
    else {
        var collection = PetSpecification.collectionFromMemento(context, getConfiguredSize());
        collection.push(spec);
        await storeCollectionAsMemento(context, collection);
    }
}

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=extension-web.js.map