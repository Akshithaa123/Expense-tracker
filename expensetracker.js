let balance = 0;

function addTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const transaction = {
        amount: type === 'expense' ? -amount : amount,
        type,
    };

    updateBalance(transaction.amount);
    displayTransaction(transaction);
}

function updateBalance(amount) {
    balance += amount;
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function displayTransaction(transaction) {
    const expensesList = document.getElementById('expenses');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${transaction.type === 'income' ? '+' : '-'} ₹${Math.abs(transaction.amount).toFixed(2)}</span>
        <span class="${transaction.type}">${transaction.type}</span>
    `;

    expensesList.appendChild(listItem);
}
