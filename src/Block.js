const sha256 = require('sha256');

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.data = data;
        this.date = new Date();
        this.hash = this.createHash();
        this.previousHash = previousHash;
        this.nonce = 0; // minado
    }

    createHash() {
        return sha256(this.index + this.data + this.date + this.nonce)
    }

    mine(difficulty) {
        while (!this.hash.startsWith(difficulty)) {
            this.nonce++;
            this.hash = this.createHash();
        }
    }
}

export default Block