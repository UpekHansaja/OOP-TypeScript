var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Player;
}());
var mario = new Player();
mario.name = 'Mario';
mario.health = 10;
mario.isInvincible = true;
var peach = new Player();
peach.name = 'Peach';
peach.health = 8;
peach.isInvincible = true;
mario.crush = peach;
console.log("Mario's crush is ".concat(mario.crush.name));
mario.greet();
peach.greet();
