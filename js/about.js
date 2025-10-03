document.getElementById('skills-btn').onclick = () => {
    document.getElementById('skills-list').classList.remove('hidden');
}

const colors = ['red', 'yellow', 'green', 'blue'];
var index = 0;

document.querySelectorAll('.grid-item').forEach((el, index) => {
    el.style.backgroundColor = colors[index % colors.length];
})