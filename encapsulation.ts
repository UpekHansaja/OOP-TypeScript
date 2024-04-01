class Player {
    private health: number
    private speed: number

    setHealth(health: number) {
        if (health < 0) {
            console.log('Health cannot be set below 0')
            this.health = health
        }
    }
    getHealth() {
        return this.health
    }

    setSpeed(speed: number) {
        this.speed = speed
    }
    getSpeed() {
        return this.speed
    }
}

const mario = new Player()
mario.setHealth(-5)
mario.setSpeed(3)

console.log(`Mario's health is ${mario.getHealth()}/10`)
console.log(`Mario's speed is ${mario.getSpeed()}`)
