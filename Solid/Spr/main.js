var Main = /** @class */ (function () {
    function Main(name) {
        this.name = name;
    }
    Main.prototype.printName = function () {
        console.log(this.name);
    };
    return Main;
}());
var mainInstance;
mainInstance = new Main('John Doe');
mainInstance.printName();
