// Superclass
function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if(value > this.balance) {
        console.log(`Insufficient balance: ${this.balance}`);
        return;
    }

    this.balance -= value;
    this.showBalance();
};

Account.prototype.deposit = function(value) {
    this.balance += value;
    this.showBalance();
};

Account.prototype.showBalance = function() {
    console.log(
        `Agency/Account: ${this.agency}/${this.account} | ` +
        `Balance: €${this.balance.toFixed(2)}`
    );
};


function CheckingAccount(agency, account, balance, limite) {
    Account.call(this, agency, account, balance);
    this.limite = limite;
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function(value) {
    if(value > (this.balance + this.limite)) {
        console.log(`Insufficient balance: ${this.balance}`);
        return;
    }

    this.balance -= value;
    this.showBalance();
};


function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;


const checkingAccount = new CheckingAccount(11, 22, 0, 100);
checkingAccount.deposit(10);
checkingAccount.withdraw(110);
checkingAccount.withdraw(1);


console.log('\n');


const savingsAccount = new SavingsAccount(12, 33, 0);
savingsAccount.deposit(10);
savingsAccount.withdraw(10);
savingsAccount.withdraw(1);