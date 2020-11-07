//DOM Models
const budgetButton = document.getElementById("budgetButton");
const budgetAmount = document.getElementById("budgetAmount");
const expenseList = document.getElementById("expenses");
const formInput = document.getElementById("inputForm");
let balance = document.getElementById("balanceAmount");
//Functions
function getBudgetAmount() {
    formInput.value = "";
    budgetAmount.innerHTML = formInput.value;
};

//Event Listeners
budgetButton.addEventListener("submit", getBudgetAmount);