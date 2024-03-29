import Block from './Block';

export class Blockchain {
    constructor(genesis, difficulty = '00', mining, container = "") {
        this.chain = [this.createFirstBlock(genesis)];
        this.difficulty = difficulty;
        this.mining = mining;
        this.container = container;
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
        if (this.mining == "si")
            this.mineCoin(block, this.container);
        this.chain.push(block);
    }

    mineCoin(block) {
        block.mine(this.difficulty);
        this.container.innerHTML += (`<article class="panel is-success">
        <p class="panel-heading">
            Minado!
        </p>
        <a class="panel-block"><span class="panel-icon material-icons md-18">engineering</span> El bloque ${block.index} se consiguió minar tras ${block.nonce} intentos (nonce) </a></article>`)
    }

    isValid() {
        for (let index = 0; index < this.chain.length; index++) {

            let prevBlock = this.chain[index - 1];
            let currBlock = this.chain[index];

            if (typeof prevBlock === 'undefined')
                return null;
            
            console.log(prevBlock);

            if (currBlock.previousHash != prevBlock.hash)
                return false;
            
            if (currBlock.createHash() != currBlock.hash)
                return false;
            
            return true;
            
        }
    }
}

export default Blockchain