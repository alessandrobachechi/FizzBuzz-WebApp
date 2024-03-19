function generateFizzBuzzTable() {
    const fizzInput = document.getElementById('fizzInput').value;
    const buzzInput = document.getElementById('buzzInput').value;
    const cellsInput = document.getElementById('cellsInput').value;
    const fizzBuzzTable = document.getElementById('fizzBuzzTable');
    fizzBuzzTable.innerHTML = ''; 

    for (let i = 1; i <= cellsInput; i++) {
        let output = '';
        if (i % fizzInput === 0) output += 'Fizz';
        if (i % buzzInput === 0) output += 'Buzz';
        
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = output || i;

        if (output === 'Fizz') {
            cell.style.backgroundColor = 'red';
            cell.style.color = 'white';
        } else if (output === 'Buzz') {
            cell.style.backgroundColor = 'blue'; 
            cell.style.color = 'white';
        } else if (output === 'FizzBuzz') {
            cell.style.backgroundColor = 'purple'; 
            cell.style.color = 'white';
        }

        fizzBuzzTable.appendChild(cell);
    }

    document.getElementById('inputScreen').style.display = 'none';
    document.getElementById('fizzBuzzScreen').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('backButton').addEventListener('click', function() {
        document.getElementById('inputScreen').style.display = 'flex';
        document.getElementById('fizzBuzzScreen').style.display = 'none';
    });
});





