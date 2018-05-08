/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


var bankAcount = function () {
    "use strict";
    var balance = 0, owner, displayAccountInfo;
    
    //DISPLAY ACCOUNT INFOR
    
    displayAccountInfo = function () {
        $("name-display").innerHTML = owner;
        $("balance-display").innerHTML = "Balance: $" + balance.toFixed(2);
    };

    return {
        //GET BALANCE FUNCTION
        getBalance: function () {
            window.console.log(balance);
            return balance;
        },

        //  DESPOSIT FUNCTION
        deposit: function (depositAmount) {
            balance = balance + depositAmount;
            displayAccountInfo();
        },

        //WITHDRAWLAL FUNCTION
        withdrawal: function (withdrawalAmount) {
            if (balance >= withdrawalAmount) {
                balance = balance - withdrawalAmount;
                displayAccountInfo();
            } else {
                window.alert("You have insufficient funds.");
            }
        },
        
        //GET NAME FUNCTION
        getOwnerName: function (ownerName) {
            owner = ownerName;
            window.console.log(owner);
        }
    };
};

var bankStatement = bankAcount();


window.addEventListener("load", function () {
    "use strict";
    var owner, depositAmount, withdrawalAmount;
    $("name-bttn").addEventListener("click", function () {
        owner = window.prompt("Enter your name to login: ");
        bankStatement.getOwnerName(owner);
        if (owner !== null) {
            $("name-display").innerHTML = "Welcome " + owner + ", click for a transaction:";
            $("deposit-bttn").removeAttribute("disabled");
            $("withdrawal-bttn").removeAttribute("disabled");
        }
    });
    
    $("deposit-bttn").addEventListener("click", function () {
        depositAmount = window.prompt("Deposit Amount: ");
        if (depositAmount !== null) {
            bankStatement.deposit(parseFloat(depositAmount), 10);
        }
    });

    $("withdrawal-bttn").addEventListener("click", function () {
        withdrawalAmount = window.prompt("Withdrawal Amount: ");
        if (withdrawalAmount !== null) {
            bankStatement.withdrawal(parseFloat(withdrawalAmount), 10);
        }
    });
});