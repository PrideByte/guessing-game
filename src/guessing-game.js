class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let range = this.max - this.min;
        return this.assumption = Math.ceil(range / 2) + this.min;
    }

    lower() {
        this.max = this.assumption;
    }

    greater() {
        this.min = this.assumption;
    }
} 

module.exports = GuessingGame;
