var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log('Health cannot be set below 0');
            this.health = health;
        }
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    return Player;
}());
var mario = new Player();
mario.setHealth(-5);
mario.setSpeed(3);
console.log("Mario's health is ".concat(mario.getHealth(), "/10"));
console.log("Mario's speed is ".concat(mario.getSpeed()));
