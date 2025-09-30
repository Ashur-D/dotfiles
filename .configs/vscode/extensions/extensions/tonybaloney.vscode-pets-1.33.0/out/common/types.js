"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_THEMES = exports.ALL_SCALES = exports.ALL_COLORS = exports.ALL_PETS = exports.WebviewMessage = void 0;
class WebviewMessage {
    text;
    command;
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
//# sourceMappingURL=types.js.map