let counter = 0;

const counterValue = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

decrementButton.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterValue.textContent = counter;
}
