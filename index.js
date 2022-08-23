function getElementValueById(elementId){
    const playerName = document.getElementById(elementId);
    playerName.style.display = 'block'; 
    
}
function disable(element){
    element.disabled = true; 
}


document.getElementById('button-1').addEventListener('click', function(){
    getElementValueById('lionel-messi');
    document.getElementById('button-1').className = 'color-change';
    
 
})
document.getElementById('button-2').addEventListener('click', function(){
    getElementValueById('neymar-jr');
    document.getElementById('button-2').className = 'color-change';
})
document.getElementById('button-3').addEventListener('click', function(){
    getElementValueById('kylian-mbappe');
    document.getElementById('button-3').className = 'color-change';
})
document.getElementById('button-4').addEventListener('click', function(){
    getElementValueById('vítor-machado');
    document.getElementById('button-4').className = 'color-change';
})
document.getElementById('button-5').addEventListener('click', function(){
    getElementValueById('sergio-ramos');
    document.getElementById('button-5').className = 'color-change';
})

// budget calculation
document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerField = document.getElementById('per-player-field');
    const perPlayerFieldString = perPlayerField.value;
    const previousPerPlayerNumber = parseFloat(perPlayerFieldString);

    const previousPlayerExpenses = previousPerPlayerNumber * 5;
    perPlayerField.value = previousPlayerExpenses;
    

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const totalPlayerExpenses = parseFloat(playerExpensesString);

    const newTotalPlayerExpenses = previousPlayerExpenses ;
    playerExpenses.innerText = newTotalPlayerExpenses;
    perPlayerField.value = '';

    // console.log(previousPerPlayerNumber);
    // perPlayerField.value = previousPerPlayerNumber;
    
})
document.getElementById('calculate-total').addEventListener('click', function(){
    
    
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const totalPlayerExpenses = parseFloat(playerExpensesString);

    const managerExpense = document.getElementById('manager-expense');
    const managerExpenseString = managerExpense.value;
    const managerExpenseNumber = parseInt(managerExpenseString);
    // console.log(managerExpenseNumber);

    const coachExpense = document.getElementById('coach-expense');
    const coachExpenseString = coachExpense.value;
    const coachExpenseNumber = parseInt(coachExpenseString);
    // console.log(coachExpenseNumber);

    
    // console.log(calculateTotal);
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseString = totalExpense.innerText;
    const totalExpenseNumber = parseInt(totalExpenseString);

    const calculateTotal = totalPlayerExpenses + managerExpenseNumber + coachExpenseNumber ;
    totalExpense.innerText = calculateTotal;
    
})


