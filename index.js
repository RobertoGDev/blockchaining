const sha256 = require('sha256');

class Block {
    constructor(index, timestamp, data, prevHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.thisHash = sha256(
            this.index + this.timestamp + this.data + this.prevHash
        );
    }
}

//El primer bloque!! joe que linnnndo
const newBlock = () => new Block(0, Date.now(), 'Cadenas de bloque', '0');

//Esto genera un bloque nuevo y lo vincula al anterior
const nextBlock = (lastBlock, data) => new Block(lastBlock.index + 1, Date.now(), data, lastBlock.thisHash);

const createBlock = num => {
    const block = [newBlock()];
    let previousBlock = block[0];

    for (let i = 1; i < num; i += 1) {
        const blockToAdd = nextBlock(previousBlock, `Este es el bloque #${i}`);
        block.push(blockToAdd);
        previousBlock = blockToAdd;
    }

    console.log(block);
}

const lengthToCreate = 20;
createBlock(lengthToCreate);