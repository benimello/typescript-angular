var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entrando no hyperespa\u00E7o com " + this.propulsor);
    };
    return Spacecraft;
}());
//teste
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('F');
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperSpace();
var GoodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("A Falcon \u00E9 boa para carga? " + (GoodForTheJob(falcon) ? 'Sim' : 'Não'));
