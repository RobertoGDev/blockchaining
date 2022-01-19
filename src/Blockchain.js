import Block from './Block';

export class Blockchain {
    constructor(genesis) {
        this.chain = [this.createFirstBlock(genesis)];
    }

    createFirstBlock(genesis) {
        return new Block(0, genesis)
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(data) {
        let prevBlock = this.getLastBlock();
        let block = new Block(prevBlock.index + 1, data, prevBlock.hash)
        this.chain.push(block);
    }
}

export default Blockchain