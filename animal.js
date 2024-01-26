"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(nom, type, age) {
        this._nom = nom;
        this._type = type;
        this._age = age;
        Animal._nombreAnimaux++;
    }
    Animal.prototype.faireDuBruit = function () {
        console.log("".concat(this._nom, " fait un bruit ind\u00E9finissable."));
    };
    Animal.prototype.manger = function () {
        console.log("L'animal mange.");
    };
    Animal.prototype.mouvement = function () {
        console.log("".concat(this._nom, " se d\u00E9place."));
    };
    Animal.calculerAgeMoyen = function (animaux) {
        if (animaux.length === 0)
            return 0;
        var totalAge = 0;
        for (var _i = 0, animaux_1 = animaux; _i < animaux_1.length; _i++) {
            var animal = animaux_1[_i];
            totalAge += animal._age;
        }
        return totalAge / animaux.length;
    };
    Animal._nombreAnimaux = 0;
    return Animal;
}());
exports.default = Animal;
