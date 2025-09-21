const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const output = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    console.log(output);
});