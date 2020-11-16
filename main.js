//DOM Models
const budgetButton = document.getElementById("budgetButton");
let budgetAmount = document.getElementById("budgetAmount");
const expenseList = document.getElementById("expenses");
const formInput = document.getElementById("inputForm");
const expenseInput = document.getElementById("expenseInput");
const balanceButton = document.getElementById("balanceButton");
let balance = document.getElementById("balanceAmount");

//Functions
function getBudgetAmount() {
    let budget = formInput.value;
    budgetAmount.innerText = budget;
    formInput.value = "";
    balance.innerText = budget;
};

function logExpense() {
    let table = document.getElementById('expenses');
    var row = table.insertRow(0);
    row.classList.add('tr');
    var cell1 = row.insertCell(0);
    cell1.innerHTML = expenseInput.value;
    expenseInput.value = "";
    let budgetValue = document.getElementById("balanceAmount");
    budgetValue.innerText = parseInt(budgetValue.innerText) - parseInt(cell1.innerText);
    var rowButton = document.createElement('button');
    rowButton.setAttribute('type', 'button');
    rowButton.innerHTML = 'X';
    row.appendChild(rowButton);
    rowButton.addEventListener("click", function(){
        row.closest("tr").remove();
        budgetValue.innerText = parseInt(budgetValue.innerText) + parseInt(cell1.innerText);
    })
};
