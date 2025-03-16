const userName = document.querySelector('#name-input');

const message = document.querySelector('#name-output');

userName.addEventListener('input', (event) => {
    message.textContent = event.currentTarget.value.trim();
});