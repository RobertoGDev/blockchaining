const sha256 = require('sha256');

class Block {
    constructor(index, data, previousHas = '') {
        this.index = index;
        this.data = data;
        this.date = new Date();
        this.hash = this.createHash();
    }

    createHash() {
        return sha256(this.index+this.data+this.date)
    }
}

export default Block