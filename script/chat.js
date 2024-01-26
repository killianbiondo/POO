"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_js_1 = require("./animal.js");
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(nom, couleur, type, age) {
        var _this = _super.call(this, nom, type, age) || this;
        _this._couleur = couleur;
        return _this;
    }
    Chat.prototype.faireDuBruit = function () {
        console.log("".concat(this._nom, " miaule."));
    };
    Chat.prototype.manger = function () {
        console.log("L'animal mange.");
    };
    Chat.prototype.afficherCouleur = function () {
        console.log("Le chat est de couleur ".concat(this._couleur, "."));
    };
    return Chat;
}(animal_js_1.default));
exports.default = Chat;
