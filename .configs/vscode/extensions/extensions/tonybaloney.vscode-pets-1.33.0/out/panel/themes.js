"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THEMES = exports.ThemeInfo = void 0;
const snow_1 = require("./effects/snow");
const stars_1 = require("./effects/stars");
function normalizeColorThemeKind(kind) {
    switch (kind) {
        case 1 /* ColorThemeKind.light */:
            return 'light';
        case 2 /* ColorThemeKind.dark */:
            return 'dark';
        case 3 /* ColorThemeKind.highContrast */:
            return 'dark';
        case 4 /* ColorThemeKind.highContrastLight */:
            return 'light';
        default:
            return 'light';
    }
}
class ThemeInfo {
    name = '';
    description = '';
    effect = undefined;
    // eslint-disable-next-line no-unused-vars
    floor(size) {
        return 0;
    }
    backgroundImageUrl(basePetUri, themeKind, petSize) {
        var _themeKind = normalizeColorThemeKind(themeKind);
        return `url('${basePetUri}/backgrounds/${this.name}/background-${_themeKind}-${petSize}.png')`;
    }
    foregroundImageUrl(basePetUri, themeKind, petSize) {
        var _themeKind = normalizeColorThemeKind(themeKind);
        return `url('${basePetUri}/backgrounds/${this.name}/foreground-${_themeKind}-${petSize}.png')`;
    }
}
exports.ThemeInfo = ThemeInfo;
class ForestThemeInfo extends ThemeInfo {
    name = 'forest';
    description = 'A forest theme';
    effect = new stars_1.StarEffect();
    floor(size) {
        switch (size) {
            case "small" /* PetSize.small */:
                return 30;
            case "medium" /* PetSize.medium */:
                return 40;
            case "large" /* PetSize.large */:
                return 65;
            case "nano" /* PetSize.nano */:
            default:
                return 23;
        }
    }
}
class CastleThemeInfo extends ThemeInfo {
    name = 'castle';
    description = 'A castle theme';
    floor(size) {
        switch (size) {
            case "small" /* PetSize.small */:
                return 60;
            case "medium" /* PetSize.medium */:
                return 80;
            case "large" /* PetSize.large */:
                return 120;
            case "nano" /* PetSize.nano */:
            default:
                return 45;
        }
    }
}
class BeachThemeInfo extends ThemeInfo {
    name = 'beach';
    description = 'A beach theme';
    effect = new stars_1.StarEffect();
    floor(size) {
        switch (size) {
            case "small" /* PetSize.small */:
                return 60;
            case "medium" /* PetSize.medium */:
                return 80;
            case "large" /* PetSize.large */:
                return 120;
            case "nano" /* PetSize.nano */:
            default:
                return 45;
        }
    }
}
class WinterThemeInfo extends ThemeInfo {
    name = 'winter';
    description = 'A winter theme';
    effect = new snow_1.SnowEffect();
    floor(size) {
        switch (size) {
            case "small" /* PetSize.small */:
                return 20;
            case "medium" /* PetSize.medium */:
                return 30;
            case "large" /* PetSize.large */:
                return 45;
            case "nano" /* PetSize.nano */:
            default:
                return 18;
        }
    }
}
// Map of theme name to theme info
exports.THEMES = {
    none: {
        name: 'none',
        description: 'No theme',
        /* eslint-disable no-unused-vars */
        floor: (size) => 0,
        backgroundImageUrl: (basePetUri, themeKind, petSize) => '',
        foregroundImageUrl: (basePetUri, themeKind, petSize) => '',
        /* eslint-enable no-unused-vars */
    },
    forest: new ForestThemeInfo(),
    castle: new CastleThemeInfo(),
    beach: new BeachThemeInfo(),
    winter: new WinterThemeInfo(),
};
//# sourceMappingURL=themes.js.map