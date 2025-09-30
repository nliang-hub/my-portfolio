document.querySelector('button').addEventListener('click', () => {
    document.getElementById('text').classList.toggle('hidden');
})

document.querySelector('input').addEventListener('input', (e) => {
    document.getElementById('input-update').textContent = e.target.value;
})