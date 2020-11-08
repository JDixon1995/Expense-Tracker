//DOM Models
const budgetButton = document.getElementById("budgetButton");
let budgetAmount = document.getElementById("budgetAmount");
const expenseList = document.getElementById("expenses");
const formInput = document.getElementById("inputForm");
let balance = document.getElementById("balanceAmount");
//Functions
function getBudgetAmount() {
    let number = formInput.value;
    budgetAmount.innerText = "$" + number;
    formInput.value = "";
};

//Event Listeners
