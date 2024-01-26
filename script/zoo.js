"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animaux = [];
    }
    Zoo.prototype.ajouterAnimal = function (animal) {
        this._animaux.push(animal);
    };
    Zoo.prototype.afficherAnimaux = function () {
        console.log("Animaux dans le zoo:");
        this._animaux.forEach(function (animal, index) {
            console.log("".concat(index + 1, ". ").concat(animal._type, " - ").concat(animal._nom));
        });
    };
    return Zoo;
}());
exports.default = Zoo;
