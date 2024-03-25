
//Constructor Function
function BankAccount(accoutHolder,accountNumber,balance = 0) {
    this.accoutHolder = accoutHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
    
    BankAccount.prototype.deposite = function(amount) {
      this.balance += amount;
      console.log(`Deposite:${ amount } New balance: ${ this.balance }`);
    };
    
   BankAccount.prototype.withdraw = function(amount) {
        if(amount > this.balance) 
          throw new Error('Insufficient funds.');
        this.balance -= amount;
        console.log(`Withdrawn:${ amount } New balance: ${ this.balance }`);
    };
}


//Class ES6 feature
class Account {
  constructor(accountHolder,accountNumber,balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposite(amount) {
    this.balance += amount;
    console.log(`Deposited: $${ amount } New balnce: $${this.balance}`);
  }

  withdraw(amount) {
    if(amount > this.balance)
      throw new Error('Sorry!! you dont have enough balance.');
    this.balance -= amount;
    console.log(`Withdrawn: $${amount} New balance $${this.balance}`);
  }

}


//Factory Function
function bankAccount(accoutHolder,accountNumber,balance = 0) {
  return {
    accountHolder:accoutHolder,
    accountNumber:accountNumber,
    balance:balance,
    deposite:function(amount) {
      this.balance += amount;
      console.log(`Deposited: $${ amount } New balnce: $${this.balance}`);
    },
    withdraw:function(amount) {
      if(amount > this.balance)
      throw new Error('Sorry!! you dont have enough balance.');
     this.balance -= amount;
     console.log(`Withdrawn: $${amount} New balance $${this.balance}`);
    }
  }; 
}




























