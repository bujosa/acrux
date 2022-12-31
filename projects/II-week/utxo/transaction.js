class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }

    execute() {
        let totalInputAmount = 0;
        let totalOutputAmount = 0;

        this.inputUTXOs.forEach((inputUTXO) => {
            if (inputUTXO.spent) {
                throw new Error("Cannot use a spent input UTXO!");
            }
            totalInputAmount += inputUTXO.amount;
            inputUTXO.spend();
        });

        this.outputUTXOs.forEach((outputUTXO) => {
            totalOutputAmount += outputUTXO.amount;
        });

        if (totalInputAmount < totalOutputAmount) {
            this.inputUTXOs.forEach((inputUTXO) => {
                inputUTXO.unspend();
            });
            throw new Error("Not enough funds!");
        }
    }
}

module.exports = Transaction;