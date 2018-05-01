const Block = require('./block');

//
// const block = new Block('foo', 'bar', 'zoo', 'maz');
// console.log(block.toString());
// console.log(Block.genesis().toString());

//Test Mine Hash
const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());