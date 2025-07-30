const colors = ["#008000", "#ff0000", "#0000ff", "#00ffff", "#d9ff00ff"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}

function generateColor() {
    const randomNum = getRandomNum();
    console.log(randomNum)

    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
    color.style.color = colors[randomNum];
}



btn.addEventListener('click', generateColor)