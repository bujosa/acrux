# UTXO & Account Models

## Account-based Model
If you have a bank account, you are very familiar with this model of keeping track of user balances. The account model follows just that: accounts. It tracks the balances of users based on their overall account state, without any tracking on what constitutes the actual balance itself. In other words, an account-based ledger would mark an entry like this:

```Acct #12345 -> Name: Rick Sanchez -> Balance: $142.62```
Notice how the state of the account is kept very high-level? Rick's account balance is a dollar and cent amount and that's it. There is no further information tracked on what the breakdown of the the balance is, for example: $142.62 is one $100 bill, one $20 bill, two $10 bills, eight quarters, five dimes, two nickels, two pennies. When Rick goes to an ATM and withdraws from his balance, he gets it in whatever bills + change the bank has at hand - not in the exact change it took to make up that balance in the first place.

## UTXO-based Model
Ethereum uses the account-based model, while Bitcoin uses UTXOs (short for Unspent Transaction Outputs) to keep track of user state/balances.

The UTXO model differs pretty drastically from the account model. It's a little bit more complex - mainly because it is not a familiar interface like the account model is! Yet it does set up some interesting features...

### What is a UTXO? 🤔**
Alice sends Bob 5 BTC in the form of a transaction relayed to the Bitcoin network. At this point, if the transaction is valid (Alice has > 5 BTC, Alice owns the relevant private keys and can produce a signature, etc), Alice is signaling an intent to change user state. When the Bitcoin network mines Alice's transaction, Bob is credited with a UTXO worth 5 BTC. This is how the Bitcoin network keeps track of user balances - it keeps a really big long set of UTXOs - outputs out of state-changing transactions that credit users with a certain amount of BTC.