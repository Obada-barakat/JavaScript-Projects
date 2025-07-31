const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
let count = 0;

function updateDisplay() {
    value.textContent = count;
    value.style.color = 
        count > 0 ? 'green' : count < 0 ? 'red' : '#222';
}

function handleClick({ currentTarget }) {
    const action = currentTarget.dataset.action;

    switch (action) {
        case 'increase':
            count++;
            break;
        case 'decrease':
            count--;
            break;
        case 'reset': 
            count = 0;
            break;
    }

    updateDisplay();
}

btns.forEach(btn => btn.addEventListener('click', handleClick));