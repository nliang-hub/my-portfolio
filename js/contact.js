const form = document.querySelector('form');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const contactBtn = document.getElementById('contact-btn');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const output = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    console.log(output);
});

contactBtn.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
    }
});