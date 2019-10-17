var Sneakers = /** @class */ (function () {
    function Sneakers(appendage, footLength, bindingsPresent) {
        this.wornOn = appendage;
        this.size = footLength;
        this.laces = bindingsPresent;
    }
    return Sneakers;
}());
var vans = new Sneakers('hands', 2, true);
console.log(vans);
