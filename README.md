# bank-tech-test

This is a mimic of a real tech test and I have used JavaScript to complete with Jest as my etsting framework. 

# How to Setup

- clone this repository https://github.com/mo-codes1/bank-tech-test.git
- run ```node```
- run ```.load index.js```
- Initialize the program with ```account = new Account()```
- To deposit into the account: ```account.newTransaction('deposit', randomnumber)```
- To withdraw from the account: ```account.newTransaction('withdrawal', randomnumber)```
- To see the statement printed out: ```account.printStatement()```
- You can now exit node with ```.exit```




## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

