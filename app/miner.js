class Miner {
    constructor(blockchain, transactionPool, wallet, p2pServer) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions();
        // include reward for the miner
        // create a block consisting of the valid transactions
        // synchronize the chains in the p2p server
        // clear transaction pool
        // broadcast to every miner to clear their transaction pools
    }
}

module.exports = Miner;