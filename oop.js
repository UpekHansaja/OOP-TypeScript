var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log('Hello World');
    };
    return Player;
}());
var mario = new Player();
mario.health = 10;
mario.speed = 1;
mario.greet();
